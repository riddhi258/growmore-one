import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ Allow GET for testing (optional)
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "API is running 🚀",
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { name, email, phone, visaType, message, source } = body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // ✅ Improved phone parsing (handles +91, spaces, etc.)
    const cleanPhone = phone.replace(/\D/g, "");

    let countryCode = "91"; // default India
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    // ✅ CRM Payload
    const crmPayload = {
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    };

    console.log("📤 Sending to CRM:", crmPayload);

    // ✅ Timeout controller (important in production)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 sec

    let crmData = null;

    try {
      const crmResponse = await fetch(
        "https://case.growmore.one/api/webhooks/website-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(crmPayload),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const text = await crmResponse.text();

      console.log("📥 CRM Raw Response:", text);

      try {
        crmData = JSON.parse(text);
      } catch {
        crmData = { raw: text };
      }

      if (!crmResponse.ok) {
        throw new Error(text);
      }
    } catch (err) {
      console.error("❌ CRM ERROR:", err.message);

      // ❗ Don't fail entire API if CRM fails
      crmData = { error: err.message };
    }

    // ✅ Email Transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // cleaner
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: "Appointment Booking from Website",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
        <p><b>Inquiry:</b> ${visaType || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      crm: crmData
    });
  } catch (error) {
    console.error("❌ ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
}
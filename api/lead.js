import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, visaType, message, source } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // Clean phone number
    const cleanPhone = phone.replace("+", "");
    const countryCodeMatch = cleanPhone.match(/^\d{1,3}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";
    const phoneNumber = cleanPhone.replace(countryCode, "");

    // Prepare CRM payload
    const body = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    });

    // Send data to CRM
    const response = await fetch(
      "https://case.growmore.one/api/webhooks/website-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    const crmData = await response.json();

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "upadhyayriddhi445@gmail.com",
        pass: "rodq fksy juyo tvlm"
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"Website Form" <upadhyayriddhi445@gmail.com>`,
      to: "upadhyayriddhi2110@gmail.com",
      subject: "New Website Inquiry",
      html: `
        <h2>New Website Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
        <p><b>Visa Type:</b> ${visaType || "General Inquiry"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
        <p><b>Source:</b> ${source || "Website Form"}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      crmResponse: crmData,
      message: "Lead submitted and email sent successfully",
    });

  } catch (error) {
    console.error("Webhook / Email error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}
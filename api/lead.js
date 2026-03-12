import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    if (!req.body.name || !req.body.email || !req.body.phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required"
      });
    }

    const phone = req.body.phone || "";

    const cleanPhone = phone.replace("+", "");

    const countryCodeMatch = cleanPhone.match(/^\d{1,3}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";

    const phoneNumber = cleanPhone.replace(countryCode, "");

    const body = new URLSearchParams({
      Name: req.body.name || "",
      Email: req.body.email || "",
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: req.body.visaType || "General Inquiry",
      Source: req.body.source || "Website Form",
      Message: req.body.message || ""
    });

    // Send to CRM webhook
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

    const data = await response.json();


    // EMAIL SETUP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD"
      }
    });

    // Email Content
    await transporter.sendMail({
      from: `"Website Form" <YOUR_EMAIL@gmail.com>`,
      to: "info@growmore.one",
      subject: "New Website Inquiry",
      html: `
        <h2>New Website Lead</h2>

        <p><b>Name:</b> ${req.body.name}</p>
        <p><b>Email:</b> ${req.body.email}</p>
        <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
        <p><b>Visa Type:</b> ${req.body.visaType}</p>
        <p><b>Message:</b> ${req.body.message}</p>
      `
    });


    return res.status(200).json({
      success: true,
      crmResponse: data
    });

  } catch (error) {

    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}
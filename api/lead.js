/* eslint-disable no-undef */
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
        user: process.env.USER,
        pass: process.env.PASS
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"Growmore Immigration"`,
      to: "info@growmore.one", // Primary destination
      bcc: "info@growmoreimmigration.com", // Optional backup
      subject: "Appointment Booking from the website",
      html: `
        <p>Name: ${name}</p>
        <p>Email:${email}</p>
        <p>Phone: +${countryCode} ${phoneNumber}</p>
        <p>Visa Type:${visaType || "General Inquiry"}</p>
        <p>Message:${message || "N/A"}</p>
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
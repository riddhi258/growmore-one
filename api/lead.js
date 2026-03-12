import nodemailer from "nodemailer";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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
        message: "Name, email, and phone are required",
      });
    }

    const phoneNumberObj = parsePhoneNumberFromString(phone);
    if (!phoneNumberObj || !phoneNumberObj.isValid()) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number",
      });
    }
    const countryCode = phoneNumberObj.countryCallingCode;
    const phoneNumber = phoneNumberObj.nationalNumber;

    const body = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    });

    const crmResponse = await fetch(
      "https://case.growmore.one/api/webhooks/website-form",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }
    );

    if (!crmResponse.ok) {
      throw new Error(`CRM responded with status ${crmResponse.status}`);
    }

    const crmData = await crmResponse.json();

    // Nodemailer with hardcoded credentials (not secure)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "upadhyayriddhi445@gmail.com", // your Gmail
        pass: "dipvarsa", // your Gmail App Password
      },
    });

    try {
      await transporter.sendMail({
        from: `"Website Form" <upadhyayriddhi445@gmail.com>`,
        to: "info@growmore.one",
        subject: "New Website Inquiry",
        html: `
          <h2>New Website Lead</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
          <p><b>Visa Type:</b> ${visaType || "General Inquiry"}</p>
          <p><b>Message:</b> ${message || "N/A"}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return res.status(200).json({
      success: true,
      crmResponse: crmData,
      message: "Lead submitted and email sent successfully",
    });
  } catch (error) {
    console.error("Webhook / Email error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
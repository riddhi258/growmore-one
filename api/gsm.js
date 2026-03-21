import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // ✅ Validation
    if (!data.fullName || !data.email) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // ✅ ENV CHECK (IMPORTANT)
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message: "Email configuration missing",
      });
    }

    /* ========= EMAIL SETUP ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ========= EMAIL TEMPLATE ========= */
    const emailHtml = `
      <div style="padding:20px; font-family:Arial;">
        <h2>GSM Assessment Inquiry</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>

        <hr/>

        <h3>Profile</h3>
        <ul>
          <li><b>Occupation:</b> ${data.occupation || "N/A"}</li>
          <li><b>Qualification:</b> ${data.qualification || "N/A"}</li>
          <li><b>Experience:</b> ${data.experience || "N/A"}</li>
          <li><b>English Test:</b> ${data.englishTest || "N/A"}</li>
        </ul>
      </div>
    `;

    /* ========= SEND EMAIL ========= */
    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`, // ✅ FIXED
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: `GSM Inquiry: ${data.fullName}`,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ API Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
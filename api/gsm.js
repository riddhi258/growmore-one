import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // 1. Server-side validation
    if (!data.companyName || !data.abn || !data.captchaToken) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Missing required business information.",
        });
    }

    // 2. Email Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.VITE_USER,
        pass: import.meta.env.VITE_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #28535B; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #28535B; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Employer Assessment Inquiry</h2>
        </div>
        <div style="padding: 20px; line-height: 1.6; background-color: #ffffff;">
          <h3 style="color: #28535B; border-bottom: 1px solid #eee;">Business Information</h3>
          <p><strong>Company:</strong> ${data.companyName}</p>
          <p><strong>ABN:</strong> ${data.abn}</p>
          <p><strong>Website:</strong> ${data.website || "N/A"}</p>
          <p><strong>Address:</strong> ${data.businessAddress}</p>
          <p><strong>Revenue:</strong> ${data.turnoverRange}</p>
          <p><strong>Total Employees:</strong> ${data.totalEmployees}</p>
          <p><strong>DAMA Status:</strong> ${data.dama}</p>
          
          <h3 style="color: #28535B; border-bottom: 1px solid #eee; margin-top: 20px;">Position Details</h3>
          <p><strong>Job Title:</strong> ${data.jobTitle}</p>
          <p><strong>ANZSCO Code:</strong> ${data.anzscoCode}</p>
          <p><strong>Contract Type:</strong> ${data.employmentType === "Other" ? data.otherEmploymentType : data.employmentType}</p>
          <p><strong>PAYG Arrangement:</strong> ${data.paygArrangement === "Other" ? data.otherPaygArrangement : data.paygArrangement}</p>
          <p><strong>LMT Conducted:</strong> ${data.labourMarketTesting}</p>

          <h3 style="color: #28535B; border-bottom: 1px solid #eee; margin-top: 20px;">Contact Person</h3>
          <p><strong>Name:</strong> ${data.contactPerson}</p>
        </div>
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          Sent via Growmore Immigration B2B Portal
        </div>
      </div>
    `;

    // 3. Send Email
    await transporter.sendMail({
      from: `"Growmore Immigration"`,
      to: "info@growmore.one", // Primary destination
      bcc: "info@growmoreimmigration.com", // Optional backup
      subject: ` Employer Lead: ${data.companyName} (${data.jobTitle})`,
      html: emailHtml,
    });

    return res
      .status(200)
      .json({ success: true, message: "Assessment submitted successfully." });
  } catch (error) {
    console.error("API Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}

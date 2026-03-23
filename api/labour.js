import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // 1. Basic Validation
    if (!data.companyName || !data.abn || !data.contactPerson) {
      return res
        .status(400)
        .json({ success: false, message: "Required business fields missing" });
    }

    /* ========= CRM Integration (Background) ========= */
    const crmBody = new URLSearchParams({
      Name: data.contactPerson,
      Company: data.companyName,
      Email: "Employer Inquiry", // Or add email field to form if preferred
      Phone: data.abn,
      Inquiries: "Employer-Sponsored Visa Assessment",
      Source: "Website Employer Form",
      Message: `
        ABN: ${data.abn}
        Staff: ${data.totalEmployees}
        Revenue: ${data.turnoverRange}
        Job Title: ${data.jobTitle}
        ANZSCO: ${data.anzscoCode}
        DAMA Status: ${data.dama}
      `.trim(),
    });

    fetch("https://leads.growmore.one/api/website-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: crmBody.toString(),
    }).catch((err) => console.error("CRM Error:", err));

    /* ========= Nodemailer Notification ========= */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
          <p><b>Company:</b> ${data.companyName}</p>
          <p><b>ABN:</b> ${data.abn}</p>
          <p><b>Website:</b> ${data.website || "N/A"}</p>
          <p><b>Address:</b> ${data.businessAddress}</p>
          <p><b>Employees:</b> ${data.totalEmployees} | <b>Operation:</b> ${data.yearsOfOperation}</p>
          <p><b>Annual Turnover:</b> ${data.turnoverRange}</p>
          <p><b>Existing Labour Agreement:</b> ${data.labourAgreementApproved}</p>
          <p><b>DAMA Status:</b> ${data.dama}</p>
          <p><b>Role:</b> ${data.jobTitle}</p>
          <p><b>ANZSCO Code:</b> ${data.anzscoCode}</p>
          <p><b>Employment Type:</b> ${data.employmentType === "Other" ? data.otherEmploymentType : data.employmentType}</p>
          <p><b>PAYG Arrangement:</b> ${data.paygArrangement === "Other" ? data.otherPaygArrangement : data.paygArrangement}</p>
          <p><b>LMT Conducted:</b> ${data.labourMarketTesting}</p>
          <p><b>Previous Applications:</b> ${data.previousLabourAgreement}</p>
          <p><b>Current Overseas Workers:</b> ${data.overseasWorkers || "0"}</p>
          <p><b>Contact Person:</b> ${data.contactPerson}</p>
  
      </div>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration"`,
      to: "info@growmore.one", // Primary destination
      bcc: "info@growmoreimmigration.com", // Optional backup
      subject: ` Employer Assessment: ${data.companyName}`,
      html: emailHtml,
    });

    return res
      .status(200)
      .json({ success: true, message: "Employer assessment submitted" });
  } catch (error) {
    console.error("Employer API Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

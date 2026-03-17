import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // Basic server-side validation
    if (!data.fullName || !data.email || !data.captchaToken) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    /* ========= CRM Integration ========= */
    const crmBody = new URLSearchParams({
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone,
      Inquiries: "DAMA Pre-Screening",
      Source: "Website DAMA Checklist",
      Message: `
        Occupation: ${data.occupation}
        Qualification: ${data.qualification}
        Experience: ${data.experience}
        Skills Assessment: ${data.skillsAssessment}
        Has Job Offer: ${data.jobOffer}
        Location: ${data.location}
      `.trim(),
    });

    fetch("https://leads.growmore.one/api/website-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: crmBody.toString(),
    }).catch(err => console.error("CRM Sync Error:", err));

    /* ========= Email Notification ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
        auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
    });

    const emailHtml = `
      <div>
        <div style="padding: 20px; line-height: 1.5;">
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Residence:</strong> ${data.country}</p>
          <p><strong>Location:</strong> ${data.location}</p>
          <hr/>
          <h3>Professional Profile</h3>
          <ul>
            <li><strong>Qualification:</strong> ${data.qualification}</li>
            <li><strong>Occupation:</strong> ${data.occupation}</li>
            <li><strong>Skills Assessment:</strong> ${data.skillsAssessment}</li>
            <li><strong>Experience:</strong> ${data.experience}</li>
            <li><strong>Job Offer in Region:</strong> ${data.jobOffer}</li>
          </ul>
        </div>
      </div>
    `;

    await transporter.sendMail({
       from: `"Growmore Immigration"`,
      to: "info@growmore.one", // Primary destination
      bcc: "info@growmoreimmigration.com", // Optional backup
      subject: `DAMA Interest: ${data.fullName} (${data.occupation})`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, message: "Submission successful" });

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
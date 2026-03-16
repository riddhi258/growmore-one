import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1. Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // 2. Validation
    if (!data.fullName || !data.email) {
      return res.status(400).json({ success: false, message: "Name and Email are required" });
    }

    /* ========= CRM API (Background Task) ========= */
    const crmBody = new URLSearchParams({
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone || "",
      Country: data.country || "",
      Inquiries: "GSM Visa Eligibility Assessment",
      Source: data.source || "Website GSM Form",
      // Combining key eligibility info into the CRM Message field
      Message: `
        Occupation: ${data.occupation || 'N/A'}
        Points: ${data.estimatedPoints || 'N/A'}
        In Australia: ${data.location || 'N/A'}
        Comments: ${data.comments || "None"}
      `.trim(),
    });

    try {
      // Fire-and-forget fetch to CRM
      fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: crmBody.toString(),
      }).catch(err => console.error("CRM Background Error:", err));
    } catch (err) {
      console.error("CRM API setup error:", err);
    }

    /* ========= Nodemailer Configuration ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "upadhyayriddhi445@gmail.com",
        pass: "rodq fksy juyo tvlm" // Use process.env.EMAIL_PASS in production
      },
    });

    const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #28535B;">New GSM Visa Assessment Lead</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Country:</b> ${data.country}</p>
        <p><b>Currently in Australia:</b> ${data.location}</p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <h3 style="color: #28535B;">Eligibility Details</h3>
        <p><b>Occupation:</b> ${data.occupation}</p>
        <p><b>Skills Assessment:</b> ${data.skillsAssessment}</p>
        <p><b>English Test:</b> ${data.englishTest}</p>
        <p><b>Estimated Points:</b> ${data.estimatedPoints}</p>
        <p><b>Comments:</b> ${data.comments || "None"}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration" <upadhyayriddhi445@gmail.com>`,
      to: "growmoreimmigration@gmail.com",
      subject: `GSM Assessment: ${data.fullName}`,
      html: emailHtml,
    });

    return res.status(200).json({ success: true, message: "Form submitted successfully" });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
}
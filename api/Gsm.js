import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Form parsing error",
        });
      }

      const {
        fullName,
        email,
        phone,
        country,
        location,
        age,
        qualification,
        occupation,
        skillsAssessment,
        overseasExperience,
        australiaExperience,
        englishTest,
        estimatedPoints,
        partnerSkills,
        studiedInAustralia,
        professionalYear,
        regionalWork,
        comments,
      } = fields;

      if (!fullName || !email) {
        return res.status(400).json({
          success: false,
          message: "Name and email are required",
        });
      }

      /* ================= CRM API ================= */

      const body = new URLSearchParams({
        Name: fullName,
        Email: email,
        Phone: phone || "",
        Country: country || "",
        Inquiries: "GSM Visa Eligibility Assessment",
        Source: "Website GSM Form",
        Message: comments || "",
      });

      const crmResponse = await fetch(
        "https://case.growmore.one/api/webhooks/website-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        }
      );

      const crmData = await crmResponse.json();

      /* ================= Nodemailer ================= */

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: "upadhyayriddhi445@gmail.com",
        pass: "rodq fksy juyo tvlm"
      },
      });

      let attachments = [];

      if (files.resume) {
        attachments.push({
          filename: files.resume.originalFilename,
          content: fs.createReadStream(files.resume.filepath),
        });
      }

      await transporter.sendMail({
        from: `"Growmore Immigration"`,
        to: "growmoreimmigration@gmail.com",
        subject: "New GSM Visa Eligibility Assessment",
        html: `
        <h2>GSM Visa Eligibility Assessment</h2>

        <h3>Basic Info</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Currently in Australia:</b> ${location}</p>

        <h3>Eligibility</h3>
        <p><b>Age:</b> ${age}</p>
        <p><b>Qualification:</b> ${qualification}</p>
        <p><b>Occupation:</b> ${occupation}</p>
        <p><b>Skills Assessment:</b> ${skillsAssessment}</p>

        <h3>Work Experience</h3>
        <p><b>Overseas:</b> ${overseasExperience}</p>
        <p><b>Australia:</b> ${australiaExperience}</p>

        <h3>English Test</h3>
        <p>${englishTest}</p>

        <h3>Points</h3>
        <p><b>Estimated Points:</b> ${estimatedPoints}</p>
        <p><b>Partner Skills:</b> ${partnerSkills}</p>
        <p><b>Studied in Australia:</b> ${studiedInAustralia}</p>
        <p><b>Professional Year:</b> ${professionalYear}</p>
        <p><b>Regional Work:</b> ${regionalWork}</p>

        <h3>Comments</h3>
        <p>${comments}</p>
      `,
        attachments,
      });

      return res.status(200).json({
        success: true,
        crmResponse: crmData,
        message: "Form submitted successfully",
      });
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}
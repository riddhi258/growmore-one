// /api/lead.js

export default async function handler(req, res) {

  // Allow POST only
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Send data to Growmore CRM webhook
    const response = await fetch(
      "https://case.growmore.one/add/company-website",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text();

    return res.status(200).json({
      success: true,
      message: "Lead sent successfully",
      crm: text,
    });

  } catch (error) {
    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while sending lead",
    });
  }
}
// api/lead.js

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const response = await fetch(
      "https://case.growmore.one/admin/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    console.log("Status:", response.status);

    const data = await response.text();

    console.log("Response:", data);

    return res.status(200).json({
      success: true,
      crmResponse: data,
    });

  } catch (error) {

    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}
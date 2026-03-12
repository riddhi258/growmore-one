export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const response = await fetch(
      "https://leads.growmore.one/api/website-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: req.body.name,
          Email: req.body.email,
          Phone: req.body.phone,
          Country_Code: req.body.countryCode,
          Message: req.body.message
        }),
      }
    );

    const data = await response.json();

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
export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const body = new URLSearchParams({
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone.replace("+91", ""), 
      Country_Code: "+91",
      Inquiries: req.body.visaType,
      Source: req.body.source || "Website",
      Message: req.body.message || ""
    });

    const response = await fetch(
      "https://leads.growmore.one/api/website-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
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
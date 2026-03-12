export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    if (!req.body.name || !req.body.email || !req.body.phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required"
      });
    }

    const phone = req.body.phone || "";

    // remove +
    const cleanPhone = phone.replace("+", "");

    // extract country code (1–3 digits)
    const countryCodeMatch = cleanPhone.match(/^\d{1,2}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";

    // remove country code from phone
    const phoneNumber = cleanPhone.replace(countryCode, "");

    const body = new URLSearchParams({
      Name: req.body.name || "",
      Email: req.body.email || "",
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: req.body.visaType || "General Inquiry",
      Source: req.body.source || "Website Form",
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
      crmResponse: data
    });

  } catch (error) {

    console.error("Webhook error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
}
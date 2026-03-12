export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const phone = req.body.phone || "";

    const countryCodeMatch = phone.match(/^\+\d{1,4}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";
    const phoneNumber = phone.replace(countryCode, "");

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
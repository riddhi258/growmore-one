import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Checklistlabour = () => {
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    labourAgreementApproved: "",
    companyName: "",
    abn: "",
    website: "",
    businessAddress: "",
    totalEmployees: "",
    yearsOfOperation: "",
    turnoverRange: "",
    industryAccreditation: "",
    dama: "",
    jobTitle: "",
    anzscoCode: "",
    employmentType: "",
    otherEmploymentType: "",
    paygArrangement: "",
    otherPaygArrangement: "",
    labourMarketTesting: "",
    previousLabourAgreement: "",
    overseasWorkers: "",
    contactPerson: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const captchaValue = recaptchaRef.current.getValue();
  if (!captchaValue) {
    alert("Please verify reCAPTCHA");
    return;
  }
  setLoading(true)
  // Add a loading state if you wish
  try {
    const response = await fetch("/api/labour", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        captchaToken: captchaValue
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert("Thank you! Our team will contact you shortly.");
      // Clear form or redirect
    } else {
      alert("Submission failed: " + result.message);
    }
  } catch (error) {
    // 3. Log the ACTUAL error to the console
    console.error("Submission Error:", error);
    alert(`Error: ${error.message}. Check the console for details.`);
  }
};

  return (
    <div>
      {/* Header */}
      <section className="bg-[#28535B] py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Employer-Sponsored Visa Assessment Form
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-md bg-[#eff9fb]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-medium">Employer Details</h2>

            {/* Labour Agreement */}
            <div>
              <p>Is the business approved under Labour Agreement?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="labourAgreementApproved"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Company Details */}
            {[
              { name: "companyName", placeholder: "Legal Business Name" },
              { name: "abn", placeholder: "ABN (Australian Business Number)" },
              { name: "website", placeholder: "Company Website" },
              { name: "businessAddress", placeholder: "Business Address" },
              { name: "totalEmployees", placeholder: "Total Employees" },
            ].map((field) => (
              <input
                key={field.name}
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="w-full border-gray-200 border-1  rounded-md px-3 py-2 bg-white"
                required
              />
            ))}

            {/* Years of Operation */}
            <div>
              <p>Years of Operation:</p>
              <div className="flex flex-wrap gap-6 mt-2">
                {[
                  "Less than 1 year",
                  "1–3 years",
                  "4–10 years",
                  "10+ years",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="yearsOfOperation"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Turnover */}
            <div>
              <p>Turnover Range (Annual Business Revenue):</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {[
                  "Less than AUD 100,000",
                  "AUD 100k - 1M",
                  "AUD 1M - 2M",
                  "AUD 2M - 4M",
                  "AUD 4M - 10M",
                  "AUD 10M - 25M",
                  "AUD 25M+",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="turnoverRange"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Accreditation */}
            <div>
              <p>Does your company have any relevant industry accreditations (e.g., ISO 9001)?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="industryAccreditation"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* DAMA */}
            <div>
              <p>Does the company have any Designated Area Migration Agreement (DAMA)?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="dama"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-medium">Job & Position Details:</h2>

            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={handleChange}
              className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
              required
            />

            <input
              type="text"
              name="anzscoCode"
              placeholder="6-digit ANZSCO Code"
              onChange={handleChange}
              className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
              required
            />

            {/* Employment Type */}
            <div>
              <p>What employment contract type are you willing to offer?</p>
              <div className="flex gap-6 mt-2">
                {["Full-time", "Part-time", "Other"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="employmentType"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>

              {formData.employmentType === "Other" && (
                <input
                  type="text"
                  name="otherEmploymentType"
                  placeholder="Please specify"
                  onChange={handleChange}
                  className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
                />
              )}
            </div>

            {/* PAYG */}
            <div>
              <p>How will the company legally contract workers under a PAYG employment arrangement?</p>
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  "Industrial Award",
                  "Enterprise Agreement",
                  "Common Law Contract",
                  "Other",
                ].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="paygArrangement"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>

              {formData.paygArrangement === "Other" && (
                <input
                  type="text"
                  name="otherPaygArrangement"
                  placeholder="Please specify the name"
                  onChange={handleChange}
                  className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
                />
              )}
            </div>

            {/* LMT */}
            <div>
              <p>Has advertising (labour market testing) been conducted for this position?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="labourMarketTesting"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <h2 className="text-xl font-medium">
              Company & Sponsorship Information
            </h2>

            {/* Previous Labour Agreement */}
            <div>
              <p>Has your company previously applied for a Labour Agreement?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="previousLabourAgreement"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <input
              type="text"
              name="overseasWorkers"
              placeholder="How many overseas Workers are currently working in your company?"
              onChange={handleChange}
              className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
            />

            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person at Business(if Known):"
              onChange={handleChange}
              className="w-full border-1 border-gray-200 rounded-md px-3 py-2 bg-white"
            />

            {/* reCAPTCHA */}
                <div className="flex justify-start">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                  />
                </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#6dc7d1] px-8 py-2 text-white rounded-full"
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checklistlabour;

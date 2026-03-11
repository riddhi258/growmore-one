import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ContactSection from "../Components/ContactSection";

const ContactUs = () => {
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("61"); // Australia default
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = recaptchaRef.current?.getValue();

  if (!token) {
    alert("Please verify the captcha");
    return;
  }

  setLoading(true);

  try {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const finalPhone = `+${dialCode}${phoneNumber}`;

    const payload = {
      name: data.name,
      email: data.email,
      phone: finalPhone,
      visaType: data.visaType,
      message: data.message,
      captchaToken: token,
      source: "Website Form",
    };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!result.success) throw new Error("Submission failed");

    alert("Thank you! Our team will contact you shortly.");

    e.target.reset();
    setPhoneNumber("");
    recaptchaRef.current.reset();

  } finally {
    setLoading(false);
  }
};

  return (
   <div className="w-full">
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Contact Us
          </p>
        </div>
      </section>
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-24">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/krunal2.png"
            alt="MARA Registration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM */}
          <div className="w-full md:w-3/4 flex flex-col items-center ml-12">
            {/* Heading */}
            <div className="w-full max-w-md mb-6 text-left -mt-24 mr-28">
              <p className="text-[#8fd07c] text-[14px] font-semibold ml-1">
                Contact Information
              </p>
              <h2 className="text-[#8fd07c] text-[40px] font-semibold">
                Get in Touch with Us
              </h2>
            </div>
            <div className="bg-[#EFF9FB] rounded-3xl shadow-2xl w-full max-w-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your Name"
                  required
                  className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                />
              </div>

              
                {/* 🔥 Split Phone Input */}
                <div className="flex gap-3">
                  {/* Country Code */}
                  <div className="w-28 bg-white rounded-lg border border-gray-300">
                    <PhoneInput
                      country={"in"}
                      enableSearch
                      onChange={(value, data) => {
                        setDialCode(data.dialCode);
                      }}
                      inputProps={{ readOnly: true }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        border: "none",
                        height: "44px",
                        backgroundColor: "white",
                      }}
                      buttonStyle={{
                        border: "none",
                        backgroundColor: "white",
                      }}
                    />
                  </div>

                  {/* Phone Number */}
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 bg-white rounded-lg px-4 py-2 border border-gray-300"
                    required
                  />
                </div>

              <select
                name="visaType"
                required
                className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
              >
                <option value="">Inquiry For</option>
                <option>Student Visa</option>
                <option>Work/Skilled Migration</option>
                <option>Partner Visa</option>
                <option>Tourist Visa</option>
                <option>Employer Sponsor Visa</option>
                <option>PR Inquiries</option>
              </select>

              <textarea
                rows="4"
                name="message"
                placeholder="Your Comments"
                className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
              ></textarea>

              <ReCAPTCHA
                sitekey="6Lcb_HEsAAAAAJESdQwpfYltspCpspxJPbCyM58Z"
                ref={recaptchaRef}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <ContactSection/>
    </div>
  );
};

export default ContactUs;

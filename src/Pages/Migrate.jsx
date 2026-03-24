import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PathwaySection from "../Components/PathwaySection";
import States from "../Components/States";

const Migrate = () => {
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
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            How to Move Australia Permanently?
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Migrate to Austraila
          </p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
          {/* ================= LEFT IMAGE COLLAGE ================= */}
          <div className="grid grid-cols-2 gap-5 max-w-xl">
            {/* Big Family Image */}
            <div className="row-span-2">
              <img
                src="/assets/i1.png"
                alt="Family Immigration"
                className="w-full h-94 object-cover rounded-2xl"
              />
            </div>

            {/* City Image */}
            <div>
              <img
                src="/assets/i2.png"
                alt="Australia City"
                className="w-full h-32 object-cover rounded-2xl shadow-sm"
              />
            </div>

            {/* Consultant Image */}
            <div>
              <img
                src="/assets/i3.png"
                alt="Consultant"
                className="w-full h-57 object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
          <div>
            {/* Small Heading */}
            <p className="text-[#8FD07C] font-[14px] font-semibold tracking-widest mb-3">
              Why Australia
            </p>

            {/* Main Heading */}
            <h2 className="text-xl md:text-4xl normal text-gray-900 leading-tight mb-6 mt-6">
              <span className="text-[#8FD07C] font-[40px] font-semibold">
                Benefits
              </span>{" "}
              of Moving to Australia
            </h2>

            <p className="text-[#727272] font-medium leading-relaxed  max-w-xl text-justify">
              Australia is a land of endless opportunities, known for its high
              standard of living, multicultural society, and breathtaking
              landscapes. If you’re wondering about the{" "}
              <b>best way to get PR in Australia</b>, exploring the country’s
              skilled migration pathways, family sponsorships, or student visas
              can open doors to permanent residency and a prosperous future.
              Discover why Australia could be the perfect destination for your
              next big move.
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Link to="/points-calculator">
                <button className="bg-[#6dc7d1] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#333333] transition whitespace-nowrap">
                  Explore the option →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 px-4 bg-white ">
        {/* Rounded Background Container */}
        <div className="max-w-8xl  mx-auto md:h-120 lg:h-100 bg-[#333333] rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-12 relative overflow-hidden">
          {/* Background wave */}
          <img
            src="/assets/wave2.jpg"
            alt="wave background"
            className="absolute inset-0 w-full h-full  object-cover opacity-20 pointer-events-none"
          />

          {/* Content */}
          <div className="relative max-w-7xl  mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
            {/* LEFT */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white leading-tight">
                Australia’s Migration <br />
                Highlights 2024–25
              </h2>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* CARD 1 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <img
                  src="/assets/r1.svg"
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-xl font-semibold text-white">
                    4,46,000
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    With 4,46,000 net overseas migrations
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                <img
                  src="/assets/r2.svg"
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    27.1 million
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    Australia's population has reached 27.1 million
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="flex items-start gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition sm:col-span-2">
                <img
                  src="/assets/r3.svg"
                  alt=""
                  className="w-10 h-10 shrink-0"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    185,000
                  </h3>
                  <p className="text-sm md:text-base text-white mt-1">
                    Supported by a migration program of 185,000 places for
                    skilled professionals and families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PathwaySection />
      <States />
      {/* Contact Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/assets/krunal2.png"
              alt="MARA Registration"
              className="w-full max-w-sm h-[680px] object-cover rounded-2xl"
            />
          </div>

          {/* FORM */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Heading */}
            <div className="w-full mb-6 text-left">
              <p className="text-[#8fd07c] text-sm font-semibold">
                Contact Information
              </p>
              <h2 className="text-[#8fd07c] text-3xl md:text-4xl font-semibold">
                Get in Touch with Us
              </h2>
            </div>

            {/* Form Card */}
            <div className="bg-[#EFF9FB] rounded-3xl shadow-2xl w-full max-w-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
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

                {/* Phone Input */}
                <div className="flex gap-3">
                  {/* Country Code */}
                  <div className="w-24 sm:w-28 bg-white rounded-lg border border-gray-300">
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

                {/* Visa Type */}
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

                {/* Message */}
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Comments"
                  className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                />

                
                {/* reCAPTCHA */}
                <div className="flex justify-center sm:justify-start w-full sm:w-auto max-w-sm sm:max-w-md lg:max-w-lg">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-64 bg-[#373737] hover:bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Migrate;

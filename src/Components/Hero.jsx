import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";

const Hero = () => {
  const recaptchaRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check captcha
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    setLoading(true);

    try {
      // Collect form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const payload = {
        ...data,
        phone: phone,
        captchaToken: token,
      };

      const response = await fetch(
        "https://case.growmore.one/add/company-website",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      console.log("Webhook Response:", result);

      alert("Form submitted successfully!");

      // reset form
      e.target.reset();
      setPhone("");
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/img2.png')" }}
    >
      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 px-6 md:px-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-left">
          <h6 className="text-base md:text-lg font-semibold text-[#6dc7d1] mb-4">
            Welcome to Growmore Immigration
          </h6>

          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6 max-w-2xl">
            The Best Immigration Consultant Service for a Smooth Move to Australia
          </h1>

          <p className="text-medium md:text-lg text-gray-200 mb-4 max-w-xl leading-relaxed text-justify">
            Start your journey to a new life in Australia with expert visa agent
            support and seamless immigration assistance.
          </p>

          <button className="w-fit bg-[#6dc7d1] text-white px-7 py-3 rounded-full font-semibold hover:bg-black transition">
            Read More →
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl w-full max-w-md">

            <div className="h-5 bg-[#6dc7d1] w-full"></div>

            <div className="p-8">
              <p className="text-[#6dc7d1] text-sm tracking-widest mb-2">
                CONTACT US
              </p>

              <h2 className="text-3xl font-semibold text-white mb-6">
                Make an Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white rounded-lg px-4 py-3 w-full outline-none border border-gray-300 hover:border-[#6dc7d1] focus:border-[#6dc7d1] transition"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    className="bg-white rounded-lg px-4 py-3 w-full outline-none border border-gray-300 hover:border-[#6dc7d1] focus:border-[#6dc7d1] transition"
                  />
                </div>

                <div className="bg-white rounded-lg p-1 border border-gray-300 hover:border-[#6dc7d1] focus-within:border-[#6dc7d1] transition">
                  <PhoneInput
                    country={"in"}
                    enableSearch={true}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputStyle={{
                      width: "100%",
                      border: "none",
                      height: "44px",
                    }}
                  />
                </div>

                <select
                  name="visaType"
                  required
                  className="bg-white rounded-lg px-4 py-3 w-full outline-none border border-gray-300 hover:border-[#6dc7d1] focus:border-[#6dc7d1] transition"
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
                  className="bg-white rounded-lg px-4 py-3 w-full outline-none border border-gray-300 hover:border-[#6dc7d1] focus:border-[#6dc7d1] transition"
                ></textarea>

                <ReCAPTCHA
                  sitekey="6Lcb_HEsAAAAAJESdQwpfYltspCpspxJPbCyM58Z"
                  ref={recaptchaRef}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-fit p-4 bg-[#6dc7d1] text-white font-semibold py-3 rounded-full border-2 border-transparent hover:bg-black hover:border-[#6dc7d1] transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit →"}
                </button>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
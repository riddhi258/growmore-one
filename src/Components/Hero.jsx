import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const recaptchaRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const payload = {
        name: data.name,
        email: data.email,
        phone: phone,
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
      setPhone("");
      recaptchaRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/img2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f4f55]/80"></div>

      <div className="relative max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 px-6 md:px-12">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center text-left text-white">
          
          <h6 className="text-xsmd:text-base font-semibold tracking-widest text-[#6dc7d1] uppercase mb-4">
            Welcome to Growmore Immigration
          </h6>
<h1 className="text-xl md:text-2xl font-bold leading-tight mb-6 max-w-2xl">
  The Best Immigration Consultant
  Service <br />
  For A Smooth Move To Australia
</h1>

          <p className="text-base md:text-lg mb-4 max-w-xl leading-relaxed">
            Start your journey to a New Life in Australia with{" "}
            <span className="text-[#7ed957] font-semibold underline">
              Expert Visa Agent Support
            </span>{" "}
            and Seamless{" "}
            <span className="text-[#7ed957] font-semibold underline">
              Immigration Assistance
            </span>{" "}
            from Trusted{" "}
            <span className="text-[#7ed957] font-semibold underline">
              Registered Migration Agents.
            </span>
          </p>

          <h3 className="text-[#7ed957] font-bold text-xl mb-8">
            ENS Visa SC18
          </h3>

          <Link to="/who-we-are">
            <button className="w-fit bg-[#6dc7d1] text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition duration-300">
              Read More →
            </button>
          </Link>
        </div>

        {/* FORM */}
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

                <div className="bg-white rounded-lg p-1 border border-gray-300">
                  <PhoneInput
                    country={"in"}
                    enableSearch
                    value={phone}
                    onChange={setPhone}
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
                  className="w-fit bg-[#6dc7d1] px-8 py-3 text-white rounded-full hover:bg-black transition disabled:opacity-50"
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
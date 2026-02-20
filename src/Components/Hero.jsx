import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";

const Hero = () => {
  const recaptchaRef = useRef(null);
  const [phone, setPhone] = useState("");

  // FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check captcha
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.phone = phone;

    console.log("SAFE FORM DATA:", data);

    // reset form
    e.target.reset();
    setPhone("");
    recaptchaRef.current.reset();

    alert("Form submitted successfully!");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/img2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute "></div>

      {/* Container */}
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
            support and seamless immigration assistance from trusted registered
            migration agents.
          </p>

          <button className="w-fit bg-[#6dc7d1] text-white px-7 py-3 rounded-full font-semibold hover:bg-black transition">
            Read More →
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center md:justify-end">

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl w-full max-w-md">

            {/* Top teal strip */}
            <div className="h-5 bg-[#6dc7d1] w-full"></div>

            <div className="p-8">
              <p className="text-[#6dc7d1] text-sm tracking-widest mb-2">
                CONTACT US
              </p>

              <h2 className="text-3xl font-semibold text-white mb-6">
                Make an Appointment
              </h2>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name + Email */}
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

                {/* Phone */}
                <div className="bg-white rounded-lg p-1 border border-gray-300 hover:border-[#6dc7d1] focus-within:border-[#6dc7d1] transition">
                  <PhoneInput
                    country={"in"}
                    enableSearch={true}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputStyle={{
                      width: "100%",
                      border: "none",
                      height: "44px"
                    }}
                    buttonStyle={{
                      border: "none",
                      background: "transparent"
                    }}
                    containerStyle={{
                      width: "100%"
                    }}
                  />
                </div>

                {/* Inquiry */}
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

                {/* Message */}
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Comments"
                  className="bg-white rounded-lg px-4 py-3 w-full outline-none border border-gray-300 hover:border-[#6dc7d1] focus:border-[#6dc7d1] transition"
                ></textarea>

                {/* CAPTCHA */}
                <div className="flex items-start">
                  <ReCAPTCHA
                    sitekey="6LeQu3EsAAAAAE7yv5jAke-n5Qfu8E3n8IoigpIz"
                    ref={recaptchaRef}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-fit p-4 bg-[#6dc7d1] text-white font-semibold py-3 rounded-full border-2 border-transparent hover:bg-black hover:border-[#6dc7d1] transition-all duration-300"
                >
                  Submit →
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

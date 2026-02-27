import React, { useRef, useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const recaptchaRef = useRef(null);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const texts = [
    "Employer Visa Expert",
    "Skill in Demand Visa SC482",
    "ENS Visa SC186",
    "Labour Agreements",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord =texts[currentWordIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          // ⏳ Wait 2.5 seconds before deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // Deleting
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

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
      className="relative min-h-screen bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/assets/img2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div
        className="relative z-10 max-w-7xl mx-auto w-full 
                      grid grid-cols-1 lg:grid-cols-2 "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-white text-center lg:text-left w-[1200px]">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#5DC2D3] uppercase mb-4">
            Welcome to Growmore Immigration
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4 max-w-3xl">
            The Best Immigration Consulting Services <br />
            for a Smooth Move to Australia
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Start your journey to a new life in Australia with{" "}
            <span className="text-[#8fd07c] font-semibold underline decoration-white">
              Expert Visa Agent Support
            </span>{" "}
            and seamless{" "}
            <span className="text-[#8fd07c] font-semibold underline decoration-white">
              Immigration Assistance
            </span>{" "}
            from trusted{" "}
            <span className="text-[#8fd07c] font-semibold underline decoration-white">
              Registered Migration Agents.
            </span>
          </p>

      <h3 className="text-[#8fd07c] font-bold text-xl sm:text-2xl mb-8">
      {displayText}
      <span className="border-r-5 border-[#8fd07c] animate-pulse ml-1"></span>
    </h3>

          <div className="flex justify-center lg:justify-start">
            <Link to="/who-we-are">
              <button
                className="bg-[#6dc7d1] text-white 
                                 px-6 sm:px-8 py-3 
                                 rounded-full text-sm sm:text-base 
                                 hover:bg-black transition duration-300"
              >
                Read More →
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl w-[500px]">
            <div className="h-5 bg-[#6dc7d1] w-full rounded-xl"></div>

            <div className="p-6 sm:p-8 rounded-lg">
              <p className="text-[#6dc7d1] text-sm tracking-widest mb-2 font-bold">
                CONTACT US
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#6dc7d1]">
                Make an Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
                  />
                </div>

                {/* Phone */}
                <div className="bg-white rounded-lg border border-gray-300">
                  <PhoneInput
                    country={"au"}
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

                {/* Select */}
                <select
                  name="visaType"
                  required
                  className="bg-white rounded-lg px-4 py-2 w-full border border-gray-300"
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
                ></textarea>

                {/* Captcha */}
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  ref={recaptchaRef}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-fit bg-[#6dc7d1] px-8 py-2 text-white rounded-full hover:bg-black transition disabled:opacity-50"
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

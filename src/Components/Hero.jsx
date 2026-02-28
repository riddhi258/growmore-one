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
    const currentWord = texts[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
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
    }  finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/assets/img2.png')" }}
    >
      {/* Dark Overlay */}

      <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-2 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        
        {/* LEFT CONTENT */}
        <div className="text-white text-center lg:text-left lg:w-[1200px]">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#5DC2D3] uppercase mb-4">
            Welcome to Growmore Immigration
          </h2>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight mb-6">
            The Best Immigration Consulting Services <br className="hidden sm:block" />
            for a Smooth Move to Australia
          </h1>

          <p className="text-base sm:text-lg mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
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

          <h3 className="text-[#8fd07c] font-bold text-xl sm:text-2xl mb-8 min-h-[40px]">
            {displayText}
            <span className="border-r-2 border-[#8fd07c] animate-pulse ml-1"></span>
          </h3>

          <div>
            <Link to="/who-we-are">
              <button className="bg-[#6dc7d1] px-8 py-3 rounded-full text-sm sm:text-base hover:bg-black transition duration-300">
                Read More →
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-black rounded-3xl shadow-2xl w-[480px]">
            
            <div className="h-6 bg-[#6dc7d1] rounded-t-3xl rounded-lg"></div>

            <div className="p-6 sm:p-8">
              <p className="text-[#6dc7d1] text-sm tracking-widest mb-2 font-bold">
                CONTACT US
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6dc7d1]">
                Make an Appointment
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                
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

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Comments"
                  className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300"
                ></textarea>

                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  ref={recaptchaRef}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#6dc7d1] px-8 py-2 text-white rounded-full hover:bg-black transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit →"}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PathwaySection from "../Components/PathwaySection";
import States from "../Components/States";

const Migrate = () => {
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
  
        const result = await response.json();
  
        if (!result.success) {
          throw new Error("Submission failed");
        }
  
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
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
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
            <p className="text-[#8FD07C] text-sm font-semibold tracking-widest mb-3">
              Why Australia
            </p>

            {/* Main Heading */}
            <h2 className="text-xl md:text-4xl normal text-gray-900 leading-tight mb-6 mt-8">
              <span className="text-[#8FD07C] font-semibold">Benefits</span> of Moving to
              Australia
            </h2>

            {/* Description */}
            <p className="text-gray-600 font-medium leading-relaxed mb-10 max-w-xl text-justify">
              Australia is a land of endless opportunities, known for its high
              standard of living, multicultural society, and breathtaking
              landscapes. If you’re wondering about the best way to get PR in
              Australia, exploring the country’s skilled migration pathways,
              family sponsorships, or student visas can open doors to permanent
              residency and a prosperous future. Here’s why you should consider
              Australia for your next big move.
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
      <section className="py-14 px-4 bg-white">
        {/* Rounded Background Container */}
        <div className="max-w-9xl  h-[350px] mx-auto bg-[#333333] rounded-[30px] md:rounded-[40px] px-6 md:px-10 py-12 relative overflow-hidden">
          {/* ===== Top Content ===== */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                Australia’s Migration <br />
                Highlights 2024–25
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* CARD 1 */}
                <div className="flex items-center gap-4 border border-white rounded-xl p-3 shadow-md hover:shadow-lg transition">
                  <img
                    src="/assets/r1.svg"
                    alt=""
                    className="w-12 h-12 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      4,46,000
                    </h3>
                    <p className="text-sm text-white mt-2">
                      With 4,46,000 net overseas migrations
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
               <div className="flex items-center w-64 gap-4 border border-white rounded-xl p-3 shadow-md hover:shadow-lg transition">
                  <img
                    src="/assets/r2.svg"
                    alt=""
                    className="w-12 h-12 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      27.1 million
                    </h3>
                    <p className="text-sm text-white mt-2">
                      Australia's population has reached 27.1 million
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="flex items-center w-130 gap-4 border border-white rounded-xl p-4 shadow-md hover:shadow-lg transition md:col-span-2">
                  <img
                    src="/assets/r3.svg"
                    alt=""
                    className="w-12 h-12 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      185,000
                    </h3>
                    <p className="text-sm text-white mt-2">
                      Supported by a migration program of 185,000 places for skilled professionals and families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PathwaySection />
      <States/>
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
        <div className="w-full md:w-3/4 flex flex-col items-center">
          {/* Heading */}
          <div className="w-full max-w-md mb-6 text-left ml-4">
            <p className="text-green-400 text-sm font-semibold">
              Contact Information
            </p>
            <h2 className="text-3xl font-semibold text-green-400 mt-2">
              Get in Touch with Us
            </h2>
          </div>
          <div className="bg-[#EFF9FB] rounded-3xl shadow-2xl w-full max-w-md p-8">
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
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
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

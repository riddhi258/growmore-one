import React from "react";
import { Link } from "react-router-dom";

const LabourAgreement = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#28535B] py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Labour Agreement
          </h1>
          <p className="text-white font-semibold">Home &gt;Labour Agreement</p>
        </div>
      </section>{" "}
      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-10 md:px-15 py-16">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-[#28535B] font-semibold text-gray-900 mb-6 leading-snug">
          Work in Australia with a Labour Agreement –
          <span className="text-[#28535B]">
            {" "}
            An Employer-Sponsored Pathway to Residency
          </span>
        </h2>

        {/* ================= VISA TYPES ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Main Visa Types Available Through Labour Agreement
          </h3>

          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Temporary Skill Shortage (TSS) Visa – Subclass 482</li>
            <li>
              Skilled Employer Sponsored Regional (Provisional) Visa – Subclass
              494
            </li>
            <li>Employer Nomination Scheme – Subclass 186 Visa</li>
          </ul>
        </div>

        {/* ================= KEY BENEFITS ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Key Benefits of Labour Agreement
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Access to Job Opportunities That Are Not on Standard Occupation
              Lists
            </li>
            <li>Potential Pathway to Permanent Residency</li>
            <li>Fair Work Protections</li>
            <li>Regional Employment Opportunities</li>
            <li>Structured and Transparent Recruitment</li>
          </ul>
        </div>

        {/* ================= PROCESS CTA ================= */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Don’t Miss Your Chance to Move to Australia with a Labour Agreement
            & Start the Process Now!
          </h3>

          <p className="text-gray-600 mb-6 text-justify">
            If you are thinking of making the next move, then before you dive
            in, make sure that you are actually ready. So, check your
            eligibility and get to know where you actually stand.
          </p>
                     <Link to="/Checklist-for-dama">
            <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
            Checklist Form
          </button>
          </Link>
        </div>

        {/* ================= WHY GROWMORE ================= */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Growmore Immigration is the Right Choice
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
              Trusted experts in Australian migration with thousands of
              successful GSM clients
            </li>
            <li>Free eligibility check</li>
            <li>
              Specialized support for skills assessment and EOI submission
            </li>
            <li>Updated occupation lists & point threshold expertise</li>
            <li>Personalized consultation by registered MARA agents</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Stay Connected with Us
          </h4>

          <p className="text-gray-600 mb-6 text-justify">
            Follow us for updates, tips, and expert guidance on moving to
            Australia and stay informed at every step of your journey.
          </p>
          <Link to="/book-consultation">
            <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
              Book Consultation →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LabourAgreement;

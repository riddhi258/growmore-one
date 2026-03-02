import React from "react";
import { Link } from "react-router-dom";

const GSMPage = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#28535B] py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            GSM (General Skilled Migration)
          </h1>
          <p className="text-white font-semibold">
            Home &gt;GSM (General Skilled Migration)
          </p>
        </div>
      </section>{" "}
      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-10 md:px-15 py-16">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          Migrate to Australia with the General Skilled Migration (GSM) Program
          –<span className="text-[#28535B]"> No Sponsorship Needed</span>
        </h2>

        {/* Subheading */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Start Your GSM Application Today with Step-by-Step Expert Support
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-10 text-justify">
          Are you a skilled professional dreaming of a new life in Australia?
          The General Skilled Migration (GSM) program offers a direct,
          points-based pathway to permanent residency – no employer sponsorship
          required. This program is specially designed for those whose skills
          are in high demand in Australia. Whether you're an IT professional,
          engineer, nurse, or tradesperson, GSM could be your gateway to
          building a successful future in Australia.
        </p>

        {/* ================= VISA TYPES ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Main Visa Types Available Through GSM
          </h3>

          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Skilled Independent Visa – Subclass 189</li>
            <li>Skilled Nominated Visa – Subclass 190</li>
            <li>Skilled Work Regional (Provisional) Visa – Subclass 491</li>
          </ul>
        </div>

        {/* ================= KEY BENEFITS ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Key Benefits of GSM
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Flexibility to Live and Work Anywhere (Especially for 189)</li>
            <li>Permanent Residency Pathway</li>
            <li>No Employer Sponsorship Required</li>
            <li>Family Inclusion</li>
            <li>Access to Government Services</li>
          </ul>
        </div>

        {/* ================= PROCESS CTA ================= */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Begin Your General Skilled Migration (GSM) Process?
          </h3>

          <p className="text-gray-600 mb-6 text-justify">
            Take the first step towards securing your general skilled migration
            without the need for sponsorship and building a new life in
            Australia. Get a free GSM eligibility assessment now. It only takes
            a few minutes and helps identify the best pathway for you.
          </p>
        <Link to="/checklist-for-gsm-general-skilled-migration">
           <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
            Checklist Form
          </button>
        </Link>
        </div>

        {/* ================= WHY GROWMORE ================= */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Why Growmore Immigration Makes a Difference
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>
             Licensed MARA agents to provide you with the right guidance in the Labour Agreement

            </li>
            <li>Thousands of successful visa approvals and happy clients</li>
            <li>
Strong connections with Australian employers</li>

            <li>Handle every paperwork and legal complexities accurately</li>
            <li>Personalized solution and ongoing support</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Stay Connected with Us
          </h4>

          <p className="text-gray-600 mb-6 text-justify">
         Stay connected with Growmore Immigration for the latest tips, news, and expert insights on migrating to Australia. Follow us on social media and be a valuable part of our community.
          </p>

            <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
            Book Consultation →
          </button>
        </div>
      </section>
    </div>
  );
};

export default GSMPage;

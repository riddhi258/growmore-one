import React from "react";

const DAMA = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#28535B] py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            DAMA
          </h1>
          <p className="text-white font-semibold">Home &gt;DAMA</p>
        </div>
      </section>{" "}
      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 py-10 md:px-15 py-16">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-snug">
          Unlock Unique Migration Opportunities with Australia’s DAMA Program
        </h2>

        {/* Subheading */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Navigate Your Migration Journey Through DAMA with Expert Guidance
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-10 text-justify">
          Are you a skilled professional dreaming of a new life in Australia?
          Looking to live and work in Australia, but don’t meet the usual
          skilled visa criteria? Don’t worry, the Designated Area Migration
          Agreement (DAMA) offers a unique solution. This special agreement
          between the Australian government and specific regional areas allows
          employers in regional areas to sponsor skilled overseas workers for
          jobs and address local labour shortages. With relaxed criteria for
          skills, age, and language, DAMA opens a flexible path to a secure
          future in Australia.
        </p>

        {/* ================= VISA TYPES ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Main Visa Types Available Through DAMA
          </h3>

          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Temporary Skill Shortage Visa – Subclass 482</li>
            <li>Temporary Skill Shortage Visa – Subclass 482</li>
            <li>Employer Nomination Scheme – Subclass 186</li>
          </ul>
        </div>

        {/* ================= KEY BENEFITS ================= */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Key Benefits of DAMA
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Concessions on Visa Requirements, Like Age Limit, English Language
              Requirements
            </li>
            <li>Easy Route to Permanent Residency</li>
            <li>Availability of a Wider Variety of Jobs</li>
            <li>Work in Growing Regional Areas</li>
            <li>Family Inclusion</li>
          </ul>
        </div>

        {/* ================= PROCESS CTA ================= */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Want to Start Your DAMA Visa Process Today?
          </h3>

          <p className="text-gray-600 mb-6 text-justify">
            Don’t miss this unique chance to migrate under DAMA’s flexible terms
            and begin your smooth migration process now. Fill out this checklist
            to know your eligibility and begin your application with confidence.
          </p>

            <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
            Checklist Form
          </button>
        </div>

        {/* ================= WHY GROWMORE ================= */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
Why Growmore Immigration Stands Out
</h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li>Truthful guidance from registered MARA agents</li>
            <li>Transparent and clear pricing structure</li>
            <li>
Free eligibility check for DAMA visas
</li>
            <li>Strong connections with regional employers
</li>
            <li>Complete support from application to visa grants
</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">
Keep in Touch with Us

</h4>
          <p className="text-gray-600 mb-6 text-justify">
If you want to stay ahead of every Australian migration news, follow us on social media and get the reliable tips that you can trust.


          </p>

           <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
            Book Consultation →
          </button>
        </div>
      </section>
    </div>
  );
};

export default DAMA;

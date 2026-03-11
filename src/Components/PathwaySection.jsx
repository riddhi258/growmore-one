import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const PathwaySection = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "visitor",
      title: "Visitor visas",
      content: [
        "Electronic Travel Authority (subclass 601)",
        "eVisitor (subclass 651)",
        "Transit visa (subclass 771)",
        "Visitor (subclass 600)",
        "Work and Holiday visa (subclass 462)",
        "Working Holiday visa (subclass 417)",
      ],
    },
    {
      id: "working",
      title: "Working and skilled visas",
      content: [
        "Business Innovation and Investment (permanent) visa (subclass 888)",
        "Business Innovation and Investment (provisional) visa (subclass 188)",
        "Business Owner (subclass 890)",
        "National Innovation visa (subclass 858)",
        "Employer Nomination Scheme (subclass 186)",
        "Investor visa (subclass 891)",
        "Permanent Residence (Skilled Regional) visa (subclass 191)",
        "Pacific Engagement Visa (subclass 192)",
        "Regional Sponsored Migration Scheme (subclass 187)",
        "Skilled Employer Sponsored Regional (provisional) visa (subclass 494)",
        "Skilled Independent visa (subclass 189)",
        "Skilled Nominated visa (subclass 190)",
        "Skilled Regional (provisional) visa (subclass 489)",
        "Skilled Regional visa (subclass 887)",
        "Skilled Work Regional (Provisional) visa (subclass 491)",
        "State or Territory Sponsored Business Owner visa (subclass 892)",
        "State or Territory Sponsored Investor visa (subclass 893)",
        "Temporary Activity visa (subclass 408)",
        "Temporary Graduate visa (subclass 485)",
        "Temporary Work (International Relations) visa (subclass 403)",
        "Temporary Work (Short Stay Specialist) visa (subclass 400)",
        "Skills in Demand (subclass 482)",
      ],
    },
    {
      id: "study",
      title: "Studying and training visas",
      content: [
        "Student visa (subclass 500)",
        "Student Guardian visa (subclass 590)",
        "Training visa (subclass 407)",
      ],
    },
    {
      id: "refugee",
      title: "Refugee and humanitarian visas",
      content: [
        "Global Special Humanitarian (subclass 202)",
        "Protection visa (subclass 866)",
        "Refugee visas (subclass 200, 201, 203 and 204)",
        "Temporary Protection visa (subclass 785)",
        "Safe Haven Enterprise visa (subclass 790)",
        "Resolution of Status visa (subclass 851)",
      ],
    },
    {
      id: "family",
      title: "Family and partner visas",
      content: [
        "Adoption visa (subclass 102)",
        "Aged Dependent Relative visa (subclass 114)",
        "Aged Parent visa (subclass 804)",
        "Carer visa (subclass 836)",
        "Child visa (subclass 101)",
        "Contributory Parent visa (subclass 143)",
        "Partner visa (subclass 820 801)",
        "Prospective Marriage visa (subclass 300)",
        "Remaining Relative visa (subclass 115)",
        "Sponsored Parent (Temporary) visa (subclass 870)",
      ],
    },
    {
      id: "other",
      title: "Other visas",
      content: [
        "Bridging visa A – BVA – (subclass 010)",
        "Bridging visa B – BVB – (subclass 020)",
        "Bridging visa C – BVC – (subclass 030)",
        "Bridging visa E – BVE – (subclass 050 and 051)",
        "Crew Travel Authority visa (subclass 942)",
        "Former Resident visa (subclass 151)",
        "Medical Treatment visa (subclass 602)",
        "Resident Return visa (subclass 155 157)",
        "Special Category visa (subclass 444)",
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id} className="rounded-2xl overflow-hidden">
        
        {/* Accordion Header */}
        <button
          onClick={() => toggleAccordion(item.id)}
          className={`flex items-center justify-between w-full px-5 py-3 transition
          ${
            active === item.id
              ? "bg-[#1f5257] text-white"
              : "bg-white text-[#163c3d] hover:bg-[#1f5257] hover:text-white"
          }`}
        >
          <span className="text-base md:text-[16px] font-medium">
            {item.title}
          </span>

          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full transition
            ${
              active === item.id
                ? "bg-[#2d6f74] text-white"
                : "bg-[#eff9fb] text-[#163c3d]"
            }`}
          >
            {active === item.id ? <FaChevronDown /> : <FaChevronRight />}
          </div>
        </button>

        {/* Accordion Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            active === item.id
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border border-[#1f5257] border-t-0 p-5">
            <ul className="space-y-2 list-disc pl-5 text-[#163c3d] text-sm md:text-[16px]">
              {item.content.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ));

  const leftColumn = data.filter((_, i) => i % 2 === 0);
  const rightColumn = data.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-8xl mx-auto bg-[#eff9fb] rounded-[40px] px-6 md:px-12 py-12 md:py-16 relative overflow-hidden">

        {/* Background Pattern */}
        <img
          src="/assets/wave2.jpg"
          alt="wave background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative z-10 px-12">

          {/* Heading */}
          <h2 className="text-3xl md:text-[40px] font-medium text-[#163c3d] mb-10 md:mb-14">
            Choose Your{" "}
            <span className="text-[#7cc576] font-semibold md:text-[40px]">
              Pathway
            </span>
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {renderItems(leftColumn)}
            </div>

            <div className="space-y-4">
              {renderItems(rightColumn)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PathwaySection;
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
        "Aged Dependent Relative visa (subclass 838)",
        "Aged Parent visa (subclass 804)",
        "Carer visa (subclass 836)",
        "Carer visa (subclass 116)",
        "Child visa (subclass 101)",
        "Child visa (subclass 802)",
        "Contributory Aged Parent (Temporary) visa (subclass 884)",
        "Contributory Aged Parent visa (subclass 864)",
        "Contributory Parent (Temporary) visa (subclass 173)",
        "Contributory Parent visa (subclass 143)",
        "Dependent Child visa (subclass 445)",
        "New Zealand Citizen Family Relationship (temporary) visa (subclass 461)",
        "Orphan Relative (subclass 117)",
        "Orphan Relative (subclass 837)",
        "Parent visa (subclass 103)",
        "Partner (Provisional and Migrant) visa (subclass 309 100)",
        "Partner visa (subclass 820 801)",
        "Prospective Marriage visa (subclass 300)",
        "Remaining Relative visa (subclass 115)",
        "Remaining Relative visa (subclass 835)",
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
        "Maritime Crew visa (subclass 988)",
        "Medical Treatment visa (subclass 602)",
        "Resident Return visa (subclass 155 157)",
        "Special Category visa (subclass 444)",
        "Special Purpose visa",
        "Investor Retirement visa (subclass 405)",
        "Confirmatory (Residence) visa (subclass 808)",
      ],
    },
  ];

  return (
    <section className=" py-10 px-6 bg-white">
      
      <div className="max-w-8xl mx-auto bg-[#eff9fb] rounded-[40px] px-10 py-16">
        {/* Heading */}
        <h2 className="text-lg md:text-5xl font-medium text-[#163c3d] mb-14">
          Choose Your{" "}
          <span className="text-[#7cc576] font-semibold">Pathway</span>
        </h2>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {data
              .filter((_, index) => index % 2 === 0)
              .map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() =>
                      setActive(active === item.id ? null : item.id)
                    }
                    className={`flex items-center justify-between px-3 py-3 rounded-2xl cursor-pointer transition 
            ${
              active === item.id
                ? "bg-[#1f5257] text-white"
                : "bg-white text-[#163c3d]"
            }`}
                  >
                    <span className="text-lg font-medium">{item.title}</span>

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
                    >
                      {active === item.id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                  </div>

                  {active === item.id && item.content && (
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-8 py-6">
                      <ul className="space-y-3 list-disc pl-5 text-[#163c3d]">
                        {item.content.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {data
              .filter((_, index) => index % 2 !== 0)
              .map((item) => (
                <div key={item.id}>
                  <div
                    onClick={() =>
                      setActive(active === item.id ? null : item.id)
                    }
                    className={`flex items-center justify-between px-3 py-3 rounded-2xl cursor-pointer transition 
            ${
              active === item.id
                ? "bg-[#1f5257] text-white"
                : "bg-white text-[#163c3d]"
            }`}
                  >
                    <span className="text-lg font-medium">{item.title}</span>

                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
                    >
                      {active === item.id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </div>
                  </div>

                  {active === item.id && item.content && (
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-8 py-6">
                      <ul className="space-y-3 list-disc pl-5 text-[#163c3d]">
                        {item.content.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaySection;

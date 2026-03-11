import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const States = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "nsw",
      title: "New South Wales (NSW)",
      content: [
        "Capital: Sydney",
        "Population: ~8.3 million (2024 estimate)",
        "Economy: The largest economy in Australia, contributing over 30% to the national GDP.",
        "Job Market:",
        "Strong in finance, technology, and education.",
        "Significant opportunities in professional services and tourism.",
        "Key Industries:",
        "Finance and insurance",
        "Professional services",
        "Information technology",
        "Tourism and hospitality",
      ],
    },
    {
      id: "sa",
      title: "South Australia (SA)",
      content: [
        "Capital: Adelaide",
        "Population: ~1.9 million (2024 estimate)",
        "Economy: Known for wine production, agriculture, and the defence industry",
        "Job Market:",
        "Renewable energy and advanced manufacturing are key growth sectors.",
        "High demand for defence and aerospace professionals.",
      ],
    },
    {
      id: "vic",
      title: "Victoria (VIC)",
      content: [
        "Capital: Melbourne",
        "Population: ~6.8 million (2024 estimate)",
        "Economy: Australia’s second-largest economy.",
        "Job Market:",
        "Thriving in healthcare, creative industries, and manufacturing.",
      ],
    },
    {
      id: "nt",
      title: "Northern Territory (NT)",
      content: [
        "Capital: Darwin",
        "Population: ~250,000 (2024 estimate)",
        "Economy: Resource-focused with mining and tourism.",
      ],
    },
    {
      id: "qld",
      title: "Queensland (QLD)",
      content: [
        "Capital: Brisbane",
        "Population: ~5.3 million (2024 estimate)",
        "Economy: Tourism-driven supported by mining and agriculture.",
      ],
    },
    {
      id: "act",
      title: "Australian Capital Territory (ACT)",
      content: [
        "Capital: Canberra",
        "Population: ~470,000 (2024 estimate)",
        "Economy: Government services, education, and research.",
      ],
    },
    {
      id: "wa",
      title: "Western Australia (WA)",
      content: [
        "Capital: Perth",
        "Population: ~2.8 million (2024 estimate)",
        "Economy: Resource-rich state with mining dominance.",
      ],
    },
  ];

  const toggleAccordion = (id) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  const renderItems = (items) =>
    items.map((item) => (
      <div key={item.id}>
        {/* Header */}
        <button
          onClick={() => toggleAccordion(item.id)}
          className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl border transition
          ${
            active === item.id
              ? "bg-[#1f5257] text-white border-[#1f5257]"
              : "bg-white text-[#163c3d] border-gray-200"
          }`}
        >
          <span className="text-[16px] font-medium">{item.title}</span>

          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full
            ${active === item.id ? "bg-[#2d6f74]" : "bg-[#eff9fb]"}`}
          >
            {active === item.id ? <FaChevronDown /> : <FaChevronRight />}
          </div>
        </button>

        {/* Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            active === item.id ? "max-h-[600px] mt-2" : "max-h-0"
          }`}
        >
          <div className="bg-white border border-[#1f5257] rounded-b-2xl px-6 py-6">
            <ul className="space-y-2 list-disc pl-5 text-[#163c3d]">
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
      <div className="max-w-8xl mx-auto rounded-[40px] px-6 md:px-12 py-12 md:py-16">
      
        <div className="relative z-10 px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-[40px] font-medium text-[#163c3d] mb-12">
          <span className="text-[#7cc576] font-semibold md:text-[40px]">Australian</span> States
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">{renderItems(leftColumn)}</div>
          <div className="space-y-6">{renderItems(rightColumn)}</div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default States;
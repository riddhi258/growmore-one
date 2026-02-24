import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const States = () => {
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
        "Electronic Travel Authority (subclass 601)",
        "eVisitor (subclass 651)",
        "Transit visa (subclass 771)",
        "Visitor (subclass 600)",
        "Work and Holiday visa (subclass 462)",
        "Working Holiday visa (subclass 417)",
      ],
    },
    {
      id: "study",
      title: "Studying and training visas",
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
      id: "refugee",
      title: "Refugee and humanitarian visas",
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
      id: "family",
      title: "Family and partner visas",
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
      id: "other",
      title: "Other visas",
      content: [
        "Electronic Travel Authority (subclass 601)",
        "eVisitor (subclass 651)",
        "Transit visa (subclass 771)",
        "Visitor (subclass 600)",
        "Work and Holiday visa (subclass 462)",
        "Working Holiday visa (subclass 417)",
      ],
    },
  ];

  return (
    <section className=" py-10 px-6 bg-white">
      <div className="max-w-8xl mx-auto bg-white rounded-[40px] px-10 py-16">
        {/* Heading */}
        <h2 className="text-lg md:text-5xl font-medium text-[#163c3d] mb-14">
          <span className="text-[#7cc576] font-semibold">Australian</span>{" "}States{" "}
        </h2>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 ">
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
                    className={`flex items-center justify-between px-3 py-3 rounded-2xl cursor-pointer transition border-gray-200 border-1
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
                    className={`flex items-center justify-between px-3 py-3 rounded-2xl cursor-pointer transition border-gray-200 border-1
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
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-8 py-6 ">
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

export default States;

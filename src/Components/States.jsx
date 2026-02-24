import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const States = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "New South Wales",
      title: "New South Wales (NSW)",
      content: [
        "Capital: Sydney",
        "Population: ~8.3 million (2024 estimate)",
        "Economy: The largest economy in Australia, contributing over 30% to the national GDP.",
        "Job Market:",
        " Strong in finance, technology, and education.",
        " Significant opportunities in professional services and tourism.",
        "Key Industries:",
        " Finance and insurance",
        " Professional services",
        " Information technology",
        " Tourism and hospitality",
        "Specialities:",
        " Sydney, an iconic city, features landmarks like the Sydney Opera House and Harbour Bridge.",
        " A hub for financial services and tech startups.",
        " Famous beaches: Bondi and Manly.",
        " World Heritage sites including the Blue Mountains and Lord Howe Island.",
        "Immigration Appeal: NSW nominates skilled migrants for state visas, prioritizing high-demand occupations.",
      ],
    },
    {
      id: "South Australia",
      title: "South Australia (SA)",
      content: [
        "Capital: Adelaide",
        "Population: ~1.9 million (2024 estimate)",
        "Economy: Known for wine production, agriculture, and the defence industry",
        "Job Market:",
        " Renewable energy and advanced manufacturing are key growth sectors.",
        " High demand for defence and aerospace professionals.",
        "Key Industries:",
        " Defence and aerospace",
        " Wine and agriculture",
        " Renewable energy",
        " Tourism",
        "Specialities:",
        " Famous for Barossa Valley and Clare Valley wine regions.",
        " Leading in renewable energy with high solar energy uptake.",
        " Attractions: Kangaroo Island, Flinders Ranges, and Adelaide Hills.",
        " Adelaide is celebrated for its festivals and affordable lifestyle.",
        "Immigration Appeal: Actively sponsors skilled migrants in priority industries.",
      ],
    },
    {
      id: "Victoria (VIC)",
      title: "Victoria (VIC)",
      content: [
        "Capital: Melbourne",
        "Population: ~6.8 million (2024 estimate)",
        "Economy: Australia’s second-largest economy, with diverse industries.",
        "Job Market:",
        " Thriving in healthcare, creative industries, and manufacturing.",
        " High demand for education and research professionals.",
        "Key Industries:",
        " Arts, culture, and entertainment",
        " Education and research",
        " Manufacturing and automotive",
        " Agriculture and viticulture",
        "Specialities:",
        " Melbourne is Australia’s cultural capital, with world-class arts, music, and food.",
        " Home to top universities like the University of Melbourne and Monash University.",
        " Attractions: Great Ocean Road, Yarra Valley, and Phillip Island.",
        " A hub for major sporting events, including the Australian Open and Formula 1 Grand Prix.",
        "Immigration Appeal: Offers regional migration options for areas outside Melbourne.",
      ],
    },
    {
      id: "Northern Territory (NT)",
      title: "Northern Territory (NT)",
      content: [
        "Capital: Darwin",
        "Population: ~250,000 (2024 estimate)",
        "Economy: Resource-focused, with significant contributions from mining and tourism.",
        "Job Market:",
        " Strong in mining, tourism, and healthcare sectors.",
        " High demand for skilled workers in agriculture and defence.",
        "Key Industries:",
        " Mining (uranium, gold, oil, and gas)",
        " Tourism (eco and cultural tourism)",
        " Agriculture and aquaculture",
        " Defence",
        "Specialities:",
        " Rich Aboriginal culture and history.",
        " Attractions: Uluru, Kakadu National Park, and Litchfield National Park.",
        " Darwin is the gateway to Asia and offers a tropical lifestyle.",
        "Immigration Appeal: Regional visas make this an attractive option for skilled migrants.",
      ],
    },
    {
      id: "Queensland (QLD)",
      title: "Queensland (QLD)",
      content: [
        "Capital: Brisbane",
        "Population: ~5.3 million (2024 estimate)",
        "Economy: A tourism-driven economy supported by mining, agriculture, and renewable energy.",
        "Job Market:",
        " Opportunities in tourism, construction, and agriculture.",
        " Increasing roles in renewable energy and tech.",
        "Key Industries:",
        " Tourism and hospitality",
        " Mining and resources",
        " Agriculture and food production",
        " Renewable energy",
        "Specialities:",
        " Known as the Sunshine State for its warm climate and stunning beaches.",
        " Features natural wonders like the Great Barrier Reef, Daintree Rainforest, and Whitsunday Islands.",
        " Tourist hubs: Gold Coast, Sunshine Coast, and Cairns.",
        " Brisbane is an emerging tech and business hub.",
        "Immigration Appeal: Regional visa incentives are available for Northern Queensland.",
      ],
    },

    {
      id: "Australian Capital Territory (ACT)",
      title: "Australian Capital Territory (ACT)",
      content: [
        "Capital: Canberra",
        "Population: ~470,000 (2024 estimate)",
        "Economy: Driven by government services, education, and research.",
        "Job Market:",
        "• Public administration, education, and research are key sectors.",
        "• Opportunities in IT and tourism.",
        "Key Industries:",
        "• Government and public administration",
        "• Education and research",
        "• Information technology",
        "• Tourism",
        "Specialities:",
        "• Home to Australia’s Parliament House and national institutions like the National Museum and Australian War Memorial.",
        "• Canberra offers a high standard of living with excellent schools and healthcare.",
        "• Surrounded by nature reserves, perfect for outdoor enthusiasts.",
        "Immigration Appeal: Provides state nominations for migrants with skills aligned to its needs.",
      ],
    },
    {
      id: "Western Australia (WA)",
      title: "Western Australia (WA)",
      content: [
        "Capital: Perth",
        "Population: ~2.8 million (2024 estimate)",
        "Economy: Resource-rich state, with mining as its backbone.",
        "Job Market:",
        " Dominated by mining, oil, and gas industries.",
        " Growing demand for skilled workers in trades and renewable energy.",
        "Key Industries:",
        " Mining and resources (iron ore, gold, natural gas)",
        " Agriculture (wheat, cattle, sheep)",
        " Tourism (eco and adventure tourism)",
        "Renewable energy",
        "Specialities:",
        " The largest state by land area, offering vast wilderness and outback adventures.",
        " Home to major mining companies like Rio Tinto and BHP.",
        " Attractions: Margaret River, Ningaloo Reef, and Karijini National Park.",
        " Perth offers a laid-back lifestyle with beautiful beaches.",
        "Immigration Appeal: Skilled migrants in trades and resources are in high demand.",
      ],
    },
  ];

  return (
    <section className=" py-10 px-6 bg-white">
      <div className="max-w-8xl mx-auto bg-white rounded-[40px] px-10 py-16">
        {/* Heading */}
        <h2 className="text-lg md:text-5xl font-medium text-[#163c3d] mb-14">
          <span className="text-[#7cc576] font-semibold">Australian</span>{" "}
          States{" "}
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

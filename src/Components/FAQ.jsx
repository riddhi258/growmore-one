import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [active, setActive] = useState("");

  const data = [
    {
      id: "New South What services does Growmore Immigration provide?",
      title: "What services does Growmore Immigration provide?",
      content: [
        "Growmore Immigration offers expert immigration services for Australia, including visa application assistance, migration to Australia, permanent residency guidance, and professional support for business, work, study, and partner visas. Our licensed immigration agents provide comprehensive support to ensure a seamless immigration process. ",
      ],
    },
      {
      id: "Is Growmore Immigration licensed to provide immigration services?",
      title: "Is Growmore Immigration licensed to provide immigration services?",
      content: ["Yes, Krunal Nayak is a MARN: 2217941, and he owns a Growmore immigration as well as we have registered  migration agents  to provide professional visa assistance and immigration services. Our team ensures that all applications meet Australian immigration standards and are processed correctly. "],
    },
      {
      id: "Can Growmore Immigration help with business visa applications?",
      title: "Can Growmore Immigration help with business visa applications?",
      content: [
        "Yes, we offer specialized assistance for business visa applications in Australia. Whether you’re starting a new business or looking to invest in Australia, our visa support services ensure a smooth application and fast processing times."],},
      {
      id: "What types of visas can Growmore Immigration assist with?",
      title: "What types of visas can Growmore Immigration assist with?",
      content: [
        "We specialize in all types of Australian visas, including skilled visas, work visas, study visas, partner visas, and business visas. Whether you’re looking for a permanent residency visa or a temporary work visa, we provide professional visa assistance and ensure all documentation is in order for a successful application. "
      ],
    },
      {
      id: "How do I book a consultation with Growmore Immigration?",
      title: "How do I book a consultation with Growmore Immigration?",
      content: [
        "Booking a consultation is easy— simply reach out to us via WhatsApp https://wa.me/+61434202021 . Fill out the inquiry form .After submitting your details, one of our skilled visa specialists will reach out to you based on your profile will schedule your appointment and provide personalized assistance for your Australian visa needs. "
      ],
    },
      {
      id: "How long does it take to process my visa application?",
      title: "How long does it take to process my visa application?",
      content: [
        "The processing time for your Australian visa application depends on the type of visa and your specific circumstances. Also its based on the updates provide by Australian government. Generally, our expert visa consultants will keep you informed throughout the entire process and work diligently to ensure fast visa processing and accurate submissions. "
      ],
    },
      {
      id: "What documents are required for an Australian visa application?",
      title: "What documents are required for an Australian visa application?",
      content: [
        "Depending on the type of visa you’re applying for, we will assist you in preparing and submitting all necessary documents. Our visa processing team  will stay connected with you and guide  you accordingly  by  ensuring a hassle-free application process. "
      ],
    },
      {
      id: "How do I contact Growmore Immigration for visa inquiries?",
      title: "How do I contact Growmore Immigration for visa inquiries?",
      content: [
        "For any queries or consultations regarding Australian immigration, simply reach out to us via WhatsApp https://wa.me/+61434202021 . Fill out the inquiry form, and one of our experienced Counsellor will contact you within 24 hours, or within 48 hours during weekends. We are here to offer reliable visa solutions and comprehensive immigration support. "
      ],
    },
      {
      id: "Can Growmore Immigration help with Student Visa applications for Australia?",
      title: "Can Growmore Immigration help with Student Visa applications for Australia?",
      content: [
     "Yes, Growmore Immigration provides comprehensive support for Australian Student Visa applications. Whether you’re looking to study in Australia at a university, college, or language school, our visa consultants will guide you through the application process. We assist with visa documentation, ensure all requirements are met, and help you with a seamless student visa filing, so you can focus on your studies in Australia. "
    ],
    },
      {
      id: "Can Growmore Immigration help with Australian PR (Permanent Residency)?",
      title: "Can Growmore Immigration help with Australian PR (Permanent Residency)?",
      content: [
        "Yes, we provide detailed guidance and assistance for those looking to apply for Australia’s Permanent Residency (PR). Our consultants specialize in Australian skilled migration pathways and can help you navigate the complex process for PR approval. ",
      ],
    },
      {
      id: "What is a Labour Agreement, and how can Growmore Immigration assist with it?",
      title: "What is a Labour Agreement, and how can Growmore Immigration assist with it?",
      content: [
        "A Labour Agreement allows Australian employers to hire overseas workers for specific roles that are in demand. Growmore Immigration assists both employers and employees in securing labor agreements and applying for the relevant visas. Our consultants ensure the labor agreement is in compliance with Australian immigration laws and help you navigate the complexities of hiring skilled workers for your business. ",
      ],
    },
      {
      id: "What is a General Migration Visa, and how can Growmore Immigration support me?",
      title: "What is a General Migration Visa, and how can Growmore Immigration support me?",
      content: [
        "A General Migration Visa is for individuals who want to move to Australia independently, without a specific employer sponsor. Growmore Immigration provides expert support for all types of general migration visas, including skilled migration pathways and regional migration options. Our experienced migration consultants help you determine your eligibility, prepare necessary documents, and assist with the application process to secure your visa. ",
      ],
    },

  ];

  return (
    <section className=" py-10 px-6 bg-white">
      <div className="max-w-8xl mx-auto bg-white rounded-[40px] px-10 py-16">
        <p className="text-[#8FD07C] text-sm font-semibold tracking-widest mb-3">
           FAQS
          </p>
        {/* Heading */}
        <h2 className="text-lg md:text-5xl font-medium text-[#163c3d] mb-14">Frequently {" "}
         <span className="text-[#7cc576] font-semibold">Asked Questions</span>{" "}
          That Support Your<br/>Migration Goals Journey
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
                      <ul className="space-y-3  text-[#163c3d]">
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
                    <div className="bg-white border border-[#1f5257] border-t-0 rounded-b-2xl px-10 py-8">
                      <ul className="space-y-3  text-[#163c3d]">
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

export default FAQ;

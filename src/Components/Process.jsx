import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    img: "/assets/r1.png",
    title: "Inquiry",
    text: "Raise query by contact us through WhatsApp / website",
  },
  {
    img: "/assets/r2.png",
    title: "Registration",
    text: "Book a consultation with an RMA and sign the service agreement.",
  },
  {
    img: "/assets/r3.png",
    title: "Documentation",
    text: "Gather and prepare all required documents.",
  },
  {
    img: "/assets/r4.png",
    title: "Lodgement",
    text: "Lodge your visa application with precision.",
  },
  {
    img: "/assets/r5.png",
    title: "Support",
    text: "Receive ongoing guidance throughout the process.",
  },
];
export default function ProcessSection() {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      setIsSticky(top <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-[#eff9fb] overflow-hidden mb-10 rounded-[60px] m-3"
    >
      {/* 🌊 Wave Background */}
      <img
        src="/assets/wave.jpg"
        alt="wave background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 h-[600px]">
        <div className="text-center mb-16">
          <p className="text-[#8FD07C] text-sm font-bold tracking-widest mb-6">
            PROCESS OVERVIEW
          </p>

          <h2 className="text-4xl font-normal">Proven Process</h2>

          <p className="text-green-500 text-3xl font-bold mt-2">
            Simplifying{" "}
            <span className="text-black text-4xl font-bold">
              Your Australian Immigration Journey
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-6 flex-wrap transition-all duration-700">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                bg-white w-[220px] rounded-2xl p-6 shadow-lg h-58 
                transition-transform duration-700 ease-in-out
                ${!isSticky && index % 2 === 0 ? "translate-y-6" : ""}
                ${!isSticky && index % 2 !== 0 ? "-translate-y-6" : ""}
              `}
            >
              <img
                src={step.img}
                alt="step number"
                className="w-10 h-auto mb-4"
              />
              <h4 className="font-semibold text-xl text-[#095256] mb-2">
                {step.title}
              </h4>
              <p className="text-medium text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

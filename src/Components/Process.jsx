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
      className="relative py-16 md:py-24 bg-[#eff9fb] overflow-hidden 
                 rounded-3xl md:rounded-[60px] mx-3 md:mx-6 mb-10"
    >
      {/* Background */}
      <img
        src="/assets/wave.jpg"
        alt="wave background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl h-[600px] sm:h-[900px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#8FD07C] text-xs md:text-sm font-bold tracking-widest mb-4 md:mb-6">
            PROCESS OVERVIEW
          </p>

          <h2 className="text-2xl md:text-4xl font-normal">
            Proven Process
          </h2>

          <p className="text-[#8fd07c] text-xl md:text-3xl font-bold mt-3">
            Simplifying{" "}
            <span className="text-black text-2xl md:text-4xl font-bold">
              Your Australian Immigration Journey
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        xl:grid-cols-5 
                        gap-6 md:gap-8 
                        justify-items-center 
                        transition-all duration-700">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                bg-white w-full max-w-[250px] 
                rounded-2xl p-6 shadow-lg 
                transition-transform duration-700 ease-in-out
                ${!isSticky && index % 2 === 0 ? "translate-y-6" : ""}
                ${!isSticky && index % 2 !== 0 ? "-translate-y-6" : ""}
              `}
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-10 h-auto mb-4"
              />
              <h4 className="font-semibold text-lg md:text-xl text-[#095256] mb-2">
                {step.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
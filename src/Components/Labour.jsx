import React from "react";
import { Link } from "react-router-dom";

const Labour = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 mb-14">
      <section
        className="bg-[#28535B] rounded-3xl md:rounded-[40px] 
                   py-12 sm:py-16 md:py-20 
                   px-6 sm:px-10 md:px-16 
                   text-white"
      >
        <div
          className="max-w-7xl mx-auto grid 
                     grid-cols-1 md:grid-cols-2 
                     gap-10 md:gap-14 
                     items-center"
        >
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            
            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl 
                         font-normal leading-snug md:leading-tight 
                         mb-5 md:mb-6"
            >
              Boost Your Workforce <br className="hidden md:block" />
              With{" "}
              <span className="text-[#8FD07C] text-2xl sm:text-3xl md:text-4xl font-semibold">
                Labour Agreements
              </span>
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-base 
                         leading-relaxed 
                         mb-8 md:mb-10 
                         max-w-2xl 
                         mx-auto md:mx-0 text-justify"
            >
              Labour agreements are a powerful solution for businesses facing a
              shortage of local talent in key roles such as waiters, truck
              drivers, and care workers. These agreements allow employers to
              sponsor overseas workers for lower-skilled positions through
              special visa pathways, ensuring essential roles are filled without
              delays. Our experienced Immigration Consultants specialise in
              securing labour agreements, guiding employers through every step,
              from negotiation to final approval, while ensuring full
              compliance. Whether you need industry-specific solutions or
              assistance with sponsorship requirements, we offer reliable,
              tailored support to help your business meet its workforce needs
              and achieve long-term growth.
            </p>

            {/* Button */}
            <Link to="/book-consultation">
              <button
                className="bg-[#6dc7d1] 
                           hover:bg-black 
                           transition 
                           rounded-full 
                           px-6 sm:px-7 
                           py-3 sm:py-4 
                           text-sm sm:text-base 
                           font-medium"
              >
                Book Consultation →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/labour.png"
              alt="Labour Agreement"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                         h-auto 
                         rounded-2xl 
                         shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labour;
import React from "react";
import { Link } from "react-router-dom";

const Labour = () => {
  return (
    <div className="px-4 md:px-8 mb-14">
      {/* OUTER WRAPPER (controls side spacing) */}
      <section className="bg-[#28535B] rounded-[40px] py-20 px-6 md:px-16 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
              Boost Your Workforce <br />
              With <span className="text-[#8FD07C]">Labour Agreements</span>
            </h2>

            {/* Description */}
            <p className="text-white font-medium leading-relaxed mb-10 max-w-xl text-justify">
              Labour agreements are a powerful solution for businesses facing a
              shortage of local talent in key roles such as waiters, truck
              drivers, and care workers. These agreements allow employers to
              sponsor overseas workers for lower-skilled positions through
              special visa pathways, ensuring essential roles are filled without
              delays. Our experienced Immigration Consultants specialise in
              securing labour agreements, guiding employers through every step,
              from negotiation to final approval, while ensuring full
              compliance.
            </p>

            {/* Button */}
            <Link to="/book-consultation">
              <button className="bg-[#6dc7d1] text-white px-8 py-3 rounded-full font-semibold hover:bg-black transition duration-300">
                Book Consultation →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end md:pr-6">
            <img
              src="/assets/labour.png"
              alt="Labour Agreement"
              className="w-[400px] max-w-md lg:max-w-lg h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Labour;

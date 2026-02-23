import React from "react";
import { Link } from "react-router-dom";

export default function FinalResult({ prevStep, reset }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-full max-w-5xl mx-auto">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-green-600 mb-5">
        Congratulations!
      </h2>

      {/* Sub Text */}
      <p className="text-xl md:text-2xl text-gray-700 mb-10">
        <span className="text-blue-600 font-medium"><Link to="/contact-us">Contact Us</Link></span> To Know More.
      </p>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-12">

        {/* Previous */}
        <button
          onClick={prevStep}
          className="px-8 py-3 rounded-full bg-[#6dc7d1] text-white font-medium hover:opacity-90 transition"
        >
          ← Previous
        </button>

        {/* Start Over */}
        <button
          onClick={reset}
          className="px-8 py-3 rounded-full bg-[#2f3f50] text-white font-medium hover:opacity-90 transition"
        >
          ↻ Startover
        </button>

      </div>
    </div>
  );
}
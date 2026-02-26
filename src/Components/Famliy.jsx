import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Famliy = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT IMAGE COLLAGE ================= */}
        <div className="grid grid-cols-2 gap-5 max-w-xl">
          {/* Big Family Image */}
          <div className="row-span-2">
            <img
              src="/assets/famliy-img.png"
              alt="Family Immigration"
              className="w-full h-110 object-cover rounded-2xl"
            />
          </div>

          {/* City Image */}
          <div>
            <img
              src="/assets/img3.png"
              alt="Australia City"
              className="w-full h-48 object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Consultant Image */}
          <div>
            <img
              src="/assets/krunal-img.jpg"
              alt="Consultant"
              className="w-full h-110 object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* MARA Card */}
          <div className="mt-[-220px]">
            <img
              src="/assets/mara-card.png"
              alt="MARA Registration"
              className="w-full h-full object-cover rounded-2xl shadow-sm "
            />
          </div>
        </div>
        <div className="mt-[-60px]  ">
          {/* Small Heading */}
          <p className="text-[#8FD07C] text-sm font-semibold tracking-widest mb-3">
            WHY CHOOSE US
          </p>

          {/* Main Heading */}
          <h2 className="text-xl md:text-5xl font-normal text-gray-900 leading-tight mb-6">
            <span className="text-[#8FD07C] font-semibold">
              Trusted Partner
            </span>{" "}
            for Your
            <br className="hidden md:block" /> Immigration Journey
          </h2>

          {/* Description */}
          <p className="text-gray-600 font-medium leading-relaxed mb-6 max-w-lg text-justify">
            At Growmore Immigration, we pride ourselves on values that set us
            apart. With a commitment to honesty and reliability, we ensure your{" "}
            <strong>Australian Immigration Journey</strong> is guided by
            integrity and trust.{" "}
            <span className="underline font-semibold text-gray-600">
              Here’s why we are your ideal partner:
            </span>
          </p>
          {/* ================= FEATURE CARDS ================= */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Proven Integrity */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div>
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src="/assets/card-img6.svg"
                    alt="Proven Integrity Icon"
                    className="w-12 h-12"
                  />

                  <h3 className="text-xl font-bold text-gray-800 leading-snug">
                    Proven Integrity
                  </h3>
                </div>
              </div>

              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Ethical and honest guidance</li>
                <li>✓ Transparent Process</li>
                <li>✓ Solving Live Query</li>
                <li>✓ Confidentiality Guaranteed</li>
              </ul>
            </div>

            {/* Trusted Expertise */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 max-w-md">
  <div className="flex items-start gap-4 mb-4">
    <img
      src="/assets/card-img7.svg"
      alt="Trusted Expertise Icon"
      className="w-12 h-12"
    />
    <h3 className="text-xl text-justify font-bold text-gray-800 leading-snug">
      Trusted Expertise
    </h3>
  </div>

  <ul className="space-y-2 text-gray-600 text-sm">
    <li>✓ 16M+ views on Social Media</li>
    <li>✓ 400+ Daily Live Q&A</li>
    <li>✓ Trusted by 126+ employers</li>
    <li>✓ Clear Communication</li>
  </ul>
</div>
          </div>
          <div className="flex items-center gap-5 mt-9">
            <Link to="/book-consultation">
              <button className="bg-[#6dc7d1] text-white  rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                Book Consultation →
              </button>
            </Link>
            <div className="bg-[#6dc7d1] hover:bg-black p-3 rounded-full  cursor-pointer">
              <FaPhoneAlt className="h-8 w-8 text-white" />
            </div>
            <div>
              Need Help?
              <br />
              <span className="text-black font-bold text-lg">(+61) 38764 3334</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famliy;

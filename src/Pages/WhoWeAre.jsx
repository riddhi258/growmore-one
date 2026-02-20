import React from "react";
import { Check } from "lucide-react";
import WhyChooseUs from "../Components/WhyChooseUs";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white">
      {/* ================= HEADER BANNER ================= */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Who We Are
          </h1>
          <p className="text-gray-200 font-medium">Home &gt; Who We Are</p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE WITH BORDER FRAME */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Teal Border Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full  rounded-3xl"></div>

            {/* Image */}
            <img
              src="/assets/g1.png"
              alt="Team Discussion"
              className="relative rounded-3xl w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[#8FD07C] font-semibold tracking-widest text-sm mb-4">
              OUR VISION
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-10">
              Building Bridges to{" "}
              <span className="text-[#8FD07C]">New Beginnings</span>
            </h2>

            {/* POINT 1 */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-[#6dc7d1] text-white p-2 rounded-full">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Empowering Futures
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  To be a trusted partner in helping individuals and families
                  achieve their Australian migration dreams through innovative
                  and reliable visa solutions.
                </p>
              </div>
            </div>

            {/* POINT 2 */}
            <div className="flex items-start gap-4 mb-10">
              <div className="bg-[#6dc7d1] text-white p-2 rounded-full">
                <Check size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Global Leadership
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  To establish Growmore Immigration as a leader in ethical,
                  client-focused migration consulting, delivering exceptional
                  results worldwide.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="bg-[#6dc7d1] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition">
              Book Consultation →
            </button>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      {/* ================= MAIN SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE WITH BORDER FRAME */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            {/* Teal Border Frame */}
            <div className="absolute -bottom-6 -left-6 w-full h-full  rounded-3xl"></div>

            {/* Image */}
            <img
              src="/assets/g2.png"
              alt="Team Discussion"
              className="relative rounded-3xl w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[#8FD07C] font-semibold tracking-widest text-sm mb-4">
            LEADERSHIP
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-10">
              Leading with <span className="text-[#8FD07C]">Experts</span><br />
              and <span className="text-[#8FD07C]">Expertise</span>
            </h2>

            {/* POINT 1 */}
            <div className="flex items-start gap-4 mb-8">
              <p className="text-gray-600 leading-relaxed text-justify">
                At the helm of Growmore Immigration is Krunal Nayak, our
                visionary Founder and CEO. With extensive experience and a
                personal journey in migration, he leads our team with empathy,
                professionalism, and a deep understanding of immigration
                complexities.
              </p>
            </div>

            {/* POINT 2 */}
            <div className="flex items-start gap-4 mb-10">
              <p className="text-gray-600 leading-relaxed text-justify">
                Our leadership team is committed to staying updated on
                immigration laws and regulations, ensuring that every client
                receives the most accurate advice and tailored solutions. Under
                Krunal’s guidance, we’ve built a culture of trust, innovation,
                and excellence that defines Growmore Immigration.
              </p>
            </div>

            {/* BUTTON */}
            <button className="bg-[#6dc7d1] text-white px-8 py-3 rounded-full font-medium hover:bg-black transition">
              Book Consultation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

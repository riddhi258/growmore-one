import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      {/* Rounded Background Container */}
      <div className="max-w-8xl mx-auto bg-[#EFF9FB] rounded-[40px] md:rounded-[60px] px-6 md:px-16 py-16 md:py-20 relative overflow-hidden">
        {/* ===== Top Content ===== */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-14">
          {/* LEFT */}
          <div>
            <p className="text-[#7CC576] text-sm font-semibold tracking-widest mb-3">
              WHY CHOOSE US
            </p>

            <h2 className="text-xl md:text-4xl font-semibold text-[#1D2B2E] leading-tight">
              Making Immigration <br />
              <span className="text-[#7CC576]">Seamless</span>{" "}and{" "}
              <span className="text-[#7CC576]">Stress-Free</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify the immigration journey for our clients
              by providing expert guidance, transparent processes, and
              personalized solutions. Through our unwavering commitment to
              ethical practices and customer satisfaction, we strive to turn
              migration dreams into reality.
            </p>
          </div>
        </div>

        {/* ===== Cards ===== */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <img
              src="/assets/t1.png"
              alt=""
              className="w-24 h-24  rounded-xl flex flex-col items-center justify-center text-white shrink-0"
            />

            <div>
              <h3 className="text-lg font-semibold text-[#1D2B2E]">
                Simplified Process
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Seamless solutions for your visa needs.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <img
              src="/assets/t2.png"
              alt=""
              className="w-24 h-24 bg-[#333333] rounded-xl flex flex-col items-center justify-center text-white shrink-0"
            />

            <div>
              <h3 className="text-lg font-semibold text-[#1D2B2E]">
                Expert Guidance
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Trusted advice from migration professionals.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition">
            <img
              src="/assets/t3.png"
              alt=""
              className="w-24 h-24 bg-[#333333] rounded-xl flex flex-col items-center justify-center text-white shrink-0"
            />

            <div>
              <h3 className="text-lg font-semibold text-[#1D2B2E]">
                Client Focused
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Tailored services for every individual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

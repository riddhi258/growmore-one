import React from "react";
import { Link } from "react-router-dom";

const New5 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            TRA Pauses Assessments for System Updates
          </h2>
        </div>
      </section>

      {/* Main Content Section - Constrained width for centering */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <img
            src="/assets/n1.jpg"
            alt="Tasmania Background"
            className="w-full h-auto rounded-xl my-6 shadow-sm"
          />{" "}
          <div className="space-y-10 text-[#727272]">
            {/* Header Section */}
            <div>
              <h2 className="text-[24px] font-bold text-[#333333] mb-6">
                TRA Pauses Assessments for System Updates
              </h2>
              <div className="space-y-4 text-justify  text-[16px] text-[#042325] leading-relaxed">
                <p>
                  Trades Recognition Australia (TRA) has temporarily paused all
                  registrations for the Offshore Skills Assessment Program
                  (OSAP) and the Temporary Skill Shortage (TSS) visa program.
                  The pause began on 14 March 2026, and registrations will
                  resume on 30 March 2026.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Why the Pause?
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                TRA is taking a short break to update its systems, including
                refreshing the panel of Registered Training Organisations (RTOs)
                that manage skills assessments. These updates are planned to
                make the assessment process smoother, faster, and more reliable
                for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                What This Means for You
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  New registrations are currently on hold. So, applicants cannot
                  submit new OSAP or TSS applications until the system reopens.
                </li>
                <li>
                  Payments for applications already in progress are still
                  accepted until 29 March 2026, allowing ongoing applications to
                  move forward.
                </li>{" "}
                <li>
                  The RTO Finder tool is temporarily removed to update the
                  details of the new RTO providers.
                </li>
              </ul>
            </div>

            {/* Subclass 190 & Green Pass Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                How to Stay Ahead
              </h3>
              <p className="text-[17px] font-semibold text-[#333333] mb-4">
                If you are planning to apply for OSAP or TSS:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>Ensure all your documents are ready</li>
                <li>Check your application for accuracy</li>
                <li>Make any pending payments before 29 March 2026</li>
              </ul>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                This temporary pause is a short-term delay, and applicants can
                expect a smoother process once the updates are complete.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Plan Ahead with Growmore Immigration
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                So, if you are planning to apply for OSAP or TSS, note that TRA
                currently has registrations on hold. If you wish to make a
                payment for an existing application, ensure it is completed
                before 29 March 2026, and for any further guidance on Australian
                immigration, you can contact us.
              </p>
              <div className="w-full bg-[#2ED09B]  rounded-lg p-5 shadow-sm my-8">
                <div className="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-4  pl-3 text-black font-semibold text-center text-[15px] sm:text-[17px]">
                  <div className="flex items-center">
                    <span>Email: </span>
                    <a
                      href="mailto:info@growmore.one"
                      className="ml-1 text-blue-500 transition-colors"
                    >
                      info@growmore.one
                    </a>
                  </div>

                  <span className="hidden md:inline text-black">|</span>

                  <div className="flex items-center">
                    <span>WhatsApp: </span>
                    <a
                      href="https://wa.me/61434202021"
                      className="ml-1 text-blue-500 "
                    >
                      +61 434 202 021
                    </a>
                  </div>

                  <span className="hidden md:inline text-black">|</span>

                  <div className="flex items-center">
                    <span>Phone: </span>
                    <a href="tel:+61387643334" className="ml-1 text-black ">
                      +61 3 8764 3334
                    </a>
                  </div>
                </div>
              </div>
              <p className="mb-8 text-[16px] text-[#042325]">
                Source:
                <span className="text-blue-500">
                  Temporary Pause for OSAP and TSS Registrations
                </span>
              </p>

              <Link to="/book-consultation">
                <button className="bg-[#5dc2d3] text-white rounded-full hover:bg-black transition px-12 py-4 text-sm font-bold shadow-lg">
                  Book Consultation →
                </button>
              </Link>
            </div>
            <CommentSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default New5;

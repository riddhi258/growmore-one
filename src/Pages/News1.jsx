import React from "react";
import { Link } from "react-router-dom";

const News1 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Tasmania State Nomination Enters Final Quarter
          </h1>
        </div>
      </section>

      {/* Main Content Section - Constrained width for centering */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <img
  src="/assets/bg1.jpg"
  alt="Tasmania Background"
  className="w-full h-auto rounded-xl my-6 shadow-sm"
/>{" "}
          <div className="space-y-10 text-[#727272]">
            {/* Header Section */}
            <div>
              <h2 className="text-[24px] font-bold text-[#333333] mb-6">
                Tasmania State Nomination Program Enters Its Final Quarter,
                Fewer Invitations Ahead
              </h2>
              <div className="space-y-4 text-justify  text-[16px] text-[#042325] leading-relaxed">
                <p>
                  Planning to receive an invitation from the state of Tasmania
                  this year? Then you should know that the state’s 2025–26
                  migration program is now entering its final quarter.
                </p>
                <p>
                  Not only that, but the state has also confirmed that because
                  of the strong demand from skilled migrants, most of Tasmania’s
                  nomination places have already been filled. This means fewer
                  invitations are likely to be released in the coming weeks.
                </p>
              </div>
            </div>

            {/* Allocation Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Tasmania Nearing Its Nomination Allocation
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                For the 2025–26 program year, Tasmania received a total
                allocation of 1,850 nomination places, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  <strong>1,200 places</strong> for the Skilled Nominated Visa
                  (Subclass 190)
                </li>
                <li>
                  <strong>650 places</strong> for the Skilled Work Regional
                  (Provisional) Visa (Subclass 491)
                </li>
              </ul>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed">
                As out of these numbers, the state has already issued most of
                this allocation, the focus is now shifting toward processing the
                applications that are currently in the system, rather than
                issuing a large number of new invitations. However, Tasmania
                confirmed that it will continue accepting Registrations of
                Interest (ROIs).
              </p>
            </div>

            {/* Subclass 190 & Green Pass Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Subclass 190 Invitations Now Restricted
              </h3>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed mb-4">
                For applicants targeting the Skilled Nominated Visa (Subclass
                190), Tasmania has introduced a temporary restriction.{" "}
                <strong>
                  At present, invitations are paused for ROIs that do not have a
                  Gold Pass.
                </strong>
              </p>
              <p className="italic mb-6 text-[16px] text-[#042325]">
                (It is one of the priority pass levels in Tasmania’s
                Registration of Interest system, which includes Gold, Green, and
                Orange categories.)
              </p>

              <h4 className="text-[24px] font-semibold text-[#333333] mb-3">
                What About Green Pass Applicants?
              </h4>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed">
                Applicants with a <strong>Green Pass</strong> can still receive
                an invitation to apply within six months of submitting their
                ROI. However, even if their nomination application is approved,
                Tasmania may not be able to issue the nomination this program
                year if all places are already filled. The nomination may
                instead be issued in the next program year based on the state’s
                future allocation.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                What About Green Pass Applicants?
              </h3>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed">
                Applicants with a <b>Green Pass</b> can still receive an
                invitation to apply within six months of submitting their ROI.
                However, even if their{" "}
                <Link
                  to={"/our-services/employers/nomination-application/"}
                  className="text-blue-500"
                >
                  nomination application
                </Link>{" "}
                is approved, Tasmania may not be able to issue the nomination
                this program year if all places are already filled. The
                nomination may instead be issued in the next program year based
                on the state’s future allocation
              </p>
            </div>

            {/* Subclass 491 Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Subclass 491 Invitations Will Continue
              </h3>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed">
                Compared to the subclass 190 stream, the subclass 491 stream
                will continue to invite skilled workers across all pass
                categories, including Gold, Green, and Orange. But the state has
                also confirmed that the number of invitations issued will be
                reduced compared to earlier rounds. This trend can already be
                seen in the recent Tasmania invitation round result released on
                12 March.
              </p>
              <p className="mt-4 text-justify text-[16px] text-[#042325] leading-relaxed">
                This means applicants targeting the regional pathway may still
                receive opportunities, but competition will remain high as the
                program year approaches its end.
              </p>
            </div>

            {/* Impact Section */}
            <div>
              <h3 className="text-[24px] font-semibold mb-4 text-[#333333]">
                What This Means for Skilled Migrants
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                This update clearly shows that Tasmania’s{" "}
                <span className="text-blue-500">
                  skilled migration program{" "}
                </span>
                is entering its final stage for the 2025–26 program year. As
                nomination places begin to fill, applicants planning to apply
                for an <span className="text-blue-500">Australia PR</span> Visa
                through state nomination can expect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-left text-[16px] text-[#042325]">
                <li>Fewer invitation rounds</li>
                <li>Stricter selection of candidates</li>
                <li>Longer waiting periods for ROI invitations</li>
              </ul>
              <p className="mt-4 text-justify text-[16px] text-[#042325]">
                Here, applicants with stronger profiles, particularly those with
                employment and higher priority pass categories, will have a
                greater chance of receiving invitations before the allocation is
                fully filled.
              </p>
            </div>

            {/* Final CTA Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Expert Guidance Matters More in the Final Phase
              </h3>
              <p className="mb-8 text-[16px] text-[#042325]">
                As invitation rounds become more competitive, understanding
                state nomination strategies and ROI ranking systems becomes more
                important. At this stage, even small differences in profile
                strength, employment status, or eligibility criteria can affect
                the chances of receiving an invitation.
              </p>
              <p className="mb-8 text-[16px] text-[#042325]">
                Take the professional guidance from{" "}
                <strong>Growmore Immigration</strong>, a trusted permanent
                residency consultant in Australia, to plan the right strategy
                for your skilled migration pathway.
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
                    <a
                      href="tel:+61387643334"
                      className="ml-1 text-black "
                    >
                      +61 3 8764 3334
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/book-consultation">
                <button className="bg-[#5dc2d3] text-white rounded-full hover:bg-black transition px-12 py-4 text-sm font-bold shadow-lg">
                  Book Consultation →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News1;

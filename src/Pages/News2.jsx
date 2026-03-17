import React from "react";
import { Link } from "react-router-dom";
const News2 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Tasmania 12 March Invitation Round: Fewer Candidates Invited
          </h1>
        </div>
      </section>

      {/* Main Content Section - Constrained width for centering */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <img
            src="/assets/bg2.png"
            alt="Tasmania Background"
            className="w-full h-auto rounded-xl my-6 shadow-sm"
          />{" "}
          <div className="space-y-10 text-[#727272]">
            {/* Header Section */}
            <div>
              <h2 className="text-[24px] font-bold text-[#333333] mb-6">
                Tasmania 12 March Invitation Round: Fewer Candidates Invited
              </h2>
              <div className="space-y-4 text-justify  text-[16px] text-[#042325] leading-relaxed">
                <p>
                  Tasmania has conducted its latest state nomination invitation
                  round this week as part of its weekly migration cycle.
                  However, this round has drawn attention for two key reasons: a
                  noticeably smaller number of invitations compared to several
                  earlier rounds, and Subclass 190 invitations being issued only
                  to Gold Pass candidates.
                </p>
                <p>
                  This indicates that Tasmania is currently taking a more
                  selective approach while managing its remaining nomination
                  places and existing applications in the system.
                </p>
              </div>
            </div>

            {/* Allocation Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Invitations Issued in the Latest Round
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                According to the latest Tasmania invitation round results on 12
                March 2026, the state issued a total of 33 Registrations of
                Interest (ROIs) to apply for state nomination in this round
                across the <span className="text-blue-500">Subclass 190</span>{" "}
                and <span className="text-blue-500">Subclass 491</span> visa
                categories.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  <strong>Subclass 190 (Skilled Nominated Visa):</strong> 14
                  ROIs invited
                </li>
                <li>
                  <strong>Subclass 491 (Skilled Work Regional Visa):</strong>19
                  ROIs invited
                </li>
              </ul>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                The latest round also revealed the lowest selection levels for
                candidates invited to apply for nomination.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  <strong>Subclass 190 (Skilled Nominated Visa):</strong>{" "}
                  Invitations issued only to Gold Pass candidates
                </li>
                <li>
                  <strong>Subclass 491 (Skilled Work Regional Visa):</strong>
                  Minimum 40 points (Orange Pass)
                </li>
              </ul>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                In this round, Subclass 190 invitations were granted only to
                Gold Pass applicants, which suggests that Tasmania is
                prioritising the highest-priority candidates in its nomination
                program.
              </p>
            </div>

            {/* Subclass 190 & Green Pass Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Current Pipeline of Applications
              </h3>
              <p className="text-justify text-[16px] text-[#042325] leading-relaxed mb-4">
                The latest data shows that Tasmania’s migration program
                continues to handle a significant number of applications and
                Expressions of Interest in its pipeline.
              </p>
              <table className="w-full border border-gray-400 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                      Category
                    </th>
                    <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                      Subclass 190
                    </th>
                    <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                      Subclass 491
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-400 px-6 py-3">
                      ROIs on hand (submitted in system)
                    </td>
                    <td className="border border-gray-400 px-6 py-3">471 </td>
                    <td className="border border-gray-400 px-6 py-3">196 </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-6 py-3">
                      Nomination applications lodged but not yet decided
                    </td>
                    <td className="border border-gray-400 px-6 py-3">394 </td>
                    <td className="border border-gray-400 px-6 py-3">214 </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-6 py-3">
                      Invitations issued but application not yet lodged
                    </td>
                    <td className="border border-gray-400 px-6 py-3">68 </td>
                    <td className="border border-gray-400 px-6 py-3">59 </td>
                  </tr>
                </tbody>
              </table>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>
                  A large number of ROIs are still waiting in the system,
                  particularly for Subclass 190.
                </li>
                <li>
                  Hundreds of nomination applications are currently under
                  assessment, which affects how quickly new invitations can be
                  issued.
                </li>
                <li>
                  The existing pipeline means Tasmania must balance new
                  invitations with ongoing application processing.
                </li>
              </ul>
            </div>
            <div>
                <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
Nomination Places Still Available 
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                Tasmania has also shared the number of remaining nomination
                places available for the current migration program year.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  <strong>Subclass 190 (Skilled Nominated Visa):</strong> 558
                  nomination places available
                </li>
                <li>
                  <strong>Subclass 491 (Skilled Work Regional Visa):</strong>
                  424 nomination places available
                </li>
              </ul>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                While there are still nomination slots available, the state will
                now grant invitations carefully and will also manage the current
                application strain.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                However, the oldest nomination application waiting to be
                allocated to a case officer was lodged on 12 December 2025.
              </p>
            </div>
            {/* Final CTA Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                What This Means for Skilled Migration Applicants
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  Tasmania continues to conduct regular weekly invitation
                  rounds, but this round clearly shows that competition remains
                  strong, particularly for the Subclass 190 visa.
                </li>
                <li>
                  Currently, subclass 190 invitations are limited to
                  top-priority candidates.
                </li>
                <li>
                  The large number of pending applications and ROIs may
                  influence invitation numbers in future rounds.
                </li>
              </ul>
              <p className="mb-8 text-[16px] text-[#042325]">
                For skilled migrants planning to apply for{" "}
                <span className="text-blue-500">Australia PR</span> through
                Tasmania, having a strong and well-prepared ROI is essential.
                So, if you want to make your profile competitive for the
                upcoming round, get expert guidance from Growmore immigration
                now.
              </p>
              <p className="mb-8 text-[16px] text-[#042325]">
                Our team closely tracks weekly state nomination invitation
                rounds, selection trends, and migration program updates to
                provide you with personalised guidance.
              </p>
                <div>
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
              <p className="mb-8 text-[16px] text-[#042325]">
                Source:
                <span className="text-blue-500">
                  Processing Times and Invitations Issued
                </span>
              </p>
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

export default News2;

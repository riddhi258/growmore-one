import React from "react";
import { Link } from "react-router-dom";

const News7 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Australia Proposes Visa Limits Due to Middle East Conflict
          </h2>
        </div>
      </section>

      {/* Main Content Section - Constrained width for centering */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <img
            src="/assets/n3.jpg"
            alt="Tasmania Background"
            className="w-full h-auto rounded-xl my-6 shadow-sm"
          />{" "}
          <div className="space-y-10 text-[#727272]">
            {/* Header Section */}
            <div>
              <h2 className="text-[24px] font-bold text-[#333333] mb-6">
                Australia Proposes Temporary Visa Restrictions Due to Middle
                East Conflict
              </h2>
              <div className="space-y-4 text-justify  text-[16px] text-[#042325] leading-relaxed">
                <p>
                  The ongoing conflict in the Middle East has raised concerns
                  related to safety, migration, and travel all around the world.
                  In response to that, the Australian government has also taken
                  temporary actions that may affect people who are planning to
                  apply for any temporary visa for Australia.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Why the Australian Government Is Introducing These Changes
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                According to the government, sudden international conflicts can
                quickly change migration patterns. When large-scale conflicts
                happen, some visitors who enter on temporary visas may apply for
                asylum or may not leave Australia when their visas expire.
              </p>
              <p className=" text-justify text-[16px] text-[#042325]">
                To prevent such situations, the government wants the flexibility
                to respond quickly when global events create uncertainty.
              </p>
             
            </div>
            <div>
               <p className="mb-3 text-justify text-[16px] text-[#042325] font-bold">
                As per the government, the key reasons behind the proposal
                include:{" "}
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-2 text-left text-[16px] text-[#042325]">
                <li>
                  Protecting the integrity of Australia’s immigration system
                </li>
                <li>
                  Managing potential visa overstays during international crises
                </li>{" "}
                <li>
                  Allowing the government to react quickly to global conflicts
                </li>
                <li>
                  Ensuring temporary visa holders are able to fulfil the purpose
                  of their visit
                </li>
              </ul>
            </div>

            {/* Subclass 190 & Green Pass Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                What the Proposed Law Would Allow
              </h3>
              <p className="text-[17px]  text-[#333333] mb-4">
                The legislation gives the government the authority to
                temporarily stop certain groups of travellers from certain
                countries from entering Australia. This would work through
                something called an “Arrival Control Determination.”
              </p>
              <p className="text-[16px] font-bold text-[#333333] mb-4">
                Under this mechanism:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>
                  The Home Affairs Minister can introduce temporary entry
                  restrictions
                </li>
                <li>
                  The decision must also be supported by the Prime Minister and
                  the Foreign Affairs Minister
                </li>
                <li>
                  The restriction can apply to specific visa types and specific
                  countries
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Duration of the Restrictions
              </h3>
              <p className="text-[16px] font-bold text-[#333333] mb-4">
                These limitations would not be permanent because the proposed
                rules would allow:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>
                  A temporary restriction of up to 6 months, and if necessary,
                  this will be extended for another 6 months.
                </li>
                <li>
                  This gives the government time to monitor global developments
                  and adjust immigration rules if required.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Which Visas Could Be Affected
              </h3>
              <p className="text-[16px] font-bold text-[#333333] mb-4">
                The proposed rules are specifically for temporary visas, which
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>Tourist visits</li>
                <li>Business travel</li>
                <li>Study in Australia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Important Exemptions
              </h3>
              <p className="text-[18px] text-[#333333] mb-4">
                Even if the restrictions are applied, several groups would not
                be affected. People who would still be allowed to travel to
                Australia include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325] mt-4">
                <li>
                  Individuals with immediate family members who are Australian
                  citizens
                </li>
                <li>Parents who have children living in Australia</li>
                <li>
                  People holding refugee, humanitarian, or temporary protection
                  visas
                </li>
              </ul>
              <p className="text-[18px]  text-[#333333] mb-4">
                In addition, the new rules will not affect anyone who is already
                in Australia when the determination is made.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Political Reactions to the Proposal
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                The proposed law has received different reactions from political
                leaders.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                The opposition party has generally supported the idea, saying it
                gives the government more power to protect Australia’s migration
                system during uncertain global situations.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                However, some advocacy groups have also criticised the plan.
                They believe that limiting travel during a humanitarian crisis
                could make it harder for people who are looking for safety.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                What This Means for People Planning to Travel to Australia
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                The proposed law has received different reactions from political
                leaders.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                At the moment, these changes are not immediate visa bans, but
                rather a legal framework that allows the government to introduce
                temporary restrictions during this time.{" "}
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                For people planning to{" "}
                <span className="text-blue-500">
                  apply for an Australian visa
                </span>
                , it simply means that global developments may influence
                immigration policies more quickly than before. This is why
                staying updated with immigration changes and seeking
                professional advice has become more important.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Get Expert Guidance from Growmore Immigration Now!
              </h3>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                Immigration rules can change quickly and especially during the
                time of this type of global crises. So, whether you are planning
                to come to Australia on a temporary visa or want an Australia
                PR, staying updated with immigration policy changes is
                essential.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                At Growmore Immigration, our team always stays informed with the
                latest changes to provide you with the right guidance for your
                migration plans.
              </p>
              <p className="mb-4 text-justify text-[16px] text-[#042325]">
                So, if you want to move forward with confidence in your
                Australian migration journey and get advice from the{" "}
                <span className="text-blue-500">best migration agent</span> in
                Australia, contact us now!
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
                  New laws to temporarily ban people coming to Australia from designated countries
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

export default News7;

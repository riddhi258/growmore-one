import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisaEmployer = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
              Employer Sponsored Visas
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Employers</span> &gt;{" "}
              <span className=" cursor-pointer">
                Employer Sponsored Visa Australia Requirements
              </span>
            </p>
          </div>
        </section>

        {/* Main Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
              <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-100 lg:h-220 md:w-[400px] lg:w-[500px] mx-auto md:mx-0">
              <div className="space-y-5">
                <Link to="/our-services/employers/standard-business-sponsorship/">
                  <div className="group flex  items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Employer Sponsored Visa Australia Requirements
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
                  </div>
                </Link>

                <Link to="/our-services/individual/general-skilled-visa/">
                  <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      General Skilled Migration Visa (GSM Visa) & Skilled Worker
                      Visa Australia
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>

                <Link to="/our-services/employers/nomination-application/">
                  <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      How to Apply Student Guardian Visa in Australia
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>

                <Link to="/our-services/individual/family-visa/">
                  {" "}
                  <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      What is a Family Visa?
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>

                <Link to="/our-services/individual/temporary-work-short-stay-visa/">
                  <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Temporary Work Visa (Subclass 400) and Short Stay Visa
                      Specialist
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>

                <Link to="/our-services/individual/global-talent-visa/">
                  <div className="group flex  mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Apply For the Global Talent Visa
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>

                <Link to="/our-services/individual/visitor-evisitor-eta-visa/">
                  <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      What is the Electronic Travel Authority ETA for e-Visa?
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>
                <Link to="/our-services/individual/business-investor-visa/">
                  <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Business Investment Visa & Innovation Visa
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>
                <Link to="/our-services/individual/refugee-visa/">
                  <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Refugee & Humanitarian Visa Program
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>
                <Link to="/our-services/individual/working-holiday-work-holiday-visa/">
                  <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                    <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                      Working Holiday Visa Australia (Subclasses 462)
                    </span>
                    <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                  </div>
                </Link>
              </div>
            </div>
            {/* Right Column */}
            <div className="md:col-span-2 pl-6 sm:pl-16 lg:pl-26">
              {" "}
              <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
                Employer Sponsored Visa Australia Requirements{" "}
              </h3>
              <div>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  The Australian Employer Sponsored Visas are a range of visa
                  options for skilled workers seeking to work in Australia under
                  sponsorship from an Australian employer.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  The three main visa subclasses in this category are the
                  Subclass 407 Training Visa, the Subclass 482 Skills in Demand
                  Visa (SID) Visa, and the Subclass 186 Employer Nomination
                  Scheme (ENS) visa.
                </p>
                <h2 className="text-2xl sm:text-2xl font-semibold text-black mt-6">
                  Subclass 407 Training Visa:
                </h2>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  This visa is for individuals who are sponsored by their
                  employer to undertake structured training in their field in
                  Australia. This visa is valid for up to two years.
                </p>

                <h2 className="text-2xl sm:text-2xl font-semibold text-black mt-6">
                  Skills in Demand Visa (subclass 482):
                </h2>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  The Skills in Demand Visa (Subclass 482) under the Core Skills
                  Stream is designed to address labor shortages in Australia by
                  allowing employers to sponsor skilled workers in occupations
                  listed on the Medium and Long-term Strategic Skills List
                  (MLTSSL). This temporary visa enables individuals to work in
                  Australia for up to four years, with a pathway to permanent
                  residency for eligible applicants.
                </p>

                <h2 className="text-2xl sm:text-2xl font-semibold text-black mt-6">
                  Skilled Employer Sponsored Regional (provisional) visa
                  (subclass 494):{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  This visa is for individuals who are sponsored by an eligible
                  employer in a designated regional area of Australia. The
                  applicants must have a relevant skills assessment and meet the
                  English language requirements.
                </p>
                <h2 className="text-2xl sm:text-2xl font-semibold text-black mt-6">
                  Using Government Powers:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  In a landmark move, the Albanese Government is considering
                  employing its powers under Section 97 of the Education
                  Services for Overseas Students Act (ESOS Act) to issue
                  suspension certificates to high-risk education providers. This
                  action would prevent these providers from recruiting
                  international students.
                </p>
                <h2 className="text-2xl sm:text-2xl font-semibold text-black mt-6">
                  Subclass 186 Employer Nomination Scheme (ENS) Visa:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  This is a permanent visa option for skilled workers who are
                  sponsored by an Australian employer and nominated for a
                  permanent position in Australia. The applicant must meet
                  certain criteria including age, English language proficiency,
                  and qualifications relevant to the nominated position.
                </p>
               <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                 <b>Note:{" "}</b> eligibility criteria and requirements for each stream are
                  subject to change, and it is always advisable to consult a
                  registered migration agent to understand the latest
                  immigration requirements. You can also check DHA website{" "}
                  <span className="text-blue-500">
                    https://immi.homeaffairs.gov.au/visas{" "}
                  </span>
                  to know about any of the mentioned visas.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Our migration agent at <span className="text-blue-500">Growmore Immigration </span>can help you with
                  the latest information and requirements for the Business
                  Innovation and Investment (Provisional) visa, and guide you
                  through the entire visa application process. Book a
                  consultation with us today to learn more.
                </p>
              </div>
              <Link to="/book-consultation">
                <button className="bg-[#6dc7d1] text-white  mt-6 rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                  Book Consultation →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndividualVisaEmployer;

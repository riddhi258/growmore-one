import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisaGsm = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
              General Skilled Migration (GSM) Visa Australia
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Individual</span> &gt;{" "}
              <span className=" cursor-pointer">
               General Skilled Migration Visa (GSM Visa) & Skilled Worker Visa Australia
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
                <Link to="/our-services/individual/student-guardian-visa/">
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
                General Skilled Migration Visa (GSM Visa) & Skilled Worker Visa
                Australia{" "}
              </h3>
              <div>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Australian General Skilled Migration visa allows skilled
                  individuals to migrate to Australia and contribute to the
                  country’s economy. There are three main streams under this
                  visa category, including:
                </p>

                <ol className="list-decimal pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                      <span className="text-black font-semibold">
                        Skilled Independent visa (subclass 189):
                      </span>
                    </strong>{" "}
                    This is a permanent visa that allows highly skilled
                    individuals to work and live anywhere in Australia. To be
                    eligible for this visa, you need to score a minimum points
                    on the point-based assessment system and also meet the
                    English language requirements.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Skilled Nominated visa (subclass 190):
                      </span>
                    </strong>
                    his is a permanent visa that requires the applicants to be
                    nominated by an Australian state or territory government.
                    The eligibility criteria for this visa are similar to the
                    Skilled Independent visa, with the addition of having a
                    nomination from an Australian state or territory government.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Skilled Work Regional (Provisional) visa (subclass 491):
                      </span>
                    </strong>{" "}
                    This is a provisional visa that allows skilled workers to
                    live and work in a specified regional area of Australia for
                    up to five years. To be eligible for this visa, you need to
                    have a positive skills assessment in an occupation listed on
                    the relevant skilled occupation list and meet the
                    point-based criteria. You also need to be sponsored by an
                    eligible family member or nominated by a state or territory
                    government.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        The Permanent Residence (Skilled Regional) visa
                        (subclass 191):
                      </span>
                    </strong>
                    This is for skilled individuals who want to live and work
                    permanently in regional Australia. This visa is for
                    individuals who have lived and worked in regional Australia
                    on a provisional visa for three years, and have met the
                    requirements of their visa.
                  </li>
                </ol>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Eligibility criteria for this visa include holding a relevant
                  provisional visa, having lived and worked in regional
                  Australia for at least three years, meeting the health and
                  character requirements, and having an occupation listed on the{" "}
                  <span className="text-black font-semibold">Skilled Occupation List</span>.
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
                  Our migration agent at{" "}
                  <span className="text-blue-500">Growmore Immigration </span>
                  can help you with the latest information and requirements for
                  the Business Innovation and Investment (Provisional) visa, and
                  guide you through the entire visa application process. Book a
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

export default IndividualVisaGsm;

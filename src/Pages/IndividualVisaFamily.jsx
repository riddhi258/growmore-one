import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisaFamily = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
Applying For a Family Visa
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Individual</span> &gt;{" "}
              <span className=" cursor-pointer">
              What is a Family Visa?
              </span>
            </p>
          </div>
        </section>

        {/* Main Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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

                <Link to="/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/">
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
                What is a Family Visa?{" "}
              </h3>
              <div>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Australian family-sponsored visas offer individuals the
                  opportunity to reunite with their loved ones in Australia.
                  There are various visa subclasses that cater to different
                  family-related circumstances.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  <b>Let’s take a closer look at each one:</b >
                </p>
                <ol className="list-decimal pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                     <span className="text-black font-semibold">
                        Adoption visa (subclass 102):
                      </span >
                    </strong>{" "}
                    This visa is for children who are being adopted by an
                    Australian citizen, permanent resident or eligible New
                    Zealand citizen. The child must be under 18 years of age and
                    meet the health and character requirements.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        Aged Dependent Relative visa (subclass 114 and 838):
                      </span >
                    </strong>
                    This visa is for individuals who are dependent on an
                    Australian relative for financial support and who are aged
                    66 years or older. The sponsor must be an Australian
                    citizen, permanent resident or eligible New Zealand citiz
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        Aged Parent visa (subclass 804):
                      </span >
                    </strong>{" "}
                    This visa is for parents of an Australian citizen, permanent
                    resident or eligible New Zealand citizen who are aged 65
                    years or older. The visa allows them to live in Australia
                    permanently with their children and access to Australia’s
                    health care system.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Carer visa (subclass 836 and 116):
                      </span >
                    </strong>
                    This visa is for individuals who are willing to come to
                    Australia to provide care for someone who has a medical
                    condition and requires assistance with daily living. Both
                    the caregiver and the person in need of care must meet
                    certain criteria.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Child visa (subclass 101 and 802):
                      </span >
                    </strong>
                    This visa is for children of Australian citizens, permanent
                    residents or eligible New Zealand citizens who are outside
                    of Australia. The visa allows them to live in Australia
                    permanently with their parents.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Contributory Aged Parent (Temporary) visa (subclass 884)
                        and Contributory Aged Parent visa (subclass 864):
                      </span >
                    </strong>
                    This visa is for aged parents of an Australian citizen,
                    permanent resident or eligible New Zealand citizen who are
                    willing to make a significant financial contribution to
                    Australia. The visa allows them to live in Australia
                    temporarily or permanently with their children.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Contributory Parent (Temporary) visa (subclass 173) &
                        Contributory Parent visa (subclass 143):
                      </span >
                    </strong>
                    For parents of Australian citizens or permanent residents
                    who wish to migrate to Australia
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Dependent Child visa (subclass 445):
                      </span >
                    </strong>
                    This visa is for dependent children of temporary visa
                    holders who are in Australia. The children must be under 18
                    years of age and meet the health and character requirements.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        New Zealand Citizen Family Relationship (temporary) visa
                        (subclass 461):
                      </span >
                    </strong>
                    This visa is for New Zealand citizens who have a close
                    family member in Australia and who want to come to Australia
                    temporarily.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Orphan Relative (subclass 117 and 837):
                      </span >
                    </strong>
                    This visa is for individuals who are related to an
                    Australian citizen, permanent resident or eligible New
                    Zealand citizen and who have no parents or only one parent
                    living.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold"> Parent visa (subclass 103):</span >
                    </strong>
                    This visa is for parents of an Australian citizen, permanent
                    resident or eligible New Zealand citizen who are willing to
                    live in Australia permanently with their children.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Partner (Provisional and Migrant) visa (subclass 309
                        100) and Partner visa (subclass 820 801):
                      </span >
                    </strong>
                    This <b>Partner Visa Australia</b > is for individuals who
                    are in a married or de facto relationship with an Australian
                    citizen, permanent resident, or eligible New Zealand
                    citizen. The visa allows the partner to live in Australia
                    with their sponsor.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Prospective Marriage visa (subclass 300):
                      </span >
                    </strong>
                    This visa is for individuals who are engaged to be married
                    to an Australian citizen, permanent resident or eligible New
                    Zealand citizen and who want to come to Australia to get
                    married.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Remaining Relative visa (subclass 115 and 835):
                      </span >
                    </strong>
                    This visa is for individuals who are the only members of
                    their family who are able to migrate to Australia and who
                    have no close relatives living outside Australia.
                  </li>
                  <li>
                    <strong>
                     <span className="text-black font-semibold">
                        {" "}
                        Sponsored Parent (Temporary) visa (subclass 870):
                      </span >
                    </strong>
                    This visa is for parents of an Australian citizen, permanent
                    resident or eligible New Zealand citizen who want to come to
                    Australia temporarily to be with their children.
                  </li>
                </ol>

               <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                 <b>Note:{" "}</b > eligibility criteria and requirements for each stream are
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

export default IndividualVisaFamily;

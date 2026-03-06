import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisaETA = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
              Electronic Travel Authority (ETA) Subclass 601
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Individual</span> &gt;{" "}
              <span className=" cursor-pointer">
                What is the Electronic Travel Authority ETA for e-Visa?
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
                What is the Electronic Travel Authority ETA for e-Visa?{" "}
              </h3>
              <div>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Australian Visitor/Transit/ETA visas are designed for people
                  who want to visit or transit through in Australia. The
                  following are the main visa subclasses under this category:
                </p>

                <ol className="list-decimal pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                      <span className="text-black font-semibold">
                        Electronic Travel Authority (ETA) visa (subclass 601):
                      </span>
                    </strong>{" "}
                    This is an electronic visa for short term stays in Australia
                    for tourism or business purposes. It is open to citizens of
                    certain countries and eligibility criteria include having a
                    valid passport, a return ticket and sufficient funds to
                    support yourself while in Australia.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        eVisitor visa (subclass 651):
                      </span>
                    </strong>{" "}
                    Similar to the ETA, the eVisitor visa is an electronic visa
                    for citizens of European countries for short-term stays in
                    Australia for tourism or business purposes.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Transit visa (subclass 771):
                      </span>
                    </strong>
                    This visa is for people who need to transit through
                    Australia en-route to another country. It is a short-term
                    visa, typically valid for up to 72 hours.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Visitor visa (subclass 600):
                      </span>
                    </strong>
                    This is designed for individuals who wish to visit Australia
                    for tourism, business, or other reasons. This visa category
                    consists of three subclasses, each with its specific
                    eligibility criteria and conditions.
                  </li>
                </ol>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-xl sm:text-xl">
                  These subclasses include:
                </p>
                <ol className="list-disc pl-8 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Tourist Stream:
                      </span>
                    </strong>{" "}
                    This stream is for individuals who are visiting Australia
                    for tourism or recreational purposes. To be eligible, you
                    must have sufficient funds to support yourself while in
                    Australia and provide evidence of your travel itinerary.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Business Visitor Stream:
                      </span>
                    </strong>
                    This stream is for individuals who are visiting Australia
                    for business-related activities such as attending business
                    meetings, negotiations or making business inquiries. To be
                    eligible, you must have an invitation from an Australian
                    business and provide evidence of your business-related
                    activities in Australia.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Sponsored Family Stream:
                      </span>
                    </strong>
                    This stream is for individuals who are being sponsored by an
                    eligible sponsor for a visit to Australia. To be eligible,
                    you must have a valid sponsorship from an eligible sponsor
                    and meet health and character requirements.
                  </li>
                </ol>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  In general, all applicants for a Visitor visa (subclass 600)
                  must have a valid passport, an incentive to return and
                  sufficient funds to support themselves while in Australia.
                  It’s also important to note that this visa does not allow
                  individuals to work in Australia during their stay.{" "}
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base font-normal">
                  <b>Note: </b> eligibility criteria and requirements for each
                  stream are subject to change, and it is always advisable to
                  consult a registered migration agent to understand the latest
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

export default IndividualVisaETA;

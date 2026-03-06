import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisaBusiness = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
              Business Innovation and Investment (Provisional) Visa
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Individual</span> &gt;{" "}
              <span className=" cursor-pointer">
                Business Investment Visa & Innovation Visa
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
            <div className="md:col-span-2 pl-6 sm:pl-16 lg:pl-26 text-justify">
              {" "}
              <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
                Business Investment Visa & Innovation Visa{" "}
              </h3>
              <div>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  Business Innovation and Investment (Provisional) visa, also
                  known as subclass 188, is a type of visa designed for
                  entrepreneurs, investors, and business owners who are
                  interested in starting a new business or investing in
                  Australia. The visa has 5 streams:
                </p>

                <ol className="list-decimal pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                      <span className="text-black font-semibold">
                        Business Innovation Stream:
                      </span>
                    </strong>{" "}
                    This stream is for individuals who have a successful
                    business background and wish to establish, manage and grow a
                    new or existing business in Australia. To be eligible for
                    this stream, you must have at least <b className="text-black">AUD$800,000</b> in
                    funding available for your proposed business and an overall
                    successful business background.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Investor Stream:
                      </span>
                    </strong>
                    This stream is for individuals who are willing to make a
                    designated investment of at least AUD$1.5 million in an
                    Australian state or territory and maintain business and
                    investment activity in Australia. You must also have a net
                    personal and business asset of at least{" "}
                    <b className="text-black">AUD$2.25 million</b> and a successful investment
                    background.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Significant Investor Stream:
                      </span>
                    </strong>
                    his stream is for individuals who are willing to make a
                    designated investment of at least<b className="text-black">AUD$5 million</b> into
                    complying significant investments in Australia and maintain
                    business and investment activity in Australia. You must also
                    have a successful investment background.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Entrepreneur Stream:
                      </span>
                    </strong>
                    This stream is for individuals who have a business idea and
                    access to funding to establish a new business in Australia.
                    To be eligible, you must have funding of at least{" "}
                    <b className="text-black">AUD$200,000</b>and a successful business track record.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Premium Investor Stream:
                      </span>
                    </strong>
                    This stream is for high net worth individuals who are
                    willing to make a designated investment of at least{" "}
                    <b className="text-black">AUD$15 million</b> into complying premium investments in
                    Australia. You must also have a net personal and business
                    asset of at least <b className="text-black">AUD$40 million</b>.
                  </li>
                </ol>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  <b className="text-black">Note: </b> eligibility criteria and requirements for each
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

export default IndividualVisaBusiness;

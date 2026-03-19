import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const EmployerVisaEmployer = () => {
  return (
    <div>
      <div>
        <div>
          <section className="bg-[#28535B] py-12 sm:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Employer Nomination Scheme (Subclass 186)
              </h1>

              <p className="text-white font-medium mt-3 text-sm sm:text-base">
                Home &gt; <span className=" cursor-pointer">Employers</span>{" "}
                &gt;{" "}
                <span className=" cursor-pointer">
                  Employer Nomination Scheme (Subclass 186)
                </span>
              </p>
            </div>
          </section>

          {/* Main Section */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column */}
             <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-100 md:h-180 lg:h-155 md:w-[400px] lg:w-[500px] mx-auto md:mx-0">
                <div className="space-y-5">
                  <Link to="/our-services/employers/standard-business-sponsorship/">
                    <div className="group flex  items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        What is a Standard Business Sponsorship?
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/labour-agreement/">
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Nominating a Position List of Current Labour Agreements
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/nomination-application/">
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Employer Nomination Visa (Subclass 186)
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/regional-certifying-body-approval/">
                    {" "}
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Regional Certifying Body 494 Approval
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/business-case-preparation/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Strategic Business Case Preparation
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/training-plan/">
                    <div className="group flex  mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Training Visa Subclass 407 Eligibility Criteria &
                        Requirements
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Labour Market Testing (LMT) Subclass 482 and Subclass
                        494 Guide
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Right Column */}
 <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">                {" "}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
                  Employer Nomination Scheme (Subclass 186){" "}
                </h3>
                <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Employee Nomination is the second step in the
                  employer-sponsored visa process, after the employer has been
                  approved as a Standard Business Sponsor. Through the
                  nomination application, the employer is effectively sponsoring
                  an overseas worker to work for their business in Australia.
                </p>
                <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                  The nomination application must be made to the Department of
                  Home Affairs and must demonstrate that the nominated worker is
                  suitably qualified and experienced for the position offered,
                  and that the terms and conditions of the job being offered are
                  in line with industry standards.
                </p>
                <div>
                  <h3 className="text-sm sm:text-base text-[#727272] mt-2">
                    Additionally, the nomination application must specify the
                    visa subclass for which the worker is being sponsored, such
                    as an
                    <b>Employer Nomination Visa</b> or other relevant
                    subclasses.
                  </h3>
                  <ul className=" list-disc pl-6 mt-2 text-black text-sm sm:text-base">
                    <li>Skills in Demand Visa (SID)</li>
                    <li>
                      Employer Nomination Scheme <b>(ENS)</b> visa{" "}
                      <b>(subclass 186)</b>
                    </li>
                  </ul>
                  <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                    Once the nomination application is approved, the overseas
                    worker can then make a visa application under the{" "}
                    <b>Employer Nomination Visa</b>, which includes providing
                    further information on their qualifications, experience, and
                    character, as well as undergoing health and character
                    checks.
                  </p>
                  <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                    It is important to note that the nomination and visa
                    application processes can be complex and time-consuming, and
                    it is advisable to seek professional advice to ensure a
                    successful outcome.
                  </p>
                  <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                    <span className="font-bold">Note: </span> eligibility
                    criteria and requirements for each stream are subject to
                    change, and it is always advisable to consult a registered
                    migration agent to understand the latest immigration
                    requirements. You can also check DHA website{" "}
                    <span className="text-blue-500 ">
                      {" "}
                      https://immi.homeaffairs.gov.au/visas
                    </span>{" "}
                    to know about any of the mentioned visas.
                  </p>{" "}
                  <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                    Our migration agent at Growmore Immigration can help you
                    with the latest information and requirements for the
                    Business Innovation and Investment (Provisional) visa, and
                    guide you through the entire visa application process. Book
                    a consultation with us today to learn more.
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
    </div>
  );
};

export default EmployerVisaEmployer;

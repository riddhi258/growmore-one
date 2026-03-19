import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const EmployerVisaRegional = () => {
  return (
    <div>
      <div>
        <div>
          <section className="bg-[#28535B] py-12 sm:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Regional Certifying Bodies for Subclass 494{" "}
              </h1>

              <p className="text-white font-medium mt-3 text-sm sm:text-base">
                Home &gt; <span className=" cursor-pointer">Employers</span>{" "}
                &gt;{" "}
                <span className=" cursor-pointer">
                  Regional Certifying Bodies for Subclass 494{" "}
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
                               Labour Market Testing (LMT) Subclass 482 and Subclass 494
                               Guide
                             </span>
                             <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                           </div>
                         </Link>
                       </div>
                     </div>
              {/* Right Column */}
 <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">                {" "}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
                  Regional Certifying Bodies for Subclass 494{" "}
                </h3>
                <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Regional Certifying Body Approval (RCB) application process is
                  a key aspect of the <b>Subclass 494</b> Skilled Employer
                  Sponsored Regional (Provisional) visa <b>(SC494)</b> program.
                  The 494 visa Australia program is designed to attract skilled
                  workers to regional areas in Australia where there is a
                  shortage of
                  <Link to="/our-services/employers/labour-agreement/">
                    <span className="text-blue-300"> skilled labor</span>
                  </Link>
                </p>
                <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                  The RCB is responsible for assessing and certifying the
                  employer’s sponsorship application, as well as the employee’s
                  nomination application, to ensure that the job being offered
                  is genuine and meets the requirements of the visa program..
                </p>
                <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  To apply for RCB certification, the employer must first become
                  a Standard Business Sponsor and then
                  <Link to="/our-services/employers/nomination-application/">
                    <span className="text-blue-300">
                      {" "}
                      nominate the skilled worker
                    </span>
                  </Link>
                  for the <b>SC494</b> visa. The RCB will then assess the
                  employer’s application to determine if the job is in a
                  designated regional area and if it is a genuine job offer that
                  meets the requirements of the visa program.
                </p>
                <div>
                  <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                    The RCB will also assess the skilled worker’s nomination
                    application to ensure that they have the required skills,
                    qualifications, and work experience to perform the job.
                    Additionally, the RCB will also assess the market salary
                    rate to ensure that the employee will be paid the correct
                    wage and conditions. These steps are essential parts of
                    meeting the
                    <b>494 visa requirements.</b>
                  </p>
                  <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
                    Once the RCB has approved the sponsorship and nomination
                    applications, the skilled worker can then apply for the
                    <b>SC494</b> visa. The RCB will provide the approved applications
                    to the Department of Home Affairs, which will then assess
                    the visa application and make a final decision on the visa
                    grant.
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

export default EmployerVisaRegional;

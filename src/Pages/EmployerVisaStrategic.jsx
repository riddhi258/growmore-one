import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const EmployerVisaStrategic = () => {
  return (
    <div>
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Strategic Business Case Preparation
          </h1>

          <p className="text-white font-medium mt-3 text-sm sm:text-base">
            Home &gt; <span className=" cursor-pointer">Employers</span> &gt;{" "}
            <span className=" cursor-pointer">
              A Strategic Approach to Business Case Development
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
 <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">            {" "}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
              A Strategic Approach to Business Case Development{" "}
            </h3>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-black mt-6">
                What We Offer:{" "}
              </h1>
              <ul className=" list-disc pl-6 mt-2 text-[#727272] text-sm sm:text-base">
                <li>
                  Labour Agreements are tailored solutions for Australian
                  businesses that face challenges in finding skilled workers
                  locally. Our team assists businesses in preparing a compelling
                  business case for Labour Agreement applications.{" "}
                  <b className="text-black">This involves:</b>{" "}
                </li>
                <li>
                  Assessing the business’s workforce requirements and
                  identifying critical skill shortages.
                </li>
                <li>
                  Crafting a detailed and evidence-backed application that
                  aligns with the Australian government’s labour and economic
                  policies.
                </li>
                <li>Crafting a detailed and evidence-backed application that aligns with the Australian government’s labour and economic policies. </li>
              </ul>
              <h1 className="text-2xl sm:text-3xl font-semibold text-black mt-6">
                How It Helps:
              </h1>
              <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                A well-prepared business case strengthens your application,
                showcasing the genuine need for international workers to fill
                roles that cannot be sourced locally, ensuring smooth approval
                from the Department of Home Affairs.
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
  );
};

export default EmployerVisaStrategic;

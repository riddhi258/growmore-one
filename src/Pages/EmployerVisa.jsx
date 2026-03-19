import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const EmployerVisa = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Employer Sponsored Visa
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
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-6">
              Employer Sponsored Visa Australia Requirements
            </h3>
            <p className="text-[#727272] mt-6 leading-relaxed text-justify text-sm sm:text-base">
              The Employer Sponsored visa category allows Australian employers
              to sponsor foreign workers to fill skill shortages in their
              businesses. These visas are designed for individuals with highly
              specialized skills or those who are unable to find suitable
              employees within the{" "}
              <Link to="/our-services/employers/labour-agreement/">
                <span className="text-blue-500 ">Australian labor market</span>
              </Link>
              .
            </p>
            <p className="text-[#727272] mt-6 leading-relaxed  text-justify text-sm sm:text-base">
              To be eligible for this type of visa, applicants must have an
              employer who is willing to sponsor them and they must meet the
              specific requirements of the position they are applying for.
            </p>
            <p className="text-[#727272] mt-6 leading-relaxed text-justify  text-sm sm:text-base">
              The eligibility criteria for an Employer Sponsored visa can vary
              greatly depending on the type of visa and the specific occupation,
              so it is important to carefully review the requirements before
              applying.
            </p>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B]">
                An Employer May Sponsor a Visa Applicant For a Number of
                Reasons, Including:{" "}
              </h3>

              <ul className="list-disc pl-6 mt-6 space-y-4 text-[#727272] text-sm sm:text-base">
                <li>
                  <strong>To fill a skill shortage: </strong> An employer may
                  sponsor a foreign worker if they are unable to find a suitable
                  candidate locally to fill a skilled position.
                </li>

                <li>
                  <strong>Access to a global talent pool:</strong> Employer
                  sponsorship allows companies to access a wider pool of talent
                  from around the world, increasing their ability to find the
                  best candidate for the job.
                </li>

                <li>
                  <strong>Retention of valuable employees:</strong> Sponsoring a
                  valued employee for a visa can help to retain them, as it
                  shows the company’s commitment to their role and their future
                  in the company.
                </li>

                <li>
                  <strong>Meeting business needs:</strong> Employer sponsorship
                  can enable a company to meet its business needs by bringing in
                  foreign workers with specific skills and knowledge that are
                  required to support the business.
                </li>

                <li>
                  <strong> Compliance with immigration laws:</strong> Employer
                  sponsorship can help companies comply with immigration laws by
                  ensuring that their foreign employees are in Australia legally
                  and have the necessary visas to work.
                </li>

                <li>
                  <strong>Positive impact on company culture:</strong>Employer
                  sponsorship can bring a positive impact on company culture by
                  creating a diverse and inclusive workplace, where employees
                  from different backgrounds can collaborate and share their
                  experiences and skills.
                </li>
              </ul>
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

export default EmployerVisa;

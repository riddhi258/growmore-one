import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const IndividualVisaGurdian = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
              Student Guardian Visa (Subclass 590)
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Individual</span> &gt;{" "}
              <span className=" cursor-pointer">
                How to Apply Student Guardian Visa in Australia
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

                <Link to="/our-services/individual/student-guardian-visa/">
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
                How to Apply Student Guardian Visa in Australia{" "}
              </h3>
              <div>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  The student and Guardian visas are intended for those seeking
                  to study full-time in Australia. These visas permit
                  individuals to remain in the country for the length of their
                  course and grant specific work rights.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>STUDENT VISA (SUBCLASS 500)</b>
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  The Subclass 500 Visa, commonly known as the Student Visa,
                  allows international students to study full-time at a
                  registered educational institution in Australia for up to 5
                  years. To qualify for a student visa, applicants must meet the
                  eligibility criteria, including enrolment in an approved
                  course, demonstrating adequate financial support, and proving
                  English language proficiency.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>To be Eligible for a Student Visa, Individuals Must:</b>
                </p>
                <ol className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    Be enrolled in a registered course of study in Australia
                  </li>
                  <li>Meet the English language proficiency standards</li>
                  <li>
                    Sufficient financial capacity to cover tuition, living, and
                    travel costs
                  </li>
                  <li>Have adequate health insurance</li>
                  <li>
                    Hold Genuine Temporary Entrant (GTE) status, demonstrating
                    intent to stay temporarily for study purposes
                  </li>
                  <li>
                    Make welfare arrangements if you are under 18 years of age
                  </li>
                  <li>
                    Be able to show an understanding that studying in Australia
                    is the primary reason for your student visa
                  </li>
                  <li>Meet our character requirements</li>
                  <li>Not had a visa canceled or an application refused</li>
                </ol>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>Key Features of the Subclass 500 Visa:</b>
                </p>
                <ol className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                      <span>Study Opportunity:</span>
                    </strong>{" "}
                    Enroll in an accredited course in Australia.
                  </li>
                  <li>
                    <strong>Stay Duration:</strong>
                    Stay in Australia for the length of your course, with
                    possible extensions based on your circumstances.
                  </li>
                  <li>
                    <strong>Work Rights:</strong>
                    Work up to 48 hours per fortnight during study periods and
                    unlimited hours during course breaks.
                  </li>{" "}
                  <li>
                    <strong>Family Inclusion:</strong>
                    Bring eligible family members, such as your partner or
                    children, as dependents.
                  </li>{" "}
                  <li>
                    <strong>Health Cover:</strong>
                    Maintain Overseas Student Health Cover (OSHC) for the
                    duration of your stay.
                  </li>
                </ol>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>STUDENT GUARDIAN VISA (SUBCLASS 590)</b>
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                  The Subclass 590 Visa, also known as the Student Guardian
                  Visa, is intended for parents, guardians, or relatives of
                  international students under 18 years of age who are studying
                  in Australia. In certain cases, it may also apply to guardians
                  of students over 18 requiring special care.
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>
                    To be eligible for a Student Guardian Visa, individuals
                    must:
                  </b>
                </p>
                <ol className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    Be a parent, legal guardian, or relative (21 years or older)
                    of the student visa holder
                  </li>
                  <li>Meet health and character requirements</li>
                  <li>
                    Have sufficient financial resources to support yourself, the
                    student, and any accompanying dependents
                  </li>
                  <li>
                    Agree to abide by visa conditions, including not leaving
                    Australia without making adequate arrangements for the
                    student’s caree
                  </li>
                  <li>
                    Be able to provide accommodation, welfare, and other support
                  </li>
                  <li>Hold an eligible substantive visa, if in Australia</li>
                </ol>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-xl">
                  <b>Key Features of the Subclass 590 Visa:</b>
                </p>
                <ol className="list-decimal pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>
                      {" "}
                      <span className="text-black font-semibold">
                        Support Role:
                      </span>
                    </strong>{" "}
                    Provides guardianship and care for an international student
                    in Australia.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        Stay Duration:
                      </span>
                    </strong>{" "}
                    The visa’s length is determined by the student visa holder’s
                    stay and age
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Work Rights:
                      </span>
                    </strong>
                    This visa does not permit the holder to work in Australia.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Study Option:
                      </span>
                    </strong>
                    Enroll in a short-term study or training course of up to 3
                    months.
                  </li>
                  <li>
                    <strong>
                      <span className="text-black font-semibold">
                        {" "}
                        Family Inclusion:
                      </span>
                    </strong>
                    Bring your dependent children under certain conditions,
                    provided they meet the requirements.
                  </li>
                </ol>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  <b>Note: </b> eligibility criteria and requirements for each
                  stream are subject to change, and it is always advisable to
                  consult a registered migration agent to understand the latest
                  immigration requirements.{" "}
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                You can also check the DHA website
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

export default IndividualVisaGurdian;

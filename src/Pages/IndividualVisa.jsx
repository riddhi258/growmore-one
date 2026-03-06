import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const IndividualVisa = () => {
  return (
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Individual Sponsored Visa Services
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">Employers</span> &gt;{" "}
              <span className=" cursor-pointer">
                Individual Sponsored Visa Services
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
                           <Link to="/our-services/individual/employer-sponsored-visa/">
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
                Individual Journey with Expert Immigration Support{" "}
              </h3>
              <div>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Introduction:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  In a move to safeguard the integrity of Australia’s
                  international education sector and protect genuine
                  international students, the Albanese Government has announced
                  a comprehensive package of measures.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  As the fourth-largest export industry for the nation,
                  international education plays a vital role in the economy and
                  regional relationships. This initiative aims to address
                  loopholes, prevent misuse, and enhance the overall quality of
                  the sector
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Closing the Loophole:
                </h2>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  One of the key measures is the closure of a loophole that
                  allowed education providers to transition
                  internationalstudents, present in Australia for less than six
                  months, fromlegitimate study to anangements facilitating work
                  access.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  This change, effective immediately, prevents second providers
                  from enrolling students before they have completed the
                  required six months of study at ther Initial institution. This
                  step is vital to maintain the sector’s credibility and prevent
                  predatory operators from taking advantage of vulnerable
                  students
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Financial Requirements Update:
                </h2>

                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  To ensure that international students can support themselves
                  and avoid exploitation due to financial constraints, the
                  government has revised the financial requirement for obtaining
                  a student visa, effective October 1, 2023.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Prospective students will need to demonstrate evidence of
                  $24,505 in savings. reflecting a 17% increase from previous
                  levels to accommodate rising living expenses. This change
                  underscores the government’s commitment to ensuring students’
                  well-being while{" "}
                  <span className="text-blue-500">studying in Australia</span>
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Increased Scrutiny and Fraud Prevention:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Recognizing the need for stringent measures to prevent fraud,
                  the government willintensify scrutiny of high-risk student
                  cohorts and request additional documentation during the
                  application process. This step is aimed at identifying
                  potential fraudulent activities and maintaining the sector’s
                  credibility
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
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
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  Clear criteria for issuing suspension certificates, such as
                  application rates involving fraudulent documents and provider
                  refusal rates, will be outlined through consultations. This
                  proactive approach demonstrates the government’s commitment to
                  tackling substandard providers head-on.
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Future Measures and Migration Strategy:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  The government’s dedication to upholding the integrity of the
                  international education system doesn’t stophere As part of the
                  upcoming Migration Strategy, due later this year, additional
                  measures will be explored to further strengthen the sector’s
                  integrity
                </p>
                <h2 className="text-xl sm:text-xl font-semibold text-black mt-6">
                  Conclusion:{" "}
                </h2>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  The Albanese Government’s commitment to preserving the quality
                  and integrity of{" "}
                  <span className="text-blue-500">
                    Australia’s international education{" "}
                  </span>
                  sector is evident through the comprehensive package of
                  measures announced.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  By closing loopholes, revising financial requirements,
                  increasing scrutiny, and exploring the use of suspension
                  certificates for high-risk providers, the government aims to
                  protect genuine students, maintain the sector’s global
                  reputation, and contribute to a skilled workforce for the
                  future.
                </p>
                <p className="text-gray-500 mt-6 leading-relaxed  text-justify text-sm sm:text-base">
                  These measures align with the government’s determination to
                  create a fair and secure environment for internationalstudents
                  pursuing their educational dreams in Australia
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

export default IndividualVisa;

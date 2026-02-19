import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 md:px-12 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card */}
        <div className="group bg-[#EFF9FB] rounded-2xl p-6 h-full flex flex-col justify-between transition duration-300  cursor-pointer">
          {/* Top Content */}
          <div>
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/assets/card-img1.svg"
                alt="Employer Sponsor Visa"
                className="w-12 h-12"
              />

              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                Employer <br /> Sponsor Visa
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base ml-15 leading-relaxed text-justify">
              Work in Australia with Employer Sponsorship, guided by our Expert
              Migration Agents.
            </p>
          </div>

          {/* Arrow */}
          <div className="mt-4">
            <Link to="/our-services/individual"><span className="inline-flex items-center  justify-center w-9 h-9 ml-15">
              →
            </span></Link>
          </div>
        </div>
        <div className="group bg-[#EFF9FB] rounded-2xl p-6 h-full flex flex-col justify-between transition duration-300  cursor-pointer">
          {/* Top Content */}
          <div>
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/assets/card-img2.svg"
                alt="Employer Sponsor Visa"
                className="w-12 h-12"
              />

              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                General Skilled <br /> Migration Visa
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base ml-15 leading-relaxed text-justify">
              Move to Australia based on your skills and qualifications with
              assistance from our Registered Migration Agents.
            </p>
          </div>

          {/* Arrow */}
          <div className="mt-4">
            <Link to="/our-services/gsm-general-skilled-migration/"><span className="inline-flex items-center  justify-center w-9 h-9 ml-15">
              →
            </span></Link>
          </div>
        </div>
        <div className="group bg-[#EFF9FB] rounded-2xl p-6 h-full flex flex-col justify-between transition duration-300  cursor-pointer">
          {/* Top Content */}
          <div>
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/assets/card-img3.svg"
                alt="Student Visa"
                className="w-12 h-12"
              />

              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                Student <br /> Visa
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base ml-15 leading-relaxed text-justify">
              Unlock opportunities with world-class education in Australia.
            </p>
          </div>

          {/* Arrow */}
          <div className="mt-4">
            <Link to="/our-services/student-visa/"><span className="inline-flex items-center  justify-center w-9 h-9 ml-15">
              →
            </span></Link>
          </div>
        </div>
        <div className="group bg-[#EFF9FB] rounded-2xl p-6 h-full flex flex-col justify-between transition duration-300  cursor-pointer">
          {/* Top Content */}
          <div>
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src="/assets/card-img4.svg"
                alt="Individual Sponsored Visa"
                className="w-12 h-12"
              />

              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                Individual <br /> Sponsored Visa
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base ml-15 leading-relaxed text-justify">
              Explore additional pathways to live and work in Australia with
              comprehensive immigration assistance from our team.
            </p>
          </div>

          {/* Arrow */}
          <div className="mt-4">
            <Link to="/our-services/individual"><span className="inline-flex items-center  justify-center w-9 h-9 ml-15">
              →
            </span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

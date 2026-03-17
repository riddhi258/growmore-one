import React from "react";
import { Link } from "react-router-dom";

const News3 = () => {
  // Invitation Data Array
  const invitationData = [
    {
      visa: "190",
      location: "Onshore",
      occupation: "Advertising Specialist",
      points: "100",
      details: "No skilled partner, Superior English",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Agricultural Scientist",
      points: "100",
      details: "Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Analyst Programmer",
      points: "100",
      details: "100K+ salary, Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Analyst Programmer",
      points: "90",
      details: "119K salary, Partner 5",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Architect",
      points: "95",
      details: "120K salary",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Biomedical Engineer",
      points: "95",
      details: "100K+ salary",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Civil Engineer",
      points: "100",
      details: "97K salary, Partner 5",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Civil Engineer",
      points: "90",
      details: "125K salary, Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Civil Draftsperson",
      points: "65",
      details: "Full points breakdown (Age, Exp, Edu, Eng, Salary 110K+)",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "CPM",
      points: "95",
      details: "—",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "Developer Programmer",
      points: "95",
      details: "Skilled partner, Superior English",
    },
    {
      visa: "491",
      location: "Onshore",
      occupation: "ECT",
      points: "80",
      details: "85K+ salary, Partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "ECT",
      points: "75",
      details: "Salary 90K, Age 30, Exp 5",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Electrical Engineer",
      points: "90",
      details: "Age 30, NAATI, Partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Engineering Professionals NEC",
      points: "105",
      details: "105K+, PhD, Single",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Engineering Technologist",
      points: "100",
      details: "96K, Single",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Engineering Technologist",
      points: "95",
      details: "—",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Engineering Technologist",
      points: "90",
      details: "100K salary",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "External Auditor",
      points: "90",
      details: "Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "ICT Accounts Manager",
      points: "95",
      details: "100K salary, Partner 10",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "ICT Business Analyst",
      points: "100",
      details: "85K salary, NAATI",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "Management Consultant",
      points: "95",
      details: "Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Marketing Specialist",
      points: "100",
      details: "90K+, No partner, Superior English",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Marketing Specialist",
      points: "85",
      details: "80K salary",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Primary School Teacher",
      points: "95",
      details: "100K salary",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "Software Engineer",
      points: "100",
      details: "Exp 10, Skilled partner",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Software Engineer",
      points: "105",
      details: "120K+, Single",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Software Engineer",
      points: "90",
      details: "150K+ salary",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Software & App Programmer (NEC)",
      points: "90",
      details: "120K+ salary",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Statistician",
      points: "90",
      details: "100K+, Single",
    },
    {
      visa: "190",
      location: "Onshore",
      occupation: "Taxation Accountant",
      points: "105",
      details: "70K+, Partner",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "Telecom Engineer",
      points: "95",
      details: "Exp 15, Skilled partner",
    },
    {
      visa: "190",
      location: "Offshore",
      occupation: "Urban & Regional Planner",
      points: "90",
      details: "—",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            VIC Invitation Round 17 Mar 2026: Who Got Invited This Time?
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <img
            src="/assets/bg3.jpg"
            alt="Victoria Background"
            className="w-full h-auto rounded-xl my-6 shadow-sm"
          />

          <div className="space-y-10 text-[#727272]">
            {/* Header Section */}
            <div>
              <h2 className="text-[24px] font-bold text-[#333333] mb-6">
                VIC Invitation Round 17 Mar 2026: Who Got Invited This Time?
              </h2>
              <div className="space-y-4 text-justify text-[16px] text-[#042325] leading-relaxed">
                <p>
                  In the state nomination program of Australia, Victoria’s
                  Skilled and Business Migration Program has released its latest
                  invitation round today. The 17 March 2026 round shows that
                  Victoria is actively inviting high-performing profiles, strong
                  salaries, and strategically aligned occupations.
                </p>
                <p>
                  So, if you have an average profile and are expecting an
                  invitation, this data should serve as a wake-up call for you.
                </p>
              </div>
            </div>

            {/* Results Table Section */}
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                VIC Invitation Round Results – 17 March 2026
              </h3>

              <div className="overflow-x-auto border border-gray-400 rounded-lg shadow-sm">
                <table className="w-full text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-gray-200 text-[#333333]">
                      <th className="border border-gray-400 px-4 py-3 text-center font-bold">
                        Visa
                      </th>
                      <th className="border border-gray-400 px-4 py-3 text-center font-bold">
                        Location
                      </th>
                      <th className="border border-gray-400 px-4 py-3 text-left font-bold">
                        Occupation
                      </th>
                      <th className="border border-gray-400 px-4 py-3 text-center font-bold">
                        Points
                      </th>
                      <th className="border border-gray-400 px-4 py-3 text-left font-bold">
                        Key Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {invitationData.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="border border-gray-400 px-4 py-2 text-center">
                          {item.visa}
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-center">
                          {item.location}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          {item.occupation}
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-center font-semibold text-[#28535B]">
                          {item.points}
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-[13px] leading-tight text-[#555]">
                          {item.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <h4 className="text-[18px] font-semibold text-[#042325] mb-4">
              <u>
                Note: The above details are based on internal insights and are
                not officially published.
              </u>
            </h4>
            <div>
              <h4 className="text-[24px] font-semibold text-[#333333] mb-4">
                What Stands Out in This Round
              </h4>
              <p className="mb-4 text-[16px] text-[#042325]">
                In this round, mainly invitations were issued for Subclass 190
                (Skilled Nominated Visa), and only limited movement was seen in
                the Subclass 491 (Regional Visa) category.
              </p>
              <p className="mb-4 text-[16px] text-[#042325]">
                Not just that, but the majority of invitations are issued for
                onshore applicants, which shows Victoria’s ongoing preference
                for candidates who are already contributing to the local
                workforce.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Key Observations from This Round
              </h3>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-left text-[16px] text-[#042325]">
                <li>
                  High number of invitations were issued between 90 to 105
                  points, which indicates that any profile below 90 points has a
                  very low chance of receiving an invitation unless you have
                  something exceptional.
                </li>
                <li>
                  Several high-demand roles, including Engineering Professionals
                  (NEC), Software Engineers, and Taxation Accountants, peaked at
                  105 points in the latest Victoria nomination round.
                </li>
                <li>
                  Many successful applicants had skilled partners, showing that
                  a partner’s point can help you receive an invitation. Apart
                  from this, salary, English level, and NAATI credentials also
                  contribute to receiving an invitation.
                </li>
                <li>
                  A small number of applicants also get an invitation as
                  offshore but mostly reserved for highly experienced
                  candidates.
                </li>
                <li>
                  This round mainly targeted industries like IT & Tech,
                  Engineering, Business & Finance, Marketing & Creative, and
                  Education, which shows in which sector Victoria currently
                  needs workforce.
                </li>
              </ul>
              <h3 className="text-[24px] font-semibold text-[#333333] mb-4">
                Not sure why others are getting invited, and you’re not?
              </h3>
              <p className="my-8 text-[16px] text-[#333333]">
                Talk with an expert at <b>Growmore immigration</b> now and get guidance
                on how to make your profile competitive for the upcoming
                invitation round. Whether you are targeting skilled migration or
                an{" "}
                <span className="text-blue-500 font-medium">
                  employer-sponsored visa
                </span>{" "}
                we are here to help. Contact us now!
              </p>
              <div className="w-full bg-[#2ED09B]  rounded-lg p-5 shadow-sm my-8">
                <div className="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-4  pl-3 text-black font-semibold text-center text-[15px] sm:text-[17px]">
                  <div className="flex items-center">
                    <span>Email: </span>
                    <a
                      href="mailto:info@growmore.one"
                      className="ml-1 text-blue-500 transition-colors"
                    >
                      info@growmore.one
                    </a>
                  </div>

                  <span className="hidden md:inline text-black">|</span>

                  <div className="flex items-center">
                    <span>WhatsApp: </span>
                    <a
                      href="https://wa.me/61434202021"
                      className="ml-1 text-blue-500 "
                    >
                      +61 434 202 021
                    </a>
                  </div>

                  <span className="hidden md:inline text-black">|</span>

                  <div className="flex items-center">
                    <span>Phone: </span>
                    <a
                      href="tel:+61387643334"
                      className="ml-1 text-black "
                    >
                      +61 3 8764 3334
                    </a>
                  </div>
                </div>
              </div>
              <Link to="/book-consultation">
                <button className="bg-[#5dc2d3] text-white rounded-full hover:bg-black transition px-12 py-4 text-sm font-bold shadow-lg">
                  Book Consultation →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News3;

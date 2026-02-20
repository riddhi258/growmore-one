import React from "react";

const team = [
  {
    name: "Krunal Nayak",
    role: "Founder of Growmore Immigration",
    img: "/assets/team1.png",
  },
  {
    name: "Keyur Chaudhari",
    role: "General Manager",
    img: "/assets/team2.png",
  },
  {
    name: "Abhisha Rathod",
    role: "COO",
    img: "/assets/team3.png",
  },
  {
    name: "Hiren Maharaj",
    role: "CMO",
    img: "/assets/team4.png",
  },
];

const Teams = () => {
  return (
    <div className="w-full bg-white py-24">

      {/* ================= TEAM SECTION ================= */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-[300px]"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-[#1E4E54] font-semibold text-md">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= COMMUNITY SECTION ================= */}
      <div className="max-w-4xl mx-auto mt-28 px-6">
        <div className="bg-[#1E4E54] rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl p-8 w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-[#2CA6B0] mb-4">
              Community
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Stay updated with the latest news, tips, and success stories by
              connecting with us on our social media platforms.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <a href="#">
                <img src="/assets/t.svg" alt="Tiktok" className="w-9 h-9 rounded-md  flex items-center justify-center-4" />
              </a>
             <a href="#">
                <img src="/assets/i.svg" alt="Instagram" className="w-9 h-9 rounded-md  flex items-center justify-center" />
              </a>
              <a href="#">
                <img src="/assets/t.svg" alt="Tiktok" className="w-9 h-9 rounded-md  flex items-center justify-center-4" />
              </a>
              <a href="#" >
                <img src="/assets/l.svg" alt="LinkedIn" className="w-9 h-9 rounded-mdflex items-center justify-center" />
              </a>
              <a href="#">
                <img src="/assets/y.svg" alt="YouTube" className="w-9 h-9 rounded-lg  flex items-center justify-center" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src="/assets/c.png"
              alt="community"
              className="rounded-2xl w-full h-[260px] object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Teams;
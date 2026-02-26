import React from "react";
import { FaCalendar } from "react-icons/fa";


const blogs = [
  {
    id: 1,
    title: "Western Australia’s Feb State Nomination Invites Released",
    date: "February 24, 2026",
    image: "/assets/blog1.png",
  },
  {
    id: 2,
    title: "Canberra Matrix Tentative Invitation Dates Changed: See New Dates",
    date: "February 23, 2026",
    image: "/assets/blog2.png",
  },
  {
    id: 3,
    title: "Is Your EOI Ready? NSW 190 Invitations Coming in March",
    date: "February 23, 2026",
    image: "/assets/blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Subtitle */}
        <p className="text-[#7cc576] font-semibold tracking-widest uppercase mb-3">
          Recent Blogs
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Latest{" "}
          <span className="text-[#7cc576] font-semibold">Insights</span> and
          Immigration <span className="font-semibold">Updates</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#163c3d] mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576]" /> {blog.date}
                </p>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                    
                    <span className="relative">
                      READ MORE
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
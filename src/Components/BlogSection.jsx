import React from "react";

const blogs = [
  {
    id: 1,
    title:
      "Western Australia’s Feb State Nomination Invites Released",
    date: "February 24, 2026",
    image: "/assets/blog1.png",
  },
  {
    id: 2,
    title:
      "Canberra Matrix Tentative Invitation Dates Changed: See New Dates",
    date: "February 23, 2026",
    image: "/assets/blog2.png",
  },
  {
    id: 3,
    title:
      "Is Your EOI Ready? NSW 190 Invitations Coming in March",
    date: "February 23, 2026",
    image: "/assets/blog3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Subtitle */}
        <p className="text-green-600 font-semibold tracking-wide uppercase mb-3">
          Recent Blogs
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Latest{" "}
          <span className="text-green-600 font-bold">Insights</span> and
          Immigration <span className="font-bold">Updates</span>
        </h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover p-2 rounded-2xl"
                />            
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  📅 {blog.date}
                </p>

                <button className="text-[#6dc7d1]  font-semibold hover:underline flex items-center gap-2">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
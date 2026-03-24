import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogs } from "../data/newsData";

const NewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 10;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#163c3d] mb-6">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576]" />
                  {blog.date}
                </p>

                <div className="mt-auto">
                  <Link to={`/news/${blog.slug}/`}>
                    <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                      <span className="relative">
                        READ MORE
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

     {/* ✅ PAGINATION */}
<div className="flex justify-center items-center  mt-12">

  {/* PREV */}
  <button
    onClick={() => setCurrentPage((prev) => prev - 1)}
    disabled={currentPage === 1}
    className={`px-5 py-2 rounded-lg transition ${
      currentPage === 1
        ? "text-blue-400 cursor-pointer hover:text-green-500"
        : "text-black hover:text-green-500 cursor-pointer"
    }`}
  >
    Prev
  </button>

  {/* NEXT */}
  <button
    onClick={() => setCurrentPage((prev) => prev + 1)}
    disabled={currentPage === totalPages}
    className={`px-5 py-2 rounded-lg transition ${
      currentPage === totalPages
        ? "text-blue-400 cursor-pointer hover:text-green-500"
        : "text-black hover:text-green-500 cursor-pointer"
    }`}
  >
    Next
  </button>

</div>

      </div>
    </section>
  );
};

export default NewsSection;
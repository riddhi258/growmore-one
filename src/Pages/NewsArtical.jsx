import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaCalendar,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
} from "react-icons/fa";
import { blogs } from "../data/newsData";
import CommentSection from "../Components/CommentSection";
import { Link } from "react-router-dom";

const NewsArticle = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const article = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (article) {
      let isMounted = true;

      fetch(`/content/news/${slug}.md`)
        .then((res) => {
          if (!res.ok) throw new Error("File not found");
          return res.text();
        })
        .then((text) => {
          if (isMounted) {
            if (text.trim().startsWith("<!doctype html>")) {
              throw new Error("Wrong file path");
            }
            setContent(text);
          }
        })
        .catch(() => {
          setContent(
            "# Content Not Found\nPlease check your markdown file path."
          );
        });

      return () => {
        isMounted = false;
      };
    }
  }, [slug]);

  if (!article)
    return (
      <div className="py-20 text-center font-bold">
        Metadata not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-white font-jakarta text-[#042325]">
      
      {/* HEADER */}
      <section className="bg-[#28535B] py-14 text-white">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-[28px] md:text-[32px] font-semibold leading-snug">
            {article.title}
          </h1>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        
        {/* IMAGE */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-lg mb-8 object-cover max-h-[450px]"
        />

        {/* MARKDOWN CONTENT */}
       <div>
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h2: ({ ...props }) => (
        <h2
          className="text-[#28535B] text-[20px] font-semibold mt-8 mb-3"
          {...props}
        />
      ),

      p: ({ ...props }) => (
        <p
          className="text-[15px] leading-[1.7] text-[#333] mb-4"
          {...props}
        />
      ),

      ul: ({ ...props }) => (
        <ul className="pl-5 mb-4 list-disc" {...props} />
      ),

      li: ({ ...props }) => (
        <li className="mb-2 marker:text-[#333333]" {...props} />
      ),

      strong: ({ ...props }) => (
        <strong
          className="font-semibold text-[#042325]"
          {...props}
        />
      ),

      a: ({ ...props }) => (
        <a
          className="text-[#2ED09B] underline"
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      ),

      // ✅ TABLE SUPPORT STARTS HERE

      table: ({ ...props }) => (
        <div className="overflow-x-auto my-6 border border-gray-300 rounded-lg">
          <table
            className="w-full text-sm border-collapse"
            {...props}
          />
        </div>
      ),

      thead: ({ ...props }) => (
        <thead className="bg-gray-200" {...props} />
      ),

      th: ({ ...props }) => (
        <th
          className="border border-gray-300 px-4 py-2 text-left font-semibold text-[#333]"
          {...props}
        />
      ),

      td: ({ ...props }) => (
        <td
          className="border border-gray-300 px-4 py-2 text-[#333]"
          {...props}
        />
      ),

      tr: ({ ...props }) => (
        <tr className="hover:bg-gray-50 transition" {...props} />
      ),

      // ✅ TABLE SUPPORT ENDS HERE
    }}
  >
    {content}
  </ReactMarkdown>
</div>
        {/* CONTACT BAR */}
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

        {/* BUTTON */}
            <Link to="/book-consultation">
                <button className="bg-[#5dc2d3] text-white rounded-full hover:bg-black transition px-12 py-4 text-sm font-bold shadow-lg">
                  Book Consultation →
                </button>
              </Link>

       <CommentSection/>
      </section>
    </div>
  );
};

export default NewsArticle;
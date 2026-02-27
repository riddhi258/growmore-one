import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Member() {
  const [open, setOpen] = useState(false);

  const videoId = "Y1UnXlAhx1c"; // Your YouTube Video ID

  return (
    <>
      <section className="relative z-20 lg:-mt-80 sm:-mt-60 px-4 py-16">
        <div className="max-w-[1400px] mx-auto bg-[#1F4E55] rounded-[40px] px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          {/* LEFT CONTENT */}
          <div className="text-white max-w-[750px]">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Become a <span className="text-red-500">YouTube</span> member
              <br /> today and get Exclusive Updates
            </h2>

            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              Unlock exclusive immigration tips, live Q&A sessions, and insider
              updates. Become a member today and take a step closer to your
              dreams!
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <a
                href="https://www.youtube.com/@growmoreimmigration"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-green-400 hover:text-white font-semibold transition">
                  Become a member
                </button>
              </a>
              <div className="flex items-center gap-3 text-white text-lg font-medium">
                <a
                  href="https://www.youtube.com/@growmoreimmigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <FaYoutube className="text-red-600 text-3xl" />
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO CARD */}
          <div
            onClick={() => setOpen(true)}
            className="relative w-full md:w-[480px] rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
          >
            {/* YouTube Thumbnail Auto Generated */}
            <img
              src="assets/y1.png"
              alt="youtube video"
              className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" border  p-6 rounded-full  transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 "
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl z-10"
            >
              ✕
            </button>

            <iframe
              className="w-full h-[500px]"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

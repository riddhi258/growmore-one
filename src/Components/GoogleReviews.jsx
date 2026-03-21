import { useState, useEffect } from "react";
import React from "react";
import { reviewsData } from "../data/reviewsData";

export default function GoogleStyleReviews() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ Handle responsive cards
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // tablet
      } else {
        setItemsPerView(3); // desktop
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  // ✅ Auto slider (fixed for all views)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 > reviewsData.length - itemsPerView ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Google Reviews
        </h2>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 flex-wrap">
          <span className="text-xl sm:text-2xl font-semibold text-gray-800">
            4.9
          </span>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-base sm:text-lg">
                ★
              </span>
            ))}
          </div>

          <span className="text-gray-500 text-xs sm:text-sm">
            (120+ Reviews)
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4 overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / itemsPerView}%)`,
          }}
        >
          {reviewsData.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition h-full">
                
                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#28535b] text-white flex items-center justify-center text-xs sm:text-sm font-semibold">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {review.time}
                      </p>
                    </div>
                  </div>

                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                    alt="google"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>

                {/* Stars */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
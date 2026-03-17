import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const Videos = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const [liveStreams, setLiveStreams] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchYouTubeData = async (type, eventType = "") => {
      try {
        // 1. Build the URL - Using BACKTICKS ``
        // NOTE: We must include &type=video whenever eventType is used
        let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`;

        if (eventType) {
          url += `&eventType=${eventType}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        // 2. Check for API-specific errors (like invalid keys or quota)
        if (data.error) {
          console.error("YouTube API Error:", data.error.message);
          setError(true);
          return [];
        }

        console.log(`Fetched ${eventType || "latest"} videos:`, data.items);
        return data.items || [];
      } catch (err) {
        console.error("Network/Fetch Error:", err);
        setError(true);
        return [];
      }
    };

    // 3. Execution
    fetchYouTubeData("video").then(setLatestVideos);
    fetchYouTubeData("video", "completed").then(setLiveStreams);
  }, []);
  return (
    <div className="w-full bg-white">
      {/* ================= HEADER ================= */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            YouTube Insights & Resources
          </h1>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="pt-16 md:pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-[#28535B] mb-6">
            Explore Our YouTube Insights & Resources
          </h2>

          <p className="text-gray-500 max-w-7xl mx-auto font-base text-base md:text-base leading-relaxed">
            Explore our YouTube channel for expert migration advice,
            step-by-step guides, and inspiring success stories. Stay informed
            with the latest updates and tips to simplify your Australian
            immigration journey. Empower your dreams with valuable insights and
            resources today! .
          </p>
          {error && (
            <p className="text-gray-600 max-w-6xl p-4  mx-auto text-base md:text-lg leading-relaxed mt-3 text-left">
              Could Not Fetch The Videos At The Moment, Please Try Again In Some
              Time.
            </p>
          )}
        </div>
      </section>

      {/* ================= COMPONENT 1: LATEST VIDEOS SLIDER ================= */}
      {!error && latestVideos.length > 0 && (
        <section className="pb-16 px-6 md:px-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#28535B] mb-8 border-l-4 border-[#28535B] pl-4">
            Latest Uploads
          </h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {latestVideos.map((video) => (
              <SwiperSlide key={video.id.videoId}>
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title="YouTube video"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 line-clamp-2 h-12">
                      {video.snippet.title}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* ================= COMPONENT 2: LIVE STREAMS GRID ================= */}
      {!error && liveStreams.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <h3 className="text-2xl font-semibold text-[#28535B] mb-8 border-l-4 border-red-600 pl-4">
              Past Live Sessions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveStreams.map((stream) => (
                <div key={stream.id.videoId} className="flex flex-col">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg shadow-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${stream.id.videoId}`}
                      allowFullScreen
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Recorded Live
                    </div>
                  </div>
                  <h5 className="mt-4 font-semibold text-gray-700 leading-snug">
                    {stream.snippet.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Videos;

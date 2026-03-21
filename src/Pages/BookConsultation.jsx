import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

const BookConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const openCalendly = (url) => {
    setSelectedUrl(url);
    setIsOpen(true);
  };

  const closeCalendly = () => {
    setIsOpen(false);
  };

  // Lock background scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-[22px] md:text-5xl font-semibold text-white mb-3">
            Book Consultation
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Book Consultation
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
            <div className="h-[350px] overflow-hidden rounded-t-3xl">
              <img
                src="/assets/c2.jpg"
                alt="Standard Consultation"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h2 className="text-[22px] font-bold text-[#042325]">$299</h2>

              <h3 className="mt-3 text-lg font-bold">
                Standard Consultation with Krunal Nayak (30 Mins)
              </h3>

              <p className="text-[#042325] text-[15px] mt-4 leading-relaxed text-justify">
                Book your online Standard consultation with our Principal
                Migration Agents specialised in Australian visas — appointments
                available in approximately 3 weeks.
              </p>
              <a
                href="https://6fvy.short.gy/icfactsheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-[15px] mt-4 block"
              >
                {" "}
                View Factsheet{" "}
              </a>
              <button
                onClick={() =>
                  openCalendly("https://calendly.com/krunalnayak/regular")
                }
                className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
            <div className="h-[350px] overflow-hidden rounded-t-3xl">
              <img
                src="/assets/c1.jpg"
                alt="Rapid Consultation"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h2 className="text-[22px] font-bold text-[#042325]">$150</h2>

              <h3 className="mt-3 text-lg font-bold">
                Rapid Q&A with Krunal Nayak (15 Mins)
              </h3>

              <p className="text-[#042325] text-[15px] mt-4 leading-relaxed text-justify">
                Book your online Rapid consultation with our Principal Migration
                Agents specialised in Australian visas — appointments available
                in approximately 3 weeks.
              </p>
              <a
                href="https://6fvy.short.gy/icfactsheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-[15px] mt-4 block"
              >
                {" "}
                View Factsheet{" "}
              </a>
              <button
                onClick={() =>
                  openCalendly("https://calendly.com/krunalnayak/rapid")
                }
                className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
            <div className="h-[350px] overflow-hidden rounded-t-3xl">
              <img
                src="/assets/c.png"
                alt="Urgent Consultation"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h2 className="text-[22px] font-bold text-[#042325]">$500</h2>

              <h3 className="mt-3 text-lg font-bold">
                Urgent Consultation with Krunal Nayak (30 Mins)
              </h3>

              <p className="text-[#042325] text-[15px] mt-4  mb-3 leading-relaxed text-justify">
                Book your urgent online consultation with our Principal
                Migration Agents, who specialise in Australian visas and
                applications, and receive priority expert guidance .
              </p>
              <a
                href="https://6fvy.short.gy/icfactsheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-[15px] mt-4 block"
              >
                {" "}
                View Factsheet{" "}
              </a>
              <button
                onClick={() =>
                  openCalendly("https://calendly.com/krunalnayak/urgent")
                }
                className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition duration-300">
            {" "}
            <div className="h-[350px] overflow-hidden rounded-t-3xl">
              {" "}
              <img
                src="/assets/c3.jpg"
                alt="Urgent Consultation"
                className="w-full h-full object-cover object-top"
              />{" "}
            </div>{" "}
            <div className="p-4">
              {" "}
              <h2 className="text-[22px] font-bold text-[#042325]">Free</h2>{" "}
              <h3 className="mt-3 text-lg font-semibold">
                {" "}
                Free Information Session with one of our Migration Expert{" "}
              </h3>{" "}
              <p className="text-[#042325] text-[15px] mt-4 leading-relaxed text-justify">
                {" "}
                Book your online session with our Migration Support Expert,
                specializing in Australian visa pathways{" "}
              </p>{" "}
              <a
                href="https://6fvy.short.gy/icfactsheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-[15px] mt-4 block"
              >
                {" "}
                View Factsheet{" "}
              </a>{" "}
              <button
                onClick={() =>
                  openCalendly("https://calendly.com/krunalnayak/urgent")
                }
                className="mt-6 bg-[#5aa7ad] hover:bg-[#4b9398] text-white px-8 py-3 rounded-full transition duration-300"
              >
                {" "}
                Book Now{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      {/* Calendly Popup */}
      {isOpen && (
        <PopupModal
          url={selectedUrl}
          open={isOpen}
          onModalClose={closeCalendly}
          rootElement={document.getElementById("root")}
        />
      )}
    </div>
  );
};

export default BookConsultation;

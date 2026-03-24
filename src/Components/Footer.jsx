import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#154C54] text-white overflow-hidden relative">
      {" "}
      {/* BACKGROUND OVERLAY */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/footer.jpg')`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "luminosity",
          opacity: 0.08,
        }}
      ></div>
      {/* CTA SECTION */}
      <div className="border-b border-white/20 py-8 px-4 sm:px-6 relative z-10">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 text-center md:text-left">
            <div className="bg-[#6dc7d1] rounded-full p-2">
              <img
                src="/assets/img1.svg"
                alt="phone"
                className="h-12 w-12 sm:h-14 sm:w-14"
              />
            </div>
            <h2 className="text-[22px] sm:text-[25px] text-left font-semibold leading-snug">
              {" "}
              Need An Expert Advice <br className="hidden md:block" />
              For Your Visa?
            </h2>
          </div>
          <div className="flex sm:flex-row items-start gap-4 mt-4 md:mt-0">
  {[
    { Icon: FaEnvelope, href: "mailto:india@growmore.one" },
    { Icon: FaWhatsapp, href: "https://wa.me/+61434202021" },
    { Icon: FaPhoneAlt, href: "tel:(03)87643334" }
  ].map(({ Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="bg-[#6dc7d1] p-3 sm:p-4 rounded-full text-white hover:bg-white hover:text-[#28535B] transition shadow-sm cursor-pointer flex items-center justify-center"
    >
      {/* ✅ Rendering the component here tells ESLint the variable is being used */}
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  ))}
</div>
        </div>
      </div>
      {/* MAIN FOOTER */}
      <div className="max-w-[1350px] lg:w-[1400px] mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 relative z-10">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img
            src="/assets/logo1.png"
            alt="Growmore"
            className="h-10 sm:h-12 mb-4 sm:mb-6"
          />
          <p className="text-white text-[14px] font-semibold leading-relaxed mb-4 sm:mb-6  w-70 text-justify">
            We are specialised in providing seamless visa solutions for
            individuals, students, and employers looking to make Australia their
            home.
          </p>
         <div className="flex gap-3 mb-4 sm:mb-6 text-lg">
  {[
    { icon: FaFacebookF, link: "https://www.facebook.com/growmore.one" },
    { icon: FaInstagram, link: "https://www.instagram.com/growmore.one/" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/growmore-immigration/" },
    { icon: FaTiktok, link: "https://tiktok.com/@growmore.immigration" },
    { icon: FaYoutube, link: "https://www.youtube.com/@growmoreimmigration" },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="hover:text-gray-400 cursor-pointer transition" />
      </a>
    );
  })}
</div>
          <Link to="/brochures" className="w-full sm:w-auto">
            <button className="bg-[#6dc7d1] px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium hover:bg-black transition w-full sm:w-auto">
              Download Brochures →
            </button>
          </Link>
        </div>

        {/* Services */}
        <div className="md:ml-12 lg:ml-22">
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Services
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-[16px] text-white font-semibold">
            <li>
              <Link
                to="/our-services/individual"
                className="hover:text-gray-400 transition"
              >
                <span className="text-white font-semibold">✓</span> For
                Individuals
              </Link>
            </li>
            <li>
              <Link
                to="/our-services/employers"
                className="hover:text-gray-400 transition"
              >
                <span className="text-white font-semibold">✓</span> For
                Employers
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-[16px] text-white font-semibold">
            <li>
              <Link
                to="/points-calculator"
                className="hover:text-gray-400 transition"
              >
                <span className="text-white font-semibold">›</span> Points
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">›</span> Insights
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400 transition">
                <span className="text-white font-semibold">›</span> Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/@growmoreimmigration"
                className="hover:text-gray-400 transition"
              > <span className="text-white font-semibold ">›</span> YouTube
              Channel</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-4 sm:mb-6">
            Useful Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-[16px] text-white font-semibold">
            <li>
              <Link to="/terms-services" className="hover:text-gray-400 transition">
                Terms & Services
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="https://www.legislation.gov.au/F2021L01856/latest/text" className="hover:text-gray-400 transition">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link to="/cancellation-and-refund-policy" className="hover:text-gray-400">
                Cancellation & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* MARA Card */}
        <div className="flex justify-start lg:justify-end mt-6 md:mt-0">
          <img
            src="/assets/mara-card.png"
            alt="MARA Registration"
            className="rounded-xl max-h-48 sm:max-h-52 md:max-h-60 object-contain"
          />
        </div>
      </div>
      {/* COPYRIGHT */}
    <div className="border-t border-white/20 py-6 px-4 relative z-10">
  <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[14px] text-white gap-4">
    
    {/* Left Side */}
    <p className="text-center sm:text-left">
      © {new Date().getFullYear()} Growmore Immigration | All Rights Reserved
    </p>

    {/* Right Side */}
    <div className="flex items-center gap-2">
      <img
        src="/assets/logo2.png"
        alt="WebMotion"
        className="h-5 object-contain"
      />
    </div>

  </div>
</div>
    </footer>
  );
};

export default Footer;

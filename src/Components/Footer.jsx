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
import { MdHeadsetMic } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#28535B] text-white relative">
      {/* ================= CTA SECTION ================= */}
      <div className="border-b border-white/20 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="bg-[#6dc7d1] rounded-full">
              <img src="/assets/img1.svg" alt="phone" className="h-16 w-16" />
            </div>
            <h2 className="text-3xl font-semibold">
              Need An Expert Advice <br /> For Your Visa?
            </h2>
          </div>

          {/* Right Icons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="bg-[#6dc7d1] p-4 rounded-full hover:text-gray-400 transition cursor-pointer">
              <FaEnvelope className="h-6 w-6" />
            </div>
            <div className="bg-[#6dc7d1] p-4 rounded-full hover:text-gray-400 transition cursor-pointer">
              <FaWhatsapp className="h-6 w-6" />
            </div>
            <div className="bg-[#6dc7d1] p-4 rounded-full hover:text-gray-400 transition cursor-pointer">
              <FaPhoneAlt className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-5 gap-15">
        <div>
          <img src="/assets/logo1.png" alt="Growmore" className="h-14 mb-6" />

          <p className="text-gray-200 text-lg font-normal mb-3 max-w-[600px] text-justify">
            We are specialised in providing seamless visa solutions for
            individuals, students, and employers looking to make Australia their
            home.
          </p>

          <div className="flex gap-4 mb-6">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            <FaTiktok className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          </div>

            <Link to="/brochures">
          <button className="bg-[#6dc7d1] px-4 py-3 rounded-full font-medium hover:bg-black transition">
            Download Brochures →
          </button>
            </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Services</h3>
          <ul className="space-y-3 text-lg font-semibold text-gray-200">
            <li>
              <Link
                to="/our-services/individuals"
                className="hover:hover:text-gray-400"
              >
                ✓ For Individuals
              </Link>
            </li>
            <li>
              <Link
                to="/our-services/employers"
                className="hover:hover:text-gray-400"
              >
                ✓ For Employers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-lg font-semibold text-gray-200">
            <li>
              <Link to="/points-calculator" className="hover:text-gray-400">
                › Points Calculator
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-400">
                › Insights
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400">
                › Contact Us
              </Link>
            </li>
            <li>
              <Link to="/youtube" className="hover:text-gray-400">
                › YouTube Channel
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-6">Useful Links</h3>
          <ul className="space-y-3 text-lg font-semibold text-gray-200">
            <li>
              <Link to="#" className="hover:text-gray-400">
                Terms & Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Cancellation & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - MARA Card */}
        <div className="flex justify-center h-64 w-68">
          <img
            src="/assets/mara-card.png"
            alt="MARA Registration"
            className="rounded-xl"
          />
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/20 py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Growmore Immigration | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

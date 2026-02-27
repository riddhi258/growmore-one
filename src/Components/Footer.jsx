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
    <footer className="bg-[#28535B] text-white">

      {/* ================= CTA SECTION ================= */}
      <div className="border-b border-white/20 py-8 px-6">
        <div className="w-[1350px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="bg-[#6dc7d1] rounded-full">
              <img src="/assets/img1.svg" alt="phone" className="h-14 w-14" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Need An Expert Advice <br /> For Your Visa?
            </h2>
          </div>

          <div className="flex gap-4">
            {[FaEnvelope, FaWhatsapp, FaPhoneAlt].map((Icon, i) => (
              <div
                key={i}
                className="bg-[#6dc7d1] p-4 rounded-full hover:bg-white hover:text-[#28535B] transition cursor-pointer"
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="w-[1400px] mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15">

        {/* Logo & About */}
        <div>
          <img src="/assets/logo1.png" alt="Growmore" className="h-12 mb-6" />

          <p className="text-gray-200 text-sm w-[260px] leading-relaxed mb-6 text-justify">
            We are specialised in providing seamless visa solutions for
            individuals, students, and employers looking to make Australia their
            home.
          </p>

          <div className="flex gap-4 mb-6 text-lg">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-gray-400 cursor-pointer transition"
                />
              )
            )}
          </div>

          <Link to="/brochures">
            <button className="bg-[#6dc7d1] px-4 py-3 rounded-full font-medium hover:bg-black transition">
              Download Brochures →
            </button>
          </Link>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <Link
                to="/our-services/individuals"
                className="hover:text-gray-400 transition"
              >
                ✓ For Individuals
              </Link>
            </li>
            <li>
              <Link
                to="/our-services/employers"
                className="hover:text-gray-400  transition"
              >
                ✓ For Employers
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li>
              <Link to="/points-calculator" className="hover:text-gray-400  transition">
                › Points Calculator
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-400 transition">
                › Insights
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gray-400 transition">
                › Contact Us
              </Link>
            </li>
            <li>
              <Link to="/youtube" className="hover:text-gray-400  transition">
                › YouTube Channel
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link to="#" className="hover:text-gray-400 transition">Terms & Services</Link></li>
            <li><Link to="#" className="hover:text-gray-400 transition">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-gray-400 transition">Code of Conduct</Link></li>
            <li><Link to="#" className="hover:text-gray-400 transition">Cancellation & Refund Policy</Link></li>
          </ul>
        </div>

        {/* MARA Card */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/mara-card.png"
            alt="MARA Registration"
            className="rounded-xl max-h-60 object-contain"
          />
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-white/20 py-6 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Growmore Immigration | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
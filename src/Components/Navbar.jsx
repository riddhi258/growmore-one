import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={closeAll}>
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 text-[16px] font-medium text-green-800">
            <li>
              <Link
                to="/"
                onClick={closeAll}
                className="hover:text-green-600 transition"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("about")}
                className="flex items-center gap-1 hover:text-green-600 transition"
              >
                About Us
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-10 w-48 bg-white rounded-lg shadow-xl  transition-all duration-200 ${
                  openMenu === "about"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  to="/who-we-are"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600"
                >
                  Who We Are
                </Link>
                <Link
                  to="/who-we-are#teams"
                  onClick={closeAll}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600"
                >
                  Teams
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/migrate-to-australia"
                onClick={closeAll}
                className="hover:text-green-600 transition"
              >
                Migrate to Australia
              </Link>
            </li>
            {/* Services */}
            {/* Services */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("services")}
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <ul
                className={`absolute left-0 top-10 w-60 bg-white shadow-lg rounded-md py-2 z-50 
    transition-all duration-200 ${
      openMenu === "services"
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
              >
                {[
                  {
                    to: "/our-services/individual",
                    label: "Individual Sponsored Visa",
                  },
                  {
                    to: "/our-services/employers",
                    label: "Employer Sponsored Visa",
                  },
                  { to: "/our-services/student-visa", label: "Student Visa" },
                  {
                    to: "/our-services/gsm-general-skilled-migration",
                    label: "General Skilled Migration",
                  },
                  { to: "/our-services/dama", label: "DAMA" },
                  {
                    to: "/our-services/labour-agreement",
                    label: "Labour Agreement",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      onClick={closeAll}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                to="/points-calculator"
                onClick={closeAll}
                className="hover:text-green-600 transition"
              >
                Points Calculator
              </Link>
            </li>
            {/* Latest Updates */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("updates")}
                className="flex items-center gap-2 hover:text-green-600 transition"
              >
                Latest Updates
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu === "updates" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <ul
                className={`absolute left-0 top-10 w-48 bg-white shadow-lg rounded-md py-2 z-50 
    transition-all duration-200 ${
      openMenu === "updates"
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
              >
                <li>
                  <Link
                    to="/videos"
                    onClick={closeAll}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition"
                  >
                    Videos
                  </Link>
                </li>

                <li>
                  <Link
                    to="/news"
                    onClick={closeAll}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition"
                  >
                    News
                  </Link>
                </li>

                <li>
                  <Link
                    to="/blogs"
                    onClick={closeAll}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={closeAll}
                className="hover:text-green-600 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/book-consultation"
            onClick={closeAll}
            className="hidden lg:block bg-black text-white px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#6dc7d1] transition"
          >
            Book Consultation →
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-3 space-y-4 font-semibold text-base text-green-700">
          <Link
            to="/"
            onClick={closeAll}
            className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
          >
            Home
          </Link>

          {/* Mobile About Dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("mobileAbout")}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
            >
              About Us
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openMenu === "mobileAbout" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobileAbout" && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                <Link
                  to="/who-we-are"
                  onClick={closeAll}
                  className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
                >
                  Who We Are
                </Link>
                <Link
                  to="/who-we-are#teams"
                  onClick={closeAll}
                  className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
                >
                  Teams
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/migrate-to-australia"
            onClick={closeAll}
            className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
          >
            Migrate to Australia
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("mobileServices")}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openMenu === "mobileServices" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobileServices" && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                {[
                  {
                    to: "/our-services/individual",
                    label: "Individual Sponsored Visa",
                  },
                  {
                    to: "/our-services/employers",
                    label: "Employer Sponsored Visa",
                  },
                  { to: "/our-services/student-visa", label: "Student Visa" },
                  {
                    to: "/our-services/gsm-general-skilled-migration",
                    label: "General Skilled Migration",
                  },
                  { to: "/our-services/dama", label: "DAMA" },
                  {
                    to: "/our-services/labour-agreement",
                    label: "Labour Agreement",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={closeAll}
                    className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Latest Updates Dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("mobileUpdates")}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
            >
              Latest Updates
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openMenu === "mobileUpdates" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "mobileUpdates" && (
              <div className="ml-4 mt-2 space-y-2 text-sm">
                {[
                  { to: "/videos", label: "Videos" },
                  { to: "/news", label: "News" },
                  { to: "/blogs", label: "Blogs" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={closeAll}
                    className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/points-calculator"
            onClick={closeAll}
            className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
          >
            Points Calculator
          </Link>

          <Link
            to="/contact-us"
            onClick={closeAll}
            className="block px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-600 hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

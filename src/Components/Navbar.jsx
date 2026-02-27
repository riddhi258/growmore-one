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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 py-4 
        bg-white/90 backdrop-blur-md shadow-md"
      >
        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-14 w-40 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-green-800">

          <li>
            <Link to="/" onClick={handleLinkClick}
              className="hover:text-green-500 transition cursor-pointer">
              Home
            </Link>
          </li>

          {/* About */}
          <li className="relative">
            <button
              onClick={() => toggleMenu("about")}
              className="flex items-center gap-2 hover:text-green-500 transition cursor-pointer"
            >
              About Us
              <ChevronDown size={18}
                className={`transition-transform ${openMenu === "about" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "about" && (
              <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                <li>
                  <Link to="/who-we-are" onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link to="/who-we-are#teams" onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                    Teams
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/migrate-to-australia" onClick={handleLinkClick}
              className="hover:text-green-500 transition cursor-pointer">
              Migrate to Australia
            </Link>
          </li>

          {/* Services */}
          <li className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-2 hover:text-green-500 transition cursor-pointer"
            >
              Services
              <ChevronDown size={18}
                className={`transition-transform ${openMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "services" && (
              <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-60 py-2 z-50">
                {[
                  { to: "/our-services/individual", label: "Individual Sponsored Visa" },
                  { to: "/our-services/employers", label: "Employer Sponsored Visa" },
                  { to: "/our-services/student-visa", label: "Student Visa" },
                  { to: "/our-services/gsm-general-skilled-migration", label: "General Skilled Migration" },
                  { to: "/our-services/dama", label: "DAMA" },
                  { to: "/our-services/labour-agreement", label: "Labour Agreement" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/points-calculator" onClick={handleLinkClick}
              className="hover:text-green-500 transition cursor-pointer">
              Points Calculator
            </Link>
          </li>

          {/* Latest Updates */}
          <li className="relative">
            <button
              onClick={() => toggleMenu("updates")}
              className="flex items-center gap-2 hover:text-green-500 transition cursor-pointer"
            >
              Latest Updates
              <ChevronDown size={18}
                className={`transition-transform ${openMenu === "updates" ? "rotate-180" : ""}`}
              />
            </button>

            {openMenu === "updates" && (
              <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-48 py-2 z-50">
                <li>
                  <Link to="/videos" onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link to="/news" onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" onClick={handleLinkClick}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">
                    Blogs
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact-us" onClick={handleLinkClick}
              className="hover:text-green-500 transition cursor-pointer">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link to="/book-consultation" onClick={handleLinkClick}
          className="hidden md:block bg-black text-white px-7 py-3 rounded-full 
          hover:bg-[#6dc7d1] transition font-semibold cursor-pointer">
          Book Consultation →
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-green-800 cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
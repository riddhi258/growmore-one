import React from "react";
import { useState, useRef, useEffect } from "react";
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
    <nav
      ref={navRef}
      className="flex items-center justify-between px-4 md:px-10 py-4 bg-white shadow-md relative"
    >
      <Link to="/" onClick={handleLinkClick}>
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="h-14 w-40 object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-green-800">
        <li>
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-green-500  transition"
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleMenu("about")}
            className="flex items-center gap-2 hover:text-green-500  transition"
          >
            About Us
            <ChevronDown
              size={18}
              className={`transition-transform ${
                openMenu === "about" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMenu === "about" && (
            <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <li>
                <Link
                  to="/who-we-are"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-are#teams"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition"
                >
                  Teams
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/migrate-to-australia"
            onClick={handleLinkClick}
            className="hover:text-green-500  transition"
          >
            Migrate to Australia
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleMenu("services")}
            className="flex items-center gap-2 hover:text-green-500  transition"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform ${
                openMenu === "services" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMenu === "services" && (
            <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-60 py-2 z-50">
              <li><Link to="/our-services/individual" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Individual Sponsored Visa</Link></li>
              <li><Link to="/our-services/employers" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Employer Sponsored Visa</Link></li>
              <li><Link to="/our-services/student-visa" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Student Visa</Link></li>
              <li><Link to="/our-services/gsm-general-skilled-migration" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">General Skilled Migration</Link></li>
              <li><Link to="/our-services/dama" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">DAMA</Link></li>
              <li><Link to="/our-services/labour-agreement" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Labour Agreement</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/points-calculator"
            onClick={handleLinkClick}
            className="hover:text-green-500  transition"
          >
            Points Calculator
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => toggleMenu("updates")}
            className="flex items-center gap-2 hover:text-green-500  transition"
          >
            Latest Updates
            <ChevronDown
              size={18}
              className={`transition-transform ${
                openMenu === "updates" ? "rotate-180" : ""
              }`}
            />
          </button>

          {openMenu === "updates" && (
            <ul className="absolute left-0 mt-3 bg-white shadow-lg rounded-md w-48 py-2 z-50">
              <li><Link to="/videos" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Videos</Link></li>
              <li><Link to="/news" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">News</Link></li>
              <li><Link to="/blogs" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-gray-100 hover:text-green-500 transition">Blogs</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link
            to="/contact-us"
            onClick={handleLinkClick}
            className="hover:text-green-500  transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link
        to="/book-consultation"
        onClick={handleLinkClick}
        className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:bg-[#6dc7d1] transition font-semibold"
      >
        Book Consultation →
      </Link>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-green-800"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col font-medium text-green-800 py-4">
            <li className="px-4 py-2">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li className="px-4 py-2">
              <button
                onClick={() => toggleMenu("about")}
                className="w-full text-left flex items-center justify-between hover:text-green-500"
              >
                About Us
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openMenu === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "about" && (
                <ul className="bg-gray-100 py-2 mt-2 rounded">
                  <li className="px-4 py-2">
                    <Link to="/who-we-are" onClick={handleLinkClick}>
                      Who We Are
                    </Link>
                  </li>
                  <li className="px-4 py-2">
                    <Link to="/who-we-are#teams" onClick={handleLinkClick}>
                      Teams
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2">
              <Link
                to="/migrate-to-australia"
                onClick={handleLinkClick}
                className="hover:text-green-500"
              >
                Migrate to Australia
              </Link>
            </li>
            <li className="px-4 py-2">
              <button
                onClick={() => toggleMenu("services")}
                className="w-full text-left flex items-center justify-between hover:text-green-500"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "services" && (
                <ul className="bg-gray-100 py-2 mt-2 rounded">
                  <li className="px-4 py-2"><Link to="/our-services/individual" onClick={handleLinkClick}>Individual Sponsored Visa</Link></li>
                  <li className="px-4 py-2"><Link to="/our-services/employers" onClick={handleLinkClick}>Employer Sponsored Visa</Link></li>
                  <li className="px-4 py-2"><Link to="/our-services/student-visa" onClick={handleLinkClick}>Student Visa</Link></li>
                  <li className="px-4 py-2"><Link to="/our-services/gsm-general-skilled-migration" onClick={handleLinkClick}>General Skilled Migration</Link></li>
                  <li className="px-4 py-2"><Link to="/our-services/dama" onClick={handleLinkClick}>DAMA</Link></li>
                  <li className="px-4 py-2"><Link to="/our-services/labour-agreement" onClick={handleLinkClick}>Labour Agreement</Link></li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2">
              <Link
                to="/points-calculator"
                onClick={handleLinkClick}
                className="hover:text-green-500"
              >
                Points Calculator
              </Link>
            </li>
            <li className="px-4 py-2">
              <button
                onClick={() => toggleMenu("updates")}
                className="w-full text-left flex items-center justify-between hover:text-green-500"
              >
                Latest Updates
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openMenu === "updates" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openMenu === "updates" && (
                <ul className="bg-gray-100 py-2 mt-2 rounded">
                  <li className="px-4 py-2"><Link to="/videos" onClick={handleLinkClick}>Videos</Link></li>
                  <li className="px-4 py-2"><Link to="/news" onClick={handleLinkClick}>News</Link></li>
                  <li className="px-4 py-2"><Link to="/blogs" onClick={handleLinkClick}>Blogs</Link></li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2">
              <Link
                to="/contact-us"
                onClick={handleLinkClick}
                className="hover:text-green-500"
              >
                Contact Us
              </Link>
            </li>
            <li className="px-4 py-2">
                    <Link to="/book-consultation">
                       <button className="w-fit bg-black text-white px-7 py-3 mt-8 p-6   rounded-full font-semibold hover:bg-[#6dc7d1] transition">
                         Book Consulatation →
                       </button>
                     </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-[#eff9fb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-green-600">Stay Connected</span> with <br />
          Growmore Immigration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-center border-b pb-4 mb-6">
              Australia
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT SIDE */}
              <div className="space-y-6 border-r pr-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-600">Requesting A Call:</p>
                    <p className="font-semibold text-[#164750]">
                      (03) 8764 3334
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-gray-600">E-mail</p>
                    <p className="font-semibold text-blue-900">
                      info@growmore.one
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-gray-600">WhatsApp</p>
                    <p className="font-semibold text-[#164750]">
                      (+61) 4342 02021
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">
                {/* Monday–Friday */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600">Monday–Friday</p>
                    <p className="font-semibold text-[#164750]">9 am - 5 pm</p>
                  </div>
                </div>

                {/* Weekend */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600">Saturday–Sunday</p>
                    <p className="font-semibold text-[#164750]">Closed</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-semibold text-[#164750]">
                      313/101 Overton Road, Williams Landing, Victoria 3027,
                      Australia.
                    </p>
                  </div>
                </div>
                {/* Map */}
              </div>
            </div>
            <iframe
              className="w-full h-56 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              title="Australia Location"
              loading="lazy"
            ></iframe>
          </div>

          {/* India Card */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-center border-b pb-3 mb-6">
              India
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* LEFT SIDE */}
              <div className="space-y-6 border-r pr-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-600">Requesting A Call:</p>
                    <p className="font-semibold text-[#164750]">
                      (+91) 777 787 0015
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-gray-600">E-mail</p>
                    <p className="font-semibold text-blue-900">
                      info@growmore.one
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-gray-600">WhatsApp</p>
                    <p className="font-semibold text-[#164750]">
                      (+91) 9081899665
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">
                {/* Monday–Saturday */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600">Monday–Saturday</p>
                    <p className="font-semibold text-[#164750]">9 am - 5 pm</p>
                  </div>
                </div>

                {/* Sunday */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600">Sunday</p>
                    <p className="font-semibold text-[#164750]">Closed</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-semibold text-[#164750]">
                      Times Square 1, 201-202, Opposite Rambag, Thaltej Rd,
                      Ahmedabad, Gujarat 380059.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map */}
            <iframe
              className="w-full h-56 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              title="India Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

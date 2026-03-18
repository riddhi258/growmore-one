import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CommentSection() {
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState(null);

  const pageUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check this out!");

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${text}%20${pageUrl}`,
    telegram: `https://t.me/share/url?url=${pageUrl}&text=${text}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${pageUrl}`,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please verify the captcha");
      return;
    }

    console.log("Form submitted with token:", token);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-start px-4">
      {/* Wrapper (controls width) */}
      <div className="w-full max-w-5xl">
        <span className="flex flex-cols border-1 border-gray-400"></span>

        {/* Social Icons - RIGHT SIDE */}
        <div className="flex justify-end mb-2  mt-4 text-gray-700 text-2xl">
          <div className="flex gap-6">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 "
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href={shareLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href={shareLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>

        {/* Card */}
        <div className="w-lg bg-[#E6EBDD] rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E3A3A] mb-2">
            Add a comment
          </h2>

          <p className="text-sm text-gray-600 mb-6 mt-4">
            By using this form you agree with the message storage, you can
            contact us directly now
          </p>
          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Inputs Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="mt-1 w-full px-4 py-2 rounded-full border border-gray-100 bg-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="mt-1 w-full px-4 py-2 rounded-full border border-gray-100 bg-white "
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="mt-1 w-full px-4 py-2 rounded-full border  border-gray-100 bg-white"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message here..."
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-100 bg-white"
              ></textarea>
            </div>

            {/* Google reCAPTCHA */}
            <div className="mt-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                 sitekey="6Lcb_HEsAAAAAJESdQwpfYltspCpspxJPbCyM58Z"
                onChange={(value) => setToken(value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 bg-[#2E2E2E] text-white px-6 py-3 rounded-full hover:bg-black transition"
            >
              Post Comment
            </button>
          </form>
        </div>
         <span className="flex flex-cols border-1 border-gray-400 mt-4"></span>
      </div>
    </div>
  );
}

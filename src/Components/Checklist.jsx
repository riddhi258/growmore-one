import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const Checklist = () => {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    location: "",
    qualification: "",
    occupation: "",
    skillsAssessment: "",
    experience: "",
    jobOffer: "",
    resume: null,
  });

  const [dialCode, setDialCode] = useState("91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalPhone = `+${dialCode}${phoneNumber}`;

    const finalData = {
      ...formData,
      phone: finalPhone,
    };

    console.log(finalData);
  };

  return (
    <div>
          <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            DAMA Visa Interest & Pre-Screening Form
          </h1>
        </div>
      </section>
      {" "}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-md bg-[#eff9fb]">
          <h2 className="text-xl font-semibold mb-6">
            Applicant's Information:
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                className="input-style"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>

            {/* 🔥 Updated Phone Section */}
            <div className="flex gap-3">
              {/* Country Code */}
              <div className="w-32">
                <PhoneInput
                  country={"au"}
                  enableSearch={true}
                  disableCountryCode={false}
                  value={dialCode}
                  onChange={(value, data) => {
                    setDialCode(data.dialCode);
                  }}
                  inputProps={{ readOnly: true }}
                  containerClass="w-full"
                  inputClass="!w-full !h-[46px] !rounded-md !border !border-gray-300"
                  buttonClass="!border !border-gray-300 !rounded-md"
                />
              </div>

              {/* Phone Number */}
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-[46px] px-4 rounded-md border border-gray-300 focus:outline-none bg-white"
                  required
                />
              </div>
            </div>

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Country of Residence"
              onChange={handleChange}
              className="input-style"
            />

            {/* Current Location */}
            <div>
              <p className="label">Current Location</p>
              <div className="flex gap-6 mt-2">
                <label>
                  <input
                    type="radio"
                    name="location"
                    value="Australia"
                    onChange={handleChange}
                  />{" "}
                  Australia
                </label>
                <label>
                  <input
                    type="radio"
                    name="location"
                    value="Outside Australia"
                    onChange={handleChange}
                  />{" "}
                  Outside Australia
                </label>
              </div>
            </div>

            {/* Qualification */}
            <div>
              <p className="label">What is your highest qualification?</p>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {[
                  "No formal qualification",
                  "High School",
                  "Trade Certificate / Diploma",
                  "Bachelor’s Degree",
                  "Master’s Degree or higher",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="qualification"
                      value={item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <p className="label">Upload Resume</p>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="input-style file:bg-gray-200 file:border-0 file:px-4 file:py-2 file:rounded-md"
              />
            </div>

            {/* Occupation */}
            <input
              type="text"
              name="occupation"
              placeholder="Occupation of Interest"
              onChange={handleChange}
              className="input-style"
            />

            {/* Skills Assessment */}
            <div>
              <p className="label">
                Do you have a valid Skills Assessment for your occupation?
              </p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No", "In Process"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="skillsAssessment"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="label">
                How many years of full-time experience do you have?
              </p>
              <div className="flex flex-wrap gap-6 mt-2">
                {["Less than 1 year", "1-2 years", "2-5 years", "5+ years"].map(
                  (item) => (
                    <label key={item}>
                      <input
                        type="radio"
                        name="experience"
                        value={item}
                        onChange={handleChange}
                      />{" "}
                      {item}
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Job Offer */}
            <div>
              <p className="label">
                Do you already have a job offer in a DAMA region?
              </p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No", "Currently looking for one"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="jobOffer"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6Lcb_HEsAAAAAJESdQwpfYltspCpspxJPbCyM58Z"
              ref={recaptchaRef}
            />
            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Submit →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checklist;

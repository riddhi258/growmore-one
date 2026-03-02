import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Checklistgsm = () => {
  const recaptchaRef = useRef(null);
  
    const [dialCode, setDialCode] = useState("91");
    const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    location: "",
    age: "",
    qualification: "",
    occupation: "",
    skillsAssessment: "",
    overseasExperience: "",
    australiaExperience: "",
    englishTest: "",
    estimatedPoints: "",
    partnerSkills: "",
    studiedInAustralia: "",
    professionalYear: "",
    regionalWork: "",
    comments: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const captchaValue = recaptchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    console.log(formData);
  };
  return (
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            GSM Visa Eligibility Assessment Form
          </h1>
        </div>
      </section>{" "}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-md bg-[#eff9fb]">
          <h2 className="text-xl font-normal mb-3  p-1">Basic Info:</h2>

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
              <p className="label">Are you currently in Australia?</p>
              <div className="flex gap-6 mt-2">
                <label>
                  <input
                    type="radio"
                    name="location"
                    value="yes"
                    onChange={handleChange}
                  />{" "}
                  yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="location"
                    value="No"
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <div>
              <h2 className="mb-3  text-xl font-normal">
                Eligibility Criteria:
              </h2>
              <label className="mb-2 p-2 mt-3">
                Age
                <select
                  name="Age"
                  required
                  className="bg-white rounded-lg px-4 py-3 w-full border border-gray-300 mt-3"
                >
                  <option value="">18-24</option>
                  <option>25-32</option>
                  <option>40-44</option>
                  <option>45+</option>
                </select>
              </label>
              <input
                type="text"
                name="Highest Eduction Qualification"
                placeholder="Highest Eduction Qualification"
                onChange={handleChange}
                className="input-style mb-3 mt-3"
                required
              />
              <input
                type="text"
                name="Field of Study/ Nominated Occupation"
                placeholder="Field of Study/ Nominated Occupation"
                onChange={handleChange}
                className="input-style mb-3 mt-1"
                required
              />
            </div>
            {/* Qualification */}
            <div>
              <p className="label">Do you have a valid Skills Assessment?</p>
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
            <h2 className="mb-3  text-xl font-normal">
              Work Experience in Nominated Occupation
            </h2>

            <div>
              <p className="label">Overseas </p>
              <div className="flex gap-6 mt-2">
                {["0-1", "1-3", "3-5", "5+"].map((item) => (
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

            <div>
              <p className="label">Australia </p>
              <div className="flex gap-6 mt-2">
                {["0-1", "1-3", "3-5", "5+"].map((item) => (
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
              <p className="label">English Test Taken?</p>
              <div className="flex flex-wrap gap-6 mt-2">
                {["yes", "no"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="experience"
                      value={item}
                      onChange={handleChange}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <h2 className="mb-3  text-xl font-normal">Points Related:</h2>
            {/* Skills Assessment */}
            <div className="grid gap-4">
              <input
                type="text"
                name="Estimated Points Score(if known)"
                placeholder="Estimated Points Score(if known)"
                onChange={handleChange}
                className="input-style"
                required
              />
              <input
                type="email"
                name="Are you claiming partner skills or qualifications?"
                placeholder="Are you claiming partner skills or qualifications?"
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div>
              <p className="label">Have you studied in Australia?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
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
            <div>
              <p className="label">Have you done NAATI or Professional Year?</p>
              <div className="flex gap-6 mt-2">
                {["Yes", "No"].map((item) => (
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
            <div>
              <p className="label">
                Are you currently working in a regional area?
              </p>
              <div className="flex flex-wrap gap-6 mt-2">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="experience"
                      value={item}
                      onChange={handleChange}
                    />{" "}
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
         {/* Comments */}
            <textarea
              name="comments"
              placeholder="Your Comments"
              className="input-style h-24"
              onChange={handleChange}
            />

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

export default Checklistgsm;

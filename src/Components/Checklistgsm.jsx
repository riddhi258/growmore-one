import React, { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


const Checklistgsm = () => {
  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current?.getValue();

    if (!token) return alert("Please verify the captcha");
    if (!phoneNumber) return alert("Please enter phone number");

    setLoading(true);

    try {
      const form = e.target;
      const payload = {
        fullName: form.fullName.value,
        email: form.email.value,
        phone: `+${dialCode}${phoneNumber}`,
        country: form.country.value,
        location: form.location.value,
        age: form.age.value,
        qualification: form.qualification.value,
        occupation: form.occupation.value,
        skillsAssessment: form.skillsAssessment.value,
        overseasExperience: form.overseasExperience.value,
        australiaExperience: form.australiaExperience.value,
        englishTest: form.englishTest.value,
        estimatedPoints: form.estimatedPoints.value,
        partnerSkills: form.partnerSkills.value,
        studiedInAustralia: form.studiedInAustralia.value,
        professionalYear: form.professionalYear.value,
        regionalWork: form.regionalWork.value,
        comments: form.comments.value,
        captchaToken: token, // Sent to backend
      };

      // FIX: Ensure this URL matches your file path exactly (lowercase)
      const response = await fetch("/api/gsm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Thank you! Our team will contact you shortly.");
        form.reset();
        setPhoneNumber("");
        recaptchaRef.current.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            GSM Visa Eligibility Assessment Form
          </h1>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl shadow-md bg-[#eff9fb]">
          <h2 className="text-xl mb-4">Basic Info</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-style"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="input-style"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <div className="w-32">
                <PhoneInput
                  country={"au"}
                  enableSearch
                  value={dialCode}
                  onChange={(value, data) => setDialCode(data.dialCode)}
                  inputProps={{ readOnly: true }}
                  containerClass="w-full"
                  inputClass="!w-full !h-[46px] !rounded-md !border !border-gray-300"
                />
              </div>

              <input
                type="tel"
                placeholder="Contact Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 h-[46px] px-4 !rounded-md !border !border-gray-300 bg-white"
                required
              />
            </div>

            {/* Country */}
            <input
              type="text"
              name="country"
              placeholder="Country of Residence"
              className="input-style"
            />

            {/* Location */}
            <div>
              <p className="label">Are you currently in Australia?</p>
              <div className="flex gap-6 mt-2">
                <label>
                  <input type="radio" name="location" value="Yes" /> Yes
                </label>

                <label>
                  <input type="radio" name="location" value="No" /> No
                </label>
              </div>
            </div>

            {/* Eligibility */}
            <h2 className="text-xl">Eligibility Criteria</h2>

            <select name="age" required className="input-style">
              <option value="">Select Age</option>
              <option>18-24</option>
              <option>25-32</option>
              <option>33-39</option>
              <option>40-44</option>
              <option>45+</option>
            </select>

            <input
              type="text"
              name="qualification"
              placeholder="Highest Education Qualification"
              className="input-style"
              required
            />

            <input
              type="text"
              name="occupation"
              placeholder="Field of Study / Nominated Occupation"
              className="input-style"
              required
            />

            {/* Skills Assessment */}
            <div>
              <p className="label">Do you have a valid Skills Assessment?</p>
              <div className="flex gap-6">
                {["Yes", "No", "In Process"].map((item) => (
                  <label key={item}>
                    <input type="radio" name="skillsAssessment" value={item} />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <h2 className="text-xl">Work Experience in Nominated Occupation</h2>

            <div>
              <p className="label">Overseas</p>
              <div className="flex gap-6">
                {["0-1", "1-3", "3-5", "5+"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="overseasExperience"
                      value={item}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="label">Australia</p>
              <div className="flex gap-6">
                {["0-1", "1-3", "3-5", "5+"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="australiaExperience"
                      value={item}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* English */}
            <div>
              <p className="label">English Test Taken?</p>
              <div className="flex gap-6">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input type="radio" name="englishTest" value={item} />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Points */}
            <h2 className="text-xl">Points Related</h2>

            <input
              type="text"
              name="estimatedPoints"
              placeholder="Estimated Points Score (if known)"
              className="input-style"
            />

            <input
              type="text"
              name="partnerSkills"
              placeholder="Are you claiming partner skills or qualifications?"
              className="input-style"
            />

            {/* Study */}
            <div>
              <p className="label">Have you studied in Australia?</p>
              <div className="flex gap-6">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="studiedInAustralia"
                      value={item}
                    />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Professional Year */}
            <div>
              <p className="label">Have you done NAATI or Professional Year?</p>
              <div className="flex gap-6">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input type="radio" name="professionalYear" value={item} />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Regional Work */}
            <div>
              <p className="label">Working in Regional Area?</p>
              <div className="flex gap-6">
                {["Yes", "No"].map((item) => (
                  <label key={item}>
                    <input type="radio" name="regionalWork" value={item} />{" "}
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Resume */}
            <div>
              <p className="label">Upload Resume</p>
              <input
                type="file"
                name="resume"
                className="input-style file:bg-gray-200 file:border-0 file:px-4 file:py-2"
              />
            </div>

            {/* Comments */}
            <textarea
              name="comments"
              placeholder="Your Comments"
              className="input-style h-24"
            />

               <div className="flex justify-start">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                  />
                </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#6dc7d1] px-8 py-2 text-white rounded-full"
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checklistgsm;

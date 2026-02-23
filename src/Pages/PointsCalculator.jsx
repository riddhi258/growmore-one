import React, { useState } from "react";
import VisaStep from "../Components/VisaStep";
import AgeStep from "../Components/AgeStep";
import EnglishStep from "../Components/EnglishStep";
import OverseasStep from "../Components/OverseasStep";
import AustralianStep from "../Components/AustralianStep";
import EducationStep from "../Components/EducationStep";
import SpecialEduStep from "../Components/SpecialEduStep";
import Credit from "../Components/Credit";
import ScorePanel from "../Components/ScorePanel";

export default function PointsCalculator() {
  // step controller
  const [step, setStep] = useState(1);

  // score state
  const [scores, setScores] = useState({
    visa: 0,
    age: 0,
    english: 0,
    overseas: 0,
    australian: 0,
    education: 0,
    // australianEdu: 0,
    specialist: 0,
    community: 0,
    partner: 0,
    professional: 0,
  });

  const updateScore = (key, value) => {
    setScores((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full">
      {/* ================= HEADER BANNER ================= */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Points Calculator
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Points Calculator
          </p>
        </div>
      </section>
      <div className="calculator-container">
        {/* LEFT FORM */}
        <div className="form-panel">
          {step === 1 && (
            <VisaStep updateScore={updateScore} nextStep={nextStep} />
          )}
          {step === 2 && (
            <AgeStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <EnglishStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 4 && (
            <OverseasStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 5 && (
            <AustralianStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 6 && (
            <EducationStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 7 && (
            <SpecialEduStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 8 && (
            <Credit
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </div>
        {/* RIGHT PANEL */}
        <ScorePanel scores={scores} total={totalScore} />
      </div>
      <div className="max-w-7xl mx-auto px-4 text-justify md:px-16 py-20">
        <p>
          This New Point Test method is designed to help you determine
          eligibility for skilled migration to Australia. This testing mainly
          assesses your age, work experience, educational qualifications, and
          English language ability. In this, your total points will be summed
          and compared to the number of points required to qualify for the visa.
        </p>
        <p className="mt-4">
          Understanding the New Point Test System Australia is crucial for all
          applicants in the Skilled Migration program. This method will assist
          applicants in understanding their overall status and potential areas
          to improve to enhance the overall score and increase the opportunity
          for success.
        </p>
        <p className="mt-4">
          So, use our calculator now and get a clear idea of your eligibility
          under the new system, and if you need any personalized advice, contact
          our expert Immigration Agent today!
        </p>
      </div>
    </div>
  );
}

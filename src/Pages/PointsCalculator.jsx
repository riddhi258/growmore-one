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
    professional: 0
  });

  const updateScore = (key, value) => {
    setScores(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div className="calculator-container">

      {/* LEFT FORM */}
<div className="form-panel">

  {step === 1 && <VisaStep updateScore={updateScore} nextStep={nextStep} />}
  {step === 2 && <AgeStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step === 3 && <EnglishStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step === 4 && <OverseasStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step === 5 && <AustralianStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step ===6 && <EducationStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step === 7 && <SpecialEduStep updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}
  {step === 8 && <Credit updateScore={updateScore} nextStep={nextStep} prevStep={prevStep} />}

</div>
      {/* RIGHT PANEL */}
      <ScorePanel scores={scores} total={totalScore} />

    </div>
  );
}

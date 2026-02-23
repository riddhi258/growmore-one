import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function PartnerQualificationStep({
  updateScore,
  nextStep,
  prevStep
}) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectOption = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("partnerQualification", pts);
  };

  return (
    <div className="card">

      <StepHeader
        title="Partner Qualifications"
        points={points}
      />

      <div className="question">
        <p className="mb-3 font-medium">
          Do you have a partner (spouse or de facto partner) who meets the following criteria?
        </p>
      </div>

      {/* 10 POINTS - SKILLED PARTNER */}
      <label className={`option ${selected === "skilled_partner" ? "active" : ""}`}>
        <input
          type="radio"
          name="partnerQualification"
          checked={selected === "skilled_partner"}
          onChange={() => selectOption("skilled_partner", 10)}
        />
        <div>
          <strong>10 points</strong>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>Partner aged under 45</li>
            <li>Partner has Competent English</li>
            <li>Partner is an applicant of the same visa subclass</li>
            <li>Partner has suitable skilled occupation + positive skills assessment</li>
          </ul>
        </div>
      </label>

      {/* 10 POINTS - SINGLE / PR */}
      <label className={`option ${selected === "single_pr" ? "active" : ""}`}>
        <input
          type="radio"
          name="partnerQualification"
          checked={selected === "single_pr"}
          onChange={() => selectOption("single_pr", 10)}
        />
        <div>
          <strong>10 points</strong>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>No spouse or de facto partner</li>
            <li>OR partner is Australian PR / Citizen</li>
          </ul>
        </div>
      </label>

      {/* 5 POINTS */}
      <label className={`option ${selected === "competent_partner" ? "active" : ""}`}>
        <input
          type="radio"
          name="partnerQualification"
          checked={selected === "competent_partner"}
          onChange={() => selectOption("competent_partner", 5)}
        />
        <div>
          <strong>5 points</strong>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>Partner has Competent English</li>
            <li>Partner is applicant of same visa subclass</li>
            <li>Partner is NOT Australian PR / Citizen</li>
          </ul>
        </div>
      </label>

      {/* 0 POINTS */}
      <label className={`option ${selected === "none" ? "active" : ""}`}>
        <input
          type="radio"
          name="partnerQualification"
          checked={selected === "none"}
          onChange={() => selectOption("none", 0)}
        />
        <div>
          <strong>0 points</strong>
          <ul className="list-disc pl-6 text-sm mt-2 space-y-1">
            <li>None of the above</li>
          </ul>
        </div>
      </label>

      {/* Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px" }}>
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

        <button
          className="next-btn"
          onClick={nextStep}        >
          Next →
        </button>
      </div>

    </div>
  );
}
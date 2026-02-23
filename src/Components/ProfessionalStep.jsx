import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function ProfessionalStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectProfessional = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("professional", pts);   
  };

  return (
    <div className="card">
      {/* FIXED (removed line break inside quotes) */}
      <StepHeader
        title="Professional Year in Australia"
        points={points}
      />

      <p className="question">
        Degree, diploma, advanced diploma or trade qualification from an
        Australian educational institution which took at least 2 years of
        full-time study and was taught in English.
      </p>

      {/* YES OPTION */}
      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="radio"
          name="professional    "
          checked={selected === "5"}
          onChange={() => selectProfessional("5", 5)}
        />
        <span>Yes</span>
      </label>

      {/* NO OPTION */}
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="professional"
          checked={selected === "0"}
          onChange={() => selectProfessional("0", 0)}
        />
        <span>No</span>
      </label>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

        {/* Prevent user going ahead without selection */}
        <button
          className="next-btn"
          onClick={nextStep}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

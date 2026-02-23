import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function AustralianEduStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectAustralianEdu = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("australianEdu", pts);
  };

  return (
    <div className="card">
      {/* FIXED (removed line break inside quotes) */}
      <StepHeader
        title="Australian Educational Qualification"
        points={points}
      />

      <p className="question">
        Degree, diploma, advanced diploma or trade qualification from an
        Australian educational institution which took at least 2 years of
        full-time study and was taught in English.
      </p>

      {/* YES OPTION */}
      <label className={`option ${selected === "10" ? "active" : ""}`}>
        <input
          type="radio"
          name="australianEdu"
          checked={selected === "10"}
          onChange={() => selectAustralianEdu("10", 10)}
        />
        <span>Yes</span>
      </label>

      {/* NO OPTION */}
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="australianEdu"
          checked={selected === "0"}
          onChange={() => selectAustralianEdu("0", 0)}
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

import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function OverseasStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectAustralianExperience = (value, points) => {
    setSelected(value);
    setPoints(points);
    updateScore("australian", points);
  };

  return (
    <div className="card">
      <StepHeader title="Australian Work Experience" points={points} />
      <div className="question">
        <p className="mb-3 font-medium">
          In the last 10 years, how long have you worked in your nominated
          skilled occupation or closely related occupation in Australia?
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            The maximum points that can be awarded for 'Overseas Work
            Experience' and 'Australian Work Experience' combined, is 20 points
          </li>
        </ul>
      </div>
      <label className={`option ${selected === "20" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "20"}
          onChange={() => selectAustralianExperience("20", 20)}
        />
        <span>8+ years</span>
      </label>
      <label className={`option ${selected === "15" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "15"}
          onChange={() => selectAustralianExperience("15", 15)}
        />
        <span>5 to 7 years</span>
      </label>
      <label className={`option ${selected === "10" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "10"}
          onChange={() => selectAustralianExperience("10", 10)}
        />
        <span>3 to 4 years</span>
      </label>

      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "5"}
          onChange={() => selectAustralianExperience("5", 5)}
        />
        <span>1 to 2 years </span>
      </label>

      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "0"}
          onChange={() => selectAustralianExperience("0", 0)}
        />
        <span>Less than 1 year </span>
      </label>

      {/* Buttons */}
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

        <button className="next-btn" onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}

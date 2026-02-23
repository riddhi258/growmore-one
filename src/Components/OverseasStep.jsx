import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function OverseasStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectExperience = (value, points) => {
    setSelected(value);
    setPoints(points);
    updateScore("overseas", points);
  };

  return (
    <div className="card">
      <StepHeader title="Overseas Work Experience" points={points} />
      <div className="question">
        <p className="mb-3 font-medium">
          In the last 10 years, how long have you worked in your nominated
          skilled occupation or closely related occupation outside Australia?
        </p>

        <ul className="list-disc font-sm pl-6 space-y-2 text-gray-700 ">
          <li>
            Employment must be at least 20 hours per week and for
            remuneration.
          </li>
          <li>
            The maximum combined points for Overseas Work Experience and
             Australian Work Experience is 20 points.
          </li>
        </ul>
      </div>
      <label className={`option ${selected === "15" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "15"}
          onChange={() => selectExperience("15", 15)}
        />
        <span>8+ years</span>
      </label>
      <label className={`option ${selected === "15" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "10"}
          onChange={() => selectExperience("10", 10)}
        />
        <span>5 to 7 years</span>
      </label>
      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "5"}
          onChange={() => selectExperience("5", 5)}
        />
        <span>3 to 4 years</span>
      </label>

      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "0"}
          onChange={() => selectExperience("0", 0)}
        />
        <span>Less than 3 years </span>
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

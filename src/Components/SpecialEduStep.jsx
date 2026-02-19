import React, { useState } from "react";
import TempHeader from "./TempHeader";

export default function SpecialEduStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectSpecialEdu = (value, points) => {
    setSelected(value);
    setPoints(points);
    updateScore("specialEdu", points);
  };

  return (
    <div className="card">
      <TempHeader title="Specialist Educational Qualification
" points={points} />
      <p className="question">
        A Masters degree by research or a Doctorate degree from an Australian educational institution that included at least two academic years in a relevant field (Natural and Physical Sciences, Information Technology or Engineering and Related Technologies).
      </p>

            <label className={`option ${selected === "10" ? "active" : ""}`}>
        <input
          type="radio"
          name="specialEdu"
          checked={selected === "10"}
          onChange={() => selectSpecialEdu("10", 10)}
        />
        <span>Yes</span>
      </label>
      
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="specialEdu"
          checked={selected === "0"}
          onChange={() => selectSpecialEdu("0", 0)}
        />
        <span>No</span>
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

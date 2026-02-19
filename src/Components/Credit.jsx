import React, { useState } from "react";
import TempHeader from "./TempHeader";

export default function SpecialEduStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectCredit = (value, points) => {
    setSelected(value);
    setPoints(points);
    updateScore("credit", points);
  };

  return (
    <div className="card">
      <TempHeader title="Accredited Community Language
" points={points} />
      <p className="question">
       Do you hold any one of the following?
Accreditation at the paraprofessional level or above;
Certification at the certified provisional level or above;
A community language credential
      </p>

            <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="radio"
          name="credit"
          checked={selected === "5"}
          onChange={() => selectCredit("5", 5)}
        />
        <span>Yes</span>
      </label>
      
      <label className= {`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="credit"
          checked={selected === "0"}
          onChange={() => selectCredit("0", 0)}
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

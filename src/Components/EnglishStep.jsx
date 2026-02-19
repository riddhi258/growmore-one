import React, { useState } from "react";
import TempHeader from "./TempHeader";

export default function EnglishStep({ updateScore, nextStep, prevStep }) {

  const [selected, setSelected] = useState(null);
  const [points, setPoints] = useState(0);

  const selectEnglish = (level, pts) => {
    setSelected(level);
    setPoints(pts);
    updateScore("english", pts);
  };

  return (
    <div className="card">

      {/* Header with score */}
      <TempHeader title="English Language" points={points} />

      <p className="question">What is your English test level?</p>

      {/* Competent */}
      <label className={`option ${selected==="competent" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected==="competent"}
          onChange={() => selectEnglish("competent", 0)}
        />
        <div>
          <b>Competent English</b>
          <p>IELTS 6.0 each band OR PTE 50</p>
        </div>
      </label>

      {/* Proficient */}
      <label className={`option ${selected==="proficient" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected==="proficient"}
          onChange={() => selectEnglish("proficient", 10)}
        />
        <div>
          <b>Proficient English</b>
          <p>IELTS 7.0 each band OR PTE 65 </p>
        </div>
      </label>

      {/* Superior */}
      <label className={`option ${selected==="superior" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected==="superior"}
          onChange={() => selectEnglish("superior", 20)}
        />
        <div>
          <b>Superior English</b>
          <p>IELTS 8.0 each band OR PTE 79 </p>
        </div>
      </label>

      {/* Navigation Buttons */}
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"25px"}}>
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

        <button
          className="next-btn"
          disabled={!selected}
          onClick={nextStep}
        >
          Next →
        </button>
      </div>

    </div>
  );
}

import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function OverseasStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectEducation = (value, points) => {
    setSelected(value);
    setPoints(points);
    updateScore("education", points);
  };

  return (
    <div className="card">
      <StepHeader title="Educational Qualifications
" points={points} />
      <p className="question">
What is your highest qualification?
        </p>
      <label className={`option ${selected === "20" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "20"}
          onChange={() => selectEducation("20", 20)}
        />
        <span>A Doctorate degree (PhD) from an Australian educational institution or a Doctorate from another educational institution that is of a recognised standard
</span> 
      </label>
          <label className={`option ${selected === "15" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "15"}
          onChange={() => selectEducation("15", 15)}
        />
        <span>A Bachelor degree from an Australian educational institution or a Bachelor qualification from another educational institution that is of a recognised standard
</span>
      </label>
            <label className={`option ${selected === "10" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "10"}
          onChange={() => selectEducation("10", 10)}
        />
        <span>A diploma or trade qualification completed in Australia; or other award or qualification recognised by the skills assessing authority</span>  
      </label>
      
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="radio"
          name="exp"
          checked={selected === "0"}
          onChange={() => selectEducation("0", 0)}
        />
        <span>No Recognised Qualification</span>
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

        <button className="next-btn"  onClick={nextStep}>
          Next →
        </button>
      </div>
    </div>
  );
}

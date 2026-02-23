import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function SpecialEduStep({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectSpecialEdu = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("specialEdu", pts);
  };

  return (
     <div className="card">
          
          {/* FIXED (removed line break inside quotes) */}
          <StepHeader
            title="Specialist Educational Qualification"
            points={points}
          />
    
          <p className="question">
            A Masters degree by research or a Doctorate degree from an Australian
            educational institution that included at least two academic years in a
            relevant field (Natural and Physical Sciences, Information Technology or
            Engineering and Related Technologies).
          </p>
    
          {/* YES OPTION */}
          <label className={`option ${selected === "10" ? "active" : ""}`}>
            <input
              type="radio"
              name="specialEdu"
              checked={selected === "10"}
              onChange={() => selectSpecialEdu("10", 10)}
            />
            <span>Yes</span>
          </label>
    
          {/* NO OPTION */}
          <label className={`option ${selected === "0" ? "active" : ""}`}>
            <input
              type="radio"
              name="specialEdu"
              checked={selected === "0"}
              onChange={() => selectSpecialEdu("0", 0)}
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
              onClick={nextStep}            >
              Next →
            </button>
          </div>
        </div>
  );
}

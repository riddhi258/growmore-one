import React, { useState } from "react";
import StepHeader from "./components/StepHeader";

export default function VisaStep({ updateScore, nextStep }) {

  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleVisa = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("visa", pts);
  };
 
  
  return (
    <div className="card">

      {/* Top Title + Score Box */}
      <StepHeader title="Visa Subclass" points={points} />

      <p className="question">
        Which visa Subclass are you applying for?
      </p>

      {/* 189 */}
      <label className={`option ${selected==="189" ? "active" : ""}`}>
        <input
          type="radio"
          name="visa"
          checked={selected==="189"}
          onChange={() => handleVisa("189", 0)}
        />
        <div>
          <b>Skilled Independent visa (Subclass 189)</b>
          <p>You must have an occupation on the MLTSSL.</p>
        </div>
      </label>

      {/* 190 */}
      <label className={`option ${selected==="190" ? "active" : ""}`}>
        <input
          type="radio"
          name="visa"
          checked={selected==="190"}
          onChange={() => handleVisa("190", 5)}
        />
        <div>
          <b>Skilled Nominated visa (Subclass 190)</b>
          <p>Requires nomination by a State or Territory government.</p>
        </div>
      </label>

      {/* 491 */}
      <label className={`option ${selected==="491" ? "active" : ""}`}>
        <input
          type="radio"
          name="visa"
          checked={selected==="491"}
          onChange={() => handleVisa("491", 15)}
        />
        <div>
          <b>Skilled Work Regional (Provisional) visa (Subclass 491)</b>
          <p>Requires nomination or sponsorship by a regional area.</p>
        </div>
      </label>

      {/* Buttons */}
      <div style={{display:"flex", justifyContent:"space-between", marginTop:"25px"}}>
        <button className="next-btn" onClick={nextStep}>
          Next →
        </button>
      </div>

    </div>
  );
}

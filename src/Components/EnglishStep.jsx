import React, { useState } from "react";
import StepHeader from "./StepHeader";

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
      <StepHeader title="English Language" points={points} />

      <p className="question mb-4 font-medium">
        What is your English test level?
      </p>

      {/* ---------------- COMPETENT ---------------- */}
      <label className={`option ${selected === "competent" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected === "competent"}
          onChange={() => selectEnglish("competent", 0)}
        />

        <div>
          <b>Competent English (0 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li>Passport from UK, USA, Canada, New Zealand or Ireland</li>
            <li>IELTS: at least 6 in each component</li>
            <li>OET: at least 'B' in each component</li>
            <li>TOEFL iBT: 12 Listening, 13 Reading, 21 Writing, 18 Speaking</li>
            <li>PTE Academic: at least 50 in each component</li>
            <li>Cambridge (CAE): at least 169 in each component</li>
          </ul>
        </div>
      </label>

      {/* ---------------- PROFICIENT ---------------- */}
      <label className={`option ${selected === "proficient" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected === "proficient"}
          onChange={() => selectEnglish("proficient", 10)}
        />

        <div>
          <b>Proficient English (10 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li>IELTS: at least 7 in each component</li>
            <li>OET: at least 'B' in each component</li>
            <li>TOEFL iBT: 24 Listening, 24 Reading, 27 Writing, 23 Speaking</li>
            <li>PTE Academic: at least 65 in each component</li>
            <li>Cambridge (CAE): at least 185 in each component</li>
          </ul>
        </div>
      </label>

      {/* ---------------- SUPERIOR ---------------- */}
      <label className={`option ${selected === "superior" ? "active" : ""}`}>
        <input
          type="radio"
          name="english"
          checked={selected === "superior"}
          onChange={() => selectEnglish("superior", 20)}
        />

        <div>
          <b>Superior English (20 points)</b>

          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            <li>IELTS: at least 8 in each component</li>
            <li>OET: at least 'A' in each component</li>
            <li>TOEFL iBT: 28 Listening, 29 Reading, 30 Writing, 26 Speaking</li>
            <li>PTE Academic: at least 79 in each component</li>
            <li>Cambridge (CAE): at least 200 in each component</li>
          </ul>
        </div>
      </label>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

export default function ScorePanel({ scores, total }) {

  // 🎯 eligibility check
  const isEligible = total >= 65;

  // dynamic colors
  const progressColor = isEligible ? "#22c55e" : "#20604a";   // green : teal
  const textColor = isEligible ? "#16a34a" : "#111";

  return (
    <div className={`score-panel ${isEligible ? "eligible" : ""}`}>
      
      {/* CIRCLE SCORE */}
      <div className="circle-wrapper">
        <div className="circle">
          <CircularProgressbar
            value={total}
            maxValue={100}
            text={`${total}`}
            styles={buildStyles({
              textSize: "18px",
              pathColor: progressColor,
              textColor: textColor,
              trailColor: "#e5e7eb",
              pathTransitionDuration: 0.6
            })}
          />

          {/* label inside circle */}
          <div className="circle-label">
            {isEligible ? "Eligible Score" : "Total Score"}
          </div>
        </div>
      </div>

      {/* SCORE TABLE */}
      <table className="score-table">
        <tbody>
          <ScoreRow title="Visa Subclass" value={scores.visa} />
          <ScoreRow title="Age" value={scores.age} />
          <ScoreRow title="English Language" value={scores.english} />
          <ScoreRow title="Overseas Work Experience" value={scores.overseas} />
          <ScoreRow title="Australian Work Experience" value={scores.australian}/>
          <ScoreRow title="Educational Qualifications" value={scores.education}/>
          <ScoreRow title="Australian Educational Qualification" value={scores.australianEdu}/>
          <ScoreRow title="Specialist Educational Qualification" value={scores.specialEdu}/>
          <ScoreRow title="Accredited Community Language" value={scores.community}/>
          <ScoreRow title="Partner Qualifications" value={scores.partnerQualification}/>
          <ScoreRow title="Professional Year in Australia" value={scores.professional}/>
        </tbody>
      </table>

    </div>
  );
}

function ScoreRow({ title, value }) {
  return (
    <tr>
      <td className="td-left section-title">{title}</td>
      <td className="td-right rs-vl">{value}</td>
    </tr>
  );
}
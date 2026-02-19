import { CircularProgressbar,buildStyles}from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
export default function ScorePanel({ scores, total }) {
  return (
    <div className="score-panel">

      {/* CIRCLE SCORE */}
     <div className="circle-wrapper">
  <div className="circle">
    <CircularProgressbar
      value={total}
      maxValue={100}
      text={`${total}`}
      styles={buildStyles({
        textSize: "18px",
        pathColor: "#20604a",
        textColor: "#111",
        trailColor: "#e5e7eb",
      })}
    />

    {/* label inside circle */}
    <div className="circle-label">Total Score</div>
  </div>
</div>


      {/* SCORE TABLE (Same as WordPress) */}
      <table className="score-table">
        <tbody>

          <ScoreRow title="Visa Subclass" value={scores.visa} />
          <ScoreRow title="Age" value={scores.age} />
          <ScoreRow title="English Language" value={scores.english} />
          <ScoreRow title="Overseas Work Experience" value={scores.overseas} />
          <ScoreRow title="Australian Work Experience" value={scores.australian} />
          <ScoreRow title="Educational Qualifications" value={scores.education} />
          {/* <ScoreRow title="Australian Educational Qualification" value={scores.australianEdu} /> */}
          <ScoreRow title="Specialist Educational Qualification" value={scores.specialist} />
          <ScoreRow title="Accredited Community Language" value={scores.community} />
          <ScoreRow title="Partner Qualifications" value={scores.partner} />
          <ScoreRow title="Professional Year in Australia" value={scores.professional} />

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

import React from 'react';
export default function StepHeader({ title, points }) {
  return (
    <div className="step-header">
      <h2>{title}</h2>
      <div className="step-points">{points}</div>
    </div>
  );
}

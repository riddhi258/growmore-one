import React,{useState} from 'react'
import StepHeader from "./components/StepHeader";

export default function AgeStep({ updateScore, nextStep, prevStep }) {
 {
   const [points, setPoints] = useState(0);
  
   const selectAge = (value, pts) => {
     setPoints(pts);
     updateScore("age", pts);
   };
  return (
    <div>
         <div className="card">
          
                <StepHeader title="Age" points={points} />
          
                <p className="question">
                  Your age at the time of invitation to apply for the visa.
                </p>
          
                <label className="option">
                  <input type="radio" name="age" onChange={() => selectAge("18-24",25)} />
                  <span>18 to 24</span>
                </label>
          
                <label className="option">
                  <input type="radio" name="age" onChange={() => selectAge("25-32",30)} />
                  <span>25 to 32</span>
                </label>
          
                <label className="option">
                  <input type="radio" name="age" onChange={() => selectAge("33-39",25)} />
                  <span>33 to 39</span>
                </label>
          
                <label className="option">
                  <input type="radio" name="age" onChange={() => selectAge("40-44",15)} />
                  <span>40 to 44</span>
                </label>
          
                <div style={{display:"flex", justifyContent:"space-between", marginTop:"25px"}}>
                  <button className="next-btn" onClick={prevStep}>← Previous</button>
          
                  <button
                    className="next-btn"
                    onClick={nextStep}
                  >
                    Next →
                  </button>
                </div>
              </div>
    </div>
  )
}
}
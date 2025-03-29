import React from "react";
import "./StepThree.css";

function StepThree({ prevStep, formData }) {
  return (
    <div className="step-three-container">
      <h2>Step 3: Review & Submit</h2>
      <div className="form-review">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
      <div className="buttons">
        <button type="button" onClick={prevStep} className="back-button">Back</button>
        <button type="button" onClick={() => alert("Form Submitted!")} className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default StepThree;
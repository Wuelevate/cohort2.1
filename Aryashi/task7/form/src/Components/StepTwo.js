import React from "react";
import "./StepTwo.css";

function StepTwo({ nextStep, prevStep, handleInputChange, formData }) {
  return (
    <div className="step-two-container">
      <h2>Step 2: Preferences</h2>
      <form className="step-two-form">
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} min="1" max="100" required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
        </label>
        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleInputChange} checked={formData.gender === "Male"} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleInputChange} checked={formData.gender === "Female"} />
            Female
          </label>
        </fieldset>
        <label>
          Upload File:
          <input type="file" name="file" onChange={handleInputChange} />
        </label>
        <div className="buttons">
          <button type="button" onClick={prevStep} className="back-button">Back</button>
          <button type="button" onClick={nextStep} className="next-button">Next</button>
        </div>
      </form>
    </div>
  );
}

export default StepTwo;
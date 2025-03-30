import React, { useState } from "react";
import "./StepOne.css";

function StepOne({ nextStep, handleInputChange, formData }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    if (!formData.password.trim()) tempErrors.password = "Password is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="step-one-container">
      <h2>Step 1: User Details</h2>
      <form className="step-one-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <small className="error-text">{errors.name}</small>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <small className="error-text">{errors.email}</small>}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <small className="error-text">{errors.password}</small>}
        </label>
        <button type="button" onClick={handleNext} className="next-button">Next</button>
      </form>
    </div>
  );
}

export default StepOne;
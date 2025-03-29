import React, { useState } from "react";
import "./App.css";
import { FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import InputField from "./component/InputField";
import PasswordField from "./component/PasswordField";
import SelectField from "./component/SelectField";
import CheckboxField from "./component/CheckboxField";
import TextAreaField from "./component/TextAreaField";
import SubmitButton from "./component/SubmitButton";

const FormApp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    resume: null,
    agreement: false,
    terms: false,
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Full Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
    } else if (step === 2) {
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.resume) newErrors.resume = "Resume is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.table(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        resume: null,
        agreement: false,
        terms: false,
        comments: "",
      });
      setStep(1);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Fill Your Details</h2>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <InputField icon={FaUser} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              {errors.name && <span className="error-text"><CgDanger /> {errors.name}</span>}
              <InputField icon={FaEnvelope} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              {errors.email && <span className="error-text"><CgDanger /> {errors.email}</span>}
              <PasswordField name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
              {errors.password && <span className="error-text"><CgDanger /> {errors.password}</span>}
              <button type="button" className="form-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="input-group">
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>
              {errors.dob && <span className="error-text"><CgDanger /> {errors.dob}</span>}
              <SelectField name="gender" value={formData.gender} onChange={handleChange} required options={[{ label: "Select Gender", value: "" }, { label: "Male", value: "Male" }, { label: "Female", value: "Female" }]} />
              {errors.gender && <span className="error-text"><CgDanger /> {errors.gender}</span>}
              <InputField icon={FaFileAlt} type="file" name="resume" onChange={handleChange} />
              <button type="button" className="form-btn" onClick={() => setStep(step - 1)}>Back</button>
              <button type="button" className="form-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 3 && (
            <>
              <CheckboxField name="agreement" checked={formData.agreement} onChange={handleChange} label="I agree to the Privacy Policy" required />
              <CheckboxField name="terms" checked={formData.terms} onChange={handleChange} label="I accept the Terms & Conditions" required />
              <TextAreaField name="comments" placeholder="Comments..." value={formData.comments} onChange={handleChange} />
              <button type="button" className="form-btn" onClick={() => setStep(step - 1)}>Back</button>
              <SubmitButton label="Submit" />
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormApp;

import React, { useState } from "react";
import "./App.css";
import { FaUser, FaEnvelope, FaBirthdayCake, FaVenusMars, FaFileAlt } from "react-icons/fa";
import InputField from "./component/InputField";
import CheckboxField from "./component/CheckboxField";
import SelectField from "./component/SelectField";
import TextAreaField from "./component/TextAreaField";
import SubmitButton from "./component/SubmitButton";

const FormApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    gender: "",
    resume: null,
    agreement: false,
    terms: false,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted! 🚀");
    console.table(formData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Fill Your Details</h2>
        <form onSubmit={handleSubmit}>
          <InputField icon={FaUser} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <InputField icon={FaEnvelope} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <InputField icon={FaBirthdayCake} type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />

          <div className="input-group">
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <SelectField
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            options={[
              { label: "Select Gender", value: "" },
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
          />

          <InputField icon={FaFileAlt} type="file" name="resume" onChange={handleChange} />

          <CheckboxField name="agreement" checked={formData.agreement} onChange={handleChange} label="I agree to the Privacy Policy" required />
          <CheckboxField name="terms" checked={formData.terms} onChange={handleChange} label="I accept the Terms & Conditions" required />

          <TextAreaField name="comments" placeholder="Comments..." value={formData.comments} onChange={handleChange} />

          <SubmitButton label="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FormApp;

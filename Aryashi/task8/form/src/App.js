import React, { useState } from "react";
import StepOne from "./Components/StepOne";
import StepTwo from "./Components/StepTwo";
import StepThree from "./Components/StepThree";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    preferences: [],
    file: null,
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        preferences: checked
          ? [...formData.preferences, value]
          : formData.preferences.filter((pref) => pref !== value),
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div>
      {step === 1 && <StepOne nextStep={nextStep} handleInputChange={handleInputChange} formData={formData} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleInputChange={handleInputChange} formData={formData} />}
      {step === 3 && <StepThree prevStep={prevStep} formData={formData} />}
    </div>
  );
}

export default App;
import React from "react";

const InputField = ({ icon: Icon, type, name, placeholder, value, onChange, required }) => {
    return (
        <div className="input-group">
            {Icon && <Icon className="icon" />}
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required} />
        </div>
    );
};

export default InputField;

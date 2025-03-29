import React from "react";

const TextAreaField = ({ name, value, onChange, placeholder }) => {
    return (
        <div className="input-group">
            <textarea name={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </div>
    );
};

export default TextAreaField;

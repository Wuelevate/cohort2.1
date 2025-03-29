import React from "react";

const SelectField = ({ name, value, onChange, required, options }) => {
    return (
        <div className="input-group">
            <select name={name} value={value} onChange={onChange} required={required}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;

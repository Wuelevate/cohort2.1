import React from "react";

const CheckboxField = ({ name, checked, onChange, label, required }) => {
    return (
        <div className="checkbox-group">
            <input type="checkbox" name={name} checked={checked} onChange={onChange} required={required} />
            <label>{label}</label>
        </div>
    );
};

export default CheckboxField;

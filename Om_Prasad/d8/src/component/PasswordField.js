import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons

const PasswordField = ({ name, value, onChange, placeholder, required }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="input-group">
            <FaLock className="icon" />
            <input
                type={showPassword ? "text" : "password"} // Toggle between text/password
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
        </div>
    );
};

export default PasswordField;

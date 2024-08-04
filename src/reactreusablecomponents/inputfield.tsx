import React, { FC } from 'react';
import '../styles/inputStyles.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div className="input-container">
            {label && <label className="text-gray-500 whitespace-pre-line dark:text-gray-400">{label}</label>}
            <input
                className={`input-field ${error ? 'input-error' : ''}`}
                {...props}
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Input;

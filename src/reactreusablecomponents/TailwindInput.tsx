import React, { FC } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const TailwindInput: FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="text-gray-500 whitespace-pre-line dark:text-gray-400">{label}</label>}
            <input
                className={`w-full p-2 border rounded transition-colors duration-300 ${error ? 'border-red-500' : 'border-gray-300'
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${!error && 'focus:ring-opacity-50'
                    }`}
                {...props}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default TailwindInput;

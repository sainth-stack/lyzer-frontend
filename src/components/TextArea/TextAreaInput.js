import React from 'react';

const TextAreaInput = ({ label, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold">{label}</label>
            <textarea
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows="4"
            />
        </div>
    );
};

export default TextAreaInput;

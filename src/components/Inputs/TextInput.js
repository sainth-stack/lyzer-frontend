import React from 'react';
import Input from './Input';

const TextInput = React.forwardRef(({ label, placeholder, value, onChange, masked }, ref) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700">{label}</label>
            <Input
                ref={ref}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                masked={masked} // Pass the masked prop to Input
            />
        </div>
    );
});

export default TextInput;

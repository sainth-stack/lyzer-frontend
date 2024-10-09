import React, { useState } from 'react';
import SelectInput from '../../components/Select/SelectInput';
import TextInput from '../../components/Inputs/Input';
import TextAreaInput from '../../components/TextArea/TextAreaInput';
import { FaMagic } from 'react-icons/fa';
import { environmentOptions } from '../../data/DataJson';

const AgentStudio = () => {
    const [formData, setFormData] = useState({
        name: '',
        environment: '',
        systemPrompt: '',
        agentDescription: ''
    });

    // Handler to manage form input changes
    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    // Function to render different types of inputs
    const renderInput = (type, key, label, placeholder = '', options = []) => {
        if (type === 'text') {
            return (
                <TextInput
                    label={label}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                />
            );
        } else if (type === 'textarea') {
            return (
                <TextAreaInput
                    label={label}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                />
            );
        } else if (type === 'select') {
            return (
                <SelectInput
                    label={label}
                    options={options}
                    value={formData[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                />
            );
        }
        return null;
    };

    return (
        <div className="flex bg-white h-full">
            <div className="w-full p-4">
                <div className="border-2 w-full bg-slate-50 rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-8">Agent Studio</h1>
                    <form>
                        <h2 className="text-xl font-bold mb-4">Configure your Agent:</h2>

                        {renderInput('text', 'name', 'Name', 'Enter Agent Name')}

                        {renderInput('select', 'environment', 'Environment', '', environmentOptions)}

                        {renderInput('textarea', 'systemPrompt', 'System Prompt', 'Enter System Prompt')}

                        <div className="mb-4 flex items-center">
                            <button
                                type="button"
                                className="bg-black text-white p-2 rounded-md flex items-center hover:bg-slate-300 hover:text-black hover:font-semibold"
                            >
                                <FaMagic className="mr-2" />
                                Import Prompt
                            </button>
                        </div>

                        {/* Render Agent Description TextArea */}
                        {renderInput('textarea', 'agentDescription', 'Agent Description', 'Enter Agent Description')}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AgentStudio;

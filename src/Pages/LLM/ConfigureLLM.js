import React, { useState } from 'react';
import SelectInput from '../../components/Select/SelectInput';
import SliderInput from '../../components/Slider/Slider';
import TextInput from '../../components/Inputs/Input';
import { modelOptions, modelVendorOptions } from '../../data/DataJson';

const ConfigureLLM = () => {
    const [modelVendor, setModelVendor] = useState('openai');
    const [apiKey, setApiKey] = useState('');
    const [model, setModel] = useState('');
    const [temperature, setTemperature] = useState(0.5);
    const [topP, setTopP] = useState(0.9);

    // Function to render different types of inputs
    const renderInput = (type, label, key, options = []) => {
        if (type === 'select') {
            return (
                <SelectInput
                    label={label}
                    options={options}
                    value={key === 'modelVendor' ? modelVendor : model}
                    onChange={(e) => {
                        if (key === 'modelVendor') setModelVendor(e.target.value);
                        else setModel(e.target.value);
                    }}
                />
            );
        } else if (type === 'text') {
            return (
                <TextInput
                    label={label}
                    placeholder={`Enter ${label}`}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                />
            );
        } else if (type === 'slider') {
            return (
                <SliderInput
                    label={label}
                    value={key === 'temperature' ? temperature : topP}
                    onChange={(e) => {
                        if (key === 'temperature') setTemperature(e.target.value);
                        else setTopP(e.target.value);
                    }}
                    min={0}
                    max={1}
                    step={0.1}
                />
            );
        }
        return null;
    };

    return (
        <div className="flex bg-white h-full">
            <div className="w-full p-4">
                <div className="border-2 w-full bg-slate-50 rounded-lg p-6">

                <form className="p-4">
                    <h2 className="text-xl font-bold mb-4">Configure your LLM:</h2>
                    {renderInput('select', 'Model Vendor', 'modelVendor', modelVendorOptions)}
                    {renderInput('text', 'LLM API Key', 'apiKey')}
                    {renderInput('select', 'Model', 'model', modelOptions)}
                    {renderInput('slider', 'Temperature', 'temperature')}
                    {renderInput('slider', 'Top P', 'topP')}
                    </form>
                    </div>
            </div>
        </div>
    );
};

export default ConfigureLLM;

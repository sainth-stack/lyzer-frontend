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



    return (
        <>
            <div className="flex  justify-center  w-full items-center">
                <div className='border-2 w-[50%]  bg-slate-50  rounded-lg'>
                    <form className="p-4">
                        <h2 className="text-xl font-bold mb-4">Configure your LLM:</h2>
                        <SelectInput
                            label="Model Vendor"

                            options={modelVendorOptions}
                            value={modelVendor}
                            onChange={(e) => setModelVendor(e.target.value)}
                        />c
                        <TextInput
                            label="LLM API Key"
                            placeholder="Enter API Key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                        />
                        <SelectInput
                            label="Model"
                            options={modelOptions}
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                        <SliderInput
                            label="Temperature"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                        <SliderInput
                            label="Top P"
                            value={topP}
                            onChange={(e) => setTopP(e.target.value)}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ConfigureLLM;

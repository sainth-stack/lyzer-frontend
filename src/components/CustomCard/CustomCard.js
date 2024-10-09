import React, { useRef, useState } from 'react';
import TextInput from '../Inputs/Input';

const CustomCard = ({ title, heading, apiKey, apiEndpoint, setApiKey }) => {
    const inputRef = useRef();
    const [isMasked, setIsMasked] = useState(true);

    const handleCopyKey = () => {
        if (inputRef.current) {
            setIsMasked(false);
            inputRef.current.select(); // Select the real API key
            document.execCommand("copy"); // Copy to clipboard
            setIsMasked(true); // Mask the value again
            alert("API Key copied to clipboard!"); // Optional: show a message
        }
    };

    const handleCopyEndpoint = () => {
        const endpointInput = document.createElement('input');
        document.body.appendChild(endpointInput);
        endpointInput.value = apiEndpoint;
        endpointInput.select();
        document.execCommand('copy');
        document.body.removeChild(endpointInput);
        alert("API Endpoint copied to clipboard!"); // Optional: show a message
    };

    const formattedHeading = heading.replace(
        'x-api-key',
        `<span class="bg-slate-100 text-black font-semibold px-1 rounded">x-api-key</span>`
    );

    return (
        <div className="p-4 w-full m-2 mx-auto bg-white shadow-sm rounded-lg border-2 card">
            <h2 className="text-xl font-bold mb-4 p-4">{title}</h2>
            <p className="mb-2" dangerouslySetInnerHTML={{ __html: formattedHeading }} />

            {/* Input for masked API key */}
            <div className="flex items-center mb-4" style={{alignItems:'center'}}>
                <TextInput
                    ref={inputRef} // Use ref to access the TextInput
                    label="LLM API Key"
                    placeholder="Enter API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)} // Ensure this does not cause loops
                    masked={isMasked} // Use isMasked state for masking
                />
                <button
                    onClick={handleCopyKey}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-600 ml-2 mt-2"
                >
                    Copy
                </button>
            </div>

            {/* Input for API endpoint using TextInput */}
            <p className="mb-2">Endpoint for Agent API:</p>
            <div className="flex items-center mb-4">
                <TextInput
                    label="API Endpoint"
                    placeholder="API Endpoint"
                    value={apiEndpoint}
                    onChange={() => { }} // No change handler since it's read-only
                    masked={false} // No masking for endpoint
                    readOnly={true} // Make it read-only
                />
                <button
                    onClick={handleCopyEndpoint}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-600 ml-2"
                >
                    Copy
                </button>
            </div>

            <div>
                <p className="mt-4">
                    For more information, please refer to the{' '}
                    <a
                        href="https://agent.api.lyzr.app/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline  font-semibold"
                    >
                        API documentation
                    </a>.
                </p>
                <p className="mt-4">
                    Check the status on{' '}
                    <a
                        href="https://uptime.api.lyzr.app/status/agent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline  font-semibold"
                    >
                        status page
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default CustomCard;

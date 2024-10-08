import React from 'react';
import Card from '../../components/Card/Card';
import CustomCard from '../../components/CustomCard/CustomCard';

const Home = () => {
    return (
        <div className="bg-white w-full h-[100vh] mb-10">
            <div className="flex">
                <h1 className="text-3xl font-bold relative top-[4.5rem]">Home Page</h1>
            </div>

            <div className="grid gap-4 w-full relative top-[6rem]  sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl shadow-md border text-card-foreground bg-slate-100 cursor-pointer">
                    <div className="w-full p-6 pt-0 h-24 mt-6 flex flex-col items-center justify-center">
                        <div className="text-opacity-50 text-2xl font-bold">
                            Studio <br />
                            <p className="text-xs font-extralight">Start building</p>
                        </div>
                    </div>
                </div>
                <Card title={"Credits Used"} icon={"@"} count={0} />
                <Card title={"Agents"} icon={"@"} count={0} />
                <Card title={"Inference Requests"} icon={"@"} count={0} />
            </div>

            <div className="relative top-24 max-w-[60%] m-4 shadow-md bg-white">
                <CustomCard
                    title="Agent API Details"
                    heading="Here is your API key for Agent API, passed as x-api-key header:"
                    apiKey="your-real-api-key"  // Pass your actual API key here
                    apiEndpoint="https://api.agent.com/endpoint"  // Pass the API endpoint here
                />
            </div>
        </div>
    );
};

export default Home;

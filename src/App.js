import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './Pages/Home/Home';
import ConfigureLLM from './Pages/LLM/ConfigureLLM';
import ConfigureTools from './Pages/Tools/ConfigureTools';
import AgentApps from './Pages/AgentApps/AgentApps';
import AgentStudio from './Pages/AgentStudio/AgentStudio';

function App() {
  return (
    <Router>
      <div className="flex mb-10">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-white p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configure-llm" element={<ConfigureLLM />} />
            <Route path="/configure-tools" element={<ConfigureTools />} />
            {/* <Route path="/agent-apps" element={<AgentApps />} />
            <Route path="/agent-studio" element={<AgentStudio />} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

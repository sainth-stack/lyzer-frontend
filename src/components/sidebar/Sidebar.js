import React, { useState } from 'react';
import { FaHome, FaTools, FaRegFolder, FaCube } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import logo from "../../assests/images/logo.png";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(''); // Manage active state globally
    const [isCollapsed, setIsCollapsed] = useState(false); // State for sidebar collapse

    // Function to toggle sidebar collapse state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`flex flex-col m-2 border-r-2 h-[100vh]   ${isCollapsed ? 'w-24' : 'w-64'} transition-all duration-300 text-black`}>
            {/* Logo Section */}
            <div className="flex items-center gap-2 border-b-2">
                <img width="50px" height="44px" src={logo} alt='logo' className='m-2' />
                <div className="flex flex-col justify-end truncate visible w-auto">
                    {isCollapsed ? ("") : (
                        <>
                            <span className="text-xl font-semibold">Agent API Studio</span>
                            <span className="text-xs">by Lyzr</span>
                        </>
                    )}
                </div>
            </div>

            {/* Menu Section */}
            <nav className="flex-1 p-4">
                <ul className="space-y-4">
                    <SidebarItem
                        icon={FaHome}
                        label={isCollapsed ? '' : 'Home'}
                        to="/"
                        isActive={activeItem === 'Home'}
                        onClick={() => setActiveItem('Home')}
                    />
                    <SidebarItem
                        icon={FaTools}
                        label={isCollapsed ? '' : 'Configure LLM'}
                        to="/configure-llm"
                        isActive={activeItem === 'Configure LLM'}
                        onClick={() => setActiveItem('Configure LLM')}
                    />
                    <SidebarItem
                        icon={FaRegFolder}
                        label={isCollapsed ? '' : 'Configure Tools'}
                        to="/configure-tools"
                        isActive={activeItem === 'Configure Tools'}
                        onClick={() => setActiveItem('Configure Tools')}
                    />
                    <SidebarItem
                        icon={FaCube}
                        label={isCollapsed ? '' : 'Agent Apps'}
                        to="/agent-apps"
                        isActive={activeItem === 'Agent Apps'}
                        onClick={() => setActiveItem('Agent Apps')}
                    />
                    <SidebarItem
                        icon={FaCube}
                        label={isCollapsed ? '' : 'Agent Studio'}
                        to="/agent-studio"
                        isActive={activeItem === 'Agent Studio'}
                        onClick={() => setActiveItem('Agent Studio')}
                    />
                </ul>
            </nav>

            {/* Collapse Button */}
            <div className="flex items-center justify-center h-16 border-t border-gray-700">
                <button className="text-lg" onClick={toggleCollapse}>
                    <span>{isCollapsed ? '▶' : '◀'}</span> {/* Change arrow based on state */}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

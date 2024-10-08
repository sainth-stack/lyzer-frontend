import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, to, isActive, onClick }) => {
    return (
        <Link
            to={to}
            className={`no-underline 
                ${isActive ? 'text-black' : 'text-black'} 
                hover:no-underline`}
        >
            <li
                className={`flex items-center space-x-3 p-3 mt-3 w-full transition-all font-semibold rounded-md duration-200 
            ${isActive ? 'bg-slate-200 text-black' : 'hover:bg-slate-200 hover:text-black'}`}
                onClick={onClick} // Trigger onClick passed from parent
            >
                <Icon size={20} />

                <span className={`whitespace-nowrap ${label ? '' : 'hidden'}`}>{label}</span>
            </li>
        </Link>
    );
};

export default SidebarItem;

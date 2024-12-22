import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='w-full fixed z-50'>
            <nav className="flex justify-between items-center h-12 px-4 bg-white/5 backdrop-blur-md border-b border-white/5 shadow-sm z-50 text-white">
                <NavLink to="/" className="text-lg font-bold">
                    <img className='h-6 w-6' src={logo} alt="High Spirit Logo" />

                </NavLink>

                <div className="relative group">
                    <NavLink to="#" className="text-lg">
                        <FaUserAlt />
                    </NavLink>
                    <div className="absolute right-1/2 transform translate-y-1/2 mr-1 w-24 p-1 text-center text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Yet to come
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
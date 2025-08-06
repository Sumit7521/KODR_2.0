import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-white shadow px-6 py-4 flex gap-6">
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      <NavLink to="/service" className={linkClass}>Services</NavLink>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md p-4 flex justify-center space-x-8 fixed z-50 w-full">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition'
            : 'text-gray-300 hover:text-blue-400 transition'
        }
      >
        Create Post
      </NavLink>

      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-400 font-bold border-b-2 border-blue-400 pb-1 transition'
            : 'text-gray-300 hover:text-blue-400 transition'
        }
      >
        Gallery
      </NavLink>
    </nav>
  );
};

export default Nav;

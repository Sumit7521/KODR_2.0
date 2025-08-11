import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-3 mt-3 ml-4 w-40'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/addusers">Add Users</NavLink>
    </div>
  )
}

export default Navbar
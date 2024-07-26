import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex'>
            <NavLink className={(e) => {return e.isActive ? "blue": ""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? "blue": ""}} to="/about"><li>About</li></NavLink>
            <NavLink className={(e) => {return e.isActive ? "blue": ""}} to="/login"><li>Login</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

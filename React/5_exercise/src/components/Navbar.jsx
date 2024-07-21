import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
            <img className="invert" src={logo} alt="CO" />
        </li>
        <li>Home</li>
        <li>About</li>
        <li>Contact us </li>
      </ul>
    </nav>
  )
}

export default Navbar

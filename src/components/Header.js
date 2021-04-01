import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} className = 'logo' alt="logo"/>
      {/* Links to different pages */}
      <div className = 'menu'>
        <ul>
          <li><Link to = {'/industries'}>Industries</Link></li>
          <li><Link to = {'/services'}>Services</Link></li>
          <li><Link to = {'/aboutus'}>About Us</Link></li>
        </ul>
      </div>
      <div className = "contact">
        <button>Contact Us</button>
      </div>
    </header>
  )
}

export default Header
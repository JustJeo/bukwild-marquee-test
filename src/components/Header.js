import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo"/>
      {/* Links to different pages */}
      <div className = 'links'>
        <Link to = {'/industries'}>Industries</Link>
        <Link to = {'/services'}>Services</Link>
        <Link to = {'/aboutus'}>About Us</Link>
      </div>
    </header>
  )
}

export default Header
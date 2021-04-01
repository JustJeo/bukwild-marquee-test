import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header>
      {/* Links to different pages */}
      <div className = 'links'>
        <Link to = {'/industries'}>Industries</Link>
        <Link to = {'/serivces'}>Services</Link>
        <Link to = {'/aboutus'}>About Us</Link>
      </div>
    </header>
  )
}

export default Header
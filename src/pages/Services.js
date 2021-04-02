import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className = "Services">
      <div className = "contact">
        <button>Contact Us</button>
      </div>
      <img src={logo} className = 'logo' alt="logo"/>
      {/* Links to different pages */}
      <div className = 'menu'>
        <ul>
          <li><Link to = {'/industries'}>Industries</Link></li>
          <li><Link to = {'/services'}>Services</Link></li>
          <li><Link to = {'/aboutus'}>About Us</Link></li>
        </ul>
      </div>
      <div className = "Header">
        <h1>Services</h1>
      </div>
      <div className = "Subhead">
        <h3>Cras mattis consectetur purus sit amet fermentum.</h3>
      </div>
      <div className = "CTA">
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </div>
    </div>
  )
}

export default Services
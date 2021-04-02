import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className = "Services">
      <div className = "nav">
        <div className = "contact">
          <button>Contact Us</button>
        </div>
        <img src={logo} className = 'logo' alt="logo"/>
        {/* Links to different pages */}
        <div className = 'menu'>
          <ul>
            <li><Link to = {'/'}>Industries</Link></li>
            <li class = "servLink"><Link to = {'/services'}>Services</Link></li>
            <li><Link to = {'/aboutus'}>About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className = "HeadsContainer">
        <div className = "Header">
          <h1>Services</h1>
        </div>
        <div className = "Subhead">
          <p>Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </div>
      <div className = "Footer">
        <div className = "cta">
        <h3>Donec id elit non mi porta gravida at eget metus.</h3>
        </div>
        <div className = "talk">
          <p>LET'S TALK</p>
        </div>
      </div>
    </div>
  )
}

export default Services
import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className = "AboutUs">
      <div className = "nav">
        <div className = "contact">
          <button>Contact Us</button>
        </div>
        <img src={logo} className = 'logo' alt="logo"/>
        {/* Links to different pages */}
        <div className = 'menu'>
          <ul>
            <li><Link to = {'/industries'}>Industries</Link></li>
            <li class = "servLink"><Link to = {'/services'}>Services</Link></li>
            <li><Link to = {'/aboutus'}>About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className = "Header">
        <h1>Maecenas sed diam eget risus varius blandit sit amet non magna</h1>
      </div>
      <div className = "Subhead">
        <h3>Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</h3>
      </div>
      <div className = "CTA">
        <p>Nullam quis risus eget urna mollis ornare vel eu leo.</p>
      </div>
    </div>
  )
}

export default AboutUs
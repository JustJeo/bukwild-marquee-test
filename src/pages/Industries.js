import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

const Industries = () => {
  return (
    <div className = "Industries">
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
      <div className = "HeadsContainer">
        <div className = "Header">
          <h1>Industries</h1>
        </div>
        <div className = "Subhead">
          <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
      </div>
      <div className = "Footer">
        <div className = "cta">
          <h3>Vestibulum id ligula porta felis euismod semper.</h3>
        </div>
        <div className = "talk">
          <p>LET'S TALK</p>
        </div>
      </div>
    </div>
  )
}

export default Industries
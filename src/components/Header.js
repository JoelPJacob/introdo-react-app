import React from 'react';
import './Header.css';
import DownArrow from '../assets/icons/down-arrow-icon.svg';
import Logo from '../assets/icons/app-logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/avatar-logo.svg';

const Header = () => {
  return (
    <div>
      <div className="top-box">
        <p>
          Happy Employees, Effortless HR: Experience the introdo Advantage. <span className="bold-text">Try it for Free!</span>
        </p>
      </div>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <ul className="nav-list">
              <li>
                <a href="/products">
                  <img src={Logo} alt="App Logo" className="nav-logo" />
                  <span className="nav-logo-text">Introdo</span>
                </a>
              </li>
              <li><a href="/products">Products <img src={DownArrow} alt="Down Arrow" className="nav-icon" /></a></li>
              <li><a href="/solutions">Solutions <img src={DownArrow} alt="Down Arrow" className="nav-icon" /></a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/partner-program">Partner Program</a></li>
              <li><a href="/resources">Resources <img src={DownArrow} alt="Down Arrow" className="nav-icon" /></a></li>
              <li><a href="/about">About Us <img src={DownArrow} alt="Down Arrow" className="nav-icon" /></a></li>
            </ul>
          </div>
          <div className="nav-right">
            <button className="header-button">
              EN <img src={DownArrow} alt="Down Arrow" className="button-icon" />
            </button>
            <button className="header-button">
              Log In <ProfileIcon className="profile-icon" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

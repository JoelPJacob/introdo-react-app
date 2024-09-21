import React from 'react';
import './Footer.css';
import DownArrow from '../assets/icons/down-arrow-white-icon.svg';
import Logo from '../assets/icons/app-logo.svg';
import InputBox from './InputBox';
import PlayStoreImg from '../assets/images/PlayStoreImg.png';
import AppStoreImg from '../assets/images/AppStoreImg.png';
import FooterLogoBsi from '../assets/images/FooterLogoBsi.png';
import FooterLogoHipaa from '../assets/images/FooterLogoHipaa.png';
import FooterLogoGdpr from '../assets/images/FooterLogoGdpr.png';
import FooterLogoAicpa from '../assets/images/FooterLogoAicpa.png';

const Footer = () => {
  const handleSubscribe = (email) => {
    console.log('Subscribed with:', email);
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__top-section">
          <div className="footer__logo-container">
            <img src={Logo} alt="App Logo" className="footer__logo" />
            <span className="footer__logo-text">Introdo</span>
          </div>

          <div className="footer__subscription-container">
            <p className="footer__subscription-text">HR Updates, straight to your Inbox - Subscribe Today</p>
            <InputBox onSubscribe={handleSubscribe} />
            <div className="footer__arrow-icons">
              {/* <img src={DownArrow} alt="Down Arrow" className="footer__arrow-icon" />
              <img src={DownArrow} alt="Down Arrow" className="footer__arrow-icon" />
              <img src={DownArrow} alt="Down Arrow" className="footer__arrow-icon" /> */}
            </div>
          </div>

          <div className="footer__language-selector">
            <button className="button">
              EN <img src={DownArrow} alt="Down Arrow" className="button-icon" />
            </button>
          </div>
        </div>

        <div className="footer__info-sections">
          <div className="footer__info-section">
            <h3 className="footer__section-title">Products</h3>
            <ul className="footer__info-list">
              <li>Core HR</li>
              <li>Employee Management</li>
              <li>Leave Management</li>
              <li>Time & Attendance</li>
              <li>Payroll Management</li>
              <li>People Analytics</li>
              <li>Recruitment</li>
              <li>Performance Management</li>
            </ul>
          </div>
          <div className="footer__info-section">
            <h3 className="footer__section-title">Resources</h3>
            <ul className="footer__info-list">
              <li>All Resources</li>
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Product Videos</li>
              <li>HR Glossary</li>
            </ul>
          </div>
          <div className="footer__info-section">
            <h3 className="footer__section-title">Platform</h3>
            <ul className="footer__info-list">
              <li>Log In</li>
              <li>Schedule a Demo</li>
              <li>Use Cases</li>
              <li>Integrations</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer__info-section-image">
            <h3 className="footer__section-title">Mobile App</h3>
            <div className="footer__app-links">
              <img src={PlayStoreImg} alt="Play Store" className="footer__app-store-img" />
              <img src={AppStoreImg} alt="App Store" className="footer__app-store-img" />
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__certification-logos">
          <img src={FooterLogoBsi} alt="BSI Certification" className="footer__certification-logo" />
          <img src={FooterLogoBsi} alt="BSI Certification" className="footer__certification-logo" />
          <img src={FooterLogoHipaa} alt="HIPAA Certification" className="footer__certification-logo" />
          <img src={FooterLogoGdpr} alt="GDPR Certification" className="footer__certification-logo" />
          <img src={FooterLogoAicpa} alt="AICPA Certification" className="footer__certification-logo" />
        </div>
        <div className="footer__divider"></div>
        <div className="footer__bottom-section">
          <div className="footer__legal-links">
            <a href="/privacy-policy" className="footer__legal-link">Privacy Policy</a>
            <a href="/terms-of-use" className="footer__legal-link">Terms of Use</a>
            <a href="/cookie-policy" className="footer__legal-link">Cookie Policy</a>
          </div>
          <p className="footer__copyright-text">Copyright © 2024 KPI Group. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

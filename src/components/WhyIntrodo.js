import React from 'react';
import './WhyIntrodo.css';
import Flag1 from '../assets/images/FlagAED.png';
import Flag2 from '../assets/images/FlagSAD.png';
import Flag3 from '../assets/images/FlagOMG.png';
import { ReactComponent as Loader } from '../assets/icons/loader.svg';
import Flag from '../assets/images/AppStoreImg.png'
import CloudCardImage from '../assets/images/CloudCardImage.png'

const WhyIntrodo = () => {
  return (
    <div className="why-intro-section">
      <h2 className="why-intro-title">WHY INTRODO?</h2>
      <h1 className="why-intro-benefits-title">Unlock The Perks!</h1>

      <div className="why-intro-grid">
        <div className="why-intro-box global-payroll">
          <h3>Global Payroll Simplicity</h3>
          <p>Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!</p>
          {/* New card below the text */}
          <div className="payroll-card-background">
            <div className="payroll-card">
              <p>Run Payroll</p>
              <div className="payroll-card-row">
                <img src={Flag1} alt="Flag AED" className="flag-icon" />
                <Loader className="loader-icon" /><span>AED 90,718.94</span>
              </div>
              <div className="payroll-card-row">
                <img src={Flag2} alt="Flag SAD" className="flag-icon" />
                <Loader className="loader-icon" /><span>SAR 678,100.00</span>
              </div>
              <div className="payroll-card-row">
                <img src={Flag3} alt="Flag OMG" className="flag-icon" />
                <Loader className="loader-icon" /><span>OMR 67,693.80</span>
              </div>
            </div>
          </div>
        </div>


        <div className="why-intro-box smart-insights">
         
        </div>

        <div className="why-intro-box new-feature-box">
          <h3>Legacy Harmony</h3>
          <p>Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.</p>
        </div>

        <div className="why-intro-box legacy-harmony">
          <h3 className="legacy-harmony-title">Smart Insights</h3>
          <p className="legacy-harmony-description">
            Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.
          </p>
        </div>

        <div className="why-intro-box rock-solid-compliance">
          <div className="compliance-text">
            <h3 className="rock-solid-compliance-title">Rock-Solid Compliance</h3>
            <p className="rock-solid-compliance-description">
              Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.
            </p>
          </div>
          <img src={Flag} alt="Compliance Icon" className="compliance-image" />
        </div>

        <div className="why-intro-box cloud-powered-savings">
        <img src={CloudCardImage} alt="Compliance Icon" className="compliance-image" />
          <h3>Cloud-Powered Savings</h3>
          <p>Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyIntrodo;


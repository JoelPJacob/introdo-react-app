import React from 'react';
import './WhyIntrodo.css';
import Flag1 from '../assets/images/FlagAED.png';
import Flag2 from '../assets/images/FlagSAD.png';
import Flag3 from '../assets/images/FlagOMG.png';
import { ReactComponent as Loader } from '../assets/icons/loader.svg';
import Flag from '../assets/images/AppStoreImg.png';
import CloudCardImage from '../assets/images/CloudCardImage.png';
import { ReactComponent as MsIcon } from '../assets/icons/msIcon.svg';

// IconCard Component
const IconCard = ({ icon, backGroundColor = 'rgba(243, 243, 245, 1)', cardWidth = '33.33%', ...rest }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '77px',
      width: cardWidth,
      background: backGroundColor,
      marginLeft: '10px',
      ...rest
    }}>
      {icon}
    </div>
  );
};

// Data for all the cards
const cardDataArray = [
  {
    id: 1,
    heading: 'Global Payroll Simplicity',
    description: 'Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!',
    flagData: [
      { id: 1, flagSrc: Flag1, loader: <Loader />, amount: 'AED 90,718.94' },
      { id: 2, flagSrc: Flag2, loader: <Loader />, amount: 'SAR 678,100.00' },
      { id: 3, flagSrc: Flag3, loader: <Loader />, amount: 'OMR 67,693.80' },
    ],
  },{
    id: 2,
    heading: 'Smart Insights',
    description: 'Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.',
  },
  {
    id: 3,
    heading: 'Legacy Harmony',
    description: 'Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.',
    icons: {
      row1: [<MsIcon />, <MsIcon />],
      row2: [<MsIcon />, <MsIcon />],
      row3: [<MsIcon />, <MsIcon />, <MsIcon />],
    },  },
  
  {
    id: 4,
    heading: 'Rock-Solid Compliance',
    description: 'Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.',
    flagSrc: Flag,
  },
  {
    id: 5,
    heading: 'Cloud-Powered Savings',
    description: 'Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.',
    imageSrc: CloudCardImage,
  },
];

// PerkCards Component
const PerkCards = ({ heading = '', desc = '', flagData = [], icons = [] }) => (
  <div className="why-intro-box" style={{margin:'5px'}}>
    <h3>{heading}</h3>
    <p>{desc}</p>
    {/* Display Flags */}
    {flagData.length > 0 && (
      <div className="payroll-card-background">
        <div className="payroll-card">
          {flagData.map(({ id, flagSrc, loader, amount }) => (
            <div className="payroll-card-row" key={id}>
              <img src={flagSrc} alt={`Flag ${id}`} className="flag-icon" />
              {loader}
              <span>{amount}</span>
            </div>
          ))}
        </div>
      </div>
    )}
    {/* Display Icons */}
    {/* {icons && (
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
        {icons.row1.map((icon, index) => (
          <IconCard key={index} icon={icon} borderRadius="20px" />
        ))}
      </div>
    )} */}

{Object.keys(icons).length > 0 && (
  <div style={{ width: '100%' }}>
    {Object.values(icons).map((iconRow, rowIndex) => {
      // You can now declare variables inside this block
      const justifyContentProperty={
        0:'right',
        1:'right',
        2:'left'
      }
      return (
        <div key={rowIndex} style={{ width: '100%', display: 'flex', justifyContent: justifyContentProperty[rowIndex], margin: '5px 0' }}>
          {iconRow.map((icon, iconIndex) => (
            <IconCard key={iconIndex} icon={icon} borderRadius="20px" />
          ))}
        </div>
      );
    })}
  </div>
)}

  </div>
);

// Main Component: WhyIntrodo
const WhyIntrodo = () => {
  return (
    <div >
      <h2 className="why-intro-title">WHY INTRODO?</h2>
      <h1 className="why-intro-benefits-title">Unlock The Perks!</h1>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {cardDataArray.map(({ id, heading, description, flagData, icons, flagSrc, imageSrc }) => (
          <div style={{width:id<=3?'30%':'48%'}}key={id}>
            <PerkCards heading={heading} desc={description} flagData={flagData} icons={icons} />
            {/* {flagSrc && <img src={flagSrc} alt={`${heading} Icon`} className="compliance-image" />}
            {imageSrc && <img src={imageSrc} alt={`${heading} Image`} className="compliance-image" />} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyIntrodo;

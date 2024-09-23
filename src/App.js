import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './App.css';
import MobileHeader from './components/MobileComponents/MobileHeader';
import MobileFooter from './components/MobileComponents/MobileFooter';

function App() {

  React.useEffect(() => {
    // Scroll to the top of the page on component mount (refresh)
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="App">
      <div className='global-header' style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
        <Header />
      </div>
      <div className='mobile-header' style={{ position: 'fixed', width: '100%', backgroundColor: '#fff', zIndex: 1000 }}>
        <MobileHeader />
      </div>
      <div className='landing'>
        <LandingPage />
      </div>
      <div className='global-footer'>
        <Footer />
      </div>
      <div className='mobile-footer'>
        <MobileFooter />
      </div>
    </div>
  );
}

export default App;
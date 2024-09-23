import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <div style={{position:'fixed',width:'100%',backgroundColor:'#fff',zIndex:1000}}>
        <Header />
        </div>
        <LandingPage/>
        <div>
        <Footer />
        </div>
      </div>
  );
}

export default App;

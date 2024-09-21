import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <LandingPage/>
        <Footer />
      </div>
  );
}

export default App;

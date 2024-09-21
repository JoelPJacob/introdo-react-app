import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';
import RightArrow from '../assets/icons/right-arrow-icon.svg';

const InputBox = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setEmailError('');
      onSubscribe(email);
    } else {
      setEmailError('Please enter a valid work email.');
    }
  };

  return (
    <div className="subscription-form">
      <input
        type="email"
        placeholder="Enter Work Email"
        value={email}
        onChange={handleEmailChange}
        className="email-input"
      />
      <button className="subscribe-button" onClick={handleSubscribe}>
        <img src={RightArrow} alt="Subscribe" />
      </button>
      {emailError && <p className="error-message">{emailError}</p>}
    </div>
  );
};

InputBox.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default InputBox;

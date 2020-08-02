import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <div className="container">
      <div className="header">
      <span>Live Consultation</span>
      <span>Buy Plans</span>
      <span>View Plans</span>
      <span className="btn-container"><button  className="btn">Login</button></span>
      </div>
    </div>
  )
}
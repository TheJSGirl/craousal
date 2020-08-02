import React from 'react';
import './style.css';

export const LiveClasses = () => {
  return (
   <div className="live-container">
    <div className="heading-1">Live Classes</div>
    <div className="heading-2">Select a number</div>
    <div className="live-classes">
      <span className="scale">5</span>
      <span className="scale">6</span>
      <span className="scale">7</span>
      <span className="scale">8</span>
      <span className="scale">9</span>
    </div>
   </div>
  )
}
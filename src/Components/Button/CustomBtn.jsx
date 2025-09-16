import React from 'react';
import './Btn.css';

const CustomBtn = ({ children }) => {
  return (
    <div className="container mt-10">
      <button id="auto" className="button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children} 
      </button>
    </div>
  );
};

export default CustomBtn;
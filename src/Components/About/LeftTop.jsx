import React from "react";
import "./LeftTop.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
// Import images as modules for correct bundling
import aboutImage from '../../assets/About/image.png';
import icon from '../../assets/About/icon1.png';
import bluebox from '../../assets/About/bluebox.png';


const LeftTop = () => {

   const { ref: containerRef, inView } = useInView({
    triggerOnce: false,  
    threshold: 0.3,      
  });

  return (
    <>
      <div className="main">
        <div className="container" ref={containerRef}>
          <p style={{ textAlign: 'justify' }}>
            To be a global force for good - To inspire a world where businesses
            are built not just to succeed, but to serve by redefining the way
            the world does business by building ventures that focus on people ,
            planet and purpose by creating lasting value.
          </p>
          <img src={aboutImage} alt="" width={669} height={636} />
        </div>
        <div className="icon">
          <img src={icon} alt="" width={182} height={182} className="rocket-icon" />
        </div>
        <div className={`blue-box animate__animated ${inView ? 'animate__backInLeft' : 'hide-blue-box'}`}>
          <img
            src={bluebox}
            alt=""
            width={300}
            height={300}
            className="two"
          />
          <strong>
            <h1>Our Vision</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default LeftTop;

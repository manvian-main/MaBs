import React from "react";
import "./RightTop.css";
import 'animate.css';
import { useInView } from 'react-intersection-observer';
// Import images as modules for correct bundling
import aboutImage from '../../assets/About/image.png';
import icon2 from '../../assets/About/icon2.png';
import bluebox from '../../assets/About/bluebox.png';

const RightTop = () => {

  const { ref: containerRef, inView } = useInView({
      triggerOnce: false,  
      threshold: 0.3,      
    });

  return (
    <>
      <div className="main">
        <div className="container-rt" ref={containerRef}>
          <p style={{ textAlign: 'justify' }}>
           At the heart of Manvian is the belief that success is best shared. Our mission is to empower businesses to unlock their true potential. We partner with visionary leaders to build authentic brands, elevate client experiences, and create lasting value with ROI.
          </p>
          <img
            src={aboutImage}
            alt=""
            width={669}
            height={636}
            style={{ transform: "rotate(90deg)", transformOrigin: "center" }}
          />
        </div>
        <div className="icon-rt">
          <img src={icon2} alt="" width={182} height={182} className="target-icon"/>
        </div>
        <div className={`blue-box-rt animate__animated ${inView ? 'animate__backInRight' : 'hide-blue-box-rt'}`}>
          <img
            src={bluebox}
            alt=""
            width={300}
            height={300}
            className="two"
          />
          <strong>
            <h1>Our Mission</h1>
          </strong>
        </div>
      </div>
    </>
  );
};

export default RightTop;

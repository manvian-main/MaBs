import React, { useEffect } from "react";
import CustomBtn from "../Button/CustomBtn";
import '../Home/click.css';
import { Link } from "react-router-dom";
import img1 from '../../assets/Insights/1.jpg';
import img2 from '../../assets/Insights/2.jpg';
import img3 from '../../assets/Insights/3.jpg';
import img4 from '../../assets/Insights/4.png';
import img5 from '../../assets/Insights/5.png';   
import img6 from '../../assets/Insights/6.png';
import img7 from '../../assets/Insights/7.png';
import img8 from '../../assets/Insights/8.png';
import img9 from '../../assets/Insights/9.png';
import img10 from '../../assets/Insights/10.jpg';
import img11 from '../../assets/Insights/11.png';
import img12 from '../../assets/Insights/12.png';
import img13 from '../../assets/Insights/13.png';
import img14 from '../../assets/Insights/14.png';
import img15 from '../../assets/Insights/15.png';
import img16 from '../../assets/Insights/16.png';
import img17 from '../../assets/Insights/17.png';
import img18 from '../../assets/Insights/18.jpeg';
import img19 from '../../assets/Insights/19.jpg';
import img20 from '../../assets/Insights/20.jpg';
import img21 from '../../assets/Insights/21.png';
import img22 from '../../assets/Insights/22.jpg';
import img23 from '../../assets/Insights/23.png';
import img24 from '../../assets/Insights/24.jpg';
import img25 from '../../assets/Insights/25.png';
import img26 from '../../assets/Insights/26.jpeg'; 
import img27 from '../../assets/Insights/27.png';
import img28 from '../../assets/Insights/28.png';
import img29 from '../../assets/Insights/29.png'; 
import img30 from '../../assets/Insights/30.png';

const logos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6, 
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30
];

const ClientsLogo = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes scroll-up {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }

      .animate-scroll-up {
        animation: scroll-up 20s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:pl-6 pt-6 bg-white rounded-xl border-2 border-gray-200 mt-10">
      {/* Left Content */}
      <div className="w-full md:w-1/3   space-y-4 mt-20 lg:mt-0 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#19BDE8] break-words">Our Clients</h2>
        <p className="text-sm md:text-base text-gray-600 ">
          We’ve had the pleasure of working with some amazing brands. If you'd like to be one of them, let’s talk!
        </p>
        <div className="w-full flex justify-center">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' ,marginBottom: '20px'}}>
           <Link to='/contact'>
              <button className="ui-btn"><span>Contact Us</span></button>
            </Link>
         </div>

        </div>
      </div>

      {/* Right: Logos Scroll */}
      <div className="w-full md:w-2/3 h-[300px] md:h-[500px] overflow-hidden relative bg-[rgba(25,189,232,0.25)] rounded-lg px-0 md:px-6 lg:px-6  md:ml-0">

        {/* Top and Bottom Gradient Shadows */}
        <div className="absolute top-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none bg-gradient-to-b from-[#FFFFFF] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 z-10 pointer-events-none bg-gradient-to-t from-[#FFFFFF] to-transparent" />

        {/* Scrolling container */}
        <div className="relative h-full">
          <div className="absolute w-full flex flex-col animate-scroll-up">
            {/* Logos - first copy */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 p-2 md:p-4 justify-items-center">
              {logos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center w-16 h-16 md:w-22 md:h-22 bg-white rounded-md shadow-md"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="max-h-12 md:max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Logos - second copy */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 p-2 md:p-4 justify-items-center">
              {logos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center w-16 h-16 md:w-22 md:h-22 bg-white rounded-md shadow-md"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="max-h-12 md:max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsLogo;

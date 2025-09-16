import React from 'react';
import HeroVideo from '../../assets/About/HeroSection.mp4';
import CustomBtn from '../Button/CustomBtn';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
      <header className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ top: '30px'}}
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-10 lg:px-16 w-full max-w-[1500px] gap-6 pt-24">
          
          <p className="mt-0 mb-15 font-normal text-base lg:text-2xl leading-relaxed max-w-5xl">
            <span className="font-semibold text-3xl lg:text-6xl text-left">“Business is personal.</span> <br/>
            Behind every strategy, sale, and system there’s a human.<br/>
            That’s why we lead with empathy, build with intention, and partner with heart.
            
            Because trust isn’t a tactic. It’s the <span className="font-semibold text-3xl lg:text-3xl">foundation.”</span>  
          </p>
          <Link to="/insights">
          <CustomBtn>Dive Deep</CustomBtn>
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeroSection;

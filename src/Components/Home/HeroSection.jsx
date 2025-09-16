import React, { useEffect } from 'react';
import CustomBtn from '../Button/CustomBtn';
import bg from '../../assets/Home/Herosection.mp4';
import AnimatedText from './AnimatedText';
const HeroSection = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://player.vimeo.com/api/player.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <header className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={bg}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

                {/* Foreground Content */}
                <div className="relative z-20 w-full max-w-[1200px] px-4 sm:px-6 flex flex-col items-center justify-center text-center text-white">
                    <p className="font-Montserrat font-medium text-xl lg:text-3xl leading-tight  sm:text-center text-center">
                        Unlock the Secrets to Business Success
                    </p>
                    <h1 className="font-Montserrat font-semibold text-3xl lg:text-6xl text-[#19BDE8] leading-snug mt-2 text-justify sm:text-center">
                        Creating a Path
                    </h1>
                    <p className="mt-4 font-normal text-base md:text-xl leading-relaxed text-center sm:text-center">
                        Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their businesses to reach new heights
                        through innovative strategies and exceptional execution.
                    </p>
                    <div className="mt-8">
                      <AnimatedText />
                    </div>
                    <a
                        href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book an appointment"
                        className="mt-6"
                    >
                        <CustomBtn>Booking Appointment</CustomBtn>
                    </a>
                </div>
            </header>
        </>
    );
};

export default HeroSection;

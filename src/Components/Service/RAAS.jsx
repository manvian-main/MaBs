import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/Service/RAAS/HeroSection.png'
import Footer from '../Footer/Footer';
import one from '../../assets/Service/RAAS/1.png'
import two from '../../assets/Service/RAAS/2.png'
import three from '../../assets/Service/RAAS/3.png'
import four from '../../assets/Service/RAAS/4.png'
import five from '../../assets/Service/RAAS/5.png'
import CustomBtn from '../Button/CustomBtn';

const RAAS = () => {
    const [tiltStyles, setTiltStyles] = useState({});

    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

// Create a map to store animation frames (per card)
const animationFrames = {};

const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // Cancel any previously queued animation
    if (animationFrames[index]) {
        cancelAnimationFrame(animationFrames[index]);
    }

    animationFrames[index] = requestAnimationFrame(() => {
        const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        const rotateX = clamp(offsetY * 20, -20, 20);
        const rotateY = clamp(offsetX * 20, -20, 20);

        setTiltStyles((prevStyles) => ({
            ...prevStyles,
            [index]: {
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                // Note: no transition here to avoid jitter
            },
        }));
    });
};

const handleMouseLeave = (index) => {
    if (animationFrames[index]) {
        cancelAnimationFrame(animationFrames[index]);
    }

    setTiltStyles((prevStyles) => ({
        ...prevStyles,
        [index]: {
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.4s ease-out'
        },
    }));
};

    const problems = [
        {
            title: "High Attrition & Job Hopping",
            description:
                "Employees often leave and struggle to retain the talents."
        },
        {
            title:
                "Time-Consuming Hiring Cycles",
            description:
                "From sourcing to the final round losing months to find the right fit?"
        },

        {
            title: "Hiring the Good, But Not the Right",
            description:
                "not aligned with the company’s culture results in slow growth"
        },
        {
            title: "Lack of HR Support & Solutions",
            description: "Relying on guesswork without proper system and support",
        },
    ];
    const solutions = [
        {
            title: "Talent Acquisition",
            image: one,
            description:
                " Hire the right talent that aligns with your business goals and culture"
        },
        {
            title: "Outsourcing",
            image: two,
            description:
                "Blue-collar & white-collar job placement, across sectors."
        },
        {
            title: "HR Process Setup for startups /MSME’s",
            image: three,
            description:
                "From SOPs for hiring, onboarding, documentation."
        },
        {
            title: "Training & Upskilling Programs",
            image: four,
            description:
                "Soft Skills Training, Leadership Development"
        },
        {
            title: "Employer Branding & Culture",
            image: five,
            description:
                "Make your Workplace a Brand People want to belong to."
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="relative w-full h-[822.86px] flex justify-center items-center">
                {/* Background image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt=""
                />

                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-0 w-full  gap-6 max-w-[1200px]">
                    <h1 className="text-[#19BDE8] font-semibold text-3xl md:text-6xl leading-tight">
                        Recruitment As A Service
                    </h1>
                    <span className="font-semibold text-1xl lg:text-3xl">“If You Don’t Hire Them, Your Competitor Will.”</span>
                    <p className="font-normal text-base  md:text-xl  text-center ">
                        Struggling to find the right people - or losing them just when you need them most? You’re not alone. In today’s fast-paced market, businesses face the constant pressure of hiring fast and hiring good. But the right talent is hard to find and even harder to keep.
                        Don’t lose top talent because your hiring process is slow, scattered, or stuck. 

                    </p>
                    <Link to='/contact'>
                        <CustomBtn>Get the Right Talent Today</CustomBtn>
                   </Link>
                </div>
            </header>

            {/* Content */}
            <main className=''>
                <div className="px-4 py-12 bg-white text-gray-800">
                    {/* Problems Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8]">
                            The Problem – What Businesses Struggle With
                        </h2>
                       

                        <div className="mt-10 flex flex-wrap justify-center gap-8">
                            {problems.map((problem, index) => (
                                <div
                                    key={index}
                                    className={`w-[281px] h-[355px] rounded-2xl py-[60px] px-4 shadow-lg hover:shadow-2xl mb-4
                              ${index % 2 === 0
                                            ? 'bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF]'
                                            : 'bg-gradient-to-b from-[#19BDE8] to-[#FFFFFF]'
                                        }`}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    style={tiltStyles[index] || {}}
                                >
                                    <div className="w-10 h-10 border-2 border-black text-black font-normal rounded-[50px] p-6 mx-auto mb-4 flex items-center justify-center text-4xl ">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-xl  md:text-2xl mb-4 text-black">{problem.title}</h3>
                                    <p className="text-base md:text-lg font-normal text-black text-justify">{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solutions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-base md:text-3xl font-bold text-[#19BDE8] text-center mb-8">
                            Our Solutions – How Manvian Helps
                        </h2>
                        <div className="space-y-4">
                            {solutions.map((solution, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b-1 border-black/20  p-4  transition duration-300 mb-6"
                                >
                                    <div className='flex gap-4 items-center justify-center'>
                                        <img className='h-15 w-15' src={solution.image} alt="" />
                                        <div>
                                            <h4 className="font-medium text-lg md:text-2xl">{solution.title}</h4>
                                            <p className="text-base text-gray-600 mt-1 text-justify">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/*
                                    <button className="w-12 h-12 min-w-[3rem] min-h-[3rem] aspect-square bg-black text-white text-3xl cursor-pointer font-normal rounded-full flex items-center justify-center hover:bg-sky-600 transition">
                                        ↗
                                    </button>
                                    */}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            {/* Explore */}
            <div className='w-full min-h-[300px] bg-gradient-to-t from-[#19BDE880]/50 to-white flex flex-col md:flex-row justify-around items-center px-8 py-12 lg:px-16 mb-20'>
                <div className='w-full md:w-[35%] mb-8 md:mb-0'>
                    <h1 className='font-semibold text-xl lg:text-3xl md:text-2xl  mb-5'>
                        Explore More Ways We Can Help You Grow
                    </h1>
                    <p className='text-base lg:text-sm md:text-xs text-justify'>
                        Your business needs more than just Multimedia. Discover how our full suite of services works together to drive real results.
                    </p>
                </div>

                <div className='w-full md:w-[55%] flex flex-wrap gap-3 justify-center'>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/TechSolution">Technology Solutions</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/Business">Business strategy consulting</Link>
                    </button>
                     <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                                                                <Link to="/service/SaaS">Sustainability-as-a-Service</Link>
                                                            </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/Sales"> Sales</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/portfolio/Multimedia"> Multimedia</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/DigitalMarketing"> Digital Marketing</Link>
                    </button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default RAAS

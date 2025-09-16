import React, { useState } from 'react';
import bg from '../../assets/Service/SaaS/HeroSection.jpg';
import Footer from '../Footer/Footer';
import one from '../../assets/Service/SaaS/1.png';
import two from '../../assets/Service/SaaS/2.png';
import three from '../../assets/Service/SaaS/3.png';
import four from '../../assets/Service/SaaS/4.png';
import CustomBtn from '../Button/CustomBtn';
import { Link } from 'react-router-dom';
const Business = () => {
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
            title: "Disconnected Operations",
            description:
                "Sustainability isn’t integrated into daily workflows or business decisions"
        },
        {
            title:
                "Greenwashing Risks",
            description:
                "Without a solid strategy, companies risk shallow eco-campaigns that erode trust and credibility."
        },

        {
            title: " Short-Term Profits > Long-Term Purpose",
            description:
                "The race for revenue often overshadows people-centric and planet-friendly decisions."
        },
        {
            title: "Lack of Awareness or Access",
            description:
                "Many entrepreneurs want to build ethically - but lack the guidance, tools, or networks to do it right."
        },
    ];
    const solutions = [
        {
            title: "Green Business Strategy",
            image: one,
            description:
                "We help startups and SMEs align their models with sustainable development goals (SDGs)- so you grow responsibly with profits, not just rapidly."
        },
        {
            title: " Sustainability Audits & Roadmapping",
            image: two,
            description:
                "We assess your current impact, identify improvement zones, and build a sustainable action plan"
        },

        {
            title: "Ethical Supply Chain Consulting",
            image: three,
            description:
                "We connect you with eco-conscious vendors, partners, and collaborators, helping you reduce your carbon footprint without compromising operations."
        },
        {
            title: "Workshops, Training & Culture Activation",
            image: four,
            description:
                "We build systems and  team awareness so your entire team lives the sustainability mission."
        },
    ];
    return (
        <>
            {/* Header */}
            <header className="relative w-full min-h-screen flex justify-center items-center">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt="Business Strategy Background"
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 w-full  gap-6 max-w-[1200px]" >
                    <h1 className="text-[#19BDE8] font-semibold text-3xl md:text-6xl leading-tight text-justify sm:text-center">
                       Sustainability As A Service 
                    </h1>
                    <span className="font-semibold text-1xl lg:text-3xl">“Sustainability in Business: More Than a Buzzword.<br/> It’s a Responsibility.”</span>
                    <p className="font-normal text-base md:text-xl   text-center  sm:text-center">
                         In a world facing climate crisis, social inequality, and resource scarcity, businesses can no longer afford to operate on profit alone. Your customers, investors, and teams want more than just performance - they want purpose.

                    </p>
                   <Link to='/contact'>
                        <CustomBtn> Start Building a Sustainable Growth Strategy </CustomBtn>
                   </Link>
                </div>
            </header>

            {/* Content */}
            <main className=''>
                <div className="px-4 py-12 bg-white text-gray-800">
                    {/* Problems Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] text-justify sm:text-center">
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
                                    style={tiltStyles[index] || {}}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <div className="w-10 h-10 border-2 border-black text-black font-normal rounded-[50px] p-6 mx-auto mb-4 flex items-center justify-center text-4xl ">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-lg md:text-2xl mb-4 text-black text-justify sm:text-center">{problem.title}</h3>
                                    <p className="text-base md:text-lg font-normal text-black text-justify sm:text-justify">{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solutions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] text-center mb-8 text-justify sm:text-center">
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
                                            <h4 className="font-medium text-xl md:text-2xl text-justify sm:text-left">{solution.title}</h4>
                                            <p className="text-base md:text-lg text-gray-600 mt-1 text-justify sm:text-left">
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
            {/* Exxplore */}
            <div className='w-full min-h-[300px] bg-gradient-to-t from-[#19BDE880]/50 to-white flex flex-col md:flex-row justify-around items-center px-8 py-12 lg:px-16 mb-20'>
                <div className='w-full md:w-[35%] mb-8 md:mb-0'>
                    <h1 className='font-semibold text-xl lg:text-3xl md:text-2xl  mb-5 text-justify sm:text-left'>
                        Explore More Ways We Can Help You Grow
                    </h1>
                    <p className='text-base lg:text-sm md:text-xs text-justify sm:text-left'>
                        Your business needs more than just Multimedia. Discover how our full suite of services works together to drive real results.
                    </p>
                </div>

                <div className='w-full md:w-[55%] flex flex-wrap gap-3 justify-center '>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/TechSolution">Technology Solutions</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/DigitalMarketing"> Digital Marketing</Link>
                    </button>
                    
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/Sales"> Sales</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                                            <Link to="/service/Business">Business strategy consulting</Link>
                                        </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/service/RAAS"> RaaS Solutions</Link>
                    </button>
                    <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                        <Link to="/portfolio/Multimedia"> Multimedia</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Business;

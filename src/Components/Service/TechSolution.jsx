import React, { useState } from 'react';
import bg from '../../assets/Service/TechSolution/HeroSection.png'
import Footer from '../Footer/Footer';
import one from '../../assets/Service/TechSolution/1.png'
import two from '../../assets/Service/TechSolution/2.png'
import three from '../../assets/Service/TechSolution/3.png'
import four from '../../assets/Service/TechSolution/4.png'
import img5 from '../../assets/Service/TechSolution/5.png';
import img6 from '../../assets/Service/TechSolution/6.png';
import img1 from '../../assets/Service/TechSolution/opptiverse.png';
import img7 from '../../assets/Service/TechSolution/7.png';
import { useNavigate, Link } from 'react-router-dom';
import CustomBtn from '../Button/CustomBtn';

const TechSolution = () => {
    const navigate = useNavigate();
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
            title: "Outdated Digital Presence",
            description: "Your website doesn't reflect your brand or keep users engaged."
        },
        {
            title: "Mobile Inaccessibility",
            description: "Customers drop off due to clunky or missing mobile experience.",
        },
        {
             title: (
                <>
                    Transparency<br />Gaps
                </>
            ),
            description: "Insecure systems reduce user confidence and brand reliability.",
        },
        {
            title: " Repetitive Workflows",
            description: "Too much time is lost doing what AI can automate in seconds.",
        },
    ];
    const solutions = [
        {
            title: "Web & App Development (Your Digital Gateway)",
            image: one,
            description:
                "We build modern, high-performance websites and apps designed for speed, trust, and conversion.",
        },
        {
            title: "E-Commerce Solutions (Your 24/7 Storefront)",
            image: two,
            description:
                "End-to-end eCommerce setup with payment integration, inventory, and analytics.",
        },
        {
            title: " AI/ML, Blockchain & Future-Tech",
            image: four,

            description:
                "Make your business future-ready with AI-powered personalization, smart automation, and blockchain integration.",
        },
        {
            title: "CRM, ERP & Process Tools",
            image: three,
            description:
                "We build and integrate systems that actually work for you.",
        },
    ];
    {/*
   const CreativityAction = [
        { id: 1, src: img1, alt: 'Image 1', description: 'Opptiverse ', extra: 'Entrepreneurs can showcase ideas, discover collaborators, and grow ventures.', link: 'https://opptiverse.com/' },
        { id: 2, src: img5, alt: 'Image 5', description: 'Farmer\'s Angadi', extra: 'Ensures ethical sourcing and freshness while empowering small farmers with fair income.', link: 'https://www.farmersangadi.com/' },
        { id: 3, src: img6, alt: 'Image 6', description: 'Mommy\'s Farm', extra: 'Delivers farm-fresh and organic goodness: fruits, vegetables, millets, dairy, and more — straight from farmers to your home.', link: '#' },
        { id: 4, src: img7, alt: 'Image 4', description: 'Description Generator',extra: 'Create and share opportunities - post your own (CROP) or pass them on (POP) to help talents and ideas grow together.', link: 'https://app.opptiverse.com/requirements' },

    ];
    */}

    return (
        <>
           {/* Header */}
            <header className="relative w-full min-h-screen flex justify-center items-center">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover z-0"
                    src={bg}
                    alt="background"
                />

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-0 w-full max-w-[1200px] gap-6">
                    <h1 className="text-[#19BDE8] font-semibold text-3xl md:text-6xl leading-tight md:text-center">
                        Technology Solutions
                    </h1>
                    <span className="font-semibold text-1xl lg:text-3xl">“Creating Real Impact, Not Just Interfaces”</span>
                    <p className="font-normal text-base md:text-xl text-center ">
                        
                        Your website is not just digital real estate.
                        It’s the first handshake, the first impression, and often the first deal - breaker.

                    </p>
                   <Link to='/contact'>
                        <CustomBtn> Power Your Business with Innovation</CustomBtn>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className=''>
                <div className="px-4 py-12 bg-white text-gray-800">
                    {/* Problems Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] mb-5">
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
                                    style={tiltStyles[index]}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <div className="w-10 h-10 border-2 border-black text-black font-normal rounded-[50px] p-6 mx-auto mb-4 flex items-center justify-center text-4xl ">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold text-xl md:text-2xl mb-4 text-black">{problem.title}</h3>
                                    <p className="text-base font-normal text-black text-justify">{problem.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Solutions Section */}
                    <section className="max-w-4xl mx-auto">
                        <h2 className="text-xl md:text-3xl font-bold text-[#19BDE8] text-center mb-8">
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
            {/* See Our Creativity in Action */}
            {/*
            <div className='w-full flex flex-col items-center justify-center mb-8'>
                <h1 className='text-[#19BDE8] font-semibold text-lg md:text-2xl text-center'> See Our Creativity in Action</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto p-4">

                {CreativityAction.map((img) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-48 object-cover rounded-lg shadow"
                    />
                ))}
            </div>
            <div className='w-full flex flex-col items-center justify-center mt-3'>

              
                <button className='flex items-center gap-3 font-semibold text-2xl text-white bg-[#19BDE8] py-3 px-3.5 rounded-xl cursor-pointer'
                    onClick={() => navigate("/portfolio/Technology")}>
                    Explore Our Portfolio
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.50005 1.5C1.50005 1.5 7.5 5.9189 7.5 7.5C7.5 9.0812 1.5 13.5 1.5 13.5" stroke="#EBEBEB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                    
            </div>
            */}
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
                     <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                                                                <Link to="/service/SaaS">Sustainability-as-a-Service</Link>
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

export default TechSolution;

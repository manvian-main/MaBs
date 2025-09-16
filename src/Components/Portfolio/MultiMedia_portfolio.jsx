import React, { useState } from 'react';
import bg from '../../assets/Portfolio/MultiMedia-portfolio/HeroSection.png';
import icon from '../../assets/Portfolio/MultiMedia-portfolio/Icon-Design.png';
import logo_Alg from '../../assets/Portfolio/MultiMedia-portfolio/Logo_Algorithms.png';
import icon_creation from '../../assets/Portfolio/MultiMedia-portfolio/icon_creation.png';
import work_img from '../../assets/Portfolio/MultiMedia-portfolio/work.png';
import Footer from '../Footer/Footer';
import Explore from '../Service/Explore';
import key1 from '../../assets/Portfolio/MultiMedia-portfolio/keyOutCome1.webp';
import CustomBtn from '../Button/CustomBtn';
import Value from '../../assets/Portfolio/Value.mp4'
import Impact from '../../assets/Portfolio/Impact.mp4'

const MultiMedia_portfolio = () => {
  const [tiltStyles, setTiltStyles] = useState({});
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 30; // Adjust the multiplier for tilt intensity
    const rotateY = ((x - centerX) / centerX) * -30;

    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }));
  };

  const handleMouseLeave = (index) => {
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: 'rotateX(0deg) rotateY(0deg)'
      }
    }));
  };

  return (
    <>
      <header className='relative w-full h-[822.86px] flex justify-center items-center'>
        <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="" />
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-black/65 z-10'></div>
        <div className='flex flex-col items-center gap-6 text-center w-11/12 max-w-6xl z-20 text-white'>
          <h1 className='text-[#19BDE8] font-semibold text-3xl  md:text-6xl'>
            Real Work. Real Results.
          </h1>
          <p className='font-normal text-base  md:text-xl mt-6 text-justify'>
            Ready to take your business to the next level? Whether you’re building a bold brand or creating something meaningful, we transform your ideas into powerful visuals and seamless digital experiences that make a real impact.
          </p>
          <a href="#">
            <CustomBtn>Make Your Brand Stand Out</CustomBtn>
          </a>
        </div>
      </header>

      <main>
        {/* Brand Identity */}
        <div className="max-w-6xl mt-20 mx-auto p-6 rounded-md">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-4">
            Brand Identity That Stands Out
          </h2>
          <h2 className='font-medium text-xl md:text-2xl mt-10'>Logo Design</h2>
          <section className="grid md:grid-cols-2 gap-6 items-center">
            {/* Logo Section */}
            <div className="flex justify-center items-center">
              <img
                src={icon} // Replace with actual path
                alt="NM-ICPS Logo"
                className="w-[80%] md:w-[401px] h-auto mb-4"
              />
            </div>
            {/* Textual Content */}
            <div>
              <p className="text-xl mb-1 font-medium text-justify">Client</p>
              <p className="mb-2 text-base font-normal text-justify">
                National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS)
              </p>
              <p className="text-xl mb-1 font-medium text-justify">What they do</p>
              <p className="mb-2 text-base font-normal text-justify">
                NM-ICPS promotes innovation in CPS by connecting academia, industry, government,
                and international bodies to develop impactful technologies and prototypes.
              </p>
              <p className="text-xl mb-1 font-medium text-justify">Logo Concept</p>
              <p className="mb-2 text-base font-normal text-justify">
                The logo combines Wi-Fi, antenna, and bulb icons to symbolize connectivity,
                intelligence, and innovation. It reflects a fusion of hardware and software, with a
                color palette inspired by the Indian national flag to represent the country.
              </p>
            </div>
          </section>

          {/* Icon Creation Section */}
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 text-sm">
              <div>
                <img
                  src={logo_Alg}
                  alt="Logo Algorithms"
                  className="w-[200px] sm:w-[220px] md:w-[280px] lg:w-[350px] transition-all duration-300"
                />
              </div>
              <div>
                <img
                  src={icon_creation}
                  alt="Icon Creation"
                  className="w-[200px] sm:w-[220px] md:w-[280px] lg:w-[350px] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <section className="max-w-6xl mt-20 mx-auto p-6 rounded-md">
          <h2 className= "text-2xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-3">
            Visual Content That Engages
          </h2>
          <p className='font-medium text-xl md:text-3xl pt-3 text-justify'>Graphic Design & Print AD</p>
          <div className='flex flex-col md:flex-row justify-between gap-6 mt-7'>
            <div className='w-full md:w-[424px]'>
              <h1 className="font-medium text-xl mb-2">Client</h1>
              <p className='font-normal text-base text-justify'>IITM Pravartak</p>
              <p className='font-normal text-base text-justify'> Technology Innovation Hub at IIT Madras.</p>
            </div>
            <div className='w-full md:w-[736px]'>
              <h1 className='font-medium text-xl mb-2'>What They Do</h1>
              <p className='font-normal text-base text-justify'>
                IITM Pravartak drives innovation in Sensors, Networking, Actuators, and Control Systems (SNACS) through technology development, entrepreneurship, skill-building, and global collaborations.
              </p>
            </div>
          </div>
          <img src={work_img} className='mt-4 w-full h-auto' alt="Work Image" />
        </section>

        {/* Impact (Desktop Only) */}
        <section className='hidden lg:block mt-5 md:mt-20 mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Impact of Our Multimedia Services
            </h2>
            <p className='font-normal  text-base md:text-xl pt-3 text-center'>
              Our multimedia work helped clients strengthen brand identity, enhance visual communication,
              and connect more effectively with their audiences. Through design and storytelling, we made
              their message memorable.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div
              className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute z-10 top-10'
              style={tiltStyles[0]}
              onMouseMove={(e) => handleMouseMove(e, 0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              <h1 className='font-medium text-xl md:text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-base md:text-xl font-normal space-y-4'>
                <li>Improved audience engagement through clean, creative visuals.</li>
                <li>Boosted professional image with meaningful branding.</li>
                <li>Elevated communication of complex ideas using graphics and video.</li>
                <li>Increased recognition through consistent and tailored design assets.</li>
              </ul>
            </div>
            <div className='w-full lg:w-[588px] absolute right-0 lg:block'>
              <video
                className="rounded-xl w-full h-[300px] lg:h-[450px] object-cover"
                src={Impact}
                autoPlay
                muted
                loop
                playsInline
              />

            </div>
          </div>
        </section>
        {/* Value (Desktop Only) */}
        <section className='hidden lg:block mt-0 md:mt-20  mx-auto px-4 md:px-6 rounded-md'>
          <div className='px-4 md:px-10'>
            <h2 className="text-xl md:text-4xl font-semibold text-[#19BDE8] text-center mb-3">
              Value We Delivered to Our Clients
            </h2>
            <p className='font-normal text-base md:text-xl pt-3 text-center'>
              By combining technical expertise with user-focused design, we created platforms that solve real problems and support business growth.
            </p>
          </div>
          <div className='relative w-full lg:w-[1041px] min-h-[481px] mt-8 mx-auto'>
            <div
              className='w-full lg:w-[588px] absolute left-0'
            >
              <video
                className='rounded-xl w-full h-[300px] lg:h-[450px] object-cover lg:block'
                src={Value}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div
              className='w-full lg:w-[588px] bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-6 rounded-lg shadow-xl absolute right-0 z-10 top-10'
              onMouseMove={(e) => handleMouseMove(e, 1)}
              onMouseLeave={() => handleMouseLeave(1)}
              style={tiltStyles[1]}
            >
              <h1 className='font-medium text-xl md:text-3xl'>Key Outcomes:</h1>
              <ul className='list-disc pl-6 md:pl-10 mt-5 text-base md:text-xl font-normal space-y-4'>
                <li>Custom-built solutions tailored to their business model</li>
                <li>Future-ready platforms using modern tech stacks</li>
                <li>Improved customer interaction through intuitive interfaces</li>
                <li>Stronger online presence backed by performance and reliability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mobile Only: Key Outcomes and Video Stacked */}
        <div className="block lg:hidden w-full max-w-full overflow-x-hidden">
          {/* Impact Section - Mobile */}
          <section className="mt-6 px-0 w-full max-w-full">
            <h2 className="text-xl font-semibold text-[#19BDE8] text-center mb-3">
              Impact of Our Multimedia Services
            </h2>
            <p className="font-normal text-base pt-3 text-center">
              Our multimedia work helped clients strengthen brand identity, enhance visual communication, and connect more effectively with their audiences. Through design and storytelling, we made their message memorable.
            </p>
            <div className="flex flex-col items-center mt-4 gap-3 w-full max-w-full">
              <video
                className="rounded-xl w-full h-[180px] object-cover max-w-full"
                src={Impact}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="w-full bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-2 rounded-lg shadow-xl text-xs">
                <h1 className="font-medium text-sm mb-2">Key Outcomes:</h1>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Improved audience engagement through clean, creative visuals.</li>
                  <li>Boosted professional image with meaningful branding.</li>
                  <li>Elevated communication of complex ideas using graphics and video.</li>
                  <li>Increased recognition through consistent and tailored design assets.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Value Section - Mobile */}
          <section className="mt-8 px-0 w-full max-w-full">
            <h2 className="text-xl font-semibold text-[#19BDE8] text-center mb-3">
              Value We Delivered to Our Clients
            </h2>
            <p className="font-normal text-base pt-3 text-center">
              By combining technical expertise with user-focused design, we created platforms that solve real problems and support business growth.
            </p>
            <div className="flex flex-col items-center mt-4 gap-3 w-full max-w-full">
              <video
                className="rounded-xl w-full h-[180px] object-cover max-w-full"
                src={Value}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="w-full bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] p-2 rounded-lg shadow-xl text-xs">
                <h1 className="font-medium text-sm mb-2">Key Outcomes:</h1>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Custom-built solutions tailored to their business model</li>
                  <li>Future-ready platforms using modern tech stacks</li>
                  <li>Improved customer interaction through intuitive interfaces</li>
                  <li>Stronger online presence backed by performance and reliability</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Want to expplore links and images */}
        <section className="flex flex-col md:flex-row justify-between items-center px-10 md:py-16 md:mt-10 bg-white mb-5">
          <div className="w-full md:w-1/2 pr-0 md:pr-10 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-semibold text-[#19BDE8] mb-4">Want to Explore More?</h2>
            <p className="text-base md:text-lg text-gray-800 mb-6 text-justify">
              If you'd like to see more of our creative work and how we bring brands to life through design,
              click the button below.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#19BDE8] hover:bg-[#0eaed4] text-white text-sm md:text-lg px-6 py-3 rounded-md font-medium mb-5 cursor-pointer hover:scale-[0.98]">
                See More Multimedia Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 ">
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
            <img src={key1} alt="" className='w-full h-[140px] object-cover rounded-lg cursor-pointer' />
          </div>
        </section>

        <Explore />
        <Footer />
      </main>
    </>
  );
};

export default MultiMedia_portfolio;

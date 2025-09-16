import React, { useEffect } from 'react';
import CallToAction from './CallToAction';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation, Link } from 'react-router-dom';
import LeftTop from './LeftTop'
import RightTop from './RightTop'
import LeftBottom from './LeftBottom'
import RightBottom from './RightBottom';



// Animation variants
const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.3
    }
  }
};

const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Section wrapper
const Section = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-50px'
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12"
    >
      {children}
    </motion.section>
  );
};

const MainSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden"> {/* Prevents horizontal overflow */}
      <div className="w-full flex justify-center pt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#19BDE8]">About Us</h1>
      </div>
      <div className="w-full flex justify-center mt-4 mb-8 px-4">
        <p className="max-w-6xl text-justify text-base md:text-lg text-gray-800">
          At Manvian, we’re not just building businesses - we’re creating pathways. We believe that entrepreneurship is personal. It’s more than just profits or plans - it’s about supporting the people and the planet. Behind every business is a human story. And every story deserves a real chance to thrive. The question is - how do you turn potential into progress? That’s where Manvian steps in. We are building a supportive ecosystem that equips and empower entrepreneurs – From startup advice to advanced business strategies -.Our approach is deeply personalized, because we know: cookie-cutter doesn't cut it. Every business is unique - and so is our approach to helping it win. Partnering with Manvian is about more than addressing today’s challenges - it’s about securing tomorrow’s success. We prioritize ROI, driving sustained growth, leadership, and market dominance.
        </p>
      </div>
      <main className="bg-white w-full min-h-screen flex justify-center px-4 md:px-6 mb-10">
        <div className="w-full max-w-6xl mx-auto space-y-16 md:space-y-24">
         <>
         <div className="flex flex-col md:flex-row gap-0 md:gap-24">
           <LeftTop />
           <RightTop />
         </div>
         <div className="flex flex-col md:flex-row gap-0 md:gap-24">
         <LeftBottom />
         <RightBottom /> 
         </div>
    </>
         
         
         
        </div>
      </main>
         <Link to='/insights'>
        <CallToAction/>
        </Link>
      <Footer />
    </div>
  );
};

export default MainSection;

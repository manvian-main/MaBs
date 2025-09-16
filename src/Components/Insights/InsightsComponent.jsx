import React from 'react'
import ClientsLogo from './ClientsLogo'
import Testimonial from './Testimonial'
import Footer from '../Footer/Footer'
import News from './News'
import ClientGrid from './ClientGrid'
import CallToAction from './CallToAction'
import SmartReads from './SmartRead'
import Articles from '../Blogs/Articles'

const InsightsComponent = () => {
  // Scroll to section by id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handler = (e) => {
      if (e.detail === 'clients-logo') scrollToSection('clients-logo-section');
      if (e.detail === 'testimonial') scrollToSection('testimonial-section');
      if (e.detail === 'news') scrollToSection('news-section');
      if (e.detail === 'blogs') scrollToSection('blogs-section');
    };
    window.addEventListener('insights-nav', handler);
    // On mount, check if a scroll target is set in sessionStorage
    const target = sessionStorage.getItem('insights-scroll-target');
    if (target) {
      setTimeout(() => {
        scrollToSection(`${target}-section`);
        sessionStorage.removeItem('insights-scroll-target');
      }, 200); // Delay to ensure DOM is ready
    }
    return () => window.removeEventListener('insights-nav', handler);
  }, []);

  return (
    <>
      <div id="clients-logo-section" style={{ scrollMarginTop: '100px' }}>
        <ClientsLogo/>
      </div>
      {/*
      <ClientGrid/>
      */}
      <div id="testimonial-section" style={{ scrollMarginTop: '100px' }}>
        <Testimonial/>
      </div>
      <SmartReads/>
      <div id="news-section" style={{ scrollMarginTop: '100px', marginTop: '-52px' }}>
        <News/>
      </div>
      
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default InsightsComponent

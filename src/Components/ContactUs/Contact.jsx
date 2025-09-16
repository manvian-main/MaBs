import React from 'react'
import { useState } from 'react';
import bg from "../../assets/Contact/Contact_Hero.png"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from 'react-icons/fi';
import CustomBtn from '../Button/CustomBtn';
import ContactFooter from './ContactFooter';
// Logo
import Linked from '../../assets/Logo/linkedin.svg'
import Insta from '../../assets/Logo/insta.svg'
import Whatsapp from '../../assets/Logo/whatsapp.svg'
import fb from '../../assets/Logo/facebook.svg'
import opptiverse from '../../assets/Logo/opptiverse_Black.svg'
import Location_Icon from '../../assets/Contact/Loaction.png'
import ContactUs_Icon from '../../assets/Contact/contact-us.png';
import contactUsIcon from '../../assets/Contact/contact-us.png';
import Email_Icon from '../../assets/Contact/email.png';

const faqs = [
    { question: "1. How do I get a quote for a project?", answer: "To get a quote, please contact us with your project details and requirements." },
    { question: "2. What services do you offer?", answer: "We offer technology, multimedia, business strategy, and other services." },
    { question: "3. How long does a typical project take?", answer: "Project timelines vary based on scope and complexity." },
    { question: "4. Can you handle urgent or fast-track projects?", answer: "Yes, we can accommodate urgent project timelines when needed." },
    { question: "5. Do you offer post-project support or maintenance?", answer: "Yes, we provide ongoing support and maintenance plans." },
    { question: "6. What if I'm not sure which service fits my needs?", answer: "Contact us and we'll guide you based on your goals." },
];

const Contact = () => {
    const countries = [
        "Afghanistan", "Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Botswana",
        "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark",
        "Egypt", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Kenya", "Kuwait", "Latvia", "Lithuania",
        "Luxembourg", "Malaysia", "Mexico", "Morocco", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nigeria",
        "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
        "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
        "Switzerland", "Thailand", "Tunisia", "Turkey", "UAE", "Ukraine", "United Kingdom", "United States",
        "Venezuela", "Vietnam", "Zambia", "Zimbabwe"
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-mail`, {
            const response = await fetch("https://script.google.com/macros/s/AKfycbz4t50ww9fBOmPHOGU4TySEUGOhp5jXBLGeOSCEd3DXVVErN_XBBHqW4qOeU7Uau9_d5g/exec", {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                body: JSON.stringify(data),
            });

             alert('Thank you for contacting us! We’ll get back to you soon.');
            // console.log('Response:', response);

            // if (response.ok) {
            //     alert('Message sent successfully!');
            // } else {
            //     alert('Failed to send message. Please try again.');
            // }
        } catch (error) {
            alert('Thank you for contacting us! We’ll get back to you soon.');
        }
    };

    return (
        <>
            <header className='flex flex-col w-full min-h-screen justify-start items-center relative pb-15'>
                <img className='absolute w-full h-full z-0 object-cover' src={bg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10'></div>
                {/* Main content container - adjusted positioning */}
                <div className='flex flex-col items-center gap-6 text-center w-full max-w-6xl z-20 text-white px-4 mt-32 md:mt-40'>
                    <h1 className='text-[#19BDE8] font-semibold text-3xl  md:text-5xl'>Contact Us</h1>
                    <p className='font-normal text-base md:text-2xl px-4 mt-6 text-center'>
                        We'd love to hear from you! Whether you have a question, need assistance, or want to explore how we can work together, our team is here to help.
                    </p>
                    <a
                        href="https://outlook.office365.com/book/Catherine1@deepdarkcreations.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <CustomBtn> Booking Appointment</CustomBtn>
                    </a>
                </div>

                {/* Contact cards container - adjusted spacing */}
                <div className='z-20 flex flex-row flex-wrap justify-center items-stretch gap-10 w-full max-w-6xl px-4 mt-16 md:mt-20'>
                    {/* Location */}
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full md:w-[340px] md:h-[320px] text-white items-center text-center backdrop-blur-sm'>

                        <div className='h-16 w-16 md:h-18 sm:w-16 text-[#19BDE8] flex items-center justify-center mt-5 '>
                            <img src={Location_Icon} className='h-full w-full object-contain' />
                        </div>
                        <div className='space-y-4'>
                            <p className='font-normal text-base md:text-xl'>Manvian Business Solutions</p>
                            <p className='font-normal text-base md:text-xl'>Ambattur, Chennai</p>
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full md:w-[340px] md:h-[320px] text-white items-center text-center backdrop-blur-sm'>
                        <div className='h-16 w-16 md:h-18 sm:w-16 flex items-center justify-center mt-5'>
                            <img src={ContactUs_Icon} alt="Phone Icon" className='h-full w-full object-contain' />
                        </div>
                        <div className='space-y-4'>
                            <p className='font-normal text-base md:text-2xl'>Call Us</p>
                            <p className='font-normal text-base md:text-xl text-justify'>+91 87783 59643</p>
                        </div>
                    </div>
                    {/* Email */}
                    <div className='rounded-2xl p-6 flex flex-col justify-center gap-4 bg-white/10 w-full md:w-[340px] md:h-[320px] text-white items-center text-center backdrop-blur-sm'>
                        <div className='h-16 w-16 md:h-18 sm:w-16 flex items-center justify-center mt-5'>
                            <img src={Email_Icon} alt="Email Icon" className='h-full w-full object-contain' />
                        </div>
                        <div className='space-y-4'>
                            <p className='font-normal text-base md:text-2xl'>E-Mail Us</p>
                            <p className='font-normal text-base md:text-xl text-justify'>operations@manvian.com</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* FAQS */}
            <section className="max-w-3xl mx-auto px-4 pt-20">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-[#19BDE8] mb-8">
                    Quick Answers to Your Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-xl transition-all duration-300 hover:shadow-lg">
                            <button
                                className="w-full text-left px-5 py-4 font-semibold hover:bg-gray-50 flex justify-between items-center transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`transition-transform duration-300 ${activeIndex === index ? 'text-[#19BDE8]' : ''}`}>
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#19BDE8]' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form */}
            <div className='w-full bg-white px-5 py-12 flex flex-col items-center'>
                <div className='text-center max-w-2xl p-5'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#19BDE8] mb-3'>Still Have Questions?</h2>
                    <p className='text-gray-600 text-sm sm:text-base md:text-lg text-justify'>
                        Didn't find your answer above? We're here to help. Just fill out the form below and we'll get back to you soon.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)]  rounded-xl px-4 sm:px-8 md:px-10 md:py-5 flex flex-col gap-6 w-full max-w-4xl mx-auto mt-15 mb-20 pb-10'>
                    <h1 className='text-[#19BDE8] font-semibold text-2xl sm:text-3xl md:text-4xl pt-4'>Get in Touch</h1>
                    <p className='font-normal text-sm sm:text-base md:text-lg text-[#1E1E1E] text-justify'>
                        Fill out our quick contact form, and we'll get back to you promptly.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="name"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Email ID</label>
                            <input
                                type='email'
                                placeholder='Enter Email-ID'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="email"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Phone Number</label>
                            <input
                                type='tel'
                                placeholder='Enter PhoneNumber'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name="phone"
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Location</label>
                            <select
                                id="country"
                                name="country"
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none [&:not(:focus)]:text-gray-500 [&:focus]:text-black'
                            >
                                <option value="" disabled selected>--Choose Country--</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Service Interested In</label>
                            <select
                                id="service"
                                name="service"
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none [&:not(:focus)]:text-gray-500 [&:focus]:text-black'
                            >
                                <option value="" disabled selected>--Choose Service--</option>
                                <option value="Technology Solutions">Technology Solutions</option>
                                <option value="Multimedia Solutions">Multimedia Solutions</option>
                                <option value="Business Strategy Consulting">Business Strategy Consulting</option>
                                <option value="Recruitment As a Service">Recruitment As A Service</option>
                                <option value="Sustainability as a Service">Sustainability As A Service</option>
                                <option value="Sales as a Service">Sales As A Service</option>
                                <option value="Digital Marketing">Digital Marketing Solutions</option>
                            </select>
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Mentorship</label>
                            <input
                                type='text'
                                placeholder='Describe your mentorship needs'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name='mentorship'
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-medium'>Collaboration</label>
                            <input
                                type='text'
                                placeholder='Describe your collaboration interest'
                                className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                name='collaboration'
                            />
                        </div>
                    </div>
                    <div>
                        <label className='block text-gray-700 mb-2 font-medium'>Message</label>
                        <textarea
                            rows="6"
                            placeholder='Write Message'
                            className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                            name="message"
                        ></textarea>
                    </div>
                    <div className='text-right'>
                        <button className='bg-[#19BDE8] text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Follow Us */}
            <section className="rounded-xl shadow-2xl py-5 md:py-10 px-2 lg:px-8 mb-15 mt-8 m-10 bg-gradient-to-t from-[#19BDE8] to-[#FFFFFF] backdrop-blur-lg bg-white/30 border border-white/40 text-center">
                <h3 className="text-lg md:text-3xl font-semibold text-[#19BDE8] mb-2">Follow Us</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg font-medium">
                    Stay connected with us on social media for updates, insights, and more.
                </p>

                {/* Social Icons with improved responsiveness */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 px-2">
                    <a href="https://opptiverse.com/" target="_blank" rel="noreferrer">
                        <img src={opptiverse} alt="opptiverse" className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                        <img src={Linked} alt="LinkedIn" className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/manvian_official?utm_source=ig_web_button_share_sheet&igsh=MW9xMXoxa3Nvejh5Mg==" target="_blank" rel="noreferrer">
                        <img src={Insta} alt="Instagram" className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer" />
                    </a>
                    <a href="https://wa.me/qr/V7WXT6GFCNQVG1" target="_blank" rel="noreferrer">
                        <img src={Whatsapp} alt="whatsapp" className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61565063135288" target="_blank" rel="noreferrer">
                        <img src={fb} alt="Facebook" className="h-12 sm:h-16 md:h-20 w-auto cursor-pointer" />
                    </a>
                </div>

                <p className="text-gray-600 text-sm sm:text-base text-center">Let's start the conversation today!</p>
            </section>


            {/* Footer */}
            <ContactFooter />
        </>
    )
}

export default Contact;

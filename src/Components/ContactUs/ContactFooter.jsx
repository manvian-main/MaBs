import React from 'react'
import opptiverse from '../../assets/Logo/opptiverse.svg'
import Linked from '../../assets/Logo/linkedin.svg'
import Insta from '../../assets/Logo/insta.svg'
import Whatsapp from '../../assets/Logo/whatsapp.svg'
import fb from '../../assets/Logo/facebook.svg'
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom'
import MABS from '../../assets/Logo/MBS.svg'
const ContactFooter = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white py-10 px-5 md:px-20">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                    <div className="flex items-center space-x-3">
                        {/* Logo Image */}
                        <img src={MABS} alt="MABS Logo" className="w-25 h-auto" />
                    </div>
                    <p className="mt-4 text-sm">
                        Empowering Businesses Through Design, Technology,<br />
                        And Strategic Solutions.
                    </p>
                    <div className="mt-6 text-sm space-y-2">
                        <p className="flex items-center gap-2 text-sm">
                            <MdEmail /> operations@manvian.com
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                            <MdPhone /> +91 87783 59643
                        </p>

                        <div className="flex space-x-3 mt-4">
                            <a href="https://opptiverse.com/" target="_blank" rel="noreferrer">
                                <img className="w-[50px] h-[50px]" src={opptiverse} alt="Opptiverse" />
                            </a>
                            <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                                <img className="w-[50px] h-[50px]" src={Linked} alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/manvian_official?utm_source=ig_web_button_share_sheet&igsh=MW9xMXoxa3Nvejh5Mg==" target="_blank" rel="noreferrer">
                                <img className="w-[50px] h-[50px]" src={Insta} alt="Instagram" />
                            </a>
                            <a href="https://wa.me/qr/V7WXT6GFCNQVG1" target="_blank" rel="noreferrer">
                                <img className="w-[50px] h-[50px]" src={Whatsapp} alt="Whatsapp" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61565063135288" target="_blank" rel="noreferrer">
                                <img className="w-[50px] h-[50px]" src={fb} alt="Facebook" />
                            </a>

                        </div>
                    </div>
                </div>

             {/* Right Section - Map instead of Form */}
                <div className="w-full h-full flex justify-center items-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124342.08026567209!2d80.06620361094245!3d13.11881395174389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ba9a487b3f%3A0x1e923f00f5206296!2sAmbattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1751453023507!5m2!1sen!2sin"
                        width="100%"
                        height="290"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                </div>

            </div>

            {/* Bottom Links */}
            <div className="max-w-screen-xl mx-auto mt-10 border-b border-white pt-6 pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-0 text-sm">
                <div>
                    <h4 className="font-semibold mb-2">What We Do</h4>
                    <ul className="space-y-1">
                        <li><Link to='/service/RAAS' >RaaS</Link></li>
                        <li><Link to='/service/Sales'>Sales</Link></li>
                        <li><Link to='/service/TechSolution'>Technology</Link></li>
                        <li><Link to='/service/DigitalMarketing'>Digital Marketing</Link></li>
                        <li><Link to='/service/multimedia'>MultiMedia</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Who We Are</h4>
                    <ul className="space-y-1">
                        <li> <Link to="/who#mission">Our Mission </Link></li>
                        <li> <Link to="/who#vision"> Our Vision</Link></li>
                        <li> <Link to="/who#goal">Goal</Link></li>
                        <li> <Link to="/who#value">Value</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 mt-4">Quick Links</h4>
                    <ul className="space-y-1">
                        <li> <Link to='/careers'> Career </Link></li>
                        <li><Link to='/insights'> Insights</Link></li>
                        <li><Link to='/product'>Product</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Resources</h4>
                    <ul className="space-y-1">
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-400 mt-8">
                © 2025 Manvian.Com. All Rights Reserved.
            </div>
        </footer >
    )
}

export default ContactFooter

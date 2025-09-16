import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './click.css';

// what we do
import first from '../../assets/Home/1 What We Do/1_Bussiness_Consultancy.png'
import second from '../../assets/Home/1 What We Do/2_Mentorship&Inverstemnt.png'
import third from '../../assets/Home/1 What We Do/3_Tech_Solution.png'
import fourth from '../../assets/Home/1 What We Do/4_Service.png'
import fifth from '../../assets/Home/1 What We Do/5_Marketing.png'
import sixth from '../../assets/Home/1 What We Do/6_Multi_Media_Solution.png'
import seven from '../../assets/Home/1 What We Do/7_Sustainability.jpg'
import { Link } from 'react-router-dom'
import CountAnimation from './CountAnimation'

const FadeInSection = ({ children, direction }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
        rootMargin: '-50px'
    })

    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.98,
            x: direction === 'left' ? -30 : 30
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 1.5,
                ease: [0.6, 0.05, 0.01, 0.99],
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            className="w-full"
        >
            {children}
        </motion.div>
    )
}

const CountingNumber = ({ end, duration = 2 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            className="font-light  text-xl lg:text-6xl text-[#19BDE8]"
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    animate={inView ? { count: end } : { count: 0 }}
                    initial={{ count: 0 }}
                    transition={{ duration: duration, type: "spring", damping: 10 }}
                >
                    {({ count }) => Math.round(count)}
                </motion.span>
                +
            </motion.span>
        </motion.div>
    );
};

const WhatWeDo = () => {
    return (
        <main className='bg-white w-full mt-10 px-4 sm:px-6 lg:px-10 overflow-x-hidden flex flex-col items-center'>
            {/* head */}
            <div className='flex flex-col gap-1.5 text-center items-center'>
                <h1 className='text-[32px] md:text-[40px] font-semibold text-[#19BDE8]'>What We Do</h1>
                <p className='text-xl md:text-2xl'>“We support entrepreneurs to prohibit their prohibition”</p>
            </div>

            <div className='mt-10 flex flex-col gap-14 items-center w-full'>
                {[
                    {
                        img: first,
                        title: '01. Business Strategy & Consultation',
                        desc: 'Feeling stuck or unsure about your next big move? We support in identifying your unique challenges and delivering solutions that align with your vision and objectives. Our approach includes deep market research, competitive analysis, strategic planning, and positioning to set you up for long - term success. Ready to turn your confusion into a clear roadmap for growth?',
                        path: "/service/Business"
                    },
                     {
                        img: fourth,
                        title: '02. Requirements as a Services',
                        desc: 'Right People, at the right time, for the right impact. Behind every great business is a team that gets it done - but finding, nurturing, and retaining that team? That’s where most companies fall behind. We don’t just help you hire - we help you build a workforce that’s aligned, skilled, and built to grow with you. Ready to stop hiring guesswork?',
                        path: "/service/RAAS",
                        reverse: true,
                    },
                    {
                        img: second,
                        title: '03. Sales as a Service',
                        desc: 'Sales isn’t just about pitching. It’s about understanding psychology, building trust, and solving problems. Marketing brings people to the door. Sales gets them to walk in, stay, and invest. In 2025, with rising competition, saturated attention, and digital noise - what businesses need isn’t more noise; they need smarter systems and human-centric strategies.',
                        path: "/service/Sales",
                        reverse: true
                    },
                    {
                        img: third,
                        title: '04. Technology Solutions',
                        desc: 'A good website is not about being online - it’s about being remembered. We specialize in website and app development, providing custom solutions that drive engagement and streamline user experiences. Our technology services ensure your digital platforms are cutting-edge and effective. Is your tech just online - or actually working for you?',
                        path: "/service/TechSolution",
                    },
                   
                    {
                        img: fifth,
                        title: '05. Digital Marketing Solutions',
                        desc: '“Visibility is no longer a luxury - it’s the lifeline of your brand. We help you cut through the digital noise with strategies that connect, converts, and create real growth. From SEO, ads to social media and storytelling - we make your brand matter. It’s not about more followers; it’s about more impact, more leads, and more trust. Is your marketing just being seen, or actually selling?”',
                        path: "/service/DigitalMarketing",
                    },
                    {
                        img: sixth,
                        title: '06. Multimedia Solutions',
                        desc: 'Design That Moves. Stories That Stick. In a world flooded with content, what you say isn’t enough - it’s how you show it. We offer dynamic content creation services to engage your audience. From captivating videos to compelling graphic design, our multimedia solutions help you communicate your brand’s story effectively. Want to turn heads and hearts?',
                        path: "/service/multimedia",
                        reverse: true,
                    } ,
                    {
                        img: seven,
                        title: '07.Sustainability-as-a-Service',
                        desc: 'The future isn’t just digital - it’s sustainable. And your business should be both. Our Sustainability - as - a - Service model embeds eco - friendly practices, impact partnerships, and circular - economy design directly into your operations - so you lead the market and preserve the planet. What if sustainability wasn’t a cost - but a competitive advantage?',
                        path: "/service/SaaS",
                        reverse: true,
                    },
                ].map((item, index) => {
                    // For image: left-side (not reverse) comes from left, right-side (reverse) comes from right
                    // For text: left-side (not reverse) comes from left, right-side (reverse) comes from right
                    const isZigzag = index % 2 === 1;
                    const imageDirection = isZigzag ? 'right' : 'left';
                    const textDirection = isZigzag ? 'left' : 'right';
                    return (
                        <div
                            key={index}
                            className={`flex ${isZigzag ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} items-center gap-6 lg:gap-12`}
                        >
                            <FadeInSection direction={imageDirection}>
                                <img className='w-full md:w-[570px] h-[250px] md:h-[322.27px] rounded-3xl' src={item.img} alt="" />
                            </FadeInSection>
                            <FadeInSection direction={textDirection}>
                                <Link to={item.path}>
                                    <div className='w-full lg:w-[570px] flex flex-col gap-4'>
                                        <h1 className='font-semibold text-xl md:text-3xl text-[#1E1E1E] flex items-center'>
                                            <span className='text-[#19BDE8]'>
                                              {item.title.slice(0, 4)}{item.title.slice(4)}
                                            </span>
                                            <button className="bounce-btn right ml-4 align-middle text-bold"><span>→</span></button>
                                        </h1>
                                        <p className='font-normal text-base md:text-2xl text-justify'>{item.desc}</p>
                                        {/* Add Explore more button for all sections */}
                                        {index <= 6 && (
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <button className="ui-btn"><span>Explore more</span></button>
                                          </div>
                                        )}
                                    </div>
                                </Link>
                            </FadeInSection>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}

export default WhatWeDo

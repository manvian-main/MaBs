import React, { useState, useEffect, useRef } from "react";
import "./TestimonialSlider.css";
import StarImg from '../../assets/Star.png';

const testimonials = [
	{
		
		image: "https://randomuser.me/api/portraits/women/1.jpg",
		company: "VERTECH ADVISOR CONSULTANT SERVICES (OPC) PRIVATE LIMITED",
		text: "Big thanks to Catherine, Founder of Manvian, for her incredible support during the internship and hiring process. Her guidance—from resumes to interviews—helped those I referred land roles that matched their skills and goals. Highly recommended for a smooth, confident job hunt!",
		rating: 5,
	},
	{
		
		image: "https://randomuser.me/api/portraits/men/2.jpg",
		company: "CREATEWISE PRIVATE LIMITED",
		text: "Manvian Company provided outstanding hiring services, delivering highly qualified candidates perfectly matching our needs. Their professionalism and dedication made the process seamless. Wishing the best for the future.",
		rating: 4,
	},
	{
		
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		company: "CIRCLEXPLUSE PRIVATE LIMITED",
		text: "Working with Manvian has been a transformative experience for our company, Circlexperts. Their expertise and support in hiring top talent for our sales, content writing, and marketing teams have been invaluable. Manvian truly understands our needs and consistently delivers exceptional results. Their commitment to our success and we look forward to continuing our partnership.",
		rating: 5,
	},
	{
		name: "- Ayush Asera",
		role: " Founder and CEO",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
		company: "Extraa",
		text: "Manvian helped us find a talented full-stack developer who fit both our project needs and our culture. Their turnaround time and understanding of technical requirements were exceptional.",
		rating: 4,
	},
	{
		name: "- Arun Paneerselvam",
		role: " Founder & CEO",
		image: "https://randomuser.me/api/portraits/women/5.jpg",
		company: "Organic Heaven",
		text: "We were struggling to build a strong sales and marketing team until we partnered with Manvian. They didn’t just help us hire - they helped us scale with the right people.",
		rating: 5,
	},
	{
		name: "- Naresh",
		role: " Founder & CEO",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
		company: "Biogleamy",
		text: "We hired our Business Development Executive through Manvian, and it has been one of the best decisions for Biogleamy. They filtered candidates so well, we only had to choose from the best.",
		rating: 5,
	},
	{
		name: "- Kirubanathan",
		role: "Director",
		image: "https://randomuser.me/api/portraits/women/7.jpg",
		company: "Galaxy Power",
		text: "Manvian made the entire technician hiring process seamless. The technician we onboarded was highly committed and experienced- we couldn’t have asked for a better fit.",
		rating: 5,
	},
	{
		name: "- Murtaza",
		role: "Founder & CEO",
		image: "https://randomuser.me/api/portraits/men/8.jpg",
		company: "AC People",
		text: "Finding reliable AC technicians used to be a challenge - until Manvian stepped in. They understood the profile in depth and delivered quality candidates fast.",
		rating: 5,
	},
	{
		name: "- Adith",
		role: " CEO",
		image: "https://randomuser.me/api/portraits/women/9.jpg",
		company: "Superteck Industries",
		text: "Manvian found us a creative and proactive designer who now handles all our brand visuals. Their hiring support has made a huge difference in how we present ourselves.",
		rating: 5,
	},
	{
		name: "- Govind",
		role: "Founder & CEO",
		image: "https://randomuser.me/api/portraits/men/10.jpg",
		company: "Seaport AI",
		text: "Our domain needs are niche and highly technical, but Manvian still delivered the right talent. The research associate we hired is now leading our latest AI innovation project.",
		rating: 5,
	},
	{
		name: "- Vijay",
		role: " Director",
		image: "https://randomuser.me/api/portraits/women/11.jpg",
		company: "Artmount Academy",
		text: "From campaign design to execution, Manvian’s marketing service was crisp, timely, and extremely effective. We’ve had better visibility, lead flow, and brand recall.",
		rating: 5,
	},
	{
		name: "- Sristi",
		role: "Founder & CEO",
		image: "https://randomuser.me/api/portraits/men/12.jpg",
		company: "Ventura",
		text: "Manvian’s digital marketing team brought a fresh voice to our online presence. We finally started getting consistent traction and engagement across all platforms.",
		rating: 5,
	},
];

const renderStars = (rating) => {
	return (
		<div className="testimonial-stars">
			{Array.from({ length: rating }).map((_, i) => (
				<img
					key={i}
					src={StarImg}
					alt="star"
					style={{ width: 32, height: 32, display: 'inline-block', verticalAlign: 'middle', marginRight: 2 }}
				/>
			))}
		</div>
	);
};

// Helper: slotIndex to scale and zIndex for ring effect
const getRingStyle = (slotIndex, totalSlots) => {
	const minScale = 0.7;
	const maxScale = 1.2;
	const scaleStep = (maxScale - minScale) / (totalSlots - 1);
	const scale = minScale + scaleStep * slotIndex;
	const zIndex = 10 + slotIndex;
	return { transform: `scale(${scale})`, zIndex };
};

const Testimonial = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mainMove, setMainMove] = useState(false); // NEW: for animation
	const [hoveredRingIndex, setHoveredRingIndex] = useState(null); // Track hovered image in ring
	const timerRef = useRef();
	const numClients = testimonials.length - 1;

	// Helper to get the correct order of other clients for the ring
	const getOtherClients = (currentIndex) => {
		const others = testimonials.filter((_, i) => i !== currentIndex);
		let queue = [];
		let idx = (currentIndex + 1) % testimonials.length;
		for (let i = 0; i < others.length; i++) {
			queue.push(testimonials[idx]);
			idx = (idx + 1) % testimonials.length;
			if (queue.length === others.length) break;
		}
		return queue;
	};

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 9000); // Changed from 3000ms to 6000ms for slower profile change
		return () => clearInterval(timerRef.current);
	}, []);

	useEffect(() => {
		setMainMove(true);
		const timeout = setTimeout(() => setMainMove(false), 800);
		return () => clearTimeout(timeout);
	}, [activeIndex]);

	return (
		<div>
			<div style={{ position: 'relative', minHeight: 500 }}>
				<div className="new-testimonial-background" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
					<video
						src="/background.mp4"
						autoPlay
						loop
						muted
						playsInline
						style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) blur(1px)' }}
					/>
					{/* Overlay for further dimming if needed */}
					<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
				</div>
				<h2 style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em', position: 'relative', zIndex: 1, marginTop: '50px', top: '20px' }}>
					Hear from Our Clients
				</h2>
				<div className="testimonial-section">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`testimonial-card ${index === activeIndex ? "active" : "inactive"}`}
							style={{
								zIndex: index === activeIndex ? 2 : 1,
								opacity: index === activeIndex ? 1 : 0,
								pointerEvents: index === activeIndex ? 'auto' : 'none',
								transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1)',
								position: 'absolute',
								width: '100%',
								top: 0,
								left: 0
							}}
						>
							<div className="testimonial-card-bg-left"></div>
							<div className="testimonial-card-bg-right"></div>
							{/* Remove main profile image from center */}
							<div className="other-clients-container">
								{(() => {
									// Show 6 slots (1 main + 5 others) on mobile, 12 on desktop
									const isMobile = window.innerWidth <= 600;
									const RING_SLOTS = isMobile ? 6 : 12;
									let queue = [];
									let idx = (activeIndex + 1) % testimonials.length;
									for (let i = 0; i < RING_SLOTS - 1; i++) {
										queue.push(testimonials[idx]);
										idx = (idx + 1) % testimonials.length;
									}
									// Place main profile image at slot 0 (top of the ring)
									// To avoid touching, increase the radius for other images and offset their angles
									const mainRadius = isMobile ? 20 : 80;
									const otherRadius = isMobile ? 28 : 120;
									const mainImgHalf = isMobile ? 16 : 60;
									const center = isMobile ? 35 : 100;
									return [
										<img
											key={testimonials[activeIndex].name + '-main-in-ring'}
											src={testimonials[activeIndex].image}
											alt={testimonials[activeIndex].name}
											className="main-profile-image-in-ring"
											style={{
												left: isMobile
													? `${center + mainRadius - mainImgHalf}px`
													: `${center + mainRadius + 62.1 - mainImgHalf}px`, // Move 2cm to the right in desktop
												top: isMobile
													? `${center - mainImgHalf}px`
													: `${center - mainImgHalf + 14.8}px`, // Move 1cm down in desktop
												position: 'absolute',
											}}
										/>,
										...Array.from({ length: RING_SLOTS - 1 }).map((_, slotIndex) => {
											const client = queue[slotIndex];
											const totalSlots = RING_SLOTS;
											const angle = (2 * Math.PI * (slotIndex + 1)) / (RING_SLOTS + 1) + (Math.PI / (RING_SLOTS + 1));
											const left = center + otherRadius * Math.cos(angle) - (isMobile ? 7 : 20);
											const top = center + otherRadius * Math.sin(angle) - (isMobile ? 7 : 20);
											return (
												<img
													key={client.name + '-' + client.image}
													src={client.image}
													alt={client.name}
													className="other-client-image"
													style={{ left: `${left}px`, top: `${top}px`, position: 'absolute' }}
												/>
											);
										})
									];
								})()}
							</div>
							<div className="testimonial-content">
								{renderStars(testimonial.rating)}
								<p className="testimonial-text">{testimonial.text}</p>
								<p className="testimonial-name" style={{ color: '#19BDE8' }}>{testimonial.name}</p>
								<p className="testimonial-title" style={{ color: '#19BDE8' }}>
									{testimonial.role} at {testimonial.company}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;

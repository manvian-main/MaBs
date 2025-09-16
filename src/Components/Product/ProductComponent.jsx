import React from 'react'
import Footer from '../Footer/Footer'
import Opptiverse_bg from '../../assets/Product/Opptiverse_Bg.png'
import CustomBtn from '../Button/CustomBtn'
import HeroSection from '../../assets/Product/HeroSection.mp4'
import CallToAction from './CallToAction'
// Logos

const ProductComponent = () => {
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <section className='relative w-full'>
                {/* Hero Section with Background Image */}
                <div className='relative w-full min-h-[900px] flex flex-col items-center justify-start'>
                    {/* Background Image */}
                    <video
                        className="absolute w-full h-full object-cover z-0"
                        src={HeroSection}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Dark Overlay */}
                    <div className='absolute inset-0 bg-black/20 z-10'></div>

                    {/* Content & Form */}
                    <div className='relative z-20 w-full max-w-5xl px-6 pt-15 pb-16'>
                        {/* Heading & Description */}
                        <div className='text-white text-center flex flex-col items-center mb-12 pt-26'>
                            <h1 className='text-[#19BDE8] font-semibold text-3xl md:text-5xl mb-6 text-justify'>Explore our Product</h1>
                            <div className='w-full max-w-[800px] mx-auto'>
                                <img
                                    src={Opptiverse_bg}
                                    className='w-full h-20 md:h-30 object-contain px-4 sm:px-6 md:px-8'
                                    alt="Opptiverse Background"
                                />
                            </div>
                            <p className='text-base md:text-2xl px-5 mt-6 text-center'>
                                Welcome to Manvian, your trusted partner in business development. We empower entrepreneurs and their Businesses to Reach New Heights by providing valuable solutions through Innovative Strategies and Exceptional Execution
                            </p>
                            <a href="https://app.opptiverse.com" target="_blank" rel="noopener noreferrer" className="mt-10">
                                {/* <img className='w-[100px] h-[100px] cursor-pointer' src={oppti_black} alt="Logo" /> */}
                                <CustomBtn>explore now</CustomBtn>
                            </a>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className='bg-white shadow-2xl rounded-xl p-6 sm:p-10 flex flex-col gap-6 w-full max-w-4xl mx-auto z-20 relative'>
                            {/* Two Column Inputs */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium text-justify'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Enter Name'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium text-justify'>Email ID</label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Enter Email-ID'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium text-justify'>Phone Number</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        placeholder='Enter your phone number'
                                        className='w-full border border-gray-300 p-3 rounded focus:outline-none'
                                    />
                                </div>

                                <div>
                                    <label className='block text-gray-700 mb-2 font-medium text-justify'>Country</label>
                                    <select
                                        id="country"
                                        name="country"
                                        defaultValue=""
                                        onChange={(e) => {
                                            const isSelected = e.target.value !== "";
                                            e.target.classList.toggle("text-gray-400", !isSelected);
                                            e.target.classList.toggle("text-black", isSelected);

                                            // Change dropdown icon color
                                            e.target.style.backgroundImage = isSelected
                                                ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='black' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 12a.75.75 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.06-1.06L10 10.19l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4A.75.75 0 0 1 10 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`
                                                : `url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%239CA3AF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 12a.75.75 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.06-1.06L10 10.19l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4A.75.75 0 0 1 10 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`;
                                        }}
                                        className="w-full border border-gray-300 p-3 pr-10 rounded focus:outline-none text-gray-400 appearance-none bg-no-repeat"
                                        style={{
                                            backgroundPosition: 'right 1.25rem center', // similar to `mr-5` (20px)
                                            backgroundSize: '1rem 1rem',
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='%239CA3AF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 12a.75.75 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.06-1.06L10 10.19l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4A.75.75 0 0 1 10 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                                        }}
                                    >
                                        <option value="" disabled>
                                            --Choose Country--
                                        </option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Message - full width */}
                            <div>
                                <label className='block text-gray-700 mb-2 font-medium text-justify'>Message</label>
                                <textarea
                                    rows='4'
                                    name='message'
                                    placeholder='Tell us a little about yourself — we’re here for you and happy to help however we can!'
                                    className='w-full border border-gray-300 p-3 rounded resize-none focus:outline-none'
                                />
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-center gap-6'>
                                <button
                                    type='button'
                                    className='bg-white text-[#19BDE8] border-2 border-[#19BDE8] py-3 px-8 rounded font-semibold transition cursor-pointer'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='bg-[#19BDE8] text-white py-3 px-8 rounded font-semibold hover:bg-[#1599bb] transition cursor-pointer'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* White Spacer to prevent footer collision */}
<CallToAction/>
                <Footer />
            </section>
        </>
    )
}

export default ProductComponent

import React from 'react'
import { Link } from 'react-router-dom'
const Explore = () => {
    return (

        <div className='w-full min-h-[300px] bg-gradient-to-t from-[#19BDE880]/50 to-white flex flex-col md:flex-row justify-around items-center px-8 py-12 lg:px-16 mb-20'>
            <div className='w-full md:w-[35%] mb-8 md:mb-0'>
                <h1 className='font-semibold text-4xl lg:text-3xl md:text-2xl sm:text-xl mb-5'>
                    Explore More Ways We Can Help You Grow
                </h1>
                <p className='text-base lg:text-sm md:text-xs'>
                    Your business needs more than just Multimedia. Discover how our full suite of services works together to drive real results.
                </p>
            </div>

            <div className='w-full md:w-[55%] flex flex-wrap gap-3 justify-center'>
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
                    <Link to="/service/RAAS"> RaaS Solutions</Link>
                </button>
                <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                    <Link to="/service/Business"> Business Strategy Consulting</Link>
                </button>
                <button className='text-white bg-black rounded-lg py-2 px-4 hover:bg-gray-800 transition-colors text-sm cursor-pointer underline'>
                    <Link to="/portfolio/Multimedia"> Multimedia</Link>
                </button>
            </div>
        </div>
    )
}
export default Explore
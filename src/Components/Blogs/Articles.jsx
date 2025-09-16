import React, { useState } from 'react';
import { FiFile, FiClock, FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CallToAction from './CallToAction';
import Img1 from '../../assets/Blogs/Trending/1.png';
import Img2 from '../../assets/Blogs/Trending/2.png';
import Img3 from '../../assets/Blogs/Trending/3.png';
import Img4 from '../../assets/Blogs/Trending/4.png';
import Img5 from '../../assets/Blogs/Trending/5.png';

const blogData = [
    {
        id: 1,
        title: 'AI Doesn’t Replace People — It Reshapes Possibilities',
        description: 'AI doesn’t replace people — it empowers them to explore new possibilities and redefine what’s achievable.',
        image: Img1,
        author: 'Touheed Fathima Shaik',
        date: 'June 01, 2025',
        category: 'Tech & Innovation'
    },
    {
        id: 2,
        title: 'Enhancing Cybersecurity: Top Solutions for Digital Protection',
        description: 'Enhancing Cybersecurity with cutting-edge solutions to safeguard your digital world.',
        image: Img2,
        author: 'V Pranav Jeyan',
        date: 'May 03, 2025',
        category: 'Tech & Innovation'
    },
    {
        id: 3,
        title: 'Testing Doesn’t Replace Developers — It Empowers Quality',
        description: 'Testing doesn’t replace developers — it strengthens their work by ensuring reliability, performance, and quality in every line of code.',
        image: Img3,
        author: 'A.Aravind',
        date: 'May 15, 2025',
        category: 'Tech & Innovation'
    },
    {
        id: 4,
        title: 'AI-Generated Visuals: Tool or Threat?',
        description: 'From voiceovers to video editing. AI is changing the game...',
        image: Img4,
        author: 'Priya Mehta',
        readTime: '5 min read',
        category: 'Multimedia'
    },
    {
        id: 5,
        title: 'Decoding What Your Metrics Are Really Saying',
        description: 'Which KPIs tell the real story behind the numbers?',
        image: Img5,
        author: 'Karan Shah',
        readTime: '6 min read',
        category: 'Data & Insights'
    }
];

const tabs = ['Trending', 'Tech & Innovation', 'Business Strategy', 'Sales', 'Multimedia', 'Marketing', 'Data & Insights', 'Entrepreneurship'];

const Articles = () => {
    const [selectedTab, setSelectedTab] = useState('Trending');
    const navigate = useNavigate();

    const filteredBlogs =
        selectedTab === 'Trending'
            ? blogData
            : blogData.filter((blog) => blog.category === selectedTab);

    const handleBlogClick = (id) => {
        navigate(`/Insights/Blogs/${id}`);
    };

    return (
        <>
       
        <div className="max-w-7xl mx-auto px-4 py-8 pb-0 mt-20">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-2">
                Explore All Blogs at <span className="text-sky-400">Manvian</span>
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Discover insights, strategies, and expert takes across today’s fast-changing digital landscape.
            </p>

            {/* Search Bar */}
            {/* <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Search Articles"
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div> */}

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium ${selectedTab === tab
                                ? 'bg-white text-sky-400'
                                : 'bg-gray-100 text-gray-700 border-gray-300'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 p-3 relative h-[480px] cursor-pointer" onClick={() => handleBlogClick(blog.id)} >
                        <img src={blog.image} alt={blog.title} className=" h-[250px] w-full object-cover " />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{blog.description}</p>
                            <div className="text-xs text-gray-500 flex items-center absolute bottom-2 pb-2">
                                <FiFile className='mr-1' /> By {blog.author} <FiCalendar className='ml-4 mr-1' />  {blog.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  {/* Call to Action */}

  <CallToAction/>

        <Footer/>
         </>
    );
};

export default Articles;

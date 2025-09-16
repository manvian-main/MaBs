import React, { useState } from 'react';
import Bg from '../../assets/Career/HeroSection.jpg';
import Footer from '../Footer/Footer';
import CustomBtn from '../Button/CustomBtn';
import CallToAction from './CallToAction';
import { careerAPI } from '../../utils/api';

const Careers = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Popup form state
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applyJobTitle, setApplyJobTitle] = useState("");
  const [applyForm, setApplyForm] = useState({ name: "", email: "", phone: "", resume: null, jobTitle: "", message: "" });
  const [applyError, setApplyError] = useState("");
  const [applySuccess, setApplySuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Carousel state
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 12;
  
  
  // Handle Apply Now button click
  const handleApplyClick = (jobTitle) => {
    setApplyJobTitle(jobTitle);
    setShowApplyForm(true);
    setApplyForm({ name: "", email: "", phone: "", resume: null, jobTitle, message: "" });
    setApplyError("");
    setApplySuccess("");
  };

  // Handle form field changes
  const handleApplyFormChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files && files[0]) {
      const file = files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      
      if (file.size > maxSize) {
        setApplyError("File size must be under 5MB.");
        return;
      }
      
      setApplyForm((prev) => ({
        ...prev,
        [name]: file,
      }));
      setApplyError(""); // Clear any previous errors
    } else {
      setApplyForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Email validation helper
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submit: send data as JSON with base64 resume
  const handleApplyFormSubmit = async (e) => {
    e.preventDefault();
    setApplyError("");
    setApplySuccess("");

    const { message, resume, jobTitle } = applyForm;

    if (!message || !resume || !jobTitle) {
      setApplyError("Please fill in the message and attach your resume.");
      return;
    }

    // File type validation is handled in the file input accept attribute

    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result.split(",")[1];
      const payload = {
        message,
        jobTitle,
        resumeFileName: resume.name,
        resumeBase64: base64,
        to: "hiring@manvian.com"
      };
      try {
        setIsSubmitting(true);
        const result = await careerAPI.apply(payload);
        
        console.log("Success:", result);
        setApplySuccess(result.message || "Application submitted successfully! Thank you.");
        setApplyForm({ name: "", email: "", phone: "", resume: null, jobTitle: applyJobTitle });
        setTimeout(() => setShowApplyForm(false), 1500);
      } catch (error) {
        console.error("Error:", error);
        setApplyError(error.message || "Failed to submit application. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    };
    reader.onerror = () => {
      setApplyError("Failed to read resume file.");
    };
    reader.readAsDataURL(resume);
  };


  const toggleDropdown = (type) => {
    setActiveDropdown(prev => (prev === type ? null : type));
  };

  const roles = ["UI/UX Designer", "Full-Stack Developer", "Sales Executive", "QA Tester", "DevOps Engineer"];
  const departments = ["Design", "Development", "Sales", "Marketing", "HR", "Operations"];
  const locations = ["Tamil Nadu", "Karnataka", "Kerala", "Maharashtra", "Delhi", "West Bengal", "Telangana", "Gujarat"];

  const allJobOpenings = [
    { title: "HR & Operations (Internship)", location: "Remote", experience: "0–1 Years", description: "Seeking an enthusiastic HR & Operations Intern to support recruitment, coordination, and day-to-day administrative tasks.", role: "HR & Operations", department: "Development" },
    { title: "Business Development Associate (Internship)", location: "Remote", experience: "0–1 Years", description: "Looking for a dynamic BDA to drive sales growth, build client relationships, and identify new market opportunities.", role: "Business Development Associate", department: "Development" },
    { title: "Ui/UX Designer (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a creative UI/UX Designer to craft user-centric designs and enhance digital product experiences.", role: "UI/UX Designer", department: "Development" },
    { title: "Graphic Designer (Internship)", location: "Remote", experience: "0–1 Years", description: "Seeking a talented Graphic Designer to create visually compelling designs for digital and print media.", role: "Graphic Designer", department: "Design" },
    { title: "Video Editor (Internship)", location: "Remote", experience: "0–1 Years", description: "Seeking a skilled Video Editor to create engaging and high-quality video content for digital platforms.", role: "Video Editor", department: "Design" },
    { title: "Content Writer (Internship)", location: "Remote", experience: "0–1 Years", description: "Looking for a skilled Content Writer to craft engaging and SEO-friendly content across various platforms.", role: "Content Writer", department: "Design" },
    { title: "Front End Developer (Internship)", location: "Remote", experience: "0–1 Years", description: "Seeking a Front End Developer to build responsive, user-friendly web interfaces using modern frameworks and technologies.", role: "Front End Developer", department: "Development" },
    { title: "Back End Developer (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a Back End Developer to build and maintain scalable, secure, and efficient server-side applications.", role: "Back End Developer", department: "Development" },
    { title: "Digital Marketing (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a Digital Marketing Executive to plan and execute campaigns, manage social media, and drive online brand visibility.", role: "Digital Marketing", department: "Marketing" },
    { title: "AIML Developer (Internship)", location: "Remote", experience: "0–1 Years", description: "Looking for an AI/ML Developer to design, develop, and deploy intelligent machine learning solutions for real-world applications.", role: "AIML Developer", department: "Development" },
    { title: "Sales (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a results-driven Sales Executive to generate leads, close deals, and drive revenue growth.", role: "Sales Executive", department: "Sales" },
    { title: "Marketing (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a proactive Marketing Executive to develop campaigns, boost brand visibility, and drive customer engagement.", role: "Marketing Executive", department: "Marketing" },
    { title: "Python Developer (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a Python Developer to build scalable applications and automate processes using clean, efficient code.", role: "Python Developer", department: "Development" },
    { title: "Full Stack Developer (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a Full Stack Developer to build and maintain robust web applications across front-end and back-end technologies.", role: "Full Stack Developer", department: "Development" },
    { title: "QA Tester- Manual and Automation (Internship)", location: "Remote", experience: "0–1 Years", description: "Hiring a QA Tester with expertise in both Manual and Automation testing to ensure software quality and performance.", role: "QA Tester", department: "Development" },
    { title: "Meme Creators (Internship)", location: "Remote", experience: "0–1 Years", description: "Seeking creative Meme Creators to test and deliver humorous, viral-ready content for social media engagement.", role: "Meme Creator", department: "Marketing" },
  ];

  // Filter logic to reset other filters when a new filter is selected
  const filterJobOpenings = () => {
    return allJobOpenings.filter(job => {
      const matchesRole = selectedRole ? job.role === selectedRole : true;
      const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
      const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchesRole && matchesDepartment && matchesLocation;
    });
  };

  const jobOpenings = filterJobOpenings();

  // Carousel navigation functions
  const totalPages = Math.ceil(jobOpenings.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = jobOpenings.slice(startIndex, endIndex);
  
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  // Update filter when a new selection is made
  const handleDropdownSelection = (type, value) => {
    if (type === 'role') {
      setSelectedRole(value);
      setSelectedDepartment(null);  // Reset department filter
      setSelectedLocation(null);    // Reset location filter
    }
    if (type === 'department') {
      setSelectedDepartment(value);
      setSelectedRole(null);        // Reset role filter
      setSelectedLocation(null);    // Reset location filter
    }
    if (type === 'location') {
      setSelectedLocation(value);
      setSelectedRole(null);        // Reset role filter
      setSelectedDepartment(null);  // Reset department filter
    }

    setActiveDropdown(null); // Close dropdown after selection
  };

  return (
    <>
      <header className='flex w-full min-h-[600px] sm:min-h-[700px] md:min-h-[822.86px] justify-center items-center relative'>
        {/* Background Image */}
        <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src={Bg} alt="Background" />

        {/* Content */}
        <div className='flex flex-col justify-center items-center gap-6 text-center max-w-4xl px-4 z-20 text-white'>
          <h1 className='text-[#19BDE8] font-semibold text-3xl lg:text-5xl'>Join Our Team</h1>
          <p className='font-light text-base md:text-2xl mt-6 text-justify'>
            We're driven by a passion for innovation and impact. At our company, you'll collaborate on meaningful projects that empower brands and improve experiences. If you're looking for a place where your ideas matter and your growth is a priority , you're in the right place.
          </p>
          
          <a href="mailto:hiring@manvian.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <CustomBtn>View Openings</CustomBtn>
          </a>
        </div>
      </header>


      {/* Openings */}
      <div className="bg-white text-black font-sans min-h-screen relative">

        {/* Filter Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4 pb-10 relative z-10 px-4 sm:px-0 pt-15">
          {/* Role Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("role")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Role
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "role" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "role" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {roles.map((role, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('role', role)}>
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Department Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("department")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Department
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "department" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "department" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {departments.map((dept, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('department', dept)}>
                    {dept}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("location")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Location
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "location" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "location" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {locations.map((loc, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('location', loc)}>
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Job Cards Container */}
        <div className="pl-8 sm:pl-10 md:pl-20 lg:pl-47 pb-6">
          <h2 className="text-xl lg:text-4xl font-semibold text-[#19BDE8]">Current Openings</h2>
        </div>
        
        {/* Job Cards Grid */}
        <div className="flex justify-center gap-6 flex-wrap px-4 sm:px-6 md:px-8">
          {jobOpenings.length === 0 ? (
            <p className="text-center w-full">There are currently no job openings available.</p>
          ) : (
            currentCards.map((job, index) => (
              <div key={startIndex + index} className="border border-gray-300 rounded-lg p-4 sm:p-6 w-full sm:w-80 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between h-[340px] min-h-[340px] max-h-[340px]">
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-justify">{job.title}</h3>
                  <p className="text-sm text-gray-700 mb-2 text-justify">
                    Location: {job.location} | Experience: {job.experience}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 text-justify">{job.description}</p>
                </div>
                <button
                  className="w-full sm:w-auto bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 cursor-pointer mt-auto"
                  onClick={() => handleApplyClick(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>

        {/* Navigation Arrows - Below cards, above banner */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-8 my-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              className={`w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center transition ${
                currentPage === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-gray-600 text-sm">
              Page {currentPage + 1} of {totalPages}
            </span>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center transition ${
                currentPage === totalPages - 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Mpowher Banner */}
        <div className="w-full mt-8 relative">
          <img 
            src="/mpowher banner.png" 
            alt="Mpowher Banner" 
            className="w-full h-auto object-cover"
          />
          
          {/* Register Now Button - Left side center */}
          <div className="absolute top-4/5 left-1/4 transform -translate-y-1/2">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMyMRllPvVv0_Z5N1iMSWSIZ0r4q1N6j88uh6DU-CA4BXZog/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#19BDE8] hover:bg-[#17A8D1] text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition shadow-lg">
                Register Now
              </button>
            </a>
          </div>
        </div>

      {/* Apply Now Popup Form */}
      {showApplyForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="bg-white relative"
            style={{
              width: '700px',
              height: '600px',
              border: '2px solid #19BDE8',
              boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.25), inset 0px 0px 25px rgba(25, 189, 232, 0.25)',
              borderRadius: '24px'
            }}
          >
            {/* Close button */}
            <button 
              className="absolute top-0 right-6 text-gray-500 hover:text-black text-2xl z-10" 
              onClick={() => setShowApplyForm(false)}
            >
              ×
            </button>
            
            {/* Form content */}
            <div className="p-8 h-full flex flex-col">
              <form onSubmit={handleApplyFormSubmit} className="flex flex-col h-full space-y-6">
                {/* To field */}
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700 font-medium min-w-[60px]">To :</label>
                  <input 
                    type="email" 
                    value="hiring@manvian.com" 
                    readOnly
                    className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
                  />
                </div>
                
                {/* Subject field */}
                <div className="flex items-center space-x-4">
                  <label className="text-gray-700 font-medium min-w-[80px]">Subject :</label>
                  <input 
                    type="text" 
                    name="jobTitle"
                    value={applyJobTitle}
                    readOnly
                    className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-50 text-gray-600"
                  />
                </div>
                
                {/* Message body area */}
                <div className="flex-1 flex flex-col">
                  <textarea 
                    name="message"
                    value={applyForm.message || ''}
                    onChange={handleApplyFormChange}
                    placeholder="Type Here..."
                    className="flex-1 border border-gray-300 rounded px-3 py-2 resize-none"
                    required
                  />
                </div>
                
                {/* Bottom section with attached file and buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Show attached file as button-like element */}
                    {applyForm.resume ? (
                      <div className="relative inline-block">
                        <div className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded pr-8">
                          {applyForm.resume.name}
                        </div>
                        <button
                          type="button"
                          onClick={() => setApplyForm(prev => ({ ...prev, resume: null }))}
                          className="absolute top-1 right-1 text-red-500 hover:text-red-700 text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-700 text-sm">Note: Attach Your Resume.</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-50 transition">
                      Attach File
                      <input
                        type="file"
                        name="resume"
                        accept="application/pdf,.doc,.docx"
                        onChange={handleApplyFormChange}
                        className="hidden"
                        required
                      />
                    </label>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#19BDE8] hover:bg-[#17A8D1] text-white px-6 py-2 rounded transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </div>
                
                {/* Error and success messages */}
                {applyError && <div className="text-red-500 text-sm">{applyError}</div>}
                {applySuccess && <div className="text-green-600 text-sm">{applySuccess}</div>}
              </form>
              
              {/* Loading overlay */}
              {isSubmitting && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10 rounded-3xl">
                  <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
        </div>
      <CallToAction />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Careers;

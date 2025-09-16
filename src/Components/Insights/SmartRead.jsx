import React from "react";
import { Link } from "react-router-dom";
const articles = [
  {
    title: "The Rise of AI-Generated Visuals: Threat or Tool for Creators?",
    description:
      "From AI art generators to voiceovers and video editing, artificial intelligence is reshaping how content is created. At Manvian, we explore how multimedia professionals can harness AI without losing creative control and why?",
    author: "Priya Mehta",
    tags: ["#Trending", "#Multimedia"],
  },
  {
    title: "Tech’s Role in Modern Business",
    description:
      "Scalable microservices are the new standard. Find out how flexibility in offerings is the new secret weapon for consistent growth.",
    author: "Rohan Desai",
    tags: ["#TechUpdate", "#BizTech"],
  },
  {
    title: "Master Short-Form Content: Win Audiences in 30 Seconds or Less",
    description:
      "Reels, Shorts, TikToks they’re not just trends, they’re the new battlefield of marketing. In this post, Manvian’s digital team discusses how brands are creating high-impact micro-content backed by data insights, influencer power, and platform-specific storytelling.",
    author: "Aditya Rao",
    tags: ["#DigitalMarketing", "#2025Trends"],
  },
  {
    title: "Smart Sales Strategies for the Digital-First Era",
    description:
      "Customers are smarter than ever. Hard selling is out, solution-based selling is in.",
    author: "Aarav Joshi",
    tags: ["#DigitalSales", "#DigitalSells"],
  },
  {
    title: "RaaS: The Scalable Edge",
    description:
      "RaaS helps businesses accelerate & simplify hiring.",
    author: "Neha Kulkarni",
    tags: ["#Innovation", "#RaaS"],
  },
];

export default function SmartReads() {
  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-32">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-sky-400 mb-10">
        Smart Reads for Smart Growth
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {articles.map((article, index) => {
          let colSpanClass = "";

          if (index === 0) colSpanClass = "md:row-span-2";
          else if (index === 1) colSpanClass = "md:col-span-2";
          else if (index === 2) colSpanClass = "md:row-span-2";
          else colSpanClass = "md:col-span-1";

          return (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 relative overflow-hidden ${colSpanClass}`}
              style={{
                boxShadow: 'inset 0 0 24px 3px #19BDE855',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)'
              }}
            >
              <h3 className="text-lg font-semibold mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{article.description}</p>
              <p className="text-sm font-medium mb-2">By {article.author}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
              <Link to="/Insights/Articles">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px' }}>
            <button className="ui-btn"><span>Explore More</span></button>
         </div>
         </Link>
      </div>
    </div>
  );
}

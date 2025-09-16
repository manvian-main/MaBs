import React from "react";
import news1 from "../../assets/News/News1.webp";
import news2 from "../../assets/News/News2.jpeg";
// import news3 from "../../assets/News/News3.jpeg";
// import news4 from "../../assets/News/news4.jpg";
// import news5 from "../../assets/News/news5.jpg";
// import news6 from "../../assets/News/news6.jpg";

const newsData = [
  {
    id: 1,
    image: news2,
    description: "AI reshaping the future of tech innovation.",
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    image: "",
    description: "New frontiers in web development.",
    link: "#",
  },
  {
    id: 3,
    image: news1,
    description: "React 19 brings exciting new features.",
    link: "#",
  },
  {
    id: 4,
    image: "",
    description: "Tailwind CSS tips and tricks.",
    link: "#",
  },
  {
    id: 5,
    image: "",
    description: "Node.js 2025 roadmap released.",
    link: "#",
  },
  {
    id: 6,
    image: "",
    description: "Best practices in backend development.",
    link: "#",
  },
];

const News = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto mt-3 md:mt-22">
      <h2 className="font-semibold text-2xl md:text-5xl  text-center mb-12 text-[#19BDE8]">Manvian in News</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] grid-flow-dense">
        {newsData.map((news, index) => {
          let span = "";

          // For mobile (default) and sm (≥640px) spans
          if (index === 0) span = "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2";
          else if (index === 1) span = "col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2";
          else if (index === 2) span = "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1";
          else if (index === 3) span = "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-1";
          else if (index === 4) span = "col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 md:col-span-1 md:row-span-2";
          else if (index === 5) span = "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-1";

          return (
            <div key={news.id} className={`${span}`}>
              <NewsCard {...news} />
            </div>
          );
        })}
      </div>

    </div>
  );
};

const NewsCard = ({ image, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden shadow-lg group cursor-pointer h-full"
    >
      <img
        src={image}
        alt={description}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
        <p className="text-sm font-medium">{description}</p>
        <span className="text-blue-200 underline text-sm mt-2 hover:text-blue-100 cursor-pointer">
          Read More
        </span>
      </div>
    </a>
  );
};


export default News;

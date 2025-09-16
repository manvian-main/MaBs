"use client";
import React, { useEffect, useState } from "react";
import './CountAnimation.css';

const CountingNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <>{count}</>;
};

export default function StatsSection() {
  const stats = [
    { label: "Country Presence", value: 10, color: "#19BDE8" },
    { label: "Clients Handled", value: 80, color: "#19BDE8" },
    { label: "Projects Handled", value: 150, color: "#19BDE8" },
    { label: "Client Satisfaction", value: 99, color: "#19BDE8" },
  ];

  return (
    <section
      className="stats-animated-section rounded-xl shadow-2xl mb-15 mt-8 m-10 border border-white/40 backdrop-blur-lg"
      style={{
        background: "#00222E",
        boxShadow: "0 8px 32px 0 rgba(25, 189, 232, 0.37)",
        borderRadius: "20px",
        border: "2px solid #19BDE8",
        position: "relative",
        padding: "40px"
      }}
    >
      <div className="stats-animated-glow"></div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div
                className={
                  `flex flex-col items-center justify-center px-4 py-4 md:py-0 relative` +
                  (index !== stats.length - 1 ? " md:border-r-2 md:border-[#19BDE8]/40" : "")
                }
                style={{ width: '100%', minHeight: '120px' }}
              >
                <div className="flex flex-row items-center justify-center w-full">
                  <span
                    className="font-light text-4xl lg:text-6xl"
                    style={{ color: '#fff', textShadow: '0 0 12px #19BDE8, 0 0 2px #19BDE8' }}
                  >
                    <CountingNumber value={stat.value} />
                    {stat.label === "Client Satisfaction" ? "%" : "+"}
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-semibold mt-2 stats-label-text text-center" style={{ color: '#19BDE8' }}>
                  {stat.label}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to the bottom of the file or in your CSS file:
/*
.stats-animated-section {
  position: relative;
  overflow: visible;
}
.stats-animated-glow {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  box-shadow: 0 0 32px 8px #19BDE8, 0 0 0 4px #19BDE8 inset;
  pointer-events: none;
  z-index: 0;
  animation: glowPulse 2.5s infinite alternate;
}
@keyframes glowPulse {
  0% { box-shadow: 0 0 32px 8px #19BDE8, 0 0 0 4px #19BDE8 inset; }
  100% { box-shadow: 0 0 48px 16px #19BDE8, 0 0 0 8px #19BDE8 inset; }
}
*/

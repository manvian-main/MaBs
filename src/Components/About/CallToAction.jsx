import React from 'react'
import './manvianway.css'; // Assuming you have a CSS file for styles

const customStatements = [
  "We don’t consult - we commit.",
  "We don’t sell - we scale.",
  "We don’t chase numbers - we stand for values.",
  "We don’t follow trends - we shape futures.",
  "We don’t sprint - we run marathons.",
  "We don’t find paths - we create them.",
  "We don’t deliver work - we own outcomes",
  "We don’t create employees - we foster leaders.",
  "We don’t create noise - we build brand voice.",
  "We don’t work for profit - we work for impact.",
  "We don’t choose good - we choose what’s right.",
  "We don’t just build companies - we build legacies.",
];

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-t from-[#19BDE880]/50 to-white py-16 text-center mb-20 mt-5 md:mt-25 px-4">
      <h2 className="text-4xl font-bold mb-8 text-[#19BDE8]">The Manvian Way</h2>
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 max-w-5xl mx-auto mb-10">
        {customStatements.map((statement, index) => {
          // All cards get the same colSpanClass for equal size
          const colSpanClass = "md:col-span-2";
          return (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 relative overflow-hidden shadow-lg card-animated-border ${colSpanClass}`}
              style={{
               
              }}
            >
              {/* Animated border spans for card border animation */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="text-base text-gray-800 flex items-center justify-center min-h-[80px]">
                {statement}
              </div>
            </div>
          );
        })}
      </div>
     
      <span className="block text-lg font-medium text-gray-700"> <span className="font-semibold text-3xl lg:text-4xl text-[#19BDE8]">“We</span> envision a world where growth is not just measured by numbers, but by the value we create for communities, <br/> the opportunities we unlock for individuals, and the positive impact we leave on the planet.<span className="font-semibold text-3xl lg:text-4xl text-[#19BDE8]">”</span></span>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
            <button className="ui-btn"><span>Explore more</span></button>
         </div>
    </div>
  )
}

export default CallToAction

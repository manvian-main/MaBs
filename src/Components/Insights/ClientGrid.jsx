import React from "react";

const clientData = [
  {
    category: "Conglomerates",
    logos: [
      "https://logo.clearbit.com/google.com",
      "https://logo.clearbit.com/microsoft.com",
      "https://logo.clearbit.com/amazon.com",
      "https://logo.clearbit.com/facebook.com",
    ],
  },
  {
    category: "FMCG/FMCD",
    logos: [
      "https://logo.clearbit.com/apple.com",
      "https://logo.clearbit.com/netflix.com",
      "https://logo.clearbit.com/adobe.com",
      "https://logo.clearbit.com/intel.com",
      "https://logo.clearbit.com/ibm.com",
    ],
  },
  {
    category: "E-Commerce & Startups",
    logos: [
      "https://logo.clearbit.com/salesforce.com",
      "https://logo.clearbit.com/slack.com",
      "https://logo.clearbit.com/zoom.us",
      "https://logo.clearbit.com/github.com",
    ],
  },
  {
    category: "Consulting",
    logos: [
      "https://logo.clearbit.com/atlassian.com",
      "https://logo.clearbit.com/airbnb.com",
      "https://logo.clearbit.com/uber.com",
    ],
  },
  {
    category: "BFSI",
    logos: [
      "https://logo.clearbit.com/spotify.com",
      "https://logo.clearbit.com/shopify.com",
      "https://logo.clearbit.com/paypal.com",
      "https://logo.clearbit.com/tesla.com",
    ],
  },
];

const ClientsTable = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 mt-5 bg-white">
      {clientData.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row  px-6 py-8 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-6"
        >
          {/* Category Name */}
          <div className="w-full sm:w-1/4 font-medium text-gray-700 text-lg mb-4 sm:mb-0 sm:pr-6 sm:border-r border-gray-300">
            {item.category}
          </div>

          {/* Logos Grid */}
          <div className="w-full sm:w-3/4 pt-2 sm:pt-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:pl-6">
            {item.logos.map((logo, i) => (
              <div key={i} className="flex justify-center items-center">
                <img
                  src={logo}
                  alt={`Client ${i}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientsTable;

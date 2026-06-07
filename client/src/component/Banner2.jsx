import React from 'react';

const Banner2 = () => {

    const stats = [
        { title: "Active Jobs", value: "50K", icon: "💼" },
        { title: "Companies", value: "12K", icon: "🏢" },
        { title: "Job Seekers", value: "2M", icon: "👤" },
        { title: "Satisfaction Rate", value: "97%", icon: "⭐" },
    ];

    return (
        <div>
            <section className="py-16 px-4 lg:mt-40 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-12">
          Assisting over <span className='text-white'>15,000 job seekers</span> <br /> find their dream positions.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-linear-to-b from-black shadow border shadow-pink-500 to-[#1a1a1a] backdrop-blur-md text-white p-8 rounded-3xl flex flex-col items-start hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl mb-4 opacity-80">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner2;
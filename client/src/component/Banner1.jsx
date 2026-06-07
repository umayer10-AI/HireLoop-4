import React from 'react';

const Banner1 = () => {
    return (
        <div>
            <section className=" text-white py-30 lg:mb-100 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 px-4 py-1.5 rounded-full text-sm text-gray-300 mb-6">
          <span>💼</span> 50,000+ NEW JOBS THIS MONTH
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        <div className="w-full bg-[#121212] p-2 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
          <input 
            type="text" 
            placeholder="Job title, skill or company" 
            className="w-full bg-transparent p-2 outline-none text-white placeholder-gray-500"
          />
          <div className="w-px h-8 bg-gray-700 hidden md:block"></div>
          <input 
            type="text" 
            placeholder="Location or Remote" 
            className="w-full bg-transparent p-2 outline-none text-white placeholder-gray-500"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl w-full md:w-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-400">
          <span>Trending Position:</span>
          {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map((tag) => (
            <button key={tag} className="bg-[#1a1a1a] px-3 py-1 rounded-full border border-gray-800 hover:text-white transition">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};



export default Banner1;
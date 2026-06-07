import Link from 'next/link';
import React from 'react';

const Section4 = () => {
    return (
        <div>
            <div className="relative text-white py-40 px-6 overflow-hidden bg-cover bg-center"
                style={{
                backgroundImage: "url('/bg.png')",
            }}>
  <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-purple-700/50 to-black/50 overflow-hidden z-0">
    <div className="absolute -top-[50%] left-1/2 -translate-x-1/2 w-300 h-200 rounded-[100%] bg-blue-900/20 blur-[120px]"></div>
    <div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage:
      "radial-gradient(circle at center, #1e3a8a 1px, transparent 1px)",
    backgroundSize: "50px 50px",
  }}
></div>
  </div>

  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      Your next role is<br/>already looking for you
    </h1>
    <p className="text-gray-400 text-lg mb-10">
      Build a profile in three minutes. The matches start arriving tomorrow morning.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href={'/signup'} className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition">
        Create a free account
      </Link>
      <button className="bg-transparent border border-gray-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition">
        View pricing
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Section4;
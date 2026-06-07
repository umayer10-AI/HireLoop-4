"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #7e22ce 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        
        <h1 className="text-8xl md:text-9xl font-black bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/"
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Back To Home
          </Link>

          <Link
            href="/jobs"
            className="border border-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
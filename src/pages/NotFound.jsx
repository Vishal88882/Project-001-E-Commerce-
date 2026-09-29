
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex items-center justify-center px-6">

      
      <div className="absolute top-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-fuchsia-600/20 blur-[120px] animate-pulse"></div>

      
      <div className="relative z-10 text-center">

        
        <div className="relative mb-6">
          <h1 className="text-[120px] sm:text-[170px] md:text-[220px] font-black leading-none tracking-tighter
                         bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400
                         bg-clip-text text-transparent
                         animate-bounce">
            404
          </h1>

         
          <div className="absolute inset-0 -z-10 text-[120px] sm:text-[170px] md:text-[220px] font-black
                          text-purple-600/20 blur-3xl">
            404
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="max-w-md mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          Oops! The page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl
                     bg-gradient-to-r from-purple-600 to-fuchsia-600
                     px-7 py-3.5 font-semibold
                     shadow-lg shadow-purple-600/30
                     transition-all duration-300
                     hover:scale-105
                     hover:shadow-purple-500/50"
        >
          ← Back to Home
        </Link>

      </div>

      <div className="absolute top-[20%] left-[15%] h-3 w-3 rounded-full bg-purple-400 animate-ping"></div>

      <div className="absolute top-[30%] right-[15%] h-2 w-2 rounded-full bg-fuchsia-400 animate-ping"></div>

      <div className="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>

      <div className="absolute bottom-[25%] right-[25%] h-3 w-3 rounded-full bg-fuchsia-500 animate-pulse"></div>

    </div>
  );
};

export default NotFound;
"use client"
import React from 'react';
import { motion } from "motion/react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-400 pt-20 py-12 px-6 md:px-16">
      <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        
        
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4 text-white font-bold text-xl">
            
            <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 font-bold rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl"
              >
                H
            </motion.div> 
            HireLoop
          </div>
          <p className="max-w-xs leading-relaxed">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          
          <div className="flex gap-3 mt-6">
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-gray-700">f</div>
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-gray-700">P</div>
            <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center cursor-pointer hover:bg-gray-700">in</div>
          </div>
        </div>

        <div className='flex lg:justify-center'>
            <div>
            <h3 className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold mb-4">Product</h3>
            <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Job discovery</a></li>
                <li><a href="#" className="hover:text-white">Worker AI</a></li>
                <li><a href="#" className="hover:text-white">Companies</a></li>
                <li><a href="#" className="hover:text-white">Salary data</a></li>
            </ul>
            </div>
        </div>

        <div className='flex lg:justify-center'>
            <div>
            <h3 className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold mb-4">Navigations</h3>
            <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Help center</a></li>
                <li><a href="#" className="hover:text-white">Career library</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
            </div>
        </div>

        <div className='flex lg:justify-center'>
            <div>
            <h3 className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text w-fit font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
                <li><a href="#" className="hover:text-white">Brand Guideline</a></li>
                <li><a href="#" className="hover:text-white">Newsroom</a></li>
            </ul>
            </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm">
        <p>© Copyright 2024 — Programming Hero</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms & Policy</a>
          <a href="#" className="hover:text-white">Privacy Guideline</a>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
import React, { useState, useEffect } from "react";
import { Roboto_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { userData } from "../data";
import ShaderGradientBackground from "./ShaderGradientBackground";
import BouncingArrow from "./BouncingArrow";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Titles to cycle through
const TITLES = ["Data Scientist", "Programmer", "Product Developer", "Pharma Leader"];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ShaderGradientBackground />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="mb-8 h-40 flex flex-col items-center justify-center"> 
          <h1 className={`text-5xl sm:text-7xl font-bold text-white mb-4 ${robotoMono.className}`}>
            {userData.name}
          </h1>
          
          {/* Fading Sub-header Container */}
          <div className="relative h-10 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={TITLES[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute text-2xl sm:text-3xl text-white/90 font-light"
              >
                {TITLES[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {userData.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4
                ${link.bgColor} text-white rounded-full shadow-lg
                transition duration-300 transform hover:scale-110
                backdrop-blur-sm bg-opacity-80 ${link.hoverColor}
              `}
            >
              <link.icon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden={true} />
              <span className="font-medium ml-3 text-lg">{link.name}</span>
            </a>
          ))}
        </div>

        <BouncingArrow />
      </div>

      <div 
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-20"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)" }}
      />
    </div>
  );
};

export default HeroSection;
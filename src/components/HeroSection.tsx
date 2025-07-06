import React from "react";
import { Roboto_Mono } from "next/font/google";
import { userData } from "../data";
import ShaderGradientBackground from "./ShaderGradientBackground";
import BouncingArrow from "./BouncingArrow";

// Load the Roboto Mono font with desired subsets and weights
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Load regular and bold weights
});

const HeroSection: React.FC = () => (
  <div className="relative flex items-center justify-center min-h-screen text-center px-4 overflow-hidden">
    {/* Absolutely positioned gradient background */}
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <ShaderGradientBackground />
    </div>
    {/* Content overlays the gradient */}
    <div className="relative z-10 w-full flex flex-col items-center justify-center">
      <div className="mb-8">
        <h1
          className={`text-5xl sm:text-7xl font-bold text-white mb-4 ${robotoMono.className}`}
        >
          {userData.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-white/90 font-light">
          Data Scientist
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {userData.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`
              flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4
              ${link.bgColor} text-white
              rounded-full shadow-lg
              transition duration-300 ease-in-out
              transform hover:scale-110 hover:shadow-xl
              focus:outline-none focus:ring-4 focus:ring-white/30
              ${link.hoverColor}
              backdrop-blur-sm bg-opacity-80
            `}
          >
            <link.icon
              className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
              aria-hidden={true}
            />
            <span className="font-medium ml-3 text-lg">{link.name}</span>
          </a>
        ))}
      </div>

      <BouncingArrow />
    </div>
    {/* Fading overlay for smooth transition to black */}
    <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 z-20"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)"
      }}
    />
  </div>
);

export default HeroSection; 
import React from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const AboutMe: React.FC = () => (
  <section className="w-full flex flex-col items-center justify-center py-12 bg-black">
    {/* Section Title */}
    <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center ${robotoMono.className}`}>About Me</h2>
    <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-stretch bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-8 py-8 text-center md:text-left gap-8">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-lg text-gray-100">
          I am a neuroscientist by training, data scientist by trade, living in Brooklyn, NY.<br /><br />
          I have published academic research in neuroimaging and epidemiology, have worked in start ups, and now a data scientist with <s />
          <a href="https://otsuka-oph.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">Otsuka Precision Health</a>.<br /><br />
          In my free time I cycle, play music, and backpack.
        </p>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center gap-4">
        <div className="rounded-2xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-md p-1" style={{ perspective: '800px' }}>
          <img
            src="/james-backpack.jpg"
            alt="James Backpacking"
            className="w-56 h-72 object-cover rounded-xl shadow-lg"
            style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.15)' }}
          />
        </div>
        {/* Example: Add a second image if desired */}
        {<div className="rounded-2xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-md p-1" style={{ perspective: '800px' }}>
          <img
            src="/james-music.jpg"
            alt="James Music"
            className="w-56 h-72 object-cover rounded-xl shadow-lg"
          />
        </div>}
      </div>
    </div>
  </section>
);

export default AboutMe; 
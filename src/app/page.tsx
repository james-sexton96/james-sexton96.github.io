// Add this directive at the VERY TOP of the file to mark it as a Client Component
"use client";

// Import React and necessary types/icons
import React from 'react';
import { Github, Linkedin, GraduationCap } from 'lucide-react';
// Import the Google Font function
import { Roboto_Mono } from 'next/font/google';

// Load the Roboto Mono font with desired subsets and weights
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'] // Load regular and bold weights
});

/**
 * Main App Component (Client Component)
 *
 * Features a full-screen background image with content overlaid on the right.
 * Includes a brain activation GIF below the name.
 * Uses Tailwind CSS for responsive layout and styling.
 * Uses next/font to load Roboto Mono for the name.
 * Designed to be statically exported using `next export`.
 */
const App = () => {
  // --- Configuration ---
  const userData = {
    name: 'James Sexton',
    // Path to your background image in the public folder
    profilePicture: '/IMG_3681.jpg',
    // UPDATED: Path to the brain activation GIF
    // Assumes 'brain_activation_2.gif' is placed in the 'public' folder
    brainGif: '/brain_activation2.gif',
    links: [
      {
        name: 'Google Scholar',
        url: 'https://scholar.google.com/citations?user=3Z64U10AAAAJ&hl=en&authuser=1',
        icon: GraduationCap,
        bgColor: 'bg-green-600',
        hoverColor: 'hover:bg-green-700',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jamesdsexton/',
        icon: Linkedin,
        bgColor: 'bg-blue-700',
        hoverColor: 'hover:bg-blue-800',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/james-sexton96',
        icon: Github,
        bgColor: 'bg-gray-800',
        hoverColor: 'hover:bg-gray-900',
      },
    ],
  };

  // --- Render Logic ---
  return (
    // Main container: Full screen height, flexbox for centering content overlay
    // Background image applied via inline style
    <div
      className="min-h-screen w-full flex items-center justify-center md:justify-end bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${userData.profilePicture})` }}
      aria-label="Background image of James Sexton in a mountainous lake landscape" // Accessibility for background
    >
      {/* Content Overlay Box */}
      {/* On mobile (default): Centered, full width up to max-w-md */}
      {/* On medium screens and up (md:): Pushed to the right with margin, smaller max-width */}
      <div className="relative bg-gray-800 bg-opacity-75 backdrop-blur-sm text-white p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md md:max-w-sm md:mr-8 lg:mr-16 xl:mr-24">

        {/* Name */}
        {/* Name is center-aligned on all screen sizes */}
        <h1 className={`text-3xl sm:text-4xl font-bold text-center mb-6 ${robotoMono.className}`}>
          {userData.name}
        </h1>

        {/* Brain Activation GIF */}
        {/* Centered, rounded corners, margin below */}
        <img
          src={userData.brainGif} // Uses the updated path
          alt="Animated GIF showing brain activation" // Descriptive alt text
          className="rounded-lg mb-6 mx-auto block w-48 h-auto shadow-md" // Added width/height auto, shadow
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // Basic fallback if the GIF fails to load
            e.currentTarget.style.display = 'none'; // Hide broken image element
            // Optionally, display text: e.currentTarget.insertAdjacentText('afterend', 'GIF loading error');
          }}
        />

        {/* Links Section */}
        {/* Links stacked vertically, centered */}
        <div className="flex flex-col items-center space-y-4">
          {userData.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // Styling links as buttons, full width within their container
              className={`
                flex items-center justify-center px-5 py-3 w-full
                ${link.bgColor} text-white
                rounded-md shadow-md
                transition duration-300 ease-in-out text-center
                transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-opacity-75 /* Adjusted ring offset color */
                ${link.hoverColor}
                focus:ring-${link.bgColor.split('-')[1]}-400
              `}
            >
              <link.icon className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="font-medium">{link.name}</span> {/* Link text font is not changed */}
            </a>
          ))}
        </div>
      </div>
      {/* Removed the footer note for cleaner overlay look */}
    </div>
  );
};

export default App;

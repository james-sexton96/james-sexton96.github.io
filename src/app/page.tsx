// Add this directive at the VERY TOP of the file to mark it as a Client Component
"use client";

// Import React and necessary hooks/types/icons
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, GraduationCap } from 'lucide-react';
// Import the Google Font function
import { Roboto_Mono } from 'next/font/google';

// Load the Roboto Mono font with desired subsets and weights
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'] // Load regular and bold weights
});

// --- Type Definition for Publication ---
interface Publication {
  id: number; // Use a unique ID for React keys
  title: string;
  authors: string;
  journal: string; // Can be journal name or conference name
  year: number;
  link?: string; // Link is now populated for most items
  volume?: string | number; // Add optional volume
  issue?: string | number; // Add optional issue
  pages?: string; // Add optional pages
}

// --- Static Data ---
const userData = {
  name: 'James Sexton',
  profilePicture: '/IMG_3681.jpg', // Default/Desktop background
  mobileProfilePicture: '/mobile_background.jpg', // Mobile background
  brainGif: '/brain_activation2.gif', // Path in public folder
  links: [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=3Z64U10AAAAJ',
      icon: GraduationCap,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      focusRing: 'focus:ring-green-400',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jamesdsexton/',
      icon: Linkedin,
      bgColor: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
      focusRing: 'focus:ring-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/james-sexton96',
      icon: Github,
      bgColor: 'bg-gray-800',
      hoverColor: 'hover:bg-gray-900',
      focusRing: 'focus:ring-gray-400',
    },
  ],
};

// --- Publication Data ---
const actualPublications: Publication[] = [
  {
    id: 1, // Unique ID
    title: "Increased global integration in the brain after psilocybin therapy for depression",
    authors: "Richard E Daws, Christopher Timmermann, Bruna Giribaldi, James D Sexton, Matthew B Wall, David Erritzoe, Leor Roseman, David Nutt, Robin Carhart-Harris",
    journal: "Nature medicine",
    volume: 28,
    issue: 4,
    pages: "844-851",
    year: 2022,
    link: "https://www.nature.com/articles/s41591-022-01744-z"
  },
  {
    id: 2,
    title: "Associations between lifetime classic psychedelic use and markers of physical health",
    authors: "Otto Simonsson, James D Sexton, Peter S Hendricks",
    journal: "Journal of Psychopharmacology",
    volume: 35,
    issue: 4,
    pages: "447-452",
    year: 2021,
    link: "https://journals.sagepub.com/doi/abs/10.1177/0269881121996863"
  },
  {
    id: 3,
    title: "Population survey data informing the therapeutic potential of classic and novel phenethylamine, tryptamine, and lysergamide psychedelics",
    authors: "James D Sexton, Charles D Nichols, Peter S Hendricks",
    journal: "Frontiers in psychiatry",
    volume: 10,
    pages: "896",
    year: 2020,
    link: "https://www.frontiersin.org/articles/10.3389/fpsyt.2019.00896/full"
  },
  {
    id: 4,
    title: "Prevalence and epidemiological associates of novel psychedelic use in the United States adult population",
    authors: "James D Sexton, Michael S Crawford, Noah W Sweat, Allyson Varley, Emma E Green, Peter S Hendricks",
    journal: "Journal of psychopharmacology",
    volume: 33,
    issue: 9,
    pages: "1058-1067",
    year: 2019,
    link: "https://journals.sagepub.com/doi/abs/10.1177/0269881119827796"
  },
];

// --- Top Bar Component ---
const TopBar: React.FC = () => (
  <nav className="w-full bg-gray-900 shadow-md p-3">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <span className={`text-lg sm:text-xl font-bold text-white ${robotoMono.className}`}>
          {userData.name}
        </span>
      </div>
      <div className="flex justify-center items-center space-x-3 sm:space-x-4">
        {userData.links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`
              flex items-center justify-center p-2 sm:px-4 sm:py-2
              ${link.bgColor} text-white
              rounded-full sm:rounded-md shadow-md
              transition duration-300 ease-in-out
              transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
              ${link.hoverColor}
              ${link.focusRing}
            `}
          >
            <link.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline font-medium ml-2">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  </nav>
);

// --- Define Props Type for PublicationsList ---
interface PublicationsListProps {
  publications: Publication[];
}

// --- Publications List Component ---
const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {

  // Helper function to abbreviate a single name
  const abbreviateName = (fullName: string): string => {
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length < 2) return fullName;
    const lastName = nameParts.pop() || '';
    const initials = nameParts.map(part => `${part.charAt(0).toUpperCase()}.`).join(' ');
    return `${initials} ${lastName}`;
  };

  // Function to render authors with abbreviation and bolding
  const renderAuthors = (authors: string, nameToBold: string) => {
    const abbreviatedNameToBold = abbreviateName(nameToBold);
    const abbreviatedAuthors = authors
      .split(',')
      .map(author => abbreviateName(author.trim()))
      .join(', ');

    const parts = abbreviatedAuthors.split(abbreviatedNameToBold);
    if (parts.length <= 1) return abbreviatedAuthors;

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <strong>{abbreviatedNameToBold}</strong>}
      </React.Fragment>
    ));
  };

  return (
    // UPDATED: Added text-center to this parent div
    <div className="w-full max-w-2xl mx-auto mt-8 text-center">
      {/* Heading remains inline-block but will be centered by parent */}
      <h2 className="inline-block bg-gray-700 bg-opacity-60 backdrop-blur-sm rounded-lg text-2xl font-semibold mb-4 text-white px-4 py-2 shadow-md">
        Latest Publications
      </h2>
      {/* Container for the list itself - reset text alignment for list content */}
      <div className="bg-gray-700 bg-opacity-60 backdrop-blur-sm rounded-lg p-4 shadow-inner max-h-96 overflow-y-auto custom-scrollbar text-left"> {/* Added text-left */}
        {publications && publications.length > 0 ? (
          <ul className="space-y-4">
            {publications.map((pub) => {
              let journalDetails = pub.journal;
              if (pub.volume) journalDetails += ` ${pub.volume}`;
              if (pub.issue) journalDetails += ` (${pub.issue})`;
              if (pub.pages) journalDetails += `, ${pub.pages}`;

              return (
                <li key={pub.id} className="border-b border-gray-600 pb-3 last:border-b-0">
                  <h3 className="text-lg font-semibold text-blue-300 hover:text-blue-200 transition duration-200">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {renderAuthors(pub.authors, "James D Sexton")}
                  </p>
                  <p className="text-sm text-gray-400">{journalDetails}, {pub.year}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No publications found.</p> // Keep this centered
        )}
      </div>
      {/* CSS for custom scrollbar */}
      <style jsx global>{`
      .custom-scrollbar::-webkit-scrollbar { width: 8px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: rgba(55, 65, 81, 0.5); border-radius: 10px; }
      .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(107, 114, 128, 0.7); border-radius: 10px; border: 2px solid rgba(55, 65, 81, 0.5); }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(156, 163, 175, 0.8); }
      .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(107, 114, 128, 0.7) rgba(55, 65, 81, 0.5); }
    `}</style>
    </div>
  );
};


/**
 * Main App Component (Client Component)
 */
const App: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPublications = () => {
      try {
        setIsLoading(true);
        setError(null);
        setPublications(actualPublications); // Use the data with links
      } catch (err) {
        console.error("Error loading publications:", err);
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(`Failed to load publications: ${errorMessage}`);
        setPublications([]);
      } finally {
        setTimeout(() => setIsLoading(false), 50);
      }
    };

    loadPublications();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div
        className="main-container w-full flex flex-col items-center flex-grow"
        aria-label="Background image of James Sexton"
      >
        <main className="flex flex-col items-center justify-start w-full p-4 flex-grow">
          {/* Brain GIF Section */}
          <div className="text-center mt-6 sm:mt-10 mb-6">
             <img
              src={userData.brainGif}
              alt="Animated GIF showing brain activation"
              className="rounded-lg mx-auto block w-40 h-auto sm:w-48 shadow-md"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          {/* Publications Section */}
          <div className="w-full">
            {isLoading ? (
              <p className="text-white text-center mt-8">Loading publications...</p>
            ) : error ? (
              <p className="text-red-400 text-center mt-8">{error}</p>
            ) : (
              <PublicationsList publications={publications} />
            )}
          </div>
        </main>

        <footer className="w-full text-center p-4 mt-auto">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} {userData.name}</p>
        </footer>
      </div>

      {/* Style block for background image */}
      <style jsx>{`
        .main-container {
          background-image: url(${userData.profilePicture});
          background-size: cover;
          background-position: 30% 50%; /* Adjust percentages as needed */
          background-repeat: no-repeat;
          background-color: #1f2937; /* Fallback color */
        }

        @media (max-width: 767px) {
          .main-container {
            background-image: url(${userData.mobileProfilePicture});
            background-position: 30% 60%; /* Adjust percentages as needed */
          }
        }
      `}</style>

       {/* Global styles */}
       <style jsx global>{`
         html, body, #__next {
           height: 100%;
         }
         /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(55, 65, 81, 0.5); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(107, 114, 128, 0.7); border-radius: 10px; border: 2px solid rgba(55, 65, 81, 0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(156, 163, 175, 0.8); }
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(107, 114, 128, 0.7) rgba(55, 65, 81, 0.5); }
       `}</style>
    </div>
  );
};

export default App;

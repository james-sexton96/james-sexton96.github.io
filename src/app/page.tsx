// Add this directive at the VERY TOP of the file to mark it as a Client Component
"use client";

// Import React and necessary hooks
import React, { useState, useEffect } from "react";

// Import components
import { HeroSection, PublicationsList, Footer, GlobalStyles, AboutMe } from "../components";

// Import types and data
import { Publication } from "../types";
import { actualPublications } from "../data";

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
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(`Failed to load publications: ${errorMessage}`);
        setPublications([]);
      } finally {
        setTimeout(() => setIsLoading(false), 50);
      }
    };

    loadPublications();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with ShaderGradient Background */}
      <div className="relative">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <AboutMe />

      {/* Publications Section */}
      <div className="bg-black min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4">
          {isLoading ? (
            <p className="text-white text-center mt-8">
              Loading publications...
            </p>
          ) : error ? (
            <p className="text-red-400 text-center mt-8">{error}</p>
          ) : (
            <PublicationsList publications={publications} />
          )}
        </div>

        <Footer />
      </div>

      {/* Global styles */}
      <GlobalStyles />
    </div>
  );
};

export default App;

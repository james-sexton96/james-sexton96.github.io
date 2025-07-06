import React from "react";
import { Roboto_Mono } from "next/font/google";
import { PublicationsListProps } from "../types";

// Load the Roboto Mono font with desired subsets and weights
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Load regular and bold weights
});

const PublicationsList: React.FC<PublicationsListProps> = ({
  publications,
}) => {
  // Helper function to abbreviate a single name
  const abbreviateName = (fullName: string): string => {
    const nameParts = fullName.trim().split(/\s+/);
    if (nameParts.length < 2) return fullName;
    const lastName = nameParts.pop() || "";
    const initials = nameParts
      .map((part) => `${part.charAt(0).toUpperCase()}.`)
      .join(" ");
    return `${initials} ${lastName}`;
  };

  // Function to render authors with abbreviation and bolding
  const renderAuthors = (authors: string, nameToBold: string) => {
    const abbreviatedNameToBold = abbreviateName(nameToBold);
    const abbreviatedAuthors = authors
      .split(",")
      .map((author) => abbreviateName(author.trim()))
      .join(", ");

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
    <div className="w-full text-center">
      <h2
        className={`text-4xl sm:text-5xl font-bold text-white mb-12 ${robotoMono.className}`}
      >
        Latest Publications
      </h2>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        {publications && publications.length > 0 ? (
          <ul className="space-y-4">
            {publications.map((pub) => {
              let journalDetails = pub.journal;
              if (pub.volume) journalDetails += ` ${pub.volume}`;
              if (pub.issue) journalDetails += ` (${pub.issue})`;
              if (pub.pages) journalDetails += `, ${pub.pages}`;

              return (
                <li
                  key={pub.id}
                  className="border-b border-white/10 pb-3 last:border-b-0"
                >
                  <h3 className="text-lg font-semibold text-gray-100 hover:text-white transition duration-200">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {renderAuthors(pub.authors, "James D Sexton")}
                  </p>
                  <p className="text-sm text-gray-300">
                    {journalDetails}, {pub.year}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center text-gray-400">No publications found.</p>
        )}
      </div>
      {/* CSS for custom scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(107, 114, 128, 0.7);
          border-radius: 10px;
          border: 2px solid rgba(55, 65, 81, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(107, 114, 128, 0.7) rgba(55, 65, 81, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PublicationsList; 
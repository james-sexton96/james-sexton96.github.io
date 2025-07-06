import React from "react";

const GlobalStyles: React.FC = () => (
  <style jsx global>{`
    html,
    body,
    #__next {
      height: 100%;
    }
    /* Custom scrollbar styles */
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
);

export default GlobalStyles; 
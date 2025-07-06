import React from "react";

const BouncingArrow: React.FC = () => {
  return (
    <div className="mt-24 animate-bounce">
      <svg
        className="w-8 h-8 text-white/70 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
      <p className="text-white/70 text-sm mt-2">Scroll to see more</p>
    </div>
  );
};

export default BouncingArrow; 
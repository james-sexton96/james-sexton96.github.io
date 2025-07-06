import React from "react";
import { userData } from "../data";

const Footer: React.FC = () => (
  <footer className="w-full text-center p-8 mt-16">
    <p className="text-gray-400">
      &copy; {new Date().getFullYear()} {userData.name}
    </p>
  </footer>
);

export default Footer; 
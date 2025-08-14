// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto shadow-inner">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-gray-800 text-sm">
        <p>© {new Date().getFullYear()} EventPulse. All rights reserved.</p>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/privacy-policy" className="hover:text-blue-500">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="hover:text-blue-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaGithub,} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-700 text-white py-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm">
          &copy; {currentYear} Javohir. All rights reserved.
        </p>

        <p className="mt-2">Follow us on social media:</p>

        <div className="flex justify-center space-x-6 mt-2">
          <Link
            to="https://github.com/javakhiryoldashov"
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Github, Twitter, Linkedin, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; {currentYear} CodeViz. All rights reserved.
            </p>
          </div>
          <a href="https://www.buymeacoffee.com/amanmauryas" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ height: '60px', width: '217px' }} /></a>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/amanmauryas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/amanmauryas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/amanmauryas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
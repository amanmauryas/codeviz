import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Visualizer', path: '/visualizer' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <Code2 className="h-8 w-8 mr-2 text-white transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-white rounded-full filter blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="font-bold text-xl">CodeViz</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-white bg-opacity-20 text-white shadow-md'
                    : 'text-indigo-100 hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:text-white hover:bg-indigo-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-indigo-100 hover:bg-white hover:bg-opacity-10'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
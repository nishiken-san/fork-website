// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Left Logo */}
            <div className="flex-1">
              <a href="/" className="block">
                <div className="flex items-center">
                  {/* Replace this with your actual logo image */}
                  <span className="text-2xl md:text-3xl font-light tracking-widest text-gray-900 hover:text-gray-600 transition-colors">
                    fork
                  </span>
                </div>
              </a>
            </div>
            
            {/* Right Menu Button */}
            <div className="w-16 md:w-20 flex justify-end">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors font-light text-sm tracking-wide uppercase"
                aria-label="メニューを開く"
              >
                <span className="hidden sm:inline">menu</span>
                <div className="flex flex-col space-y-1">
                  <span className="w-5 h-px bg-current"></span>
                  <span className="w-5 h-px bg-current"></span>
                  <span className="w-5 h-px bg-current"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
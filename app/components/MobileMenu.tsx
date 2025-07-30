// app/components/MobileMenu.tsx
'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl">
        <div className="p-8">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-light tracking-wide uppercase"
              aria-label="メニューを閉じる"
            >
              close ✕
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
                Explore
              </h3>
              <div className="space-y-3">
                <a 
                  href="#about" 
                  className="block text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  About
                </a>
                <a 
                  href="#team" 
                  className="block text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  Team
                </a>
                <a 
                  href="#services" 
                  className="block text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="block text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
                More
              </h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="block text-xl font-light text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={onClose}
                >
                  Careers
                </a>
                <a 
                  href="#" 
                  className="block text-xl font-light text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={onClose}
                >
                  News
                </a>
                <a 
                  href="#" 
                  className="block text-xl font-light text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={onClose}
                >
                  Press
                </a>
              </div>
            </div>
          </nav>
          
          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-1">
                  Email
                </p>
                <a 
                  href="mailto:hello@fork-company.com" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hello@fork-company.com
                </a>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-1">
                  Phone
                </p>
                <a 
                  href="tel:+81312345678" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +81 3 1234 5678
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12">
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-light tracking-wide"
              >
                Twitter
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-light tracking-wide"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors text-sm font-light tracking-wide"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
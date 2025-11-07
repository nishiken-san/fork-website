

// app/components/HeaderTop.tsx
'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  logoImage?: string; // オプション: ロゴ画像のパス
  menuLogoImage?: string; // オプション: メニュー内のロゴ画像のパス
}

const Header: React.FC<HeaderProps> = ({ logoImage, menuLogoImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#E7E7E7] z-50">
        <div className="px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl text-[#003705]">
            <img
              src="/images/logo/logo.png"
              alt="fork"
              className="h-8 md:h-10 w-auto hover:opacity-70 transition-opacity"
            />
          </a>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-[#003705] hover:text-gray-600 transition-colors"
            aria-label="メニュー"
          >
            <span className="text-sm">menu</span>
            <div className="w-6 h-5 flex flex-col justify-center gap-1.5 relative">
              <span 
                className={`block w-full h-0.5 bg-[#003705] transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span 
                className={`block w-full h-0.5 bg-[#003705] transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        logoImage={menuLogoImage}
      />
    </>
  );
};

export default Header;
// app/components/HeaderTop.tsx
'use client';

import { useState } from 'react';
import MobileTop from './MobileTop';

interface HeaderTopProps {
  logoImage?: string;
  menuLogoImage?: string;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ logoImage, menuLogoImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header-top">
        <div className="header-container">
          <a href="/" className="header-logo-link">
            <img
              src="/images/logo/logo-white.svg"
              alt="fork"
              className="header-logo-image"
            />
          </a>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-menu-button"
            aria-label="メニュー"
          >
            <span className="header-menu-text">menu</span>
            <div className="hamburger-icon">
              <span className={`hamburger-line ${isMenuOpen ? 'open-top' : ''}`} />
              <span className={`hamburger-line ${isMenuOpen ? 'open-bottom' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <MobileTop 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        logoImage={menuLogoImage}
      />
    </>
  );
};

export default HeaderTop;
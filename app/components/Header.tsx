// app/components/Header.tsx
'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  logoImage?: string;
  menuLogoImage?: string;
}

const Header: React.FC<HeaderProps> = ({ logoImage, menuLogoImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        /* kinfolk風アニメーション（500ms + cubic-bezier） */
        .hamburger-icon {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hamburger-line {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* メニューが開いた時のアニメーション速度 */
        .hamburger-icon.menu-open {
          opacity: 0.9;
        }
        
        .hamburger-icon.menu-open .hamburger-line {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>

      <header className="header-secondary">
        <div className="header-container">
          <a href="/" className="header-logo-link">
            <img
              src="/images/logo/logo-green.svg"
              alt="fork"
              className="header-logo-image"
            />
          </a>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-menu-button secondary"
            aria-label="メニュー"
          >
            <span className="header-menu-text secondary">menu</span>
            <div className={`hamburger-icon ${isMenuOpen ? 'menu-open' : ''}`}>
              <span className={`hamburger-line secondary ${isMenuOpen ? 'open-top' : ''}`} />
              <span className={`hamburger-line secondary ${isMenuOpen ? 'open-bottom' : ''}`} />
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
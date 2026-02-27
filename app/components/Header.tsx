// app/components/Header.tsx
'use client';

import { useState } from 'react';
import MobileTop from './MobileTop';

interface HeaderProps {
  logoImage?: string;
  menuLogoImage?: string;
}

const Header: React.FC<HeaderProps> = ({ logoImage, menuLogoImage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        /* ヘッダー全体のトランジション */
        .header-secondary {
          transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .header-secondary.menu-open {
          background-color: #003705;
          border-bottom-color: #003705;
        }
        
        /* ロゴのトランジション */
        .header-logo-image {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .logo-green {
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-white {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-open .logo-green {
          opacity: 0;
        }
        
        .menu-open .logo-white {
          opacity: 1;
        }
        
        /* メニューテキストのトランジション */
        .header-menu-text {
          line-height: 35px;
          transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-open .header-menu-text {
          color: #FFFFFF;
        }
        
        /* ハンバーガーラインのトランジション */
        .hamburger-line {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .menu-open .hamburger-line {
          background-color: #FFFFFF !important;
        }
        
        .hamburger-icon {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hamburger-icon.menu-open {
          opacity: 0.9;
        }
      `}</style>

      <header className={`header-secondary ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          <a href="/" className={`header-logo-link ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo-container">
              <img
                src="/images/logo/logo-green.svg"
                alt="fork"
                className="header-logo-image logo-green"
              />
              <img
                src="/images/logo/logo-white.svg"
                alt="fork"
                className="header-logo-image logo-white"
              />
            </div>
          </a>
          
          {/* ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`header-menu-button secondary ${isMenuOpen ? 'menu-open' : ''}`}
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

      <MobileTop 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        logoImage={menuLogoImage}
      />
    </>
  );
};

export default Header;
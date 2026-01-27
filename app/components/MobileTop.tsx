// app/components/MobileTop.tsx
'use client';

import { useEffect } from 'react';
import { IMAGES } from '@/constants/images';

interface MobileTopProps {
  isOpen: boolean;
  onClose: () => void;
  logoImage?: string;
}

const MobileTop: React.FC<MobileTopProps> = ({ isOpen, onClose, logoImage }) => {
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

  return (
    <>
      <style jsx>{`
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.672s cubic-bezier(0.4, 0, 0.2, 1),
                      visibility 0.672s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .menu-panel {
          position: fixed;
          left: 0;
          right: 0;
          top: 70px;
          background-color: #003705;
          z-index: 50;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.84s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-panel.active {
          max-height: calc(100vh - 70px);
        }
        
        .menu-content {
          padding: 40px 50px 30px 50px;
          overflow-y: auto;
          max-height: calc(100vh - 70px);
        }
        
        .menu-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #FFFFFF;
          font-size: 15px;
          margin-bottom: 1rem;
          text-decoration: none;
          opacity: 0;
          transform: translateY(-10px);
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.672s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.672s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 700;
        }

        .menu-link-icon {
          width: 1em;
          height: 1em;
          object-fit: contain;
        }

        .menu-submenu .menu-link-icon {
          width: 0.8em;
          height: 0.8em;
        }
        
        .menu-panel.active .menu-link {
          opacity: 1;
          transform: translateY(0);
        }
        
        .menu-panel.active .menu-link:nth-child(1) {
          transition-delay: 0.168s;
        }
        
        .menu-panel.active .menu-link:nth-child(2) {
          transition-delay: 0.252s;
        }
        
        .menu-panel.active .menu-link:nth-child(3) {
          transition-delay: 0.336s;
        }
        
        .menu-panel.active .menu-link:nth-child(4) {
          transition-delay: 0.42s;
        }
        
        .menu-panel.active .menu-link:nth-child(5) {
          transition-delay: 0.504s;
        }
        
        .menu-panel.active .menu-link:nth-child(6) {
          transition-delay: 0.588s;
        }
        
        .menu-link:hover {
          color: #b8c0b8;
        }
        
        .menu-submenu-container {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.672s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.672s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-panel.active .menu-submenu-container {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.42s;
        }
        
        .menu-submenu-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #FFFFFF;
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }
        
        .menu-submenu {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
        }
        
        .menu-submenu .menu-link {
          margin-bottom: 1rem;
        }
        
        .menu-panel.active .menu-submenu .menu-link:nth-child(1) {
          transition-delay: 0.504s;
        }
        
        .menu-panel.active .menu-submenu .menu-link:nth-child(2) {
          transition-delay: 0.588s;
        }
        
        .menu-bottom {
          margin-top: 3rem;
          display: flex;
          justify-content: flex-end;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.672s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.672s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-panel.active .menu-bottom {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.672s;
        }
        
        .menu-bottom-link {
          color: #FFFFFF;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .menu-bottom-link-text {
          transition: transform 0.3s ease;
        }
        
        .arrow-icon {
          width: 24px;
          height: 12px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .menu-bottom-link:hover .menu-bottom-link-text {
          transform: translateX(0.5em);
        }
        
        .menu-bottom-link:hover .arrow-icon {
          transform: translateX(0.5em);
        }

        @media (max-width: 768px) {
          .menu-content {
            padding: 20px 30px 30px 30px;
          }
        }
        
      `}</style>

      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      <div className={`menu-panel ${isOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <nav>
            <a href="/" className="menu-link" onClick={onClose}>
              <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
              top
            </a>
            
            <a href="/about" className="menu-link" onClick={onClose}>
              <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
              わたしたち について
            </a>
            
            <a href="/effort" className="menu-link" onClick={onClose}>
              <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
              とりくみ
            </a>
            
            <div className="menu-submenu-container">
              <div className="menu-submenu-title">
                <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
                サポーターになる
                </div>
              <div className="menu-submenu">
                <a href="/supporter" className="menu-link" onClick={onClose}>
                  <img src="/images/main/menu-line.png" alt="" className="menu-link-icon" />
                  みん営フレンズ（個人）
                </a>
                <a href="/supporterCorp" className="menu-link" onClick={onClose}>
                  <img src="/images/main/menu-line.png" alt="" className="menu-link-icon" />
                  みん営パートナー（法人・団体）
                </a>
              </div>
            </div>
            
            <a href="/info" className="menu-link" onClick={onClose}>
              <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
              おしらせ・記録
            </a>
            
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQisLpyoUlh3Bsgt4quyVe3GtiSExoa-WOJyoyv2cRBoeYNA/viewform"
              className="menu-link"
              target="_blank"
              rel="noopener noreferrer">
              <img src="/images/main/menu-vec.png" alt="" className="menu-link-icon" />
              お問い合わせ
            </a>
          </nav>
          
          <div className="menu-bottom">
            <a href="/forktoyama" className="menu-bottom-link" onClick={onClose}>
              <span className="menu-bottom-link-text">学童保育：fork toyama</span>
              <img 
                src={IMAGES.logo.vecw}
                alt="arrow"
                className="arrow-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTop;
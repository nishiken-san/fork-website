// app/components/MobileMenu.tsx
'use client';

import { useEffect, useState } from 'react';
import { IMAGES } from '@/constants/images';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logoImage?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, logoImage }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('custom-navigation');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('custom-navigation');
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.classList.remove('custom-navigation');
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        /* Overlay - 背景のフェードイン */
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
        
        /* Menu Panel - スライドアニメーション 0.84秒 */
        .menu-panel {
          position: fixed;
          left: 0;
          right: 0;
          top: 70px;
          background-color: #003705;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 50;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.84s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-panel.active {
          max-height: calc(100vh - 70px);
        }
        
        /* コンテンツコンテナ */
        .menu-content {
          padding: 2rem;
          padding-bottom: 3rem;
          overflow-y: auto;
          max-height: calc(100vh - 70px);
        }
        
        /* ナビゲーションリンク - 段階的フェードイン */
        .menu-link {
          display: block;
          color: white;
          font-size: 1rem;
          margin-bottom: 1.25rem;
          opacity: 0;
          transform: translateY(-10px);
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.672s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.672s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-panel.active .menu-link {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* 各リンクに遅延を追加 - さらに1.2倍 */
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
          color: #cccccc;
        }
        
        /* サブメニュー */
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
          color: white;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .menu-submenu {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
        }
        
        .menu-submenu .menu-link {
          margin-bottom: 0.75rem;
        }
        
        .menu-panel.active .menu-submenu .menu-link:nth-child(1) {
          transition-delay: 0.504s;
        }
        
        .menu-panel.active .menu-submenu .menu-link:nth-child(2) {
          transition-delay: 0.588s;
        }
        
        /* ボトムリンク */
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
          color: white;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .menu-bottom-link:hover {
          color: #cccccc;
        }
        
        .arrow-icon {
          width: 16px;
          height: 16px;
        }
        
        /* bodyクラス */
        :global(body.custom-navigation) {
          overflow: hidden;
        }
      `}</style>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`menu-panel ${isOpen ? 'active' : ''}`}
      >
        <div className="menu-content">
          
          {/* Navigation */}
          <nav>
            <a href="/" className="menu-link" onClick={onClose}>
              ＞ Top
            </a>
            
            <a href="/about" className="menu-link" onClick={onClose}>
              ＞ わたしたち について
            </a>
            
            <a href="/effort" className="menu-link" onClick={onClose}>
              ＞ とりくみ
            </a>
            
            <div className="menu-submenu-container">
              <div className="menu-submenu-title">＞ サポーターになる</div>
              <div className="menu-submenu">
                <a href="/supporter" className="menu-link" onClick={onClose}>
                  ー　みん営フレンズ（個人）
                </a>
                <a href="/supporter/corporate" className="menu-link" onClick={onClose}>
                  ー　みん営パートナー（法人・団体）
                </a>
              </div>
            </div>
            
            <a href="/topics" className="menu-link" onClick={onClose}>
              ＞ おしらせ・記録
            </a>
            
            <a href="/contact" className="menu-link" onClick={onClose}>
              ＞ お問い合わせ
            </a>
          </nav>
          
          {/* Bottom Link */}
          <div className="menu-bottom">
            <a href="/fork-toyama" className="menu-bottom-link" onClick={onClose}>
              学童保育：fork toyama 
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

export default MobileMenu;
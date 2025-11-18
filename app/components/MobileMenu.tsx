// app/components/MobileMenu.tsx
'use client';

import { useEffect } from 'react';
import { IMAGES } from '@/constants/images';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  logoImage?: string; // オプション: メニュー内のロゴ画像のパス
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, logoImage }) => {
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
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen 
            ? 'visible opacity-100' 
            : 'invisible opacity-0'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/30"
          onClick={onClose}
        />
      </div>
      
      {/* Menu Panel - ヘッダー直下から下に伸びる */}
      <div 
        className={`fixed left-0 right-0 bg-[#003705] shadow-2xl z-50 overflow-hidden transition-all duration-500 ease-out ${
          isOpen 
            ? 'top-[70px] max-h-[calc(100vh-72px)]' 
            : 'top-[70px] max-h-0'
        }`}
        style={{ marginTop: '0' }}
      >
        <div className="p-8 pb-12 overflow-y-auto max-h-[calc(100vh-72px)]">
          
          
          {/* Navigation */}
          <nav className="space-y-5">
            <a 
              href="/" 
              className="block text-white hover:text-gray-300 transition-colors text-base"
              onClick={onClose}
            >
              ＞ Top
            </a>
            
            <a 
              href="/about" 
              className="block text-white hover:text-gray-300 transition-colors text-base"
              onClick={onClose}
            >
              ＞ fork toyama について
            </a>
            
            <a 
              href="/effort" 
              className="block text-white hover:text-gray-300 transition-colors text-base"
              onClick={onClose}
            >
              ＞ とりくみ
            </a>
            
            <div>
              <div className="text-white text-base mb-2">＞ サポーターになる</div>
              <div className="ml-6 space-y-2">
                <a 
                  href="/supporter" 
                  className="block text-white hover:text-gray-300 transition-colors text-base"
                  onClick={onClose}
                >
                  ー　みん営フレンズ（個人）
                </a>
                <a 
                  href="/supporter/corporate" 
                  className="block text-white hover:text-gray-300 transition-colors text-base"
                  onClick={onClose}
                >
                  ー　みん営パートナー（法人・団体）
                </a>
              </div>
            </div>
            
            <a 
              href="/topics" 
              className="block text-white hover:text-gray-300 transition-colors text-base"
              onClick={onClose}
            >
              ＞ おしらせ・記録
            </a>
            
            <a 
              href="/contact" 
              className="block text-white hover:text-gray-300 transition-colors text-base"
              onClick={onClose}
            >
              ＞ お問い合わせ
            </a>
          </nav>
          
          {/* Bottom Link */}
          <div className="mt-12">
            <a 
              href="/fork-toyama" 
              className="text-white hover:text-gray-300 transition-colors text-sm flex items-center justify-end"
              onClick={onClose}
            >
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
// // app/components/Header.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import MobileMenu from './MobileMenu';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
//       }`}>
//         <div className="h-16 md:h-20">
//           <div className="flex items-center justify-between h-full px-6 md:px-8">
            
//             {/* Left Logo */}
//             <div className="flex items-center">
//               <a href="/" className="block">
//                 <img
//                   src="/images/logo/logo.png"
//                   alt="fork"
//                   className="h-8 md:h-10 w-auto hover:opacity-70 transition-opacity"
//                 />
//               </a>
//             </div>
            
//             {/* Right Menu Button */}
//             <div className="flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(true)}
//                 className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors font-light text-sm tracking-wide uppercase"
//                 aria-label="メニューを開く"
//               >
//                 <span className="hidden sm:inline">menu</span>
//                 <div className="flex flex-col space-y-1">
//                   <span className="w-5 h-px bg-current"></span>
//                   <span className="w-5 h-px bg-current"></span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//       <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//     </>
//   );
// };

// export default Header;

// app/components/Header.tsx
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
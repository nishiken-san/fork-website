


// // app/components/Parallax2.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import { IMAGES } from '@/constants/images';

// /* ============================================
//  * パララックス設定
//  * ============================================
//  * 
//  * PARALLAX_SPEED: 視差の強さ（0.1〜0.3推奨）
//  * IMAGE_SCALE: 画像の拡大率（パララックス用の余白確保）
//  * 
//  * ============================================ */

// const PARALLAX_SPEED = 0.08;
// const IMAGE_SCALE = 1.2;

// const ParallaxPhotoSection1 = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);

//   // パララックス効果（シンプルなスクロール同期）
//   useEffect(() => {
//     const section = sectionRef.current;
//     const wrapper = wrapperRef.current;
    
//     if (!section || !wrapper) return;

//     const updateParallax = () => {
//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // 画面外なら処理スキップ
//       if (rect.bottom < 0 || rect.top > windowHeight) return;

//       // セクションの中心と画面中央の距離
//       const sectionCenter = rect.top + rect.height / 2;
//       const viewportCenter = windowHeight / 2;
//       const distanceFromCenter = sectionCenter - viewportCenter;

//       // 視差効果を適用（スクロールに完全同期）
//       const offset = distanceFromCenter * PARALLAX_SPEED;
//       wrapper.style.transform = `translate(-50%, -50%) translate3d(0, ${offset}px, 0)`;
//     };

//     // 初期化
//     updateParallax();

//     // スクロールイベントで直接更新（パッシブで軽量化）
//     window.addEventListener('scroll', updateParallax, { passive: true });
//     window.addEventListener('resize', updateParallax, { passive: true });

//     return () => {
//       window.removeEventListener('scroll', updateParallax);
//       window.removeEventListener('resize', updateParallax);
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .parallax-section {
//           position: relative;
//           width: 100%;
//           height: 56vw;
//           min-height: 200px;
//           max-height: 700px;
//           overflow: hidden;
//           background-color: #003705;
//           clip-path: inset(0%);
//           border-top: 1px solid #003705;
//           border-bottom: 1px solid #003705;
//         }
        
//         .parallax-image-wrapper {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 100%;
//           height: 100%;
//           transform: translate(-50%, -50%);
//           will-change: transform;
//           backface-visibility: hidden;
//         }
        
//         .parallax-image {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 100%;
//           height: 130%;
//           object-fit: cover;
//           transform: translate(-50%, -50%) scale(${IMAGE_SCALE});
//           transform-origin: center center;
//         }
        
//         .parallax-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(
//             to bottom,
//             transparent 0%,
//             transparent 70%,
//             rgba(0, 0, 0, 0) 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }
        
//         @media (max-width: 768px) {
//           .parallax-section {
//             height: 75vw;
//             min-height: 300px;
//             max-height: 590px;
//           }
//         }
//       `}</style>

//       <div ref={sectionRef} className="parallax-section">
//         <div ref={wrapperRef} className="parallax-image-wrapper">
//           <img
//             src={IMAGES.parallax.supporter1}
//             alt="fork toyama"
//             className="parallax-image"
//           />
//         </div>
//         <div className="parallax-overlay" />
//       </div>
//     </>
//   );
// };

// export default ParallaxPhotoSection1;

// // app/components/AboutParallaxSection.tsx
// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { IMAGES } from '@/constants/images';

// const AboutParallaxSection = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(0);
//   const parentRef = useRef<HTMLDivElement>(null);
//   const imageRef = useRef<HTMLImageElement>(null);
//   const [sectionTop, setSectionTop] = useState(0);

//   useEffect(() => {
//     // 画面サイズの判定
//     const checkScreenSize = () => {
//       const width = window.innerWidth;
//       setScreenWidth(width);
//       setIsMobile(width < 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       if (parentRef.current) {
//         setSectionTop(parentRef.current.offsetTop);
//       }
//     };

//     // 初期位置を取得
//     if (parentRef.current) {
//       setSectionTop(parentRef.current.offsetTop);
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // 画面幅に応じたパララックス速度を計算
//   const getParallaxSpeed = () => {
//     if (screenWidth >= 1200) {
//       return 0.3;  // PC: 控えめに
//     } else if (screenWidth >= 768) {
//       return 0.2; // タブレット: さらに控えめ
//     } else if (screenWidth >= 480) {
//       return 0.1; // 大きめモバイル: かなり遅く
//     } else {
//       return 0;    // 小さいモバイル: パララックス無効
//     }
//   };

//   // パララックス計算（画面幅に応じて変位量を調整）
//   const relativeScroll = scrollY - sectionTop;
//   const parallaxSpeed = getParallaxSpeed();
//   const parallaxOffset = relativeScroll * parallaxSpeed;

//   return (
//     <>
//       <style jsx global>{`
//         /* 全体の背景色を統一 */
//         body {
//           background-color: #E7EBE7 !important;
//         }
//       `}</style>

//       <div 
//         ref={parentRef}
//         className="home_section_bg"
//         style={{
//           position: 'relative',
//           height: '600px',
//           overflow: 'hidden',
//           backgroundColor: '#E7EBE7',
//           WebkitOverflowScrolling: 'touch',
//         }}
//       >
//         <div 
//           className="home_section_bg_image"
//           style={{
//             position: 'absolute',
//             top: '-10%',
//             left: '0',
//             width: '100%',
//             height: '120%',
//             transform: `translateY(${parallaxOffset}px)`,
//             willChange: 'transform',
//             WebkitTransform: `translateY(${parallaxOffset}px) translateZ(0)`,
//             backfaceVisibility: 'hidden',
//             WebkitBackfaceVisibility: 'hidden',
//           }}
//         >
//           <img
//             ref={imageRef}
//             src={IMAGES.parallax.about2}
//             alt="About parallax background"
//             style={{
//               position: 'absolute',
//               top: '0',
//               left: '0',
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               objectPosition: 'center center',
//               display: 'block',
//             }}
//           />
//         </div>

//         {/* グラデーションオーバーレイ */}
//         <div 
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'linear-gradient(to bottom, transparent, transparent, rgba(0, 0, 0, 0.2))',
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default AboutParallaxSection;

// app/components/Parallax2.tsx
'use client';

import { useEffect, useRef } from 'react';
import { IMAGES } from '@/constants/images';

/* ============================================
 * パララックス設定
 * ============================================
 * 
 * PARALLAX_SPEED: 視差の強さ（0.1〜0.3推奨）
 * 
 * PC: 画像を左右100%表示（トリミングなし）
 * モバイル: 画面いっぱいに表示（左右トリミングあり）
 * 
 * ============================================ */

const PARALLAX_SPEED = 0.08;

const ParallaxPhotoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // パララックス効果（シンプルなスクロール同期）
  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    
    if (!section || !wrapper) return;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 画面外なら処理スキップ
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // セクションの中心と画面中央の距離
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = sectionCenter - viewportCenter;

      // 視差効果を適用（スクロールに完全同期）
      const offset = distanceFromCenter * PARALLAX_SPEED;
      wrapper.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    // 初期化
    updateParallax();

    // スクロールイベントで直接更新（パッシブで軽量化）
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        /* ===== PC ===== */
        .parallax-section {
          position: relative;
          width: 100%;
          height: 45vw;
          min-height: 200px;
          max-height: 700px;
          overflow: hidden;
          background-color: #003705;
          clip-path: inset(0%);
          border-top: 1px solid #003705;
          border-bottom: 1px solid #003705;
        }
        
        .parallax-image-wrapper {
          position: absolute;
          top: 0%;
          left: 0;
          width: 100%;
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .parallax-image {
          display: block;
          width: 100%;
          height: 110%;
        }
        
        .parallax-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 70%,
            rgba(0, 0, 0, 0) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        /* ===== モバイル: 画面いっぱいに表示 ===== */
        @media (max-width: 768px) {
          .parallax-section {
            height: 100vw;
            min-height: 300px;
            max-height: 600px;
          }
          
          .parallax-image-wrapper {
            top: 20%;
            left: 0%;
            width: 100%;
            height: 120%;
            transform: translate(-50%, -50%);
          }
          
          .parallax-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
          }
        }
        
        @media (max-width: 480px) {
          .parallax-section {
            height: 85vw;
            min-height: 480px;
            max-height: 600px;
          }
          
          .parallax-image-wrapper {
            height: 110%;
          }
        }
      `}</style>

      <div ref={sectionRef} className="parallax-section">
        <div ref={wrapperRef} className="parallax-image-wrapper">
          <img
            src={IMAGES.parallax.supporter1}
            alt="fork toyama"
            className="parallax-image"
          />
        </div>
        <div className="parallax-overlay" />
      </div>
    </>
  );
};

export default ParallaxPhotoSection;
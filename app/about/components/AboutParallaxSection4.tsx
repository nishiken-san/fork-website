


// app/components/Parallax2.tsx
'use client';

import { useEffect, useRef } from 'react';
import { IMAGES } from '@/constants/images';

/* ============================================
 * パララックス設定
 * ============================================
 * 
 * PARALLAX_SPEED: 視差の強さ（0.1〜0.3推奨）
 * IMAGE_SCALE: 画像の拡大率（パララックス用の余白確保）
 * 
 * ============================================ */

const PARALLAX_SPEED = 0.08;
const IMAGE_SCALE = 1.2;

const ParallaxPhotoSection1 = () => {
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
      wrapper.style.transform = `translate(-50%, -50%) translate3d(0, ${offset}px, 0)`;
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
        .parallax-section {
          position: relative;
          width: 100%;
          height: 56vw;
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
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .parallax-image {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 130%;
          object-fit: cover;
          transform: translate(-50%, -50%) scale(${IMAGE_SCALE});
          transform-origin: center center;
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
        
        @media (max-width: 768px) {
          .parallax-section {
            height: 75vw;
            min-height: 300px;
            max-height: 590px;
          }
        }
      `}</style>

      <div ref={sectionRef} className="parallax-section">
        <div ref={wrapperRef} className="parallax-image-wrapper">
          <img
            src={IMAGES.parallax.about1}
            alt="fork toyama"
            className="parallax-image"
          />
        </div>
        <div className="parallax-overlay" />
      </div>
    </>
  );
};

export default ParallaxPhotoSection1;
// app/components/AboutParallaxSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const AboutParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    // 画面サイズの判定
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (parentRef.current) {
        setSectionTop(parentRef.current.offsetTop);
      }
    };

    // 初期位置を取得
    if (parentRef.current) {
      setSectionTop(parentRef.current.offsetTop);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 画面幅に応じたパララックス速度を計算
  const getParallaxSpeed = () => {
    if (screenWidth >= 1200) {
      return 0.3;  // PC: 控えめに
    } else if (screenWidth >= 768) {
      return 0.2; // タブレット: さらに控えめ
    } else if (screenWidth >= 480) {
      return 0.1; // 大きめモバイル: かなり遅く
    } else {
      return 0;    // 小さいモバイル: パララックス無効
    }
  };

  // パララックス計算（画面幅に応じて変位量を調整）
  const relativeScroll = scrollY - sectionTop;
  const parallaxSpeed = getParallaxSpeed();
  const parallaxOffset = relativeScroll * parallaxSpeed;

  return (
    <>
      <style jsx global>{`
        /* 全体の背景色を統一 */
        body {
          background-color: #E7EBE7 !important;
        }
      `}</style>

      <div 
        ref={parentRef}
        className="home_section_bg"
        style={{
          position: 'relative',
          height: '600px',
          overflow: 'hidden',
          backgroundColor: '#E7EBE7',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div 
          className="home_section_bg_image"
          style={{
            position: 'absolute',
            top: '-10%',
            left: '0',
            width: '100%',
            height: '120%',
            transform: `translateY(${parallaxOffset}px)`,
            willChange: 'transform',
            WebkitTransform: `translateY(${parallaxOffset}px) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            ref={imageRef}
            src={IMAGES.parallax.about2}
            alt="About parallax background"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
          />
        </div>

        {/* グラデーションオーバーレイ */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, transparent, transparent, rgba(0, 0, 0, 0.2))',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </div>
    </>
  );
};

export default AboutParallaxSection;
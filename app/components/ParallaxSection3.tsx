
// app/components/ParallaxSection1.tsx
'use client';

import { useEffect, useRef } from 'react';

/* ============================================
 * パララックス設定
 * ============================================
 * 
 * PARALLAX_SPEED: 視差の強さ（0.1〜0.3推奨）
 * VIDEO_SCALE: 動画の拡大率（パララックス用の余白確保）
 * 
 * ============================================ */

const PARALLAX_SPEED = 0.08;
const VIDEO_SCALE = 1.2;

const ParallaxSection3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // 動画再生制御
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .parallax-section {
          position: relative;
          width: 100%;
          // height: 56.25vw;
          height: 56vw;
          min-height: 200px;
          max-height: 700px;
          overflow: hidden;
          background-color: #000000;
          clip-path: inset(0%);
        }
        
        .parallax-video-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .parallax-video {
          position: absolute;
          top: 55%;
          left: 50%;
          width: 100%;
          height: 130%;
          object-fit: cover;
          transform: translate(-50%, -50%) scale(${VIDEO_SCALE});
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
        <div ref={wrapperRef} className="parallax-video-wrapper">
          <video
            ref={videoRef}
            className="parallax-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/images/mov/C_fork_webmovie0617_04_0630_1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="parallax-overlay" />
      </div>
    </>
  );
};

export default ParallaxSection3;
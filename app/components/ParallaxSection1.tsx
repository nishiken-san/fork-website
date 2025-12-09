// app/components/ParallaxSection1.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './ParallaxSection.module.css';

/* ============================================
 * パララックス設定
 * ============================================
 * 
 * PARALLAX_SPEED: 視差の強さ
 *   - 0.1〜0.3 推奨
 * 
 * PARALLAX_OVERFLOW: パララックス用の余裕（px）
 *   - 大きいほど上下の余白が出にくい
 *   - PARALLAX_SPEEDを大きくする場合は増やす
 * 
 * VERTICAL_POSITION: 動画の上下表示位置
 *   - 'top' = 上寄せ
 *   - 'center' = 中央
 *   - 'bottom' = 下寄せ
 *   - '30%' = 上から30%の位置
 * 
 * ============================================ */

const PARALLAX_SPEED = 0.15;      // 【調整】視差の強さ
const PARALLAX_OVERFLOW = 50;     // 【調整】パララックス用の余裕（px）
const VERTICAL_POSITION = 'center'; // 【調整】上下表示位置

const ParallaxSection1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    
    if (!section || !wrapper) return;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0 || rect.top > windowHeight) return;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = sectionCenter - viewportCenter;
      const offset = distanceFromCenter * PARALLAX_SPEED;

      wrapper.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    updateParallax();
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
    <div ref={sectionRef} className={styles.section}>
      <div 
        ref={wrapperRef} 
        className={styles.wrapper}
        style={{ 
          '--parallax-overflow': `${PARALLAX_OVERFLOW}px`,
        } as React.CSSProperties}
      >
        <video
          ref={videoRef}
          className={styles.video}
          style={{ 
            '--vertical-position': VERTICAL_POSITION,
          } as React.CSSProperties}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/images/mov/A_fork_webmovie0617_01_0630_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};

export default ParallaxSection1;
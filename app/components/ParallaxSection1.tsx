// app/components/ParallaxSection1.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './ParallaxSection.module.css';

/* ============================================
 * 微調整用パラメータ
 * ============================================
 * 
 * parallaxAmount: 30 → 最大移動量（px）
 *   - 参考サイトは約10〜15px程度
 *   - 大きくすると動きが目立つ
 * 
 * videoScale: 1.15 → 動画拡大率
 *   - パララックス移動分の余白確保
 *   - parallaxAmountが大きい場合は拡大率も上げる
 * 
 * ============================================ */

const PARALLAX_AMOUNT = 30; // 【調整】最大移動量（px）
const VIDEO_SCALE = 1.15;   // 【調整】動画拡大率

const ParallaxSection1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    
    if (!section || !wrapper) return;

    // パララックス計算（スクロールに完全同期）
    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 画面外なら処理スキップ
      if (rect.bottom < 0 || rect.top > windowHeight) return;

      // 進行度計算: 画面下端→画面上端で0→1
      const progress = 1 - (rect.top + rect.height) / (windowHeight + rect.height);
      
      // 中央基準で-0.5〜0.5に正規化
      const offset = (progress - 0.5) * PARALLAX_AMOUNT;

      // GPU加速でスムーズに更新
      wrapper.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    // 初期化
    updateParallax();

    // スクロール監視（パッシブで軽量化）
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  // 動画再生（IntersectionObserverで効率化）
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
          video.pause(); // 画面外で一時停止（パフォーマンス向上）
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
        style={{ '--video-scale': VIDEO_SCALE } as React.CSSProperties}
      >
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // metadataのみ先読み（軽量化）
        >
          <source src="/images/mov/A_fork_webmovie0617_01_0630_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};

export default ParallaxSection1;
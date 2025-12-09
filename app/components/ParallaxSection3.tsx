
// app/components/ParallaxSection3.tsx
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

const ParallaxSection3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ============================================
   * 微調整用パラメータ
   * ============================================
   * 
   * 【セクション】
   * - sectionHeight: 56.25vw → セクションの高さ（16:9比率）
   * - minHeight: 400px → 最小高さ
   * - maxHeight: 900px → 最大高さ
   * 
   * 【パララックス効果】
   * - parallaxStrength: 0.15 → パララックスの強さ（0〜1、小さいほど控えめ）
   * - videoScale: 1.2 → 動画の拡大率（パララックス用の余白確保）
   * 
   * ============================================ */

  const parallaxStrength = 0.15; // 【調整】パララックスの強さ
  const videoScale = 1.2; // 【調整】動画の拡大率（1.2 = 20%拡大）

  // 滑らかなパララックス更新（requestAnimationFrame使用）
  const updateParallax = useCallback(() => {
    if (!sectionRef.current || !parallaxRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;

    // セクションが画面内にある場合のみ計算
    if (rect.bottom < 0 || rect.top > windowHeight) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // スクロール進行度を計算（-1 〜 1 の範囲）
    // セクションが画面下から入って画面上に出るまで
    const scrollProgress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
    
    // 中央を0として -0.5 〜 0.5 に正規化
    const normalizedProgress = scrollProgress - 0.5;
    
    // パララックスオフセットを計算（控えめな移動量）
    const maxOffset = sectionHeight * parallaxStrength;
    const offset = normalizedProgress * maxOffset;

    // GPU加速を使用した滑らかな変形
    parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
  }, [parallaxStrength]);

  // スクロールイベントハンドラ（requestAnimationFrameでスロットル）
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(updateParallax);
  }, [updateParallax]);

  useEffect(() => {
    // 初期化
    updateParallax();

    // パッシブリスナーで軽量化
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, updateParallax]);

  // 動画再生制御
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = () => {
        videoRef.current?.play().catch(err => {
          console.log('Video play error:', err);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log('Retry failed:', e));
          }
        });
      };

      // Intersection Observerで画面内に入ったら再生
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playVideo();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(videoRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .parallax-section {
          position: relative;
          width: 100%;
          height: 56.25vw; /* 【調整】16:9比率 */
          min-height: 400px; /* 【調整】最小高さ */
          max-height: 900px; /* 【調整】最大高さ */
          overflow: hidden;
          background-color: #E7EBE7;
          /* 参考サイトと同じクリッピング */
          clip-path: inset(0%);
        }
        
        .parallax-video-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          /* GPU加速 */
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .parallax-video {
          position: absolute;
          top: 0%;
          left: 0%;
          width: 90%;
          height: 90%;
          object-fit: cover;
          /* 動画を少し拡大してパララックス用の余白を確保 */
          transform: translate(-50%, -50%) scale(${videoScale});
          transform-origin: center center;
        }
        
        /* グラデーションオーバーレイ（オプション） */
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
            rgba(0, 0, 0, 0.1) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .parallax-section {
            height: 75vw; /* 【調整】モバイルでの高さ比率 */
            min-height: 300px;
            max-height: 500px;
          }
        }
      `}</style>

      <div 
        ref={sectionRef}
        className="parallax-section"
      >
        <div 
          ref={parallaxRef}
          className="parallax-video-wrapper"
          style={{
            // 初期状態
            transform: 'translate3d(0, 0, 0)',
          }}
        >
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

        {/* オーバーレイ */}
        <div className="parallax-overlay" />
      </div>
    </>
  );
};

export default ParallaxSection3;
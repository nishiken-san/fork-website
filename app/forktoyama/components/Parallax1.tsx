// app/components/ParallaxPhotoSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

const ParallaxSection1 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
    // 動画のメタデータ読み込み完了時に高さを計算
    const handleVideoLoad = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        const videoRatio = video.videoHeight / video.videoWidth;
        const width = window.innerWidth;
        const calculatedHeight = width * videoRatio;
        setVideoHeight(calculatedHeight);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleVideoLoad);
      if (videoRef.current.readyState >= 1) {
        handleVideoLoad();
      }
    }

    const handleResize = () => {
      handleVideoLoad();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleVideoLoad);
      }
      window.removeEventListener('resize', handleResize);
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

  useEffect(() => {
    // 動画の再生制御
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

      if (isMobile) {
        document.addEventListener('touchstart', playVideo, { once: true });
      } else {
        playVideo();
      }

      return () => {
        document.removeEventListener('touchstart', playVideo);
      };
    }
  }, [isMobile]);

  // 画面幅に応じたパララックス速度を計算
  const getParallaxSpeed = () => {
    if (screenWidth >= 1200) {
      return 0.4;  // PC: 通常速度
    } else if (screenWidth >= 768) {
      return 0.25; // タブレット: 半分
    } else if (screenWidth >= 480) {
      return 0.15; // 大きめモバイル: かなり遅く
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
          height: videoHeight > 0 ? `${videoHeight}px` : '100vh',
          overflow: 'hidden',
          backgroundColor: '#E7EBE7',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div 
          className="home_section_bg_video"
          style={{
            position: 'absolute',
            top: '-50%',
            left: '0',
            width: '100%',
            height: '200%',
            transform: `translateY(${parallaxOffset}px)`,
            willChange: 'transform',
            WebkitTransform: `translateY(${parallaxOffset}px) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/images/mov/D_fork_webmovie0617_03_0630_1.mp4" type="video/mp4" />
          </video>
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

export default ParallaxSection1;
// app/components/ParallaxPhotoSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const ParallaxPhotoSection1 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // モバイル判定
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // 初期チェック
    checkDevice();

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // モバイルではスクロールイベントを無効化してパフォーマンス向上
    if (!isMobile) {
      window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    }
    
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', checkDevice);
      observer.disconnect();
    };
  }, [isMobile]);

  // パララックス効果の計算（デスクトップかつセクションが見えている時のみ）
  const parallaxOffset = !isMobile && isInView ? scrollY * (-0.1) : 0;

  // モバイル用のスタイル
  const mobileStyle = {
    height: isMobile ? '40vh' : '100vh',
    minHeight: isMobile ? '300px' : '100vh',
    maxHeight: isMobile ? '400px' : 'none',
  };

  // 背景画像のスタイル
  const backgroundStyle = {
    backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // モバイルでは fixed を無効化
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    transform: `translateY(${parallaxOffset}px)`,
    willChange: isMobile ? 'auto' : 'transform',
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={mobileStyle}
    >
      {/* パララックス背景画像 */}
      <div 
        className={`absolute inset-0 w-full ${isMobile ? 'h-full' : 'h-[130%]'}`}
        style={backgroundStyle}
      >
        {/* モバイル用の追加最適化 */}
        {isMobile && (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          />
        )}
        
        {/* デスクトップ用 */}
        {!isMobile && (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
            }}
          />
        )}
      </div>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default ParallaxPhotoSection1;
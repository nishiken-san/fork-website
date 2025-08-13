// app/components/ParallaxPhotoSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const ParallaxPhotoSection2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    // モバイル判定
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // セクションの位置を取得
    const updateSectionTop = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
      }
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
      { 
        threshold: 0,
        rootMargin: '100px 0px' // 早めに検知開始
      }
    );

    // 初期設定
    checkDevice();
    updateSectionTop();

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // モバイルではスクロールイベントを軽量化
    if (!isMobile) {
      window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    }
    
    window.addEventListener('resize', () => {
      checkDevice();
      updateSectionTop();
    });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', checkDevice);
      observer.disconnect();
    };
  }, [isMobile]);

  // 参考サイト風のパララックス計算
  const calculateParallaxOffset = () => {
    if (isMobile || !isInView) return 0;
    
    // セクションの中央を基準とした相対位置
    const sectionHeight = sectionRef.current?.offsetHeight || 0;
    const windowHeight = window.innerHeight;
    const sectionCenter = sectionTop + sectionHeight / 2;
    const viewportCenter = scrollY + windowHeight / 2;
    
    // 中央からの距離に基づく変位量計算
    const distanceFromCenter = viewportCenter - sectionCenter;
    
    // 参考サイト風の変位量（より自然な動き）
    const parallaxSpeed = 0.3; // 変位の強さ調整
    const maxOffset = sectionHeight * 0.2; // 最大変位量制限
    
    const offset = distanceFromCenter * parallaxSpeed;
    
    // 変位量制限
    return Math.max(-maxOffset, Math.min(maxOffset, offset));
  };

  const parallaxOffset = calculateParallaxOffset();

  // セクションの高さ設定（参考サイト風）
  const sectionStyle = {
    height: isMobile ? '50vh' : '80vh', // 参考サイトに近い高さ
    minHeight: isMobile ? '400px' : '600px',
    maxHeight: isMobile ? '500px' : '900px',
  };

  // 背景画像のスケール（ズーム効果）
  const backgroundScale = isMobile ? 1 : 1.2; // デスクトップでは少し拡大

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={sectionStyle}
    >
      {/* モバイル用の背景画像 */}
      {isMobile && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll',
          }}
        />
      )}
      
      {/* デスクトップ用のパララックス背景 */}
      {!isMobile && (
        <div 
          className="absolute w-full h-full"
          style={{
            top: '50%',
            left: '50%',
            width: '100%',
            height: `${100 * backgroundScale}%`,
            transform: `translate(-50%, -50%) translateY(${parallaxOffset}px) scale(${backgroundScale})`,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>
      )}

      {/* コンテンツオーバーレイ（参考サイト風） */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          {/* 必要に応じてコンテンツを追加 */}
        </div>
      </div>

      {/* グラデーションオーバーレイ（より自然に） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default ParallaxPhotoSection2;
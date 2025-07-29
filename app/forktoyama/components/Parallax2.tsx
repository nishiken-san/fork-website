// app/components/ParallaxPhotoSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const ParallaxPhotoSection2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      observer.disconnect();
    };
  }, []);

  // パララックス効果の計算（セクションが見えている時のみ）
  const parallaxOffset = isInView ? scrollY * (-0.1) : 0; // 変位量を増やす

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* パララックス背景画像 */}
      <div 
        className="absolute inset-0 w-full h-[130%]"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        {/* 背景画像 - 実際の画像に置き換えてください */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.about.teamPhoto}')`,
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      

      {/* グラデーションオーバーレイ（オプション） */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default ParallaxPhotoSection2;
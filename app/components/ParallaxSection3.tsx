// app/components/ParallaxPhotoSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const ParallaxSection3 = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);

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
        if (entry.isIntersecting && sectionRef.current) {
          setSectionTop(sectionRef.current.offsetTop);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      setSectionTop(sectionRef.current.offsetTop);
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      observer.disconnect();
    };
  }, []);

  // パララックス効果の計算（セクション内でのスクロール量に基づく）
  const relativeScroll = scrollY - sectionTop;
  const parallaxOffset = isInView ? relativeScroll * 0.3 : 0;

  return (
    <section 
      ref={sectionRef}
      className="parallax-section relative overflow-hidden"
      style={{
        height: '100vh',
        minHeight: '100vh',
        backgroundColor: '#E7EBE7'
      }}
    >
      {/* パララックス背景画像 */}
      <div 
        className="parallax-image-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '110%',
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        <img 
          src={IMAGES.about.teamPhoto}
          alt="チーム写真"
          className="parallax-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
        />
      </div>

      {/* グラデーションオーバーレイ（オプション） */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};

export default ParallaxSection3;
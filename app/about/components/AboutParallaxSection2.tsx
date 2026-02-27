// app/components/Parallax2.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IMAGES } from '@/constants/images';

const Parallax2 = () => {
  <style jsx>{`
.parallaxSection {
  position: relative;
  width: 100%;
  height: 56vw;
  min-height: 200px;
  max-height: 700px;
  overflow: hidden;
  background-color: #003705;
  border-top: 1px solid #003705;
  border-bottom: 1px solid #003705;
}

.parallaxImageWrapper {
  position: absolute;
  top: -50%;
  left: 0;
  width: 120%;
  height: 120%;
  transition: none !important;
}

.parallaxImage {
  width: 110%;
  height: 110%;
  object-fit: cover;
  object-position: center center;
  transition: none !important;
}

/* モバイル */
@media (max-width: 768px) {
  .parallaxSection {
    height: 75vw;
    min-height: 300px;
    max-height: 600px;
  }

  .parallaxImageWrapper {
    top: -5%;
    height: 110%;
  }
}

/* 小型モバイル */
@media (max-width: 480px) {
  .parallaxSection {
    height: 85vw;
    min-height: 350px;
    max-height: 600px;
  }
}
        
      `}</style>

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // GSAPパララックス
  useEffect(() => {
    if (initialized.current) return;
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;

    if (!section || !imageWrapper) return;

    initialized.current = true;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapper,
        { y: '-10%' },
        {
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    
    <div ref={sectionRef} className="parallaxSection">
      <div ref={imageWrapperRef} className="parallaxImageWrapper">
        <img
          src={IMAGES.parallax.about2}
          alt="fork toyama"
          className="parallaxImage"
        />
      </div>
    </div>
  );
};

export default Parallax2;
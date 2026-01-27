'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '@/constants/images';

gsap.registerPlugin(ScrollTrigger);

const ParallaxPhotoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { yPercent: -10 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true, // ← true ではなく数値
            invalidateOnRefresh: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style jsx>{`
        .parallax-container {
          position: relative;
          width: 100%;
          height: 56vw;
          min-height: 200px;
          max-height: 700px;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          inset: 0;
          height: 120%;
          top: -10%;
          background-size: cover;
          background-position: center;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .parallax-container {
            height: 75vw;
            min-height: 300px;
            max-height: 600px;
          }
        }
      `}</style>

      <div ref={containerRef} className="parallax-container">
        <div
          ref={imageRef}
          className="parallax-bg"
          style={{ backgroundImage: `url(${IMAGES.parallax.about2})` }}
        />
      </div>
    </>
  );
};

export default ParallaxPhotoSection;

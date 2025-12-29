// app/components/ParallaxSection2.tsx
'use client';

import { useEffect, useRef } from 'react';

const PARALLAX_SPEED = 0.15;
const VIDEO_SCALE = 1.2;

const ParallaxSection2 = () => {
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

      wrapper.style.transform = `translate(-50%, -50%) translate3d(0, ${offset}px, 0)`;
    };

    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

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
    <>
      <style jsx>{`
        .parallax-section {
          position: relative;
          width: 100%;
          // height: 56.25vw;
          height: 56vw;
          min-height: 200px;
          max-height: 700px;
          overflow: hidden;
          background-color: #000000;
          clip-path: inset(0%);
          border-top: 1px solid #003705;
          border-bottom: 1px solid #003705;
        }
        
        .parallax-video-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .parallax-video {
          position: absolute;
          top: 55%;
          left: 50%;
          width: 100%;
          height: 130%;
          object-fit: cover;
          transform: translate(-50%, -50%) scale(${VIDEO_SCALE});
          transform-origin: center center;
        }
        
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
            rgba(0, 0, 0, 0) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .parallax-section {
            height: 75vw;
            min-height: 300px;
            max-height: 590px;
          }
        }
      `}</style>

      <div ref={sectionRef} className="parallax-section">
        <div ref={wrapperRef} className="parallax-video-wrapper">
          <video
            ref={videoRef}
            className="parallax-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/images/mov/B_fork_webmovie0617_02_0630_1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="parallax-overlay" />
      </div>
    </>
  );
};

export default ParallaxSection2;
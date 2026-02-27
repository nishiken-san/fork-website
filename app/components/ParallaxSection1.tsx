// app/components/ParallaxSection1.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ParallaxSection.module.css';

const ParallaxSection1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const initialized = useRef(false);

  // GSAPパララックス
  useEffect(() => {
    if (initialized.current) return;
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const videoWrapper = videoWrapperRef.current;

    if (!section || !videoWrapper) return;

    initialized.current = true;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapper,
        { y: '-15%' },
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

  // 動画再生制御
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
    <div ref={sectionRef} className={styles.parallaxSection}>
      <div ref={videoWrapperRef} className={styles.parallaxVideoWrapper}>
        <video
          ref={videoRef}
          className={styles.parallaxVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/images/mov/A_fork_webmovie0617_01_0630_1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ParallaxSection1;
// app/components/Parallax2.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { IMAGES } from '@/constants/images';
import styles from '../../components/ParallaxSection2.module.css';

const Parallax2 = () => {
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
    <div ref={sectionRef} className={styles.parallaxSection}>
      <div ref={imageWrapperRef} className={styles.parallaxImageWrapper}>
        <img
          src={IMAGES.parallax.forktoyama1}
          alt="fork toyama"
          className={styles.parallaxImage}
        />
      </div>
    </div>
  );
};

export default Parallax2;
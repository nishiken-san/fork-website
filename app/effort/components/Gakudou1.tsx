'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/effort-section.css';

const Gakudou1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="gakudou" className="gakudou-bg relative">
      <div className="section-container">
        <div className="left-column">
          <div className="sticky-header">
            <div className="section-label">01.</div>
            <div className="section-subtitle">fork toyama</div>
            <h2 className="section-title">学童保育：fork toyama</h2>
          </div>
        </div>

        <div ref={contentRef} className="right-column">
          <div className="content-area">
            <p className="main-description">
              社会みんなで子育てに関わる「みん営」の仕組みを実践する学童保育施設。
            </p>
            
            <div className="fork-logo-section">
              <div className="logo-container">
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet="/images/effort/forktoyama-mobile.png"
                  />
                  <img 
                    src="/images/effort/forktoyama.png" 
                    alt="fork toyama" 
                    className="fork-text-image"
                  />
                </picture>
              </div>
            </div>
            
            <div className="button-section">
              <a 
                href="/forktoyama" 
                className="about-button"
              >
                fork toyamaについて
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gakudou1;
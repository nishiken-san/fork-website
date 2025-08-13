'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const ForktoyamaIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} className="forktoyama-section forktoyama-bg-green">
      <div className="forktoyama-two-column">
        <div ref={contentRef} className="forktoyama-two-column-left">
          <div className="forktoyama-content">
            <div className="forktoyama-subtitle">about fork toyama</div>
            
            <p className="forktoyama-description">
              fork toyamaではその名の通り大人も子どもも「選択肢」と出会える場であるために、以下の保育理念を掲げて日々の保育に取り組んでいます。
            </p>
            
            <div className="forktoyama-logo-container">
              <img 
                src="/images/forktoyama/forktoyama.png" 
                alt="fork toyama ロゴ" 
                className="forktoyama-image forktoyama-intro-logo"
              />
            </div>
          </div>
        </div>

        <div className="forktoyama-two-column-right">
          <div className="forktoyama-sticky">
            <div className="forktoyama-vertical-container">
              <div className="forktoyama-vertical-text">
                日本一小さな村発、
              </div>
              <div className="forktoyama-vertical-text">
                保育料ゼロの学童保育
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForktoyamaIntro;
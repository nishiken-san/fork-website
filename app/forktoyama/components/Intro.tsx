'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const ForktoyamaIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} className="forktoyama-intro-bg forktoyama-section">
      <div className="forktoyama-intro-container">
        <div ref={contentRef} className="forktoyama-intro-left">
          <div className="forktoyama-intro-content">
            <div className="forktoyama-intro-subtitle">about fork toyama</div>
            
            <p className="forktoyama-intro-description">
              fork toyamaではその名の通り大人も子どもも「選択肢」と出会える場であるために、以下の保育理念を掲げて日々の保育に取り組んでいます。
            </p>
            
            <div className="forktoyama-intro-logos">
              <img 
                src="/images/forktoyama/forktoyama.png" 
                alt="fork toyama ロゴ" 
                className="forktoyama-intro-combined-logo"
              />
            </div>
          </div>
        </div>

        <div className="forktoyama-intro-right">
          <div className="forktoyama-intro-sticky">
            <div className="forktoyama-intro-vertical">
              日本一小さな村発、
            </div>
            <div className="forktoyama-intro-vertical">
              保育料ゼロの学童保育
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForktoyamaIntro;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/effort-section.css';

const Gakudou4 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="gakudou4" className="gakudou4-bg relative">
      <div className="section-container">
        <div className="left-column">
          <div className="sticky-header">
            <div className="section-label">04.</div>
            <div className="section-subtitle">staff training</div>
            <h2 className="section-title">学童人事研修</h2>
          </div>
        </div>

        <div ref={contentRef} className="right-column">
          <div className="content-area">
            <p className="main-description">
              予測不能な子どもたちとともに過ごすこともまた「カオス」を楽しい工夫が力を発揮に導いてチーム、学習環境だからできる、あたらしい人材育成、チームビルディングのプログラムを提供しています。
            </p>
            
            <div className="image-section">
              <img 
                src="/images/effort/training.png" 
                alt="学童人事研修の様子" 
                className="training-image"
              />
            </div>
            
            <div className="button-section">
              <a 
                href="/info?tag=work-shop" 
                className="training-button"
              >
                事例をみる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gakudou4;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-section.css';

const Minnei3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minnei3-main" className="minnei3-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">supporter voice</div>
            <div className="section-title">サポーターの声</div>
          </div>
        </div>

        <div className="right-column">
          <div className="voices-container">
            <div className="voice-card">
              <div className="voice-header">
                <div className="voice-name">K.R</div>
                <div className="voice-occupation">職業職業 [地域]</div>
              </div>
              <div className="voice-divider"></div>
              <div className="voice-content">
                supporter音楽の理由の導入文をいいますsupporter音楽の理由の導入文をいいますsupporter音楽。。100文字程度)
              </div>
            </div>

            <div className="voice-card">
              <div className="voice-header">
                <div className="voice-name">K.R</div>
                <div className="voice-occupation">職業職業 [地域]</div>
              </div>
              <div className="voice-divider"></div>
              <div className="voice-content">
                supporter音楽の理由の導入文をいいますsupporter音楽の理由の導入文をいいますsupporter音楽。。100文字程度)
              </div>
            </div>

            <div className="voice-card">
              <div className="voice-header">
                <div className="voice-name">K.R</div>
                <div className="voice-occupation">職業職業 [地域]</div>
              </div>
              <div className="voice-divider"></div>
              <div className="voice-content">
                supporter音楽の理由の導入文をいいますsupporter音楽の理由の導入文をいいますsupporter音楽。。100文字程度)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minnei3;
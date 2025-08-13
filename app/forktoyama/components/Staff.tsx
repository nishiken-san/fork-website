'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Staff = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const principles = [
    "ありがとうや日々のあいさつを言う、言われる",
    "人の話を聞く、自分の気持ちを伝える", 
    "道具や食べ物を大切に扱う"
  ];

  return (
    <section ref={sectionRef} className="forktoyama-section forktoyama-bg-light">
      <div className="forktoyama-description-layout">
        <div ref={contentRef} className="forktoyama-two-column-left">
          <div className="forktoyama-content">
            
            <div className="forktoyama-section-spacing">
              <p className="forktoyama-text">
              富山県内外から集ったメンバーが子ども達と日々、原石を磨きあっています。
              </p>
              
            </div>
            
          </div>
        </div>

        <div className="forktoyama-two-column-right">
          <div className="forktoyama-sticky">
            <img 
              src="/images/forktoyama/stone.png" 
              alt="fork toyama の様子" 
              className="forktoyama-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
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
    <>
      <style jsx>{`
        .forktoyama-description-layout .forktoyama-two-column-left {
          width: 33.333333% !important;
        }
        .forktoyama-description-layout .forktoyama-two-column-right {
          width: 66.666667% !important;
        }
      `}</style>

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
              src="/images/forktoyama/stoe.png" 
              alt="スタッフの集合写真" 
              className="forktoyama-image"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Staff;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Facility = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="facility-main" className="facility-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="what-we-do">facility</div>
            <div className="description">
              forkは学童保育施設を中心に、カフェ、コワーキングスペースなど、さまざまな人が関わり合い、選択肢と出会える場所です。
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="sticky-header">
            <h1 className="vertical-title">
              子どもをきっかけに<br />
              人が集まる場
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
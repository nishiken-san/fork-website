// app/about/components/AboutMainSection.tsx
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const AboutMainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="about-main" className="about-main-bg relative">
      <div className="about-section-container">
        {/* Left Column - Content (3/4) */}
        <div className="about-left-column">
          <div className="about-content-wrapper">
            <div className="about-content-block">
              <div className="about-section-category">about us</div>
              <div className="about-description">
                forkとは「選択肢」のこと。<br />
                社会全体で子育てする仕組みづくりを通して、大人も子どもも自分らしい生き方を選べる世の中をつくります。
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Title (1/4) */}
        <div ref={contentRef} className="about-right-column">
          <div className="about-sticky-area">
            <h2 className="about-vertical-title">わたしたちについて</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMainSection;
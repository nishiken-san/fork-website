'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';

const SupporterMainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} className="supporter-section supporter-bg-green">
      <div className="supporter-two-column">
        {/* 左側: コンテンツエリア（66.666667%） */}
        <div ref={contentRef} className="supporter-two-column-left">
          <div className="supporter-content">
            <div className="supporter-subtitle">"MINEI" friends</div>
            <p className="supporter-description">
              1日1,000円からのサポーター制度で、一緒に「みん営」を実現する仲間になりませんか？みなさまとともに。子どもたちの選択肢が開かれるように。
            </p>
          </div>
        </div>

        {/* 右側: タイトル固定（33.333333%） */}
        <div className="supporter-two-column-right">
          <div className="supporter-sticky">
            <h2 className="supporter-vertical-text">みん営フレンズ</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupporterMainSection;
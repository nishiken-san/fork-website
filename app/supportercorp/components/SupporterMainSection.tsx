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
            <div className="supporter-subtitle">"MINEI" partner</div>
            <p className="supporter-description">
              「みん営」の実現において、経済面でも、教育面でも法人サポーターの存在は欠かせません。仕組みを支え、背中を見せる。社会課題を解決する選択肢としての「みん営」に、ぜひご参画ください！
            </p>
          </div>
        </div>

        {/* 右側: タイトル固定（33.333333%） */}
        <div className="supporter-two-column-right">
          <div className="supporter-sticky">
            <h2 className="supporter-vertical-text">みん営パートナー</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupporterMainSection;
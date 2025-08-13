'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-section.css';

const Minnei2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minnei2-main" className="minnei2-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">supporter benefits</div>
            <div className="section-title">みん営フレンズになったら</div>
          </div>
        </div>

        <div className="right-column">
          <div className="benefits-container">
            <ul className="benefits-list">
              <li className="benefit-item">毎月の活動報告レター配信</li>
              <li className="benefit-item">noki fork cafeでの1ドリンク無料クーポン（毎月）</li>
              <li className="benefit-item">「みん営」ミーティング（年1回開催）へのご招待</li>
              <li className="benefit-item">そのほかfork関連イベントへの先行ご案内</li>
              <li className="benefit-item">コワーキングスペースのご利用権</li>
            </ul>
            <div className="benefits-note">など</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minnei2;
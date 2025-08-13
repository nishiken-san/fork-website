'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-section.css';

const Minnei4 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minnei4-main" className="minnei4-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">price</div>
            <div className="section-title">料金表</div>
          </div>
        </div>

        <div className="right-column">
          <div className="price-container">
            <div className="plan-name">みん営フレンズ</div>
            
            <div className="price-info">
              <span className="price-label">月額</span>
              <span className="price-amount">¥1,000 〜</span>
            </div>
            
            <a href="#" className="apply-button">
              申し込みはこちら
            </a>
            
            <div className="price-options">
              ¥1,000 / ¥2000 / ¥3000 / ¥5000 / ¥10000 / ¥30000 / ¥50000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minnei4;
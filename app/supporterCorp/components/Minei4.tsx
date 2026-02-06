'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';

const Minei4 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const priceOptions = [
    '¥1,000',
    '¥2,000',
    '¥3,000',
    '¥5,000',
    '¥10,000',
    '¥30,000',
    '¥50,000'
  ];

  return (
    <section ref={sectionRef} id="minei4" className="minei4-section relative">
      <div className="minei4-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei4-left">
          <div className="minei4-sticky">
            <div className="minei4-subtitle">price</div>
            <h2 className="minei4-title">料金表</h2>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei4-right">
          <div className="minei4-content">
            <div className="minei4-card">
              <div className="minei4-card-title">みん営パートナー</div>
              
              <div className="minei4-price">
                <span className="minei4-price-label">月額</span>
                <span className="minei4-price-amount">¥10,000 〜</span>
              </div>
              
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQisLpyoUlh3Bsgt4quyVe3GtiSExoa-WOJyoyv2cRBoeYNA/viewform" className="minei4-button" target="_blank" rel="noopener noreferrer">
                お問い合わせはこちら
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei4;
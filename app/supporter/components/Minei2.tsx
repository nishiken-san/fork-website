'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';

const Minei2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const benefits = [
    '毎月の活動報告レター配信',
    'noki fork cafeでご利用いただけるクーポンご提供',
    '「みん営総会」のご案内',
    'そのほかfork開催イベント、プロジェクトのご案内',
    '視察、見学のご案内'
  ];

  return (
    <section ref={sectionRef} id="minei2" className="minei2-section relative">
      <div className="minei2-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei2-left">
          <div className="minei2-sticky">
            <div className="minei2-subtitle">supporter benefits</div>
            <h2 className="minei2-title">みん営フレンズになったら</h2>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei2-right">
          <div className="minei2-content">
            <div className="minei2-card">
              
              <ul className="minei2-benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="minei2-benefits-item">
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="minei2-card-title">など<br /><br />

                ※内容は変更、中止、追加となる場合があります。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei2;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';
import { IMAGES } from '@/constants/images';

const Minei1 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minei1" className="minei1-section relative">
      <div className="minei1-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei1-left">
          <div className="minei1-sticky">
            <div className="minei1-subtitle">about supporter</div>
            <h2 className="minei1-title">法人・団体でサポート</h2>
            <div className="minei1-title">"みん営パートナー"</div>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei1-right">
          <div className="minei1-content">
            <p className="minei1-description">
            法人サポーターの方々には、継続寄付のほかに子どもたち向けのコラボレーション企画も提供しています。貴社の商品やサービス等を通じて子どもたちの人生に選択肢を増やすことができるような、さらには大人までもが触発されるような機会をともにつくりませんか？
            </p>

            <div className="minei1-button-container">
              <a href="/supporter/apply" className="minei1-button">
                申し込みはこちら
              </a>
            </div>
            
            <div className="minei1-link-container">
              <a href="/supporter" className="view-corp-link">
                <span className="menu-bottom-link-text">個人の方はこちら</span>
              </a>
              <img 
                src={IMAGES.logo.vec}
                alt="arrow"
                className="arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei1;
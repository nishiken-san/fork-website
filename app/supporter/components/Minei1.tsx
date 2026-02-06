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
            <h2 className="minei1-title">個人でサポート</h2>
            <div className="minei1-title">"みん営フレンズ"</div>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei1-right">
          <div className="minei1-content">
            <p className="minei1-description">
            forkが掲げる「みん営」は、理念・取り組みに共感いただいたサポーターの方々の寄付によって成り立っています。ひとりひとりにとってお金の価値が異なるように、寄付金の額はお客様自身にきめていただく方法をとっています。
            </p>

            <div className="minei1-button-container">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQisLpyoUlh3Bsgt4quyVe3GtiSExoa-WOJyoyv2cRBoeYNA/viewform" className="minei1-button" target="_blank" rel="noopener noreferrer">
                申し込みはこちら
              </a>
            </div>
            
            <div className="minei1-link-container">
              <a href="/supportercorp" className="view-corp-link">
                <span className="menu-bottom-link-text">法人の方はこちら</span>
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
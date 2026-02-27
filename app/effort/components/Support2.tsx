'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/effort-section.css';

const Gakudou2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="gakudou2" className="gakudou2-bg relative">
      <div className="section-container">
        <div className="left-column">
          <div className="sticky-header">
            <div className="section-label">02.</div>
            <div className="section-subtitle">operational support</div>
            <h2 className="section-title">学童運営のサポート</h2>
          </div>
        </div>

        <div ref={contentRef} className="right-column">
          <div className="content-area">
            <p className="main-description">
              開所以来のべ60件以上の視察・見学を受け入れてきたfork toyama。全国各地で子育ての課題解決に取り組む個人・団体・企業・自治体の方々に対して、「みん営」の仕組み導入や運営ノウハウの共有などさまざまなサポートにも取り組んでいます。
            </p>
            
            <div className="support-list">
              <div className="support-item">
                <div className="support-checkbox"></div>
                <span>基本支援（人作りの支援／制度の基本）</span>
              </div>
              <div className="support-item">
                <div className="support-checkbox"></div>
                <span>ノウハウ支援（仕組みの支援）</span>
              </div>
            </div>
            
            <div className="map-section">
              <div className="map-container">
                <img 
                  src="/images/effort/gakudo-map.png" 
                  alt="日本地図" 
                  className="japan-map-image"
                />
              </div>
            </div>
            
            <div className="button-section">
              <a 
                href="/info?tag=news"
                className="support-button"
              >
                事例をみる
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQisLpyoUlh3Bsgt4quyVe3GtiSExoa-WOJyoyv2cRBoeYNA/viewform"
                className="support-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                見学のご相談はこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gakudou2;
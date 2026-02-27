'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/effort-section.css';

const Gakudou3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="gakudou3" className="gakudou3-bg relative">
      <div className="section-container">
        <div className="left-column">
          <div className="sticky-header">
            <div className="section-label">03.</div>
            <div className="section-subtitle">curriculum & content development</div>
            <h2 className="section-title">カリキュラム・コンテンツ開発</h2>
          </div>
        </div>

        <div ref={contentRef} className="right-column">
          <div className="content-area">
            <p className="main-description">
              企業、自治体のSDGsやCSR、CSV活動のパートナーとして、食育イベントやものづくりのプログラムなど、学校でも家庭でもない強みを活かしたさまざまなコラボレーション企画を設計・開発しています。
            </p>
            
            <div className="image-section">
              <img 
                src="/images/effort/contents.png" 
                alt="カリキュラム・コンテンツ開発の様子" 
                className="contents-image"
              />
            </div>
            
            <div className="button-section">
              <a 
                href="/info?tag=work-shop" 
                className="curriculum-button"
              >
                事例をみる
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gakudou3;
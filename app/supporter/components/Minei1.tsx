'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-section.css';

const Minnei = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="minnei-main" className="minnei-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">about supporter</div>
            <div className="section-title">個人でサポート<br />"みん営フレンズ"</div>
          </div>
        </div>

        <div className="right-column">
          <div className="content-wrapper">
            <div className="description">
            forkが掲げる「みん営」は、理念・取り組みに共感いただいたサポーターの方々の寄付によって成り立っています。ひとりひとりにとってお金の価値が異なるように、寄付金の額はお客様自身にきめていただく方法をとっています。
            </div>
            
            <button className="support-button">
              申し込みはこちら
            </button>
            
            <div className="corporate-link">
              <a href="#" className="link-text">法人の方はこちら ＝＞</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minnei;
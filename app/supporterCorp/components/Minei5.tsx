'use client';

import { useRef, useEffect, useState } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';

const Minei5 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);
  const [supporters, setSupporters] = useState<string[]>([]);

  useEffect(() => {
    // JSONファイルからサポーターリストを読み込む
    fetch('/data/supporters.json')
      .then(response => response.json())
      .then(data => {
        setSupporters(data.frenz || []);
      })
      .catch(error => {
        console.error('Error loading supporters:', error);
      });
  }, []);

  return (
    <section ref={sectionRef} id="minei5" className="minei5-section relative">
      <div className="minei5-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei5-left">
          <div className="minei5-sticky">
            <div className="minei5-subtitle">supporters</div>
            <h2 className="minei5-title">みん営フレンズのみなさま</h2>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei5-right">
          <div className="minei5-content">
            <div className="minei5-supporters-text">
              {supporters.join(' / ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei5;
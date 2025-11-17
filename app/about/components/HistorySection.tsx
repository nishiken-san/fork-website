// app/about/components/HistorySection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { IMAGES } from '@/constants/images';

const HistorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const historyData = [
    { year: '2021年', month: '11月', content: '村営で運営されてきた舟橋村の学童保育施設の運営体制が突如変更されることを受け、学童保育新設を構想。' },
    { year: '2022年', month: '7月', content: '舟橋小学校から徒歩2分の古民家を活用しプレオープン。（登録児童数14名）' },
    { year: '', month: '10月', content: 'クラウドファンディングで目標700万円を達成、867万円を集める。' },
    { year: '2023年', month: '1月', content: '舟橋会館に一時的に場所を移して運営。' },
    { year: '', month: '4月', content: 'カフェオープン' },
    { year: '', month: '5月', content: '学童保育施設完成、正式オープン（登録児童40名）' },
    { year: '2024年', month: '4月', content: '一般社団法人forkによる運営開始（登録児童54名）' }
  ];

  // モバイル表示
  if (isMobile) {
    return (
      <section ref={sectionRef} id="history" className="history-main-bg">
        <div className="history-mobile-container">
          {/* ヘッダー */}
          <div className="history-mobile-header">
            <div className="history-label">fork history</div>
            <h2 className="history-title">forkのあゆみ</h2>
          </div>

          {/* コンテンツ */}
          <div className="history-mobile-content">
            {/* 年表テーブル */}
            <table className="history-table">
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index} className="history-row">
                    <td className="history-year-cell">{item.year}</td>
                    <td className="history-month-cell">{item.month}</td>
                    <td className="history-content-cell">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* note セクション */}
            <div className="history-note-section">
              <div className="history-note-label">note</div>
              <p className="history-note-text">
                保育村ゼロ"みんな"学童の2年間とこれから。
              </p>
              <div className="history-note-button-container">
                <a 
                  href="https://note.com/forktoyama/n/n9c44750f387b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="history-note-link"
                >
                  noteをみる
                  <img 
                    src={IMAGES.logo.vec}
                    alt="arrow"
                    className="history-arrow-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // PC表示
  return (
    <section ref={sectionRef} id="history" className="history-main-bg">
      <div className="history-section-container">
        {/* 左側: Stickyタイトル */}
        <div className="history-left-column">
          <div className="history-sticky-header">
            <div className="history-label">fork history</div>
            <h2 className="history-title">forkのあゆみ</h2>
          </div>
        </div>

        {/* 右側: コンテンツ */}
        <div ref={contentRef} className="history-right-column">
          <div className="history-content-area">
            {/* 年表テーブル */}
            <table className="history-table">
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index} className="history-row">
                    <td className="history-year-cell">{item.year}</td>
                    <td className="history-month-cell">{item.month}</td>
                    <td className="history-content-cell">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* note セクション */}
            <div className="history-note-section">
              <div className="history-note-label">note</div>
              <p className="history-note-text">
                保育村ゼロ"みんな"学童の2年間とこれから。
              </p>
              <div className="history-note-button-container">
                <a 
                  href="https://note.com/forktoyama/n/n9c44750f387b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="history-note-link"
                >
                  noteをみる
                  <img 
                    src={IMAGES.logo.vec}
                    alt="arrow"
                    className="history-arrow-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
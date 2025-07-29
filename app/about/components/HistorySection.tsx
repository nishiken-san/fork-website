'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const HistorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const historyData = [
    { year: '2021年', month: '11月', content: '村娯で運営されてきた放課後の学童保育施設の運営体制が刷新されることを受け、学童保育新設を構想。' },
    { year: '2022年', month: '7月', content: '冷暖小学校から継続少数の古民家を活用してプレオープン。（登録児童14名）' },
    { year: '', month: '10月', content: 'クラウドファンディングで目標700万円を達成。867万円を集める。' },
    { year: '2023年', month: '1月', content: '定員会館に一時的に場所を移して運営。' },
    { year: '', month: '4月', content: 'カフェオープン' },
    { year: '', month: '5月', content: '学童保育施設完成、正式オープン（登録児童240名）' },
    { year: '2024年', month: '4月', content: '一般社団法人forkによる運営開始（登録児童564名）' }
  ];

  return (
    <>
      <style jsx>{`
        .history-bg {
          background-color: #F5F5F5;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 33.333333%;
          background-color: #F5F5F5;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #F5F5F5;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #F5F5F5;
          z-index: 20;
        }
        .section-label {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .section-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .history-table {
          width: 100%;
          border-collapse: collapse;
        }
        .history-row {
          border-top: 2px solid #003705;
        }
        .year-cell {
          color: #003705;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 1rem 1.5rem;
          vertical-align: top;
          width: 80px;
          white-space: nowrap;
        }
        .month-cell {
          color: #003705;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 1rem 1rem;
          vertical-align: top;
          width: 80px;
          text-align: center;
        }
        .content-cell {
          color: #003705;
          font-size: 0.875rem;
          line-height: 1.6;
          padding: 1rem 1.5rem;
          vertical-align: top;
        }
        .note-section {
          background-color: #F9F9F9;
          border: 2px solid #003705;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 2rem;
        }
        .note-label {
          color: #B4B4B4;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .note-text {
          color: #003705;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .note-button {
          background-color: white;
          border: 1px solid #ddd;
          color: #003705;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-left: auto;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .note-button:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="history" className="history-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">fork history</div>
              <h2 className="section-title">forkのあゆみ</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="py-16 px-8 lg:px-16">
              
              {/* 年表テーブル */}
              <table className="history-table">
                <tbody>
                  {historyData.map((item, index) => (
                    <tr key={index} className="history-row">
                      <td className="year-cell">{item.year}</td>
                      <td className="month-cell">{item.month}</td>
                      <td className="content-cell">{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* note セクション */}
              <div className="note-section">
                <div className="note-label">note</div>
                <p className="note-text">
                  保育村ゼロ"みんな"学童の2年間とこれから。
                </p>
                <button 
                  className="note-button"
                  onClick={() => window.open('https://note.com/your-note-link', '_blank')}
                >
                  noteを見る →
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistorySection;
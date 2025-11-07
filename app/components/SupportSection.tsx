
'use client';

import { useRef } from 'react';
import supportersData from '@/public/data/supporters.json';

const SupporterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style jsx>{`
        .supporter-bg {
          background-color: #003705;
          min-height: 100vh;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 66.666667%;
          background-color: #003705;
          padding: 4rem 4rem 4rem 2rem;
        }
        .right-column {
          width: 33.333333%;
          background-color: #003705;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #003705;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .section-title {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
        }
        .section-label {
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }
        .description {
          color: #FFFFFF;
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 3rem;
          font-weight: 400;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .support-button {
          background-color: #E7EBE7;
          color: #003705;
          padding: 1.5rem 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: center;
          border: 2px solid #FFFFFF;
          box-shadow: 3px 3px 0px #FFFFFF;
        }
        .support-button:hover {
          background-color: #93A794;
        }
        .supporters-list {
          margin-bottom: 3rem;
        }
        .list-title {
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .supporter-names {
          color: #FFFFFF;
          font-size: 0.875rem;
          line-height: 2;
          font-weight: 400;
        }
        .note {
          color: #FFFFFF;
          font-size: 0.75rem;
          opacity: 0.7;
          margin-top: 3rem;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          .left-column,
          .right-column {
            width: 100%;
          }
          .left-column {
            padding: 2rem 1.5rem;
          }
          .sticky-header {
            position: static;
            padding: 2rem 1.5rem;
            align-items: flex-start;
          }
          .section-title {
            writing-mode: horizontal-tb;
            font-size: 1.75rem;
            letter-spacing: 0.1em;
          }
        }
        
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="supporter" className="supporter-bg">
        <div className="section-container">
          {/* 左側: コンテンツエリア（2/3幅） */}
          <div className="left-column">
            <div className="section-label">supporter</div>
            
            <p className="description">
              子育てをみんなのものにする仲間を募集しています。
            </p>

            {/* 募集ボタン */}
            <div className="button-group">
              <a href="/supporter/frenz" className="support-button">
                みん営フレンズ〈個人サポーター〉はこちら
              </a>
              <a href="/supporter/partner" className="support-button">
                みん営パートナー〈法人サポーター〉はこちら
              </a>
            </div>

            {/* みん営フレンズ */}
            <div className="supporters-list">
              <h3 className="list-title">みん営フレンズのみなさま</h3>
              <div className="supporter-names">
                {supportersData.frenz.map((name, index) => (
                  <span key={index}>
                    {name}
                    {index < supportersData.frenz.length - 1 && ' / '}
                  </span>
                ))}
              </div>
            </div>

            {/* みん営パートナー */}
            <div className="supporters-list">
              <h3 className="list-title">みん営パートナーのみなさま</h3>
              <div className="supporter-names">
                {supportersData.partners.map((name, index) => (
                  <span key={index}>
                    {name}
                    {index < supportersData.partners.length - 1 && ' / '}
                  </span>
                ))}
              </div>
            </div>

            <p className="note">
              *2022年の支援者を含む的な内容がはいる
            </p>
          </div>

          {/* 右側: 固定タイトル（1/3幅） */}
          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">サポート募集</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupporterSection;
// app/components/AboutSection.tsx
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .about-fork-bg {
          background-color: #E7E7E7;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 33.333333%;
          background-color: #E7E7E7;
          position: relative;
          margin-top: 40px;

        }
        .right-column {
          width: 66.666667%;
          background-color: #E7E7E7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #E7E7E7;
          z-index: 20;
        }
        .section-label {
          color: #999;
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .section-title {
          color: #003705;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          white-space: nowrap;
        }
        .content-area {
          padding: 4rem 4rem 4rem 2rem;
        }
        .main-description {
          color: #003705;
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 2rem;
          font-weight: 700;
        }
        .button-container {
          width: 100%;
          max-width: 853px;
        }
        .detail-button {
          background-color: #E7E7E7;
          color: #003705;
          height: 53px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border: 1px solid #003705;
          box-shadow: 3px 3px 0px #003705;
        }
        .detail-button:hover {
          background-color: #93A794;
        }
        
        /* タブレット対応 */
        @media (max-width: 1024px) {
          .content-area {
            padding: 4rem 3rem 4rem 2rem;
          }
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          
          .left-column {
            width: 100%;
            order: 1;
          }
          
          .right-column {
            width: 100%;
            order: 2;
          }
          
          .sticky-header {
            position: static;
            padding: 2rem 1.5rem;
            top: auto;
          }
          
          .section-title {
            white-space: normal;
            font-size: 1.75rem;
          }
          
          .content-area {
            padding: 2rem 1.5rem;
          }
          
          .button-container {
            max-width: 100%;
          }
        }
        
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.5rem;
          }
          .main-description {
            font-size: 1.125rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="about-fork-toyama" className="about-fork-bg relative">
        <div className="section-container">
          {/* 左側: 固定ヘッダー（モバイルでは上部） */}
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">about fork toyama</div>
              <h2 className="section-title">学童保育：fork toyama</h2>
            </div>
          </div>

          {/* 右側: スクロールコンテンツ（モバイルでは下部） */}
          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                社会みんなで子育て関わる「みん営」の仕組みで成り立つ学童保育施設。ささざまな人・もの・コトとの出会いを提供することで、子どもたちに人生の選択肢が広がる機会をつくることに挑戦しています。
              </p>

              <div className="button-container">
                <a href="/forktoyama" className="detail-button">
                  fork toyamaについて
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
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
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
          justify-content: space-between;
        }
        .left-column {
          flex: 0 0 auto;
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          flex: 0 0 auto;
          width: min(66.666%, 900px);
          max-width: 900px;
          background-color: #E7EBE7;
        }
        .sticky-header {
          position: sticky;
          top: 45px;
          padding: 45px 0px 55px 50px;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #999;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .section-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
        }
        .content-area {
          padding: 90px 50px 55px 0;
        }
        .main-description {
          color: #003705;
          font-size: 15px;
          margin-bottom: 50px;
          font-weight: 700;
          line-height: 2;
        }
        .button-container {
          width: 100%;
        }
        .detail-button {
          background-color: #E7EBE7;
          color: #003705;
          height: 53px;
          font-size: 0.875rem;
          font-weight: 700;
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
        
        
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          
          .left-column {
            width: 25%;
            order: 1;
          }
          
          .right-column {
            width: 75%;
            order: 2;
          }

          .sticky-header {
            position: static;
            padding: 100px 30px 20px 30px;
            top: auto;
          }
          
          .section-title {
            white-space: normal;
            font-size: 25px;
          }

          .section-label {
            color: #999;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 12px;
          }
          
          .content-area {
            padding: 0px 30px 50px 30px;
          }
          
          .button-container {
            max-width: 100%;
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
                社会みんなで子育て関わる「みん営」の仕組みで成り立つ学童保育施設。さまざまな人・もの・コトとの出会いを提供することで、子どもたちに人生の選択肢が広がる機会をつくることに挑戦しています。
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
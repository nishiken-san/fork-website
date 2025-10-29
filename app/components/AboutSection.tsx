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
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .section-title {
          color: #003705;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          white-space: nowrap;
        }
        .content-area {
          padding: 4rem 8rem 4rem 2rem;
        }
        .main-description {
          color: #003705;
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .button-container {
          width: 100%;
        }
        .detail-button {
          background-color: #E7E7E7;
          color: #003705;
          padding: 1.5rem 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: center;
          border: 2px solid #003705;
          box-shadow: 3px 3px 0px #003705;
        }
        .detail-button:hover {
          background-color: #003705;
          color: #FFFFFF;
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
          {/* 左側: 固定ヘッダー */}
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">about fork toyama</div>
              <h2 className="section-title">学童保育：fork toyama</h2>
            </div>
          </div>

          {/* 右側: スクロールコンテンツ */}
          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                社会みんなで子育て関わる「みん盆」の仕組みで成り立つ学童保育施設。ささざまな人・もの・コトとの出会いを提供することで、子どもたちに人生の選択肢が広がる機会をつくることに挑戦しています。
              </p>

              <div className="button-container">
                <a href="/fork-toyama" className="detail-button">
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
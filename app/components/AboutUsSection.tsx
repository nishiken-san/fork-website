// app/components/AboutUsSection.tsx
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .about-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 33.333333%;
          background-color: #003705;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #003705;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 6rem 3rem 2rem 3rem;
          background-color: #003705;
          z-index: 20;
        }
        .section-title {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
        }
        .content-area {
          padding: 4rem 4rem 4rem 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .section-label {
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
          opacity: 0.8;
        }
        .main-text {
          color: #FFFFFF;
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        .illustration-container {
          margin: 4rem 0;
          display: flex;
          justify-content: center;
        }
        .illustration {
          width: 100%;
          max-width: 600px;
          height: auto;
        }
        .button-container {
          width: 100%;
          margin-top: 3rem;
        }
        .more-button {
          background-color: #FFFFFF;
          color: #003705;
          padding: 1rem 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: center;
          border: none;
        }
        .more-button:hover {
          opacity: 0.8;
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
          .main-text {
            font-size: 1.125rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="about" className="about-bg relative">
        <div className="section-container">
          {/* 左側: 固定ヘッダー */}
          <div className="left-column">
            <div className="sticky-header">
              <h2 className="section-title">わたしたちについて</h2>
            </div>
          </div>

          {/* 右側: スクロールコンテンツ */}
          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <div className="section-label">about us</div>
              
              <p className="main-text">
                forkとは「選択肢」のこと。<br/>
                社会全体で子育てする仕組みづくりを通して、大人も子どもも自分らしい生き方を選べる世の中をつくります。
              </p>

              <div className="illustration-container">
                <img 
                  src="/images/about/silhouette.png" 
                  alt="様々な人々のイラスト" 
                  className="illustration"
                />
              </div>

              <div className="button-container">
                <a href="/about" className="more-button">
                  もっとくわしく
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
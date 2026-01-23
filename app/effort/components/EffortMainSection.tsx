'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const EffortMainSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .effort-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 70%;
          background-color: #003705;
        }
        .right-column {
          width: 30%;
          background-color: #003705;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 50px;
          background-color: #003705;
          z-index: 20;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .vertical-title {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          color: white;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.1em;
          top: 50px;
        }
        .content-area {
          padding: 140px 50px 90px 50px;
          color: white;
        }
        .what-we-do {
          font-size: 15px;
          margin-bottom: 2rem;
          font-weight: 700;
          color: #B4B4B4;
        }
        .description {
          font-size: 15px;
          line-height: 2;
          margin-bottom: 3rem;
        }
        .effort-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .effort-item {
          font-size: 15px;
          line-height: 2;
          padding-left: 2rem;
          position: relative;
        }
        .effort-item::before {
          content: attr(data-number);
          position: absolute;
          left: 0;
          top: 0;
          font-weight: 700;
        }
        @media (min-width: 1024px) {
          .vertical-title {
            font-size: 25px;
          }
        }
        @media (max-width: 768px) {
          .sticky-header {
            padding: 2rem 30px;
          }
          .content-area {
            padding: 140px 30px 60px 30px;
          }
          .vertical-title {
            font-size: 25px;
          }
          .left-column {
            width: 75% !important;
            background-color: #003705;
          }
          .right-column {
            width: 25% !important;
            background-color: #003705;
            position: relative;
          }
        }
        }
      `}</style>

      <section ref={sectionRef} id="effort-main" className="effort-bg relative">
        <div className="section-container">
          {/* 左側: コンテンツエリア（70%） */}
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="what-we-do">what we do</div>
              <div className="description">
                forkではミッションとして掲げる、子育ての「みん営」化実現のために、学童保育施設の運営をはじめとしたさまざまな事業に取り組んでいます。
              </div>
              <ul className="effort-list">
                <li className="effort-item" data-number="01.">学童保育：fork toyama</li>
                <li className="effort-item" data-number="02.">カリキュラム・コンテンツ開発</li>
                <li className="effort-item" data-number="03.">学童運営のサポート</li>
                <li className="effort-item" data-number="04.">学童人事研修</li>
              </ul>
            </div>
          </div>

          {/* 右側: タイトル固定（30%） */}
          <div className="right-column">
            <div className="sticky-header">
              <h1 className="vertical-title">とりくみ</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EffortMainSection;
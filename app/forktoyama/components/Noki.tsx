'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Noki = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const effortItems = [
    "学童保育・fork toyama",
    "カリキュラム・コンテンツ開発",
    "子育て世帯のサポート",
    "学童従事研修"
  ];

  return (
    <>
      <style jsx>{`
        .effort-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 66.666667%;
          background-color: #003705;
          position: relative;
        }
        .right-column {
          width: 33.333333%;
          background-color: #003705;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #003705;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 100vh;
        }
        .vertical-title {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.1em;
        }
        .content-area {
          padding: 4rem 2rem;
          color: white;
          min-height: 150vh;
        }
        .what-we-do {
          font-size: 0.875rem;
          margin-bottom: 2rem;
          font-weight: 400;
          color: #B4B4B4;
        }
        .description {
          font-size: 0.875rem;
          line-height: 1.8;
          margin-bottom: 3rem;
        }
        .effort-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .effort-item {
          font-size: 0.875rem;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }
        .effort-item::before {
          content: attr(data-number);
          position: absolute;
          left: 0;
          top: 0;
          font-weight: 600;
        }
        @media (min-width: 1024px) {
          .content-area {
            padding: 4rem 4rem;
          }
          .vertical-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="effort-main" className="effort-bg relative">
        <div className="section-container">
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="what-we-do">what we do</div>
              <div className="description">
                forkではミッションとして掲げる、子育ての「みん営」化実現のために、学童保育施設の運営をはじめとしたさまざまな事業に取り組んでいます。
              </div>
              <ul className="effort-list">
                <li className="effort-item" data-number="01.">学童保育・fork toyama</li>
                <li className="effort-item" data-number="02.">カリキュラム・コンテンツ開発</li>
                <li className="effort-item" data-number="03.">学童運営のサポート</li>
                <li className="effort-item" data-number="04.">学童人事研修</li>
              </ul>
            </div>
          </div>

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

export default Noki;
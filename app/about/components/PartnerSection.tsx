
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const singleItems = [
  {
    number: "クリエイティブ",
    title: "株式会社KAAKA"
  },
  {
    number: "設計",
    title: "STUDIOSHUWARI"
  },
  {
    number: "建築・施工",
    title: "WARMTH坂口工務店"
  },
  {
    number: "フードクリエイター",
    title: "tetoteto, inc."
  },
  {
    number: "学童保育運営（2022～2023）",
    title: "特定営利法人ハレア"
  }
];

const PartnerSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .single-bg {
          background-color: #f8f8f8;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 33.333333%;
          background-color: #f8f8f8;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #f8f8f8;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #f8f8f8;
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
        .single-item {
          margin-bottom: 3rem;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 2rem;
        }
        .single-item:last-child {
          border-bottom: none;
        }
        .item-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .item-number {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .item-date {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
        }
        .item-title {
          color: #003705;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .item-description {
          color: #003705;
          font-size: 0.875rem;
          line-height: 1.6;
        }
      `}</style>

      <section ref={sectionRef} id="single" className="single-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">partner</div>
              <h2 className="section-title">設立パートナー</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="py-16 px-8 lg:px-16">
              {singleItems.map((item, index) => (
                <div key={index} className="single-item">
                  <div className="item-header">
                    <span className="item-number">{item.number}</span>
                  </div>
                  <div className="item-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerSection;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Facility = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .facility-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
          align-items: stretch;
        }
        .left-column {
          width: 70%;
          background-color: #003705;
          display: flex;
          align-items: center;
        }
        .right-column {
          width: 30%;
          background-color: #003705;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          top: 90px;
          padding: 90px 45px;
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
        }
        .content-area {
          padding: 160px 0px 190px 50px;
          color: white;
          width: 100%;
        }
        .what-we-do {
          font-size: 15px;
          margin-bottom: 20px;
          font-weight: 700;
          color: #B4B4B4;
        }
        .description {
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }
        @media (min-width: 1024px) {
          .vertical-title {
            font-size: 25px;
          }
        }

        @media (max-width: 768px) {
        .section-container {
          display: flex;
        }

        .left-column {
          width: 66.666% !important;
          padding-left: 30px;
          padding-right: 0;
        }

        .right-column {
          width: 33.333% !important;
          padding-right: 30px;
        }

        .content-area {
          padding: 140px 0px 100px 0;
        }

        .sticky-header {
          padding: 50px 0 100px 0;
        }

        .description-container {
          flex-direction: column;
        }

        .what-we-do {
          margin-bottom: 30px;
        }
        
      }
      `}</style>

      <section ref={sectionRef} id="facility-main" className="facility-bg relative">
        <div className="section-container">
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="what-we-do">facility</div>
              <div className="description">
                forkは学童保育施設を中心に、カフェ、コワーキングスペースなど、さまざまな人が関わり合い、選択肢と出会える場所です。
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="sticky-header">
              <h1 className="vertical-title">
                子どもをきっかけに<br />
                人が集まる場
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facility;
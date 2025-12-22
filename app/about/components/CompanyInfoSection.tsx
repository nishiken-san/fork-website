'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const CompanyInformation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .company-bg {
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #E7EBE7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 50px 0 100px 0;
          margin: 0;
          margin-left: 50px;
          background-color: #E7EBE7;
          z-index: 20;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .company-label {
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 1.5rem 0;
          padding: 0;
        }
        .horizontal-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
          padding: 0;
        }
        .content-area {
          padding: 50px 50px 100px 50px;
        }
        .company-entry {
          margin-bottom: 10px;
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 2;
        }
        .company-name {
          font-size: 13px;
        }
        
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          
          .left-column {
            width: 100%;
          }
          
          .right-column {
            width: 100%;
          }
          
          .sticky-header {
            position: relative;
            padding: 50px 0 0 0;
            margin: 0 0 0 30px;
          }
          
          .company-label {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .horizontal-title {
            font-size: 25px;
          }
          
          .content-area {
            margin: 100px 0 0 0;
            padding: 40px 30px 60px 30px;
          }
          
          .company-name {
            font-size: 18px;
          }
          
          .company-entry {
            font-size: 13px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="company" className="company-bg relative">
        <div className="section-container">
          {/* 左カラム */}
          <div className="left-column">
            <div className="sticky-header">
              <div className="company-label">company</div>
              <h2 className="horizontal-title">企業情報</h2>
            </div>
          </div>

          {/* 右カラム */}
          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <div className="company-entry company-name">一般社団法人fork</div>
              <div className="company-entry">設立：2023年7月</div>
              <div className="company-entry">住所：富山県中新川郡舟橋村竹内325</div>
              <div className="company-entry">代表者：代表理事 岡山史興</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyInformation;
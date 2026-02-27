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
        /* ============================================
           Company Section
           
           【PC】
           - セクション上部余白: 50px (sticky-header の padding-top)
           - セクション下部余白: 100px (sticky-header / content-area の padding-bottom)
           - 左右余白: 50px (section-container の padding)
           - カラム間: 25px + 25px = 50px
           ============================================ */
        
        .company-bg {
          background-color: #E7EBE7;
          margin: 0;
          padding: 0;
        }
        
        .section-container {
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          margin: 0;
        }
        
        .left-column {
          flex: 0 0 auto;
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
          margin: 0;
          padding: 0;
        }
        
        .right-column {
          flex: 0 0 auto;
          width: min(66.666%, 900px);
          max-width: 900px;
          background-color: #E7EBE7;
          margin: 0;
          padding: 0;
        }
        
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 50px 25px 100px 0;
          margin: 0;
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
          margin: 0 0 20px 0;
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
          padding: 50px 0 100px 25px;
          margin: 0;
        }
        
        .company-entry {
          margin: 0 0 10px 0;
          padding: 0;
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 2;
        }
        
        .company-entry:last-child {
          margin-bottom: 0;
        }
        
        .company-name {
          font-size: 13px;
        }
        
        /* ----------------------------------------
           Mobile (768px以下)
           
           余白の設定場所:
           - タイトル上: sticky-header の padding-top: 90px
           - タイトルとコンテンツ間: content-area の padding-top: 90px
           - コンテンツ下: content-area の padding-bottom: 100px
           - 左右: 30px
           ---------------------------------------- */
        @media (max-width: 768px) {
          .company-bg {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .section-container {
            flex-direction: column;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .left-column {
            width: 100%;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            height: auto !important;
            min-height: auto !important;
            overflow: visible !important;
            flex: none !important;
          }
          
          .right-column {
            width: 100%;
            max-width: none;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            height: auto !important;
            flex: none !important;
          }
          
          .sticky-header {
            position: relative !important;
            display: block !important;
            height: auto !important;
            min-height: auto !important;
            padding: 90px 30px 0 30px !important;
            margin: 0 !important;
            top: auto !important;
          }
          
          .company-label {
            display: block !important;
            position: relative !important;
            font-size: 13px;
            font-weight: 700;
            margin: 0 0 15px 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          
          .horizontal-title {
            display: block !important;
            position: relative !important;
            font-size: 25px;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          
          .content-area {
            padding: 100px 30px 100px 30px !important;
            margin: 0 !important;
          }
          
          .company-entry {
            font-size: 13px;
            margin: 0 0 15px 0 !important;
            padding: 0 !important;
          }
          
          .company-entry:last-child {
            margin-bottom: 0 !important;
          }
          
          .company-name {
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
              <h2 className="horizontal-title">団体情報</h2>
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
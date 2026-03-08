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
        /* ============================================
           Partner Section
           
           【PC】
           - セクション上部余白: 50px (sticky-header の padding-top)
           - セクション下部余白: 100px (sticky-header / content-area の padding-bottom)
           - 左右余白: 50px
           ============================================ */
        
        .single-bg {
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
        }
        
        .section-label {
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 12px 0;
          padding: 0;
        }
        
        .section-title {
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
        
        .single-item {
          margin: 0 0 55px 0;
          padding: 0;
        }
        
        .single-item:last-child {
          margin-bottom: 0;
        }
        
        .item-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0 0 12px 0;
          padding: 0;
        }
        
        .item-number {
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 700;
          margin: 0;
          padding: 0;
        }
        
        .item-title {
          color: #003705;
          font-size: 20px;
          font-weight: 700;
          margin: 0;
          padding: 0;
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
          .single-bg {
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
          
          .section-label {
            display: block !important;
            position: relative !important;
            font-size: 13px;
            margin: 0 0 12px 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          
          .section-title {
            display: block !important;
            position: relative !important;
            font-size: 25px;
            font-weight: 700;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
          }
          
          .content-area {
            padding: 100px 30px 100px 30px !important;
            margin: 0 !important;
          }
          
          .single-item {
            margin: 0 0 35px 0 !important;
            padding: 0 !important;
          }
          
          .single-item:last-child {
            margin-bottom: 0 !important;
          }
          
          .item-header {
            margin: 0 0 15px 0 !important;
            padding: 0 !important;
          }
          
          .item-number {
            font-size: 13px;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          .item-title {
            font-size: 13px;
            margin: 0 !important;
            padding: 0 !important;
          }
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
            <div className="content-area">
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
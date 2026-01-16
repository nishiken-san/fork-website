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
    background-color: #003705;
  }
  .section-container {
    display: flex;
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
    padding: 0 0 100px 0;
    margin: 0;
    margin-left: 50px;
    padding-top: 50px;
    background-color: #003705;
    z-index: 20;
  }
  .section-label {
    color: #B4B4B4;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }
  .section-title {
    color: #f8f8f8;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }
  .content-area {
    padding: 50px 50px 100px 50px;
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
  .item-date {
    color: #B4B4B4;
    font-size: 13px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  .item-title {
    color: #f8f8f8;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  .item-description {
    color: #f8f8f8;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  
  @media (min-width: 1024px) {
    .section-title {
      font-size: 25px;
    }
    .section-label {
      font-size: 15px;
    }
    .content-area {
      padding: 50px 50px 100px 50px;
    }
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
      padding: 0px 0 0 0;
      margin: 0 0 0 30px;
    }
    
    .section-label {
      font-size: 13px;
      margin-bottom: 1rem;
    }
    
    .section-title {
      font-size: 25px;
      font-weight: 700;
    }
    
    .content-area {
      margin: 100px 0 0 0;
      padding: 40px 30px 60px 30px;
    }
    
    .single-item {
      margin: 0 0 40px 0;
    }
    
    .item-header {
      margin: 0 0 10px 0;
    }
    
    .item-number {
      font-size: 12px;
    }
    
    .item-title {
      font-size: 18px;
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
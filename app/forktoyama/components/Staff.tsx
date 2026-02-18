'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Staff = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .staff-section {
          background-color: #E7EBE7;
        }
        
        .staff-container {
          display: flex;
          padding-right: 50px; /* 右端から常に50px */
        }
        
        .staff-left {
          flex: 1; /* 残りのスペースを占める（可変） */
          min-width: 33.333333%;
          background-color: #E7EBE7;
        }
        
        .staff-right {
          flex: 0 0 auto;
          width: min(66.666667%, 900px); /* 66.666%か900pxの小さい方 */
          max-width: 900px;
          background-color: #E7EBE7;
        }
        
        .staff-content {
          padding: 110px 25px 100px 50px;
        }
        
        .staff-sticky {
          position: sticky;
          top: 80px;
          padding: 110px 0 145px 25px; /* 右は0（コンテナで確保済み） */
          z-index: 20;
        }
        
        .staff-text {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
          margin: 0;
          padding: 0;
        }
        
        .staff-image {
          width: 100%;
          height: auto;
        }
        
        @media (max-width: 768px) {
          .staff-container {
            flex-direction: column;
            padding-right: 0; /* モバイルではリセット */
          }
          
          .staff-left {
            width: 100%;
            min-width: 100%;
            order: 2;
          }
          
          .staff-right {
            width: 100%;
            max-width: none;
            order: 1;
          }
          
          .staff-content {
            padding: 10px 30px 50px 30px;
          }
          
          .staff-sticky {
            position: relative;
            top: 0;
            padding: 0px 30px 0 30px;
          }
          
          .staff-image {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            object-position: center center;
          }
        }
      `}</style>

      <section ref={sectionRef} className="staff-section">
        <div className="staff-container">
          <div ref={contentRef} className="staff-left">
            <div className="staff-content">
              <p className="staff-text">
                富山県内外から集ったメンバーが子ども達と日々、原石を磨きあっています。
              </p>
            </div>
          </div>

          <div className="staff-right">
            <div className="staff-sticky">
              <img 
                src="/images/forktoyama/staff.png" 
                alt="スタッフの集合写真" 
                className="staff-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Staff;
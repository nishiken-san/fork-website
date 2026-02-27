'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Access = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useSectionSticky(sectionRef, contentRef);

  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4579975939349!2d137.30563961907245!3d36.705422524872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff797813d97aec1%3A0x51faecf143e2bb08!2sfork%20toyama!5e0!3m2!1sja!2sjp!4v1754876356107!5m2!1sja!2sjp";

  return (
    <>
      <style jsx>{`
        .access-container {
          display: flex;
          padding-right: 50px; /* 右端から常に50px */
        }
        
        .access-left {
          flex: 1; /* 残りのスペースを占める（可変） */
          min-width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        
        .access-right {
          flex: 0 0 auto;
          width: min(66.666667%, 900px); /* 66.666%か900pxの小さい方 */
          max-width: 900px;
          background-color: #E7EBE7;
        }
        
        .access-content {
          position: sticky;
          top: 90px;
          padding: 90px 25px 150px 50px;
          z-index: 20;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .access-map-sticky {
          position: sticky;
          top: 90px;
          padding: 90px 0 150px 25px; /* 右は0（コンテナで確保済み） */
          z-index: 20;
        }
        
        .map-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 75%; /* 4:3のアスペクト比 */
          overflow: hidden;
        }
        
        .map-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(100%) sepia(15%) hue-rotate(120deg) saturate(50%) brightness(1);
        }
        
        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #666666;
          opacity: 0.0;
          pointer-events: none;
          z-index: 10;
        }
        
        .section-category {
          font-size: 15px;
          color: #B4B4B4;
          margin: 0 0 20px 0;
          font-weight: 700;
        }
        
        .section-title {
          font-size: 25px;
          font-weight: 700;
          color: #003705;
          margin: 0 0 100px 0;
          line-height: 1.4;
        }
        
        .facility-name {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #003705;
        }
        
        .address {
          font-size: 13px;
          font-weight: 700;
          margin: 0;
          line-height: 1.6;
          color: #003705;
        }
        
        /* モバイル用要素（デスクトップでは非表示） */
        .mobile-header {
          display: none;
        }
        
        .mobile-map {
          display: none;
        }
        
        .mobile-info {
          display: none;
        }
        
        @media (max-width: 768px) {
          .access-container {
            display: none;
          }
          
          .mobile-header {
            display: block;
            padding: 65px 30px 0 30px;
          }
          
          .mobile-map {
            display: block;
            width: 100%;
            padding: 30px 30px 0 30px;
          }
          
          .mobile-map .map-wrapper {
            width: 100%;
            padding-bottom: 100%; /* モバイルは正方形 */
          }
          
          .mobile-info {
            display: block;
            padding: 30px 30px 40px 30px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="access-main" className="access-bg">
        {/* PC用 */}
        <div className="access-container">
          {/* PC用 - 左カラム */}
          <div ref={contentRef} className="access-left">
            <div className="access-content">
              <div className="section-category">access</div>
              <div className="section-title">アクセス</div>
              
              <div className="access-info">
                <div className="facility-name">fork toyama</div>
                <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
              </div>
            </div>
          </div>

          {/* PC用 - 右カラム（マップ） */}
          <div className="access-right">
            <div className="access-map-sticky">
              <div className="map-wrapper">
                <iframe 
                  src={iframeSrc}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="fork toyama location"
                />
                <div className="map-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル用 - ヘッダー */}
        <div className="mobile-header">
          <div className="section-category">access</div>
          <div className="section-title">アクセス</div>
        </div>

        {/* モバイル用 - マップ */}
        <div className="mobile-map">
          <div className="map-wrapper">
            <iframe 
              src={iframeSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="fork toyama location"
            />
            <div className="map-overlay"></div>
          </div>
        </div>

        {/* モバイル用 - 情報 */}
        <div className="mobile-info">
          <div className="facility-name">fork toyama</div>
          <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
        </div>
      </section>
    </>
  );
};

export default Access;
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
        .map-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .map-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
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
        
        @media (max-width: 768px) {
          .map-wrapper {
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
            min-height: unset;
          }
          
          .map-wrapper iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .map-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>

      <section ref={sectionRef} id="access-main" className="access-bg">
        <div className="section-container">
          {/* PC用 - 左カラム */}
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="section-category">access</div>
              <div className="section-title">アクセス</div>
              
              <div className="access-info">
                <div className="facility-name">fork toyama</div>
                <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
                
                
              </div>
            </div>
          </div>

          {/* PC用 - 右カラム（マップ） */}
          <div className="right-column">
            <div className="map-container">
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
          <div className="map-container">
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
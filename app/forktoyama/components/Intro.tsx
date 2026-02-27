'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const ForktoyamaIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .forktoyama-section {
          min-height: auto !important;
        }
        .forktoyama-two-column {
          min-height: auto !important;
        }
        .forktoyama-two-column-left {
          width: 66.666667% !important;
        }
        .forktoyama-two-column-right {
          width: 33.333333% !important;
        }
        .forktoyama-sticky {
          font-size: 30px;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          padding-top: 90px;
          padding-right: 50px;
        }
        
        /* モバイル用ロゴ（デスクトップでは非表示） */
        .mobile-logo-container {
          display: none;
        }
        
        @media (max-width: 768px) {
          .forktoyama-two-column {
            flex-direction: row !important;
            min-height: auto !important;
          }
          
          .forktoyama-two-column-left {
            width: 60% !important;
            order: 1;
          }
          
          .forktoyama-two-column-right {
            width: 40% !important;
            order: 2;
            display: flex !important;
            justify-content: flex-end;
            align-items: flex-start;
          }
          
          
          .forktoyama-sticky {
            position: relative !important;
            top: 0 !important;
            padding: 50px 25px 50px 0;
            height: auto !important;
          }
          
          .forktoyama-vertical-container {
            display: flex;
            gap: 0.5rem;
          }
          
          .forktoyama-vertical-text {
            writing-mode: vertical-rl !important;
            text-orientation: mixed !important;
            font-size: 30px;
          }
          
          
          .forktoyama-description {
            padding-right: 0;
            margin-bottom: 0;
            font-size: 15px;
          }
          
          .forktoyama-logo-container {
            display: none;
          }
          
          .mobile-logo-container {
            display: block;
            padding: 20px 30px 30px 30px;
          }
          
          .mobile-logo-container img {
            width: 100%;
            height: auto;
          }
        }
        
        
      `}</style>

      <section ref={sectionRef} className="forktoyama-section forktoyama-bg-green">
        <div className="forktoyama-two-column">
          <div ref={contentRef} className="forktoyama-two-column-left">
            <div className="forktoyama-content">
              <div className="forktoyama-subtitle">about fork toyama</div>
              
              <p className="forktoyama-description">
                fork toyamaではその名の通り大人も子どもも「選択肢」と出会える場であるために、以下の保育理念を掲げて日々の保育に取り組んでいます。
              </p>
              
              <div className="forktoyama-logo-container">
                <img 
                  src="/images/forktoyama/forktoyama.svg" 
                  alt="fork toyama ロゴ" 
                  className="forktoyama-image forktoyama-intro-logo"
                />
              </div>
            </div>
          </div>

          <div className="forktoyama-two-column-right">
            <div className="forktoyama-sticky">
              <div className="forktoyama-vertical-container">
                <div className="forktoyama-vertical-text">
                  保育料ゼロの学童保育
                </div>
                <div className="forktoyama-vertical-text">
                  日本一小さな村発、

                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* モバイル用ロゴ */}
        <div className="mobile-logo-container">
          <img 
            src="/images/forktoyama/forktoyama.svg" 
            alt="fork toyama ロゴ" 
          />
        </div>
      </section>
    </>
  );
};

export default ForktoyamaIntro;
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Gakudou2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .gakudou2-bg {
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
          padding: 0 0 100px 0;
          margin: 0;
          margin-left: 50px;
          padding-top: 100px;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0 0 19px 0;
          padding: 0;
        }
        .section-subtitle {
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
          padding: 100px 50px 100px 50px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 0;
        }
        .main-description {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
          margin: 0 0 2rem 0;
          padding: 0;
          text-align: left;
        }
        .support-list {
          margin: 0 0 3rem 0;
          padding: 0;
        }
        .support-item {
          display: flex;
          align-items: center;
          margin: 0 0 0.5rem 0;
          padding: 0;
          color: #003705;
          font-size: 13px;
          font-weight: 700;
        }
        .support-checkbox {
          width: 12px;
          height: 12px;
          border: 1px solid #003705;
          margin-right: 0.5rem;
          background-color: transparent;
        }
        .map-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0 4rem 0;
          padding: 0;
          position: relative;
          width: 100%;
        }
        .map-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0;
        }
        .japan-map-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
        }
        .fork-text-overlay {
          position: absolute;
          top: 45%;
          left: 45%;
          transform: translate(-50%, -50%);
          color: #003705;
          font-size: 1.2rem;
          font-weight: 700;
          z-index: 2;
        }
        .button-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }
        .support-button {
          background-color: #E7EBE7;
          border: 1px solid #003705;
          color: #003705;
          padding: 0;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 53px;
          text-align: center;
          position: relative;
          box-shadow: 3px 3px 0px #003705;
        }
        .support-button:hover {
          background-color: #93A794;
        }
        
        @media (min-width: 1024px) {
          .section-title {
            font-size: 25px;
          }
          .section-label {
            font-size: 25px;
          }
          .content-area {
            padding: 100px 50px 100px 50px;
          }
          .japan-map-image {
            width: 100%;
          }
          .fork-text-overlay {
            font-size: 1.4rem;
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
            top: 0;
            padding: 30px 0 15px 0;
            margin: 0;
            margin-left: 30px;
            margin-right: 30px;
          }
          
          .section-label {
            font-size: 25px;
            margin: 0 0 8px 0;
          }
          
          .section-subtitle {
            font-size: 15px;
            margin: 0 0 8px 0;
          }
          
          .section-title {
            font-size: 25px;
          }
          
          .content-area {
            padding: 15px 30px 30px 30px;
          }
          
          .main-description {
            font-size: 13px;
            margin: 0 0 15px 0;
            line-height: 1.6;
          }
          
          .support-list {
            margin: 0 0 15px 0;
          }
          
          .support-item {
            font-size: 13px;
          }
          
          .map-section {
            margin: 0 0 20px 0;
          }
          
          .button-section {
            gap: 0.75rem;
          }
          
          .support-button {
            height: 45px;
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .sticky-header {
            margin-left: 20px;
            margin-right: 20px;
            padding: 20px 0 10px 0;
          }
          
          .section-label {
            font-size: 25px;
          }
          
          .section-subtitle {
            font-size: 15px;
          }
          
          .section-title {
            font-size: 25px;
          }
          
          .content-area {
            padding: 10px 20px 20px 20px;
          }
          
          .main-description {
            font-size: 13px;
            margin: 0 0 12px 0;
          }
          
          .support-list {
            margin: 0 0 12px 0;
          }
          
          .support-item {
            font-size: 13px;
          }
          
          .map-section {
            margin: 0 0 15px 0;
          }
          
          .support-button {
            height: 40px;
            font-size: 13px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="gakudou2" className="gakudou2-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">02.</div>
              <div className="section-subtitle">operational support</div>
              <h2 className="section-title">学童運営のサポート</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                開所から2年で定員から50件超上の児童・複数を受け入れてきたfork toyama。各地で子育ての課題解決に取り組む自治体に対する「みん営」の仕組みや運営者育成の改定・運営のサポートにも取り組んでいます。
              </p>
              
              <div className="support-list">
                <div className="support-item">
                  <div className="support-checkbox"></div>
                  <span>基本支援（人作りの支援／制度の基本）</span>
                </div>
                <div className="support-item">
                  <div className="support-checkbox"></div>
                  <span>ノウハウ支援（仕組みの支援）</span>
                </div>
              </div>
              
              <div className="map-section">
                <div className="map-container">
                  <img 
                    src="/images/effort/gakudo-map.png" 
                    alt="日本地図" 
                    className="japan-map-image"
                  />
                  <div className="fork-text-overlay"></div>
                </div>
              </div>
              
              <div className="button-section">
                <a 
                  href="/info?tag=news"
                  className="support-button"
                >
                  事例をみる
                </a>
                <a 
                  href="/study" 
                  className="support-button"
                >
                  見学のご相談はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gakudou2;
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
          min-height: 100vh;
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
          padding: 2rem 3rem;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .section-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .content-area {
          padding: 4rem 0 4rem 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .main-description {
          color: #003705;
          font-size: 0.875rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          text-align: left;
        }
        .support-list {
          margin-bottom: 3rem;
        }
        .support-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          color: #003705;
          font-size: 0.875rem;
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
          margin-bottom: 4rem;
          position: relative;
          width: 100%;
        }
        .map-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 0;
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
          font-weight: 600;
          z-index: 2;
        }
        .button-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .support-button {
          background-color: #E7EBE7;
          border: 2px solid #003705;
          color: #003705;
          padding: 1rem 3rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: center;
          position: relative;
          box-shadow: 4px 4px 0px #003705;
        }
        .support-button:hover {
          background-color: #003705;
          color: white;
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
          .section-label {
            font-size: 1.75rem;
          }
          .content-area {
            padding: 4rem 0 4rem 4rem;
          }
          .japan-map-image {
            width: 100%;
          }
          .fork-text-overlay {
            font-size: 1.4rem;
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
                  href="/support" 
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
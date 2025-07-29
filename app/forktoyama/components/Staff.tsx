'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Staff = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .gakudou-bg {
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
          padding: 4rem 2rem;
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
          margin-bottom: 4rem;
          text-align: left;
        }
        .fork-logo-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 4rem;
          position: relative;
          width: 100%;
        }
        .logo-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .fork-text-image {
          width: 47.5%;
          height: auto;
          position: relative;
          z-index: 1;
          margin-bottom: 1rem;
        }
        .toyama-text-image {
          width: 47.5%;
          height: auto;
          position: relative;
          z-index: 1;
        }
        .fork-icon-image {
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          width: 60%;
          height: auto;
          z-index: 2;
        }
        .button-section {
          width: 100%;
        }
        .about-button {
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
        .about-button:hover {
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
            padding: 4rem 4rem;
          }
          .fork-text-image {
            width: 45%;
          }
          .toyama-text-image {
            width: 45%;
          }
          .fork-icon-image {
            width: 55%;
            right: 10%;
            top: 60%;
          }
        }
      `}</style>

      <section ref={sectionRef} id="gakudou" className="gakudou-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">01.</div>
              <div className="section-subtitle">fork toyama</div>
              <h2 className="section-title">学童保育・fork toyama</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                社会みんなで子育て関わる「みん営」の仕組みで成り立つ学童保育施設。さまざまな人・もの・コトとの出会いを提供することで、子どもたちに人生の選択肢が広がる機会をつくることに挑戦しています。
              </p>
              
              <div className="fork-logo-section">
                <div className="logo-container">
                  <img 
                    src="/images/effort/fork-text.png" 
                    alt="fork テキスト" 
                    className="fork-text-image"
                  />
                  <img 
                    src="/images/effort/toyama-text.png" 
                    alt="toyama テキスト" 
                    className="toyama-text-image"
                  />
                  <img 
                    src="/images/effort/fork-icon.png" 
                    alt="fork アイコン" 
                    className="fork-icon-image"
                  />
                </div>
              </div>
              
              <div className="button-section">
                <a 
                  href="/about" 
                  className="about-button"
                >
                  fork toyamaについて
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Staff;
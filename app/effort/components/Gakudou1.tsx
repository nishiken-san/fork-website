'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Gakudou1 = () => {
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
          margin: 0 0 4rem 0;
          padding: 0;
          text-align: left;
        }
        .fork-logo-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0 4rem 0;
          padding: 0;
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
          width: 100%;
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
          margin: 0;
          padding: 0;
        }
        .about-button {
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
        .about-button:hover {
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
          .fork-text-image {
            width: 100%;
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
            padding: 95px 0 15px 0;
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
            margin: 0 0 20px 0;
            line-height: 1.6;
            padding: 0 0 0 0;
          }
          
          .fork-logo-section {
            margin: 0 0 20px 0;
          }
          
          .about-button {
            height: 45px;
            font-size: 14px;
          }
        }
        
        
        }
      `}</style>

      <section ref={sectionRef} id="gakudou" className="gakudou-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">01.</div>
              <div className="section-subtitle">fork toyama</div>
              <h2 className="section-title">学童保育：fork toyama</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                社会みんなで子育てに関わる「みん営」の仕組みを実践する学童保育施設。
              </p>
              
              <div className="fork-logo-section">
                <div className="logo-container">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet="/images/effort/forktoyama-mobile.png"
                    />
                    <img 
                      src="/images/effort/forktoyama.png" 
                      alt="fork toyama" 
                      className="fork-text-image"
                    />
                  </picture>
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

export default Gakudou1;
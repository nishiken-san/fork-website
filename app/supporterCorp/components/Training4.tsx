'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Gakudou4 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .gakudou4-bg {
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
          margin-bottom: 4rem;
          text-align: left;
        }
        .image-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 4rem;
          position: relative;
          width: 100%;
        }
        .image-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .training-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: relative;
          z-index: 1;
        }
        .button-section {
          width: 100%;
          position: relative;
        }
        .training-button {
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
        .training-button:hover {
          background-color: #003705;
          color: white;
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px #003705;
        }
        .training-button:active {
          transform: translate(4px, 4px);
          box-shadow: 0px 0px 0px #003705;
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
        }
      `}</style>

      <section ref={sectionRef} id="gakudou4" className="gakudou4-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">04.</div>
              <div className="section-subtitle">staff training</div>
              <h2 className="section-title">学童人事研修</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                予測不能な子どもたちとともに過ごすこともまた「カオス」を楽しい工夫が力を発揮に導いてチーム、学習環境だからできる、あたらしい人材育成、チームビルディングのプログラムを提供しています。
              </p>
              
              <div className="image-section">
                <div className="image-container">
                  <img 
                    src="/images/effort/training.png" 
                    alt="学童人事研修の様子" 
                    className="training-image"
                  />
                </div>
              </div>
              
              <div className="button-section">
                <a 
                  href="/training" 
                  className="training-button"
                >
                  事例をみる
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gakudou4;
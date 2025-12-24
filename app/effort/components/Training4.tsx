
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
          padding: 100px 0 100px 0;
          margin-left: 50px;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0 0 19px 0;
        }
        .section-subtitle {
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }
        .section-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }
        .content-area {
          padding: 100px 50px;
          display: flex;
          flex-direction: column;
        }
        .main-description {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
          margin: 0 0 2rem 0;
        }
        .image-section {
          width: 100%;
          margin: 0 0 2rem 0;
        }
        .training-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .button-section {
          width: 100%;
        }
        .training-button {
          background-color: #E7EBE7;
          border: 1px solid #003705;
          color: #003705;
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
          box-shadow: 3px 3px 0px #003705;
        }
        .training-button:hover {
          background-color: #93A794;
        }
        
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          .left-column, .right-column {
            width: 100%;
          }
          .sticky-header {
            position: relative;
            top: 0;
            padding: 30px 0 15px 0;
            margin: 0 30px;
          }
          .content-area {
            padding: 15px 30px 60px 30px;
          }
          .main-description {
            margin: 0 0 1.5rem 0;
          }
          .image-section {
            margin: 0 0 1.5rem 0;
          }
        }
        
        @media (max-width: 480px) {
          .sticky-header {
            margin: 20px 20px 10px 20px;
          }
          .content-area {
            padding: 10px 20px 40px 20px;
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
                <img 
                  src="/images/effort/training.png" 
                  alt="学童人事研修の様子" 
                  className="training-image"
                />
              </div>
              
              <div className="button-section">
                <a 
                  href="/info?tag=work-shop" 
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
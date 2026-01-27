'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Gakudou3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .gakudou3-bg {
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
          justify-content: space-between;
        }
        .left-column {
          flex: 0 0 auto;
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          flex: 0 0 auto;
          width: min(66.666%, 900px);
          max-width: 900px;
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
        .contents-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .button-section {
          width: 100%;
        }
        .curriculum-button {
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
        .curriculum-button:hover {
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
            padding: 95px 0 15px 0;
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
        
      `}</style>

      <section ref={sectionRef} id="gakudou3" className="gakudou3-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">03.</div>
              <div className="section-subtitle">curriculum & content development</div>
              <h2 className="section-title">カリキュラム・コンテンツ開発</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <p className="main-description">
                企業、自治体のSDGsやCSR、CSV活動のパートナーとして、食育イベントやものづくりのプログラムなど、学校でも家庭でもない強みを活かしたさまざまなコラボレーション企画を設計・開発しています。
              </p>
              
              <div className="image-section">
                <img 
                  src="/images/effort/contents.png" 
                  alt="カリキュラム・コンテンツ開発の様子" 
                  className="contents-image"
                />
              </div>
              
              <div className="button-section">
                <a 
                  href="/info?tag=work-shop" 
                  className="curriculum-button"
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

export default Gakudou3;
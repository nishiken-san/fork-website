// app/components/AboutUsSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style jsx>{`
        .about-section {
          background-color: #003705;
        }
        
        .section-container {
          display: flex;
        }
        
        .left-column {
          width: 33.333333%;
          background-color: #003705;
          position: relative;
        }
        
        .right-column {
          width: 66.666667%;
          background-color: #003705;
        }
        
        .sticky-header {
          position: sticky;
          top: 70px;
          padding-top: 80px;
          padding-left: 50px;
          padding-bottom: 60px;
          background-color: transparent;
          z-index: 20;
        }
        
        .section-title {
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
          margin: 0;
          padding: 0;
        }
        
        .content-area {
          padding: 80px 50px 60px 50px;
          display: flex;
          flex-direction: column;
        }
        
        .section-label {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 2rem 0;
          letter-spacing: 0;
        }
        
        .main-text {
          color: #FFFFFF;
          font-size: 15px;
          line-height: 2;
          margin: 0 0 3rem 0;
          font-weight: 700;
        }
        
        .illustration-container {
          margin: 3rem 0;
          display: flex;
          justify-content: flex-start;
        }
        
        .illustration {
          width: 100%;
          max-width: 853px;
          height: auto;
          object-fit: contain;
        }
        
        .button-container {
          width: 100%;
          max-width: 853px;
          margin: 2rem 0 0 0;
        }
        
        .more-button {
          background-color: #E7EBE7;
          color: #003705;
          width: 100%;
          height: 53px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #FFFFFF;
          box-shadow: 3px 3px 0px #FFFFFF;
        }
        
        .more-button:hover {
          background-color: #93A794;
        }
        
        .mobile-media-container {
          display: none;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .about-section {
            display: flex;
            flex-direction: column;
          }
          
          .section-container {
            flex-direction: row;
            min-height: auto;
            width: 100%;
          }
          
          .left-column {
            width: 33.333333%;
            position: relative;
          }
          
          .right-column {
            width: 66.666667%;
          }
          
          .sticky-header {
            position: relative;
            top: auto;
            padding-top: 50px;
            padding-left: 30px;
            padding-bottom: 60px;
          }
          
          .section-title {
            font-size: 25px;
          }
          
          .content-area {
            padding: 50px 30px 60px 0;
            min-height: auto;
          }
          
          .section-label {
            color: #B4B4B4;
            font-size: 15px;
            margin: 0 0 1.5rem 0;
          }
          
          .main-text {
            font-size: 15px;
            margin: 0 0 2rem 0;
          }
          
          /* PCの画像とボタンを非表示 */
          .content-area .illustration-container,
          .content-area .button-container {
            display: none;
          }
          
          /* モバイル専用コンテナ */
          .mobile-media-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 100%;
            background-color: #003705;
            padding: 0 0 60px 0;
          }
          
          .mobile-media-container .illustration-container {
            display: flex;
            justify-content: flex-end;
            margin: 0 0 2rem 0;
            width: 100%;
            padding-right: 30px;
          }
          
          .mobile-media-container .illustration {
            width: 330px;
            max-width: calc(100% - 30px);
            height: auto;
          }
          
          .mobile-media-container .button-container {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding-right: 30px;
          }
          
          .mobile-media-container .more-button {
            width: 332px;
            max-width: calc(100% - 30px);
            height: 52px;
            font-size: 15px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="about" className="about-section">
        <div className="section-container">
          {/* 左側: タイトル */}
          <div className="left-column">
            <div className="sticky-header">
              <h2 className="section-title">わたしたちについて</h2>
            </div>
          </div>

          {/* 右側: コンテンツ */}
          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <div className="section-label">about us</div>
              
              <p className="main-text">
                forkとは「選択肢」のこと。<br/>
                社会全体で子育てする仕組みづくりを通じて、<br/>
                大人も子どもも自分らしい生き方を選べる世の中をつくります。
              </p>

              {/* PC表示用 */}
              <div className="illustration-container">
                <img 
                  src="/images/about/silhouette.png"
                  alt="様々な人々のイラスト" 
                  className="illustration"
                />
              </div>

              <div className="button-container">
                <a href="/about" className="more-button">
                  もっとくわしく
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* モバイル専用 */}
        {isMobile && (
          <div className="mobile-media-container">
            <div className="illustration-container">
              <img 
                src="/images/about/silhouette-mini.png"
                alt="様々な人々のイラスト" 
                className="illustration"
              />
            </div>

            <div className="button-container">
              <a href="/about" className="more-button">
                もっとくわしく
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutUsSection;
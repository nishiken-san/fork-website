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
        .about-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
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
          top: 80px;
          padding: 6rem 3rem 2rem 3rem;
          margin-left: 30px;
          background-color: #003705;
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
        }
        .content-area {
          padding: 6rem 4rem 4rem 0;
          margin-left: 100px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .section-label {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: 0;
        }
        .main-text {
          color: #FFFFFF;
          font-size: 15px;
          line-height: 2;
          margin-bottom: 3rem;
          font-weight: 400;
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
          margin-top: 2rem;
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
          box-shadow: 1px 1px 0px #FFFFFF;
        }
        .more-button:hover {
          background-color: #93A794;
        }
        
        .mobile-media-container {
          display: none;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .about-bg {
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
            padding: 2rem 1rem;
            margin-left: 0;
          }
          
          .section-title {
            font-size: 25px;
            writing-mode: vertical-rl;
          }
          
          .content-area {
            padding: 2rem 1.5rem;
            margin-left: 0;
            min-height: auto;
            justify-content: flex-start;
          }
          
          .section-label {
            color: #B4B4B4;
            font-size: 15px;
            margin-bottom: 1.5rem;
            letter-spacing: 0;
          }
          
          .main-text {
            color: #FFFFFF;
            font-size: 15px;
            margin-bottom: 2rem;
          }
          
          /* PCの画像とボタンを非表示 */
          .content-area .illustration-container,
          .content-area .button-container {
            display: none;
          }
          
          /* モバイル専用の画像とボタンコンテナ */
          .mobile-media-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            background-color: #003705;
            padding: 2rem 0;
          }
          
          .mobile-media-container .illustration-container {
            display: flex;
            justify-content: center;
            margin: 0 0 2rem 0;
            width: 100%;
          }
          
          .mobile-media-container .illustration {
            width: 330px;
            height: 189.21px;
          }
          
          .mobile-media-container .button-container {
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 0;
          }
          
          .mobile-media-container .more-button {
            width: 332px;
            height: 52px;
            font-size: 15px;
            border: 1px solid #FFFFFF;
            box-shadow: 1px 1px 0px #FFFFFF;
          }
        }
      `}</style>

      <section ref={sectionRef} id="about" className="about-bg relative">
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
              <div className="section-label">aboutus</div>
              
              <p className="main-text">
                forkとは「選択肢」のこと。<br/>
                社会全体で子育てする仕組みづくりを通して、<br/>
                大人も子どもも自分らしい生き方を選べる世の中をつくります。
              </p>

              {/* PC表示用の画像とボタン */}
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
        
        {/* モバイル専用: 画像とボタン（独立した行） */}
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
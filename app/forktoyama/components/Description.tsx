'use client';

import { useRef, useState, useEffect } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Description = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const principles = [
    "ありがとうや日々のあいさつを言う、言われる",
    "人の話を聞く、自分の気持ちを伝える", 
    "道具や食べ物を大切に扱う"
  ];

  const images = [
    "/images/forktoyama/stone.png",
    "/images/forktoyama/_DSC4365.jpg",
    "/images/forktoyama/_DSC4899.jpg"
  ];

  // 6秒間隔で自動スライド
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <style jsx>{`
        /* レイアウト調整 */
        .description-section {
          background-color: #E7EBE7;
        }

        .description-container {
          display: flex;
        }

        .description-left {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }

        .description-right {
          width: 66.666667%;
          background-color: #E7EBE7;
          position: relative;
        }

        .description-content {
          padding: 110px 25px 100px 50px;
        }

        .description-sticky {
          position: sticky;
          top: 80px;
          padding: 110px 50px 100px 25px;
          z-index: 20;
          overflow: hidden;
        }

        /* 画像スライダー */
        .image-slider {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 58.82%; /* 500/850 = 58.82% */
          overflow: hidden;
        }

        .slider-track {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.8s ease-in-out;
        }

        .slider-image {
          flex-shrink: 0;
          min-width: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* カテゴリー（サブタイトル） */
        .description-category {
          color: #003705;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 16px 0;
          padding: 0 0 7px 0;
          border-bottom: 1px solid #003705;
          display: inline-block;
        }

        /* タイトル */
        .description-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 24px 0;
          padding: 0;
        }

        /* テキスト */
        .description-text {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
          margin: 0 0 16px 0;
          padding: 0;
        }

        /* セクション間隔 */
        .description-section-spacing {
          margin: 0 0 64px 0;
          padding: 0;
        }

        .description-section-spacing:last-child {
          margin-bottom: 0;
        }

        /* リスト */
        .description-list {
          list-style: none;
          padding: 0;
          margin: 32px 0 0 0;
        }

        .description-list-item {
          background-color: #FFFFFF;
          border-radius: 10px;
          padding: 9px 21px;
          margin: 0 0 16px 0;
          display: flex;
          align-items: flex-start;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .description-list-item:last-child {
          margin-bottom: 0;
        }

        .description-list-number {
          color: #003705;
          font-size: 18px;
          font-weight: 700;
          margin: 0 16px 0 0;
          padding: 0;
          min-width: 32px;
        }

        .description-list-text {
          color: #003705;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          flex: 1;
        }

        /* モバイル用スライダー（デスクトップでは非表示） */
        .mobile-slider {
          display: none;
        }

        /* モバイル対応 */
        @media (max-width: 768px) {
          .description-container {
            flex-direction: column;
          }
          
          .description-left {
            width: 100%;
          }
          
          .description-right {
            display: none;
          }
          
          .description-content {
            padding: 50px 30px 60px 30px;
          }
          
          .description-category {
            font-size: 13px;
            padding: 0 0 0px 0;
            margin: 0 0 12px 0;
          }
          
          .description-title {
            font-size: 20px;
            margin: 0 0 20px 0;
          }
          
          .description-text {
            font-size: 13px;
            margin: 0 0 12px 0;
          }
          
          .description-section-spacing {
            margin: 0 0 40px 0;
          }
          
          .description-list {
            margin: 24px 0 0 0;
          }
          
          .description-list-item {
            padding: 20px;
            margin: 0 0 10px 0;
          }
          
          .description-list-number {
            font-size: 18px;
            min-width: 28px;
            margin: 0 12px 0 0;
          }
          
          .description-list-text {
            font-size: 18px;
          }
          
          /* モバイル用スライダーを表示 */
          .mobile-slider {
            display: block;
            width: 100%;
            padding: 0 30px;
            margin: 0 0 40px 0;
          }
          
          .mobile-slider .image-slider {
            width: 100%;
            height: 0;
            padding-bottom: 100%; /* 正方形 */
          }
          
          .mobile-slider .slider-track {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .mobile-slider .slider-image {
            min-width: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        /* 小型モバイル対応 */
        @media (max-width: 480px) {
          .description-content {
            padding: 40px 30px 50px 30px;
          }
          
          .description-category {
            font-size: 12px;
          }
          
          .description-title {
            font-size: 25px;
            margin: 0 0 16px 0;
          }
          
          .description-text {
            font-size: 12px;
            margin: 0 0 0px 0;
          }
          
          .description-section-spacing {
            margin: 0 0 30px 0;
          }
          
          .description-list {
            margin: 20px 0 0 0;
          }
          
          .description-list-item {
            padding: 16px;
            margin: 0 0 10px 0;
          }
          
          .description-list-number {
            font-size: 14px;
            min-width: 24px;
            margin: 0 10px 0 0;
          }
          
          .description-list-text {
            font-size: 14px;
          }
          
          .mobile-slider {
            padding: 0 0px;
            margin: 0 0 32px 0;
          }
        }
      `}</style>

      <section ref={sectionRef} className="description-section">
        <div className="description-container">
          <div ref={contentRef} className="description-left">
            <div className="description-content">
              
              <div className="description-section-spacing">
                <div className="description-category">保育理念</div>
                <h2 className="description-title">子どもは「らしさ」の原石</h2>
                <p className="description-text">
                子どもたちはただ大切にするだけの「宝」ではなく、未熟なだけの「種」でもありません。
                </p>
                <p className="description-text">
                それぞれの可能性を秘めていながら、一方で磨かれる必要がある「原石」だと考えています。
                </p>
                <p className="description-text">
                forkで過ごす時間はひとりひとりの可能性を磨くためのものです。
                </p>
              </div>

              {/* モバイル用スライダー */}
              <div className="mobile-slider">
                <div className="image-slider">
                  <div 
                    className="slider-track"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {images.map((image, index) => (
                      <img 
                        key={index}
                        src={image}
                        alt={`fork toyama の様子 ${index + 1}`}
                        className="slider-image"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="description-section-spacing">
                <div className="description-category">保育方針</div>
                <h2 className="description-title">対話を通して磨きあう</h2>
                <p className="description-text">
                原石が宝石になるために最も重要なのは「どうやって磨くか」。forkは大人も子どもも全員がお互いに「磨き合う」環境でありたいと考えました。
                </p>
                <p className="description-text">
                そのために大切なのは、相手を尊重する、大切にしあえる「対話」が成り立つ関係性です。一方的に主張するのではなく、自分を諦めるのでもなく、互いに可能性を高めあえる関係をつくることを、forkでは目指します。
                </p>
              </div>

              <div className="description-section-spacing">
                <div className="description-category">保育コミュニケーション方針</div>
                <h2 className="description-title">「ありがとう」を育む</h2>
                <p className="description-text">
                「対話」の前提になる他者を敬う・大切にする気持ちや行動は日々の生活のなかでじっくり育まれていくものです。そのため、まずは「ありがとう」やあいさつを言える／言われること＝「自分以外の存在をきちんと認識する／される」こと、そして話を聞く／聞いてもらえること、ありがとうの対象を人以外にも向けられる ことの3つを、forkが大切にするコミュニケーションとして徹底します
                </p>
                <ul className="description-list">
                  {principles.map((principle, index) => (
                    <li key={index} className="description-list-item">
                      <span className="description-list-number">{index + 1}.</span>
                      <span className="description-list-text">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>

          <div className="description-right">
            <div className="description-sticky">
              <div className="image-slider">
                <div 
                  className="slider-track"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`fork toyama の様子 ${index + 1}`}
                      className="slider-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Description;
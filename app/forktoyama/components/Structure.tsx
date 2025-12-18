'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

const NaturalArchitecture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        /* セクション全体 */
        .natural-architecture-bg {
          background-color: #E7EBE7;
          position: relative;
        }

        /* コンテナ */
        .section-container {
          display: flex;
          min-height: 100vh;
        }

        /* 左カラム - Sticky Text */
        .left-column {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
          padding:125px 50px 0 50px;
        }

        .content-area {
          position: sticky;
          top: 80px;
          padding: 110px 50px 100px 25px;
          z-index: 20;
        }

        /* 右カラム - Images */
        .right-column {
          width: 66.666667%;
          background-color: #E7EBE7;
          padding: 110px 25px 100px 50px;
        }

        /* 画像コンテナ */
        .images-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
        }

        /* 画像ブロック */
        .image-block {
          width: 100%;
          overflow: hidden;
          background-color: transparent;
        }

        /* 画像 - 見切れ防止 */
        .responsive-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain; /* cover → contain に変更 */
        }

        /* 地図・配置図 */
        .map-block {
          margin-bottom: 30px;
        }

        /* 写真ブロック */
        .photo-block {
          margin-bottom: 30px;
        }

        .photo-block:last-child {
          margin-bottom: 0;
        }

        /* モバイルテキストセクション（デスクトップでは非表示） */
        .mobile-text-section {
          display: none;
        }

        /* カテゴリー */
        .section-category {
          color: #003705;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 1rem 0;
        }

        /* タイトル */
        .section-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 1.5rem 0;
        }

        /* 説明文 */
        .description {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.8;
          margin: 0;
        }

        /* タブレット対応 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .content-area {
            padding: 110px 40px 100px 20px;
          }
          
          .right-column {
            padding: 110px 20px 100px 40px;
          }
        }

        /* モバイル対応 */
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          
          .left-column {
            display: none; /* モバイルでは左カラムを非表示 */
          }
          
          .right-column {
            width: 100%;
            padding: 50px 30px 60px 30px;
          }
          
          .mobile-text-section {
            display: block;
            margin-bottom: 40px;
          }
          
          .mobile-text-section .content-area {
            position: relative;
            padding: 0;
          }
          
          .images-container {
            gap: 20px;
          }
          
          .image-block {
            margin-bottom: 20px;
          }
          
          .photo-block:last-child {
            margin-bottom: 0;
          }
          
          .section-category {
            font-size: 15px;
          }
          
          .section-title {
            font-size: 20px;
          }
          
          .description {
            font-size: 13px;
          }
        }

        /* 小型モバイル対応 */
        @media (max-width: 480px) {
          .right-column {
            padding: 40px 20px 60px 20px;
          }
          
          .section-category {
            font-size: 15px;
          }
          
          .section-title {
            font-size: 18px;
          }
          
          .description {
            font-size: 12px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="natural-architecture" className="natural-architecture-bg relative">
        <div className="section-container">
          {/* Left Column - Sticky Text */}
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="section-category">建物</div>
              <div className="section-title">自然とあそぶ建築</div>
              <div className="description">
                forkの施設は地域に根ざして教育に取り組んできた旧家のお屋敷をリノベーションした建物です。富山県産の木材をふんだんに使用した床や壁は、学童保育を利用する親子がワークショップで仕上げました。広い庭は子どもたちの想像力が全開にできる場所。季節に合わせてさまざまな遊びを楽しんでいます
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="right-column">
            <div className="images-container">
              {/* Map/Floor Plan */}
              <div className="image-block map-block">
                <img 
                  src={IMAGES.forktoyama.fork2}
                  alt="建物配置図" 
                  className="responsive-image"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Mobile Text Section */}
            <div className="mobile-text-section">
              <div className="content-area">
                <div className="section-category">建物</div>
                <div className="section-title">自然とあそぶ建築</div>
                <div className="description">
                  forkの施設は地域に根ざして教育に取り組んできた旧家のお屋敷をリノベーションした建物です。富山県産の木材をふんだんに使用した床や壁は、学童保育を利用する親子がワークショップで仕上げました。広い庭は子どもたちの想像力が全開にできる場所。季節に合わせてさまざまな遊びを楽しんでいます
                </div>
              </div>
            </div>
            
            <div className="images-container mobile-photos">
              {/* Photo 1 - 縦長画像の場合 */}
              <div className="image-block photo-block photo-1">
                <img 
                  src={IMAGES.forktoyama.fork3}
                  alt="建築写真1" 
                  className="responsive-image"
                  loading="lazy"
                />
              </div>

              {/* Photo 2 - 横長画像の場合 */}
              <div className="image-block photo-block photo-2">
                <img 
                  src={IMAGES.forktoyama.fork4}
                  alt="建築写真2" 
                  className="responsive-image"
                  loading="lazy"
                />
              </div>

              {/* Photo 3 */}
              <div className="image-block photo-block photo-3">
                <img 
                  src={IMAGES.forktoyama.fork5}
                  alt="建築写真3" 
                  className="responsive-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NaturalArchitecture;
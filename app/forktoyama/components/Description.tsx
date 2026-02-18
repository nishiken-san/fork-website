'use client';

import { useRef, useState, useEffect } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Description = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useSectionSticky(sectionRef, contentRef);
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

  // 6秒間隔で自動スライド（PC用）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section ref={sectionRef} className="description-section">
      <div className="description-container">
        <div ref={contentRef} className="description-left">
          <div className="description-content">
            
            <div className=".description-section-top-spacing">
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

            {/* モバイル用画像1 - 保育理念の後 */}
            <div className="mobile-image">
              <img 
                src={images[0]}
                alt="fork toyama の様子 1"
              />
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

            {/* モバイル用画像2 - 保育方針の後 */}
            <div className="mobile-image">
              <img 
                src={images[1]}
                alt="fork toyama の様子 2"
              />
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

            {/* モバイル用画像3 - 保育コミュニケーション方針の後 */}
            <div className="mobile-image">
              <img 
                src={images[2]}
                alt="fork toyama の様子 3"
              />
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
  );
};

export default Description;
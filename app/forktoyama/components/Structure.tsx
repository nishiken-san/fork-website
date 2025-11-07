'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

const NaturalArchitecture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
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
  );
};

export default NaturalArchitecture;
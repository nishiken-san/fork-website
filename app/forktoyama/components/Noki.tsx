

'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

const Noki = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="natural-architecture" className="natural-architecture-bg relative">
      <div className="section-container">
        {/* Left Column - Sticky Text */}
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">cafe</div>
            <div className="section-title">noki</div>
            <div className="description">
            子どもたちの声を楽しみながら、こだわりのコーヒーとホットサンドやデザートでお迎えするカフェ。収益の一部は学童保育運営に充てられます。
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="right-column">
          
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
            {/* Photo 1 */}
            <div className="image-block photo-block">
              <img 
                src={IMAGES.forktoyama.fork6}
                alt="建築写真1" 
                className="responsive-image"
              />
            </div>

            {/* Photo 2 */}
            <div className="image-block photo-block">
              <img 
                src={IMAGES.forktoyama.fork7}
                alt="建築写真2" 
                className="responsive-image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Noki;
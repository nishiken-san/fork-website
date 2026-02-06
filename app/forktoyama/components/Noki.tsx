

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
            <div className="social-link-container">
              <a 
                href="https://www.instagram.com/fork_toyama/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <img 
                src={IMAGES.logo.vec}
                alt="arrow"
                className="arrow-icon"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="right-column">
          
          {/* Mobile Text Section */}
          <div className="mobile-text-section">
            <div className="content-area">
              <div className="section-category">cafe</div>
              <div className="section-title">noki</div>
              <div className="description">
              子どもたちの声を楽しみながら、こだわりのコーヒーとホットサンドやデザートでお迎えするカフェ。収益の一部は学童保育運営に充てられます。
              </div>
              <div className="social-link-container">
              <a 
                href="https://www.instagram.com/forktoyama/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
              <img 
                src={IMAGES.logo.vec}
                alt="arrow"
                className="arrow-icon"
              />
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
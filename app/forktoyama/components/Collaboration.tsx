'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

const Collaboration = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="natural-architecture" className="natural-architecture-bg relative">
      <div className="section-container">
        {/* Left Column - Sticky Text */}
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">コラボレーション</div>
            <div className="section-title">多様な才能と出会える場</div>
            <div className="description">
              forkには、いろんな体験を手土産に多様な大人が訪れます。企業から個人まで、デジタルからアナログまで。子どもたちの関心や才能に出会える機会をみんなでつくっています。
            </div>
            <div className="social-link-containers">
              <a 
                href="/info?tag=work-shop" 
                className="social-link"
              >
                事例をみる
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
              <div className="section-category">コラボレーション</div>
              <div className="section-title">多様な才能と出会える場</div>
              <div className="description">
                forkには、いろんな体験を手土産に多様な大人が訪れます。企業から個人まで、デジタルからアナログまで。子どもたちの関心や才能に出会える機会をみんなでつくっています。
              </div>
              <div className="social-link-containers">
                <a 
                  href="/info?tag=tie-up" 
                  className="social-link"
                >
                  事例をみる
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
                src={IMAGES.forktoyama.fork8} 
                alt="建築写真1" 
                className="responsive-image"
              />
            </div>

            {/* Photo 2 */}
            <div className="image-block photo-block">
              <img 
                src={IMAGES.forktoyama.fork9}
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

export default Collaboration;
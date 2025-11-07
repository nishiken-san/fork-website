

'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

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
            <div className="section-category">コワーキング</div>
            <div className="section-title">大人も子供も入り混じるコワーキングスペース</div>
            <div className="description">
            築70年以上経つ古民家をリノベーションして生まれたforkは、子どもたちにおもしろい大人と出会える場でありたい。そのきっかけのひとつとしてコワーキングスペースを運営しています。サポーター登録されている方を対象に1日1組限定で貸し出している「和」なワークスペース、ぜひご利用ください。
            </div>
            <div className="button-section">
                {/* あとでリンク変える */}
                <a
                  href="/about"  
                  className="about-button"
                >
                  予約フォーム
                </a>
              </div>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="right-column">
          
          {/* Mobile Text Section */}
          <div className="mobile-text-section">
            <div className="content-area">
              <div className="section-category">コワーキング</div>
              <div className="section-title">大人も子供も入り混じるコワーキングスペース</div>
              <div className="description">
              築70年以上経つ古民家をリノベーションして生まれたforkは、子どもたちにおもしろい大人と出会える場でありたい。そのきっかけのひとつとしてコワーキングスペースを運営しています。サポーター登録されている方を対象に1日1組限定で貸し出している「和」なワークスペース、ぜひご利用ください。
              </div>
              <div className="button-section">
                {/* あとでリンク変える */}
                <a
                  href="/about"  
                  className="about-button"
                >
                  予約フォーム
                </a>
              </div>
            </div>
          </div>
          
          <div className="images-container mobile-photos">
            {/* Photo 1 */}
            <div className="image-block photo-block">
              <img 
                src="/images/pic1.jpg" 
                alt="建築写真1" 
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
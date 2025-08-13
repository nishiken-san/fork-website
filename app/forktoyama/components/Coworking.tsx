// 'use client';

// import { useRef } from 'react';
// import { useSectionSticky } from '../../hooks/useSectionSticky';

// const Structure = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const { isSticky } = useSectionSticky(sectionRef, contentRef);

//   return (
//     <section ref={sectionRef} id="natural-architecture" className="natural-architecture-bg relative">
//       <div className="section-container">
//         {/* Left Column - Sticky Text */}
//         <div ref={contentRef} className="left-column">
//           <div className="content-area">
//             <div className="section-category">建物</div>
//             <div className="section-title">自然とあそぶ建築</div>
//             <div className="description">
//             forkの施設は地域に根ざして教育に取り組んできた旧家のお屋敷をリノベーションした建物です。富山県産の木材をふんだんに使用した床や壁は、学童保育を利用する親子がワークショップで仕上げました。広い庭は子どもたちの想像力が全開にできる場所。季節に合わせてさまざまな遊びを楽しんでいます
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Images */}
//         <div className="right-column">
//           <div className="images-container">
//             {/* Map/Floor Plan */}
//             <div className="image-block map-block">
//               <img 
//                 src="/images/map.jpg" 
//                 alt="建物配置図" 
//                 className="responsive-image"
//               />
//             </div>

//             {/* Photo 1 */}
//             <div className="image-block photo-block">
//               <img 
//                 src="/images/pic1.jpg" 
//                 alt="建築写真1" 
//                 className="responsive-image"
//               />
//             </div>

//             {/* Photo 2 */}
//             <div className="image-block photo-block">
//               <img 
//                 src="/images/pic2.jpg" 
//                 alt="建築写真2" 
//                 className="responsive-image"
//               />
//             </div>

//             {/* Photo 3 */}
//             <div className="image-block photo-block">
//               <img 
//                 src="/images/pic3.jpg" 
//                 alt="建築写真3" 
//                 className="responsive-image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Structure;

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
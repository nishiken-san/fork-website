// app/about/components/PrivateSection.tsx
'use client';

import { useRef } from 'react';

const PrivateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} id="private" className="private-main-bg">
      <div className="private-section-container">
        {/* 左側: Stickyタイトル（PC: 1/3幅、モバイル: 全幅） */}
        <div className="private-left-column">
          <div className="private-sticky-header">
            <div className="private-label">potential created by "MINEI"</div>
            <h2 className="private-title">みん営がひらく可能性</h2>
          </div>
        </div>

        {/* 右側: コンテンツ（PC: 2/3幅、モバイル: 全幅） */}
        <div ref={contentRef} className="private-right-column">
          <div className="private-content-area">
            
            {/* カード1 */}
            <div className="private-card">
              <div className="private-card-header">
                <div className="private-card-number">1</div>
                <h3 className="private-card-title">"はたらく"をひらく</h3>
              </div>
              <p className="private-card-text">
                家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の"はたらく"に自由な選択肢が生まれます。
              </p>
            </div>

            {/* カード2 */}
            <div className="private-card">
              <div className="private-card-header">
                <div className="private-card-number">2</div>
                <h3 className="private-card-title">"そだてる"をひらく</h3>
              </div>
              <p className="private-card-text">
                経済的・地理的な制約にとらわれず、子どもの能力や価値観を広げる機会をつくることで、“そだてる”ことにあたらしいチャンスが生まれます。
              </p>
            </div>

            {/* カード3 */}
            <div className="private-card">
              <div className="private-card-header">
                <div className="private-card-number">3</div>
                <h3 className="private-card-title">"くらす"をひらく</h3>
              </div>
              <p className="private-card-text">
                “はたらく”と“そだてる”がもっと自由になることで、自分の暮らしたい街で暮らすこと、好きな場所で生きることができるようになります。
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateSection;
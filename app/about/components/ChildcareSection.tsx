// app/about/components/ChildcareSection.tsx
'use client';

import { useRef } from 'react';
import { IMAGES } from '../../../constants/images';

const ChildcareSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style jsx>{`
        .childcare-content-area {
          padding-bottom: 60px;
        }
        
        @media (max-width: 768px) {
          .childcare-content-area {
            padding-bottom: 60px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="childcare" className="childcare-main-bg">
        <div className="childcare-section-container">
          {/* 左側: Stickyタイトル（PC: 1/3幅、モバイル: 全幅） */}
          <div className="childcare-left-column">
            <div className="childcare-sticky-header">
              <div className="minei-label">"MINEI"</div>
              <h2 className="childcare-title">子育てを「みん営」化する。</h2>
            </div>
          </div>

          {/* 右側: コンテンツ（PC: 2/3幅、モバイル: 全幅） */}
          <div ref={contentRef} className="childcare-right-column">
            <div className="childcare-content-area">
              <div className="childcare-text-block">
                <p className="childcare-paragraph">
                  子どもが育つ上でもっとも大切なことは何か。私たちは「選択肢との出会い」だと思っています。
                </p>
                
                <p className="childcare-paragraph">
                  世の中を見てみると住む場所や家庭環境、周囲の人間関係によって選べる生き方が決まっていることがほとんど。<br />
                  「地方だから」「余裕がないから」「みんながそうしてるから」<br />
                  選択肢を諦める理由は山ほどあります。
                </p>
                
                <p className="childcare-paragraph">
                  もし、どこに生まれても関係なく生き方の選択肢に出会える仕組みで、そんな「諦める理由」を乗り越えることができたら？
                </p>
                
                <p className="childcare-paragraph">
                  「あのときの出会いがあったから、いまの自分がある」10年後、20年後、そう誇らしげに語る若者の未来を一緒につくりませんか？
                </p>
              </div>
              
              {/* 画像 */}
              <div className="childcare-image-container">
                {/* PC用画像 */}
                <img
                  src={IMAGES.about.childcarePeople}
                  alt="子育て支援に関わる人々のイラスト"
                  className="childcare-image"
                />
                {/* モバイル用画像 */}
                <img
                  src={IMAGES.about.childcarePeoplemini}
                  alt="子育て支援に関わる人々のイラスト"
                  className="childcare-image-mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChildcareSection;
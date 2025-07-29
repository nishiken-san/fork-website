// app/about/components/ChildcareSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES, IMAGE_ALT_TEXTS } from '../../../constants/images';

const ChildcareSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && leftColumnRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // セクションに入ったらsticky開始
        const shouldStartSticky = scrollY >= sectionTop - 80;
        // セクション終了でsticky解除
        const shouldEndSticky = scrollY >= sectionTop + sectionHeight - windowHeight + 80;
        
        setIsSticky(shouldStartSticky && !shouldEndSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .childcare-bg {
          background-color: #E7EBE7;
        }
        .sticky-left-header {
          position: fixed;
          top: 80px;
          left: 0;
          width: 33.333333%;
          z-index: 20;
          background-color: #E7EBE7;
          padding: 1rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          height: auto;
          transition: none;
        }
        .normal-header {
          padding: 1rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          height: auto;
          transition: none;
        }
        .minei-text {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .horizontal-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.4;
        }
        @media (min-width: 1024px) {
          .horizontal-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="childcare" className="childcare-bg relative">
        <div className="flex">
          <div className="w-1/3 childcare-bg p-8 lg:p-12">
            <div className={isSticky ? 'sticky-left-header' : 'normal-header'}>
              <div className="minei-text">"MINEI"</div>
              <h2 className="horizontal-title">
                子育てを「みん営」化する。
              </h2>
            </div>
          </div>
          <div ref={leftColumnRef} className="w-2/3 childcare-bg">
            <div className="py-16 px-8 lg:px-16">
              <div className="space-y-6 mb-12">
                <p className="leading-relaxed" style={{ color: '#003705', fontSize: '0.7em' }}>
                  子どもが育つ上でもっとも大切なことは何か。私たちは「選択肢との出会い」だと思っています。
                </p>
                
                <p className="leading-relaxed" style={{ color: '#003705', fontSize: '0.7em' }}>
                  世の中を見てみると住む場所や家庭環境、周囲の人間関係によって選べる生き方が決まっていることがほとんど。<br />
                  「地方だから」「余裕がないから」「みんながそうしてるから」<br />
                  選択肢を諦める理由は山ほどあります。
                </p>
                
                <p className="leading-relaxed" style={{ color: '#003705', fontSize: '0.7em' }}>
                  もし、どこに生まれても関係なく生き方の選択肢に出会える仕組みで、そんな「諦める理由」を乗り越えることができたら？
                </p>
                
                <p className="leading-relaxed" style={{ color: '#003705', fontSize: '0.7em' }}>
                  「あのときの出会いがあったから、いまの自分がある」10年後、20年後、そう誇らしげに語る若者の未来を一緒につくりませんか？
                </p>
              </div>
              
              {/* 人が集まっている画像 */}
              <div className="mt-8">
                <img
                  src={IMAGES.about.childcarePeople}
                  alt="子育て支援に関わる人々のイラスト"
                  className="w-full max-w-4xl mx-auto h-auto"
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
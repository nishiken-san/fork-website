// app/about/components/AboutMainSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

const AboutMainSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && rightColumnRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const rightColumnHeight = rightColumnRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // セクションに入ったらsticky開始
        const shouldStartSticky = scrollY >= sectionTop - 80;
        // 右側コンテンツが全て表示されたらsticky終了
        const shouldEndSticky = scrollY >= sectionTop + rightColumnHeight - windowHeight + 80;
        
        setIsSticky(shouldStartSticky && !shouldEndSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .section-bg {
          background-color: #003705;
        }
        .sticky-header {
          position: fixed;
          top: 80px;
          right: 0;
          width: 33.333333%;
          z-index: 20;
          background-color: #003705;
          padding: 2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: auto;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          text-align: right;
          color: white;
          font-size: 2rem;
          font-weight: 300;
          line-height: 1.5;
        }
        @media (min-width: 1024px) {
          .vertical-text {
            font-size: 2.25rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="about-us" className="section-bg relative">
        <div className="flex">
          <div ref={rightColumnRef} className="w-2/3">
            <div className="py-16 px-8 lg:px-16">
              <p className="text-sm font-light text-white/70 tracking-widest mb-8">about us</p>
              <p className="text-lg lg:text-xl text-white/90 font-light leading-relaxed mb-8">
              forkとは「選択肢」のこと。<br />
              社会全体で子育てする仕組みづくりを考え、大人も子どもも自分らしい生き方を選べる社会の実現を目指します。
              </p>
            
            </div>
          </div>
          <div className="w-1/3 section-bg p-8 lg:p-12">
            <div className={isSticky ? 'sticky-header' : 'flex items-center justify-end h-full'}>
              <h2 className="vertical-text">
                わたしたちについて
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMainSection;
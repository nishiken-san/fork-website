

// app/components/AboutUsSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

const AboutUsSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [shouldUnstick, setShouldUnstick] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
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
        const shouldStartSticky = scrollY >= sectionTop - 100;
        // 右側コンテンツの終わりに近づいたらsticky終了
        const shouldEndSticky = scrollY >= sectionTop + rightColumnHeight - windowHeight + 100;
        
        setIsSticky(shouldStartSticky);
        setShouldUnstick(shouldEndSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="flex">
        
        {/* 左側カラム - 1/3幅 sticky sidebar */}
        <div className="w-1/3 bg-gradient-to-br from-green-800 to-green-900">
          <div 
            ref={leftColumnRef}
            className={`transition-all duration-200 ${
              isSticky && !shouldUnstick 
                ? 'sticky top-0 h-screen' 
                : shouldUnstick 
                ? 'relative' 
                : 'h-screen'
            }`}
          >
            <div className="flex items-start pt-20 pl-8 lg:pl-12 h-full">
              <h2 
                className="text-2xl lg:text-3xl font-light text-white leading-loose"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                わたしたちについて
              </h2>
            </div>
          </div>
        </div>
        
        {/* 右側カラム - 2/3幅 通常スクロール */}
        <div className="w-2/3 bg-gradient-to-br from-green-800 to-green-900">
          <div className="min-h-screen p-8 lg:p-16 flex flex-col justify-center">
            
            {/* About Us ヘッダー */}
            <div className="mb-8">
              <p className="text-sm font-light text-white/70 tracking-widest mb-6">
                about us
              </p>
              <h2 className="text-2xl lg:text-3xl font-light text-white mb-6 leading-relaxed">
                forkとは「選択肢」のこと。
              </h2>
              <p className="text-base lg:text-lg text-white/90 font-light leading-relaxed">
                社会全体で子育てする仕組みづくりを考え、大人も子どもも自分らしい生き方を選べる社会の実現を目指します。
              </p>
            </div>
            
            {/* 人物イラスト画像 */}
            <div className="mb-8">
              <img
                src="/images/about/silhouette.png"
                alt="多様な人々のシルエット"
                className="w-full max-w-4xl mx-auto h-auto"
              />
            </div>
            
            {/* もっと詳しく ボタン */}
            <div className="text-center">
              <button className="bg-white text-gray-800 px-8 py-3 font-light text-sm tracking-wider hover:bg-gray-100">
                もっと詳しく
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
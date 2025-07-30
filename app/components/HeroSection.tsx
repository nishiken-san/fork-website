// app/components/HeroSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { IMAGES } from '@/constants/images';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // パララックス効果の計算
  const parallaxOffset = scrollY * 0.5; // 背景画像を通常の半分の速度で移動
  const textOffset = scrollY * 0.2; // テキストを背景よりもゆっくり移動

  return (
    <section 
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      {/* パララックス背景画像 */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform',
        }}
      >
        {/* 背景画像 - 実際の画像に置き換えてください */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.hero.background}')`,
            backgroundPosition: 'center center',
          }}
        />
        
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-green-800/40" />
      </div>

      {/* コンテンツ */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white"
        style={{
          transform: `translateY(${textOffset}px)`,
          willChange: 'transform',
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* メインタイトル */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider mb-4">
              fork
            </h1>
            
            {/* フォークの装飾 */}
            <div className="absolute -top-4 -right-8 md:-right-16 lg:-right-24 opacity-80">
              <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 relative">
                {/* フォークの柄 */}
                <div className="absolute bottom-0 left-1/2 w-0.5 md:w-1 h-8 md:h-12 lg:h-16 bg-white transform -translate-x-1/2" />
                {/* フォークの歯 */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-0.5 md:space-x-1">
                  <div className="w-0.5 h-4 md:h-6 lg:h-8 bg-white" />
                  <div className="w-0.5 h-4 md:h-6 lg:h-8 bg-white" />
                  <div className="w-0.5 h-4 md:h-6 lg:h-8 bg-white" />
                </div>
              </div>
            </div>
          </div>
          
          {/* サブタイトル・メッセージ */}
          <div className="space-y-1 mb-12 opacity-90">
            <p className="text-lg md:text-xl lg:text-2xl font-light">未来を切り開く</p>
            <p className="text-lg md:text-xl lg:text-2xl font-light">新しい働き方を</p>
            <p className="text-lg md:text-xl lg:text-2xl font-light">みんなで創る</p>
          </div>
          
          {/* 追加メッセージ */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-base md:text-lg font-light leading-relaxed opacity-80">
              あなたの可能性を最大限に引き出し、<br className="hidden md:block" />
              共に成長できる環境を提供します
            </p>
          </div>
          
          {/* CTA ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              私たちについて
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-900 transition-all duration-300">
              お問い合わせ
            </button>
          </div>
        </div>
        
        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-xs mt-2 tracking-wider font-light">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
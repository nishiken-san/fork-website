// app/components/ForkTitleSection.tsx
'use client';

const ForkTitleSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        
        {/* メインコンテンツエリア */}
        <div className="relative">
          
          {/* Fork タイトル画像 */}
          <div className="relative flex items-center justify-center">
            {/* 用意していただくfork文字画像 */}
            <img
              src="/images/hero/fork-title.png"
              alt="Fork"
              className="w-full max-w-4xl h-auto"
            />
            
            {/* PC版: 右側の5本線フォーク画像 */}
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
              <img
                src="/images/hero/fork-illustration-pc.png"
                alt="Fork illustration"
                className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-contain"
              />
            </div>
            
            {/* モバイル版: 下側の5本線フォーク画像 */}
            <div className="block md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <img
                src="/images/hero/fork-illustration-mobile.png"
                alt="Fork illustration"
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
              />
            </div>
            
            {/* 青い破線（画像で見える縦線） - PC版のみ */}
            <div className="hidden md:block absolute top-0 right-1/4 w-0.5 h-full">
              <div 
                className="w-full h-full bg-blue-400"
                style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #60a5fa 0px, #60a5fa 8px, transparent 8px, transparent 16px)',
                }}
              />
            </div>
          </div>
          
          {/* テキストコンテンツ */}
          <div className="absolute bottom-8 left-0 text-white max-w-md z-10">
            <div className="space-y-2 text-sm md:text-base font-light leading-relaxed">
              <p>"はたらく"と</p>
              <p>"そだてる"を</p>
              <p>もっと自由にする。</p>
              <p>みんなで生きる。</p>
              <p>あたらしい未来を創造</p>
            </div>
          </div>
          
          {/* 右下のロゴ */}
          <div className="absolute bottom-8 right-0 z-10">
            <span className="text-white text-xs font-light tracking-widest opacity-60">
              scroll
            </span>
          </div>
        </div>
      </div>
      
      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-1 h-1/2 bg-white transform rotate-12" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1/3 bg-white transform -rotate-12" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1/4 bg-white transform rotate-45" />
      </div>
    </section>
  );
};

export default ForkTitleSection;
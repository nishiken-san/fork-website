// app/components/NewsSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: string;
}

const NewsSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // サンプルデータ
  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: '2024.03.15',
      title: 'WEBサイトリニューアルしました',
      content: 'WEBサイトリニューアルしました。',
      category: 'お知らせ'
    },
    {
      id: '2',
      date: '2024.03.10',
      title: '今後の作品企画を発表しました',
      content: '今後の作品企画を発表しました。',
      category: 'お知らせ'
    },
    {
      id: '3',
      date: '2024.02.28',
      title: 'プロジェクト実績を更新',
      content: 'プロジェクト実績を更新しました。新しい取り組みについてご報告いたします。',
      category: '記録'
    },
    {
      id: '4',
      date: '2024.02.15',
      title: 'チームメンバー追加',
      content: 'チームメンバーを追加しました。より充実したサービスを提供してまいります。',
      category: '記録'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && headerRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const headerHeight = headerRef.current.offsetHeight;
        const scrollY = window.scrollY;
        
        // セクションに入ったら固定開始
        const shouldStick = scrollY >= sectionTop - 100;
        // セクションを出たら固定終了
        const shouldUnstick = scrollY >= sectionTop + sectionHeight - headerHeight - 100;
        
        setIsSticky(shouldStick && !shouldUnstick);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* 左側: お知らせリンク（通常スクロール） */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                最新情報
              </h2>
              
              <div className="space-y-4">
                {newsItems.slice(0, 3).map((item) => (
                  <div key={item.id} className="border-l-4 border-green-500 pl-4">
                    <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                    <h3 className="text-base font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <a 
                  href="#" 
                  className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  すべてのお知らせ →
                </a>
              </div>
            </div>
          </div>
          
          {/* 右側: 固定表示エリア */}
          <div className="lg:col-span-9">
            <div className="relative">
              
              {/* 固定ヘッダー */}
              <div 
                ref={headerRef}
                className={`bg-white border-b border-gray-200 transition-all duration-300 ${
                  isSticky ? 'fixed top-20 left-0 right-0 z-30 shadow-md' : 'relative'
                }`}
                style={isSticky ? { width: '100%' } : {}}
              >
                <div className={`${isSticky ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : ''}`}>
                  <div className={`${isSticky ? 'lg:ml-[25%]' : ''}`}>
                    <div className="flex items-center py-6">
                      {/* 縦書きの見出し */}
                      <div className="flex items-center space-x-8">
                        <h2 
                          className="text-2xl font-bold text-gray-900 writing-mode-vertical-rl text-orientation-mixed"
                          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                        >
                          お知らせ
                        </h2>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <h2 
                          className="text-2xl font-bold text-gray-900 writing-mode-vertical-rl text-orientation-mixed"
                          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                        >
                          記録
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* コンテンツエリア */}
              <div className={`${isSticky ? 'pt-24' : ''}`}>
                <div className="bg-white min-h-[800px] p-8">
                  <div className="space-y-8">
                    {newsItems.map((item) => (
                      <article key={item.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm text-gray-500">{item.date}</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
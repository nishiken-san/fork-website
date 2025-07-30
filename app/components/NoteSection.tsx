'use client';

const NoteSection = () => {
  const noteArticles = [
    {
      id: '1',
      date: '2024.03.20',
      title: '子育て支援の新しい形について考える',
      excerpt: '地域コミュニティと連携した子育て支援の取り組みについて...',
      category: 'コラム'
    },
    {
      id: '2',
      date: '2024.03.15',
      title: '学童保育での体験活動レポート',
      excerpt: '子どもたちが参加した地域交流イベントの様子をお伝えします...',
      category: '活動報告'
    },
    {
      id: '3',
      date: '2024.03.10',
      title: '働き方の多様性と子育ての両立',
      excerpt: '現代社会における働き方の変化と子育て環境について...',
      category: 'エッセイ'
    },
    {
      id: '4',
      date: '2024.03.05',
      title: '地域との連携プロジェクト始動',
      excerpt: '新しい地域連携プロジェクトの概要と今後の展開について...',
      category: 'ニュース'
    }
  ];

  return (
    <section className="relative bg-gray-50">
      <div className="flex">
        
        {/* 左側カラム - 1/3幅 */}
        <div className="w-1/3 bg-white p-8 lg:p-12">
          <h2 
            className="text-2xl lg:text-3xl font-light text-gray-800 leading-loose mb-8"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            note一覧
          </h2>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              私たちの活動や考えを
              記事として発信しています
            </p>
            <a 
              href="#" 
              className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              noteで読む →
            </a>
          </div>
        </div>
        
        {/* 右側カラム - 2/3幅 */}
        <div className="w-2/3 bg-gray-50">
          <div className="min-h-screen p-8 lg:p-16">
            
            <div className="grid gap-8">
              {noteArticles.map((article) => (
                <article key={article.id} className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    続きを読む →
                  </a>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors">
                すべての記事を見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteSection;
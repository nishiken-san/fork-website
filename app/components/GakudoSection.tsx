'use client';

const GakudoSection = () => {
  return (
    <section className="relative bg-white">
      <div className="flex">
        
        {/* 左側カラム - 1/3幅 */}
        <div className="w-1/3 bg-gray-50 p-8 lg:p-12">
          <h2 
            className="text-2xl lg:text-3xl font-light text-gray-800 leading-loose"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            学童保育
          </h2>
        </div>
        
        {/* 右側カラム - 2/3幅 */}
        <div className="w-2/3 bg-white">
          <div className="min-h-screen p-8 lg:p-16 flex flex-col justify-center">
            
            {/* ヘッダー */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                forktoyama
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                富山で学童保育事業を展開しています。
                子どもたちが安心して過ごせる環境づくりを目指し、
                地域コミュニティと連携した取り組みを行っています。
              </p>
            </div>
            
            {/* 詳細情報 */}
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">運営理念</h3>
                <p className="text-gray-700">
                  子どもたち一人ひとりの個性を大切にし、
                  安全で楽しい放課後の時間を提供します。
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">活動内容</h3>
                <p className="text-gray-700">
                  宿題サポート、体験活動、地域交流など、
                  多様なプログラムを通じて子どもたちの成長を支援します。
                </p>
              </div>
            </div>
            
            {/* ボタン */}
            <div>
              <button className="bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors">
                詳しく見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GakudoSection;
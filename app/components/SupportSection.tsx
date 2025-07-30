'use client';

const SupportSection = () => {
  return (
    <section className="relative bg-green-50">
      <div className="flex">
        
        {/* 左側カラム - 2/3幅 */}
        <div className="w-2/3 bg-white">
          <div className="min-h-screen p-8 lg:p-16 flex flex-col justify-center">
            
            {/* ヘッダー */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                サポート募集
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                私たちの活動を支援してくださる方を募集しています。
                様々な形でのサポートをお待ちしております。
              </p>
            </div>
            
            {/* サポート形式 */}
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ボランティア支援</h3>
                <p className="text-gray-700">
                  学童保育での活動サポート、イベントお手伝いなど、
                  時間を使った支援をお願いしています。
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">資金支援</h3>
                <p className="text-gray-700">
                  活動資金や施設改善費用など、
                  金銭的なサポートも受け付けています。
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">物品寄付</h3>
                <p className="text-gray-700">
                  教材、本、おもちゃなど、
                  子どもたちの活動に役立つ物品の寄付を募集しています。
                </p>
              </div>
            </div>
            
            {/* ボタン */}
            <div className="flex space-x-4">
              <button className="bg-green-600 text-white px-8 py-3 font-medium hover:bg-green-700 transition-colors">
                支援について問い合わせ
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 font-medium hover:bg-green-50 transition-colors">
                活動を見学する
              </button>
            </div>
          </div>
        </div>
        
        {/* 右側カラム - 1/3幅 */}
        <div className="w-1/3 bg-green-50 p-8 lg:p-12 flex items-center">
          <h2 
            className="text-2xl lg:text-3xl font-light text-gray-800 leading-loose"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            サポート募集
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
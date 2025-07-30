// app/components/Footer.tsx
'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-24 h-8 bg-green-600 rounded flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">fork</span>
            </div>
            <p className="text-gray-300 mb-4">
              革新的なソリューションを通じて、
              お客様のビジネスの成長を支援します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                🐙
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  私たちについて
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  ミッション
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-green-400 transition-colors">
                  チーム
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  ニュース
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  コンサルティング
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  システム開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  デザイン
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  サポート
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  連絡先
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  アクセス
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Fork Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                サイトマップ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
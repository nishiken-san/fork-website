// app/components/Footer.tsx
'use client';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-2 mb-8">
          <div>
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              ＞ top
            </a>
          </div>
          <div>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors">
              ＞ わたしたちについて
            </a>
          </div>
          <div>
            <a href="/effort" className="text-white hover:text-gray-300 transition-colors">
              ＞ とりくみ
            </a>
          </div>
          <div>
            <a href="/supporter" className="text-white hover:text-gray-300 transition-colors">
              ＞ サポーター
            </a>
          </div>
          <div>
            <a href="/info" className="text-white hover:text-gray-300 transition-colors">
              ＞ おしらせ
            </a>
          </div>
          <div>
            <a href="/forktoyama" className="text-white hover:text-gray-300 transition-colors">
              ＞ お問い合わせ
            </a>
          </div>
        </div>
        
        <div className="border-t border-green-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              © fork toyama, 2024
            </p>
            <div className="flex flex-col space-y-2 text-right">
              <a href="#" className="text-white hover:text-gray-300 text-sm transition-colors">
                Instagram →
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-sm transition-colors">
                note →
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// app/components/ForkTitleSection.tsx
'use client';

import { useEffect, useState } from 'react';

interface ForkTitleSectionProps {
  backgroundColor?: 'green' | 'beige' | 'parallax';
  parallaxImage?: string;
  scrollImage?: string;
}

const ForkTitleSection: React.FC<ForkTitleSectionProps> = ({ 
  backgroundColor = 'green',
  parallaxImage,
  scrollImage = '/images/top/scroll.png'
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getBackgroundStyle = () => {
    switch (backgroundColor) {
      case 'green':
        return { backgroundColor: '#003705' };
      case 'beige':
        return { backgroundColor: '#E7EBE7' };
      case 'parallax':
        return {
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        };
      default:
        return { backgroundColor: '#003705' };
    }
  };

  const scrollToNext = () => {
    const section = document.querySelector('.fork-title-section');
    if (section) {
      const sectionHeight = section.getBoundingClientRect().height;
      window.scrollTo({
        top: sectionHeight,
        behavior: 'smooth'
      });
    }
  };

  /* ============================================
   * 微調整用パラメータ一覧
   * ============================================
   * 
   * 【セクション全体】
   * - height: 850px (モバイル: 750px) → セクションの高さ
   * 
   * 【forkロゴ】
   * - top: 40px → 上からの距離
   * - width: 832px → ロゴの幅
   * - height: 347px → ロゴの高さ（五本線位置計算に使用）
   * 
   * 【五本線イラスト】
   * - top: 213px → 上からの距離（fork上端40px + fork高さ347px/2 = 213.5px）
   * - right: 0〜50px → 右からの距離（画面幅で変動）
   * - width: 743px → イラストの幅
   * 
   * 【テキスト】
   * - left: 50px (モバイル: 30px, 小型: 20px) → 左からの距離
   * - bottom: 45px → 下端からの距離
   * - font-size: 20px → 文字サイズ（固定）
   * - font-weight: 700 → 文字の太さ
   * - line-height: 1.8 → 行間
   * 
   * 【scrollボタン】
   * - right: 50px (モバイル: 30px, 小型: 20px) → 右からの距離
   * - bottom: 40px → 下端からの距離
   * - width: 41px, height: 36px → ボタンサイズ
   * ============================================ */

  return (
    <>
    <style jsx global>{`
        html, body {
          background-color: #003705 !important;
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        .fork-title-section {
          position: relative;
          width: 100%;
          height: 850px; /* 【調整】セクション高さ */
          overflow: hidden;
        }
        
        /* forkロゴ - 中央配置、上から40px */
        .fork-logo {
          position: absolute;
          top: 40px; /* 【調整】forkロゴの上からの距離 */
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          width: 832px; /* 【調整】forkロゴの幅 */
          height: auto;
          max-width: 90%;
        }
        
        /* 5本線イラスト - 上端がforkの半分位置（40px + 347px/2 = 213px） */
        .fork-illustration {
          position: absolute;
          top: 213px; /* 【調整】五本線の上からの距離 */
          right: 0; /* 【調整】五本線の右からの距離 */
          z-index: 15;
          width: 743px; /* 【調整】五本線の幅 */
          height: auto;
        }
        
        /* テキストコンテンツ - 左下固定 */
        .text-content {
          position: absolute;
          left: 50px; /* 【調整】テキストの左からの距離 */
          bottom: 45px; /* 【調整】テキストの下端からの距離 */
          color: #FFFFFF;
          z-index: 20;
        }
        
        .text-line {
          font-size: 20px; /* 【調整】テキストサイズ（固定） */
          font-weight: 700; /* 【調整】テキストの太さ */
          line-height: 1.8; /* 【調整】行間 */
          margin: 0;
          letter-spacing: 0.05em; /* 【調整】字間 */
        }
        
        /* scrollボタン - 右下固定 */
        .scroll-button {
          position: absolute;
          right: 50px; /* 【調整】scrollの右からの距離 */
          bottom: 40px; /* 【調整】scrollの下端からの距離 */
          background: none;
          border: none;
          cursor: pointer;
          z-index: 30;
          padding: 0;
          outline: none;
        }
        
        .scroll-button:hover {
          opacity: 0.7;
        }
        
        .scroll-icon {
          width: 41px; /* 【調整】scrollアイコンの幅 */
          height: 36px; /* 【調整】scrollアイコンの高さ */
          object-fit: contain;
        }
        
        /* ==================== レスポンシブ設定 ==================== */
        
        /* 1700px以上 */
        @media (min-width: 1700px) {
          .fork-illustration {
            right: 50px; /* 【調整】1700px以上での右位置 */
          }
        }
        
        /* 1400px〜1699px */
        @media (min-width: 1400px) and (max-width: 1699px) {
          .fork-illustration {
            right: 0; /* 【調整】1400-1699pxでの右位置 */
          }
        }
        
        /* 1000px〜1399px */
        @media (min-width: 1000px) and (max-width: 1399px) {
          .fork-illustration {
            right: -100px; /* 【調整】1000-1399pxでの右位置 */
          }
        }
        
        /* 769px〜999px */
        @media (min-width: 769px) and (max-width: 999px) {
          .fork-illustration {
            right: -100px; /* 【調整】769-999pxでの右位置 */
            width: 600px; /* 【調整】769-999pxでの五本線幅 */
            top: 100px; /* 【調整】769-999pxでの上位置 */
          }
          
          .fork-logo {
            width: 730px; /* 【調整】769-999pxでのforkロゴ幅 */
          }
        }
        
        /* モバイル: 768px以下 */
        @media (max-width: 768px) {
          .fork-title-section {
            height: 750px; /* 【調整】モバイルでのセクション高さ */
          }
          
          .fork-logo {
            width: 330px; /* 【調整】モバイルでのforkロゴ幅 */
            top: 100px; /* 【調整】モバイルでのfork上位置 */
          }
          
          .fork-illustration {
            width: 460px; /* 【調整】モバイルでの五本線幅 */
            right: 30px;
            left: auto; /* 【調整】モバイルでの五本線左位置 */
            top: 100px; /* 【調整】モバイルでの五本線上位置 */
          }
          
          .text-content {
            left: 30px; /* 【調整】モバイルでのテキスト左位置 */
            bottom: 45px;
          }
          
          .scroll-button {
            right: 30px; /* 【調整】モバイルでのscroll右位置 */
            bottom: 40px;
          }
        }
        
        /* 小型モバイル: 480px以下 */
        @media (max-width: 480px) {
          .fork-logo {
            width: 280px; /* 【調整】小型モバイルでのforkロゴ幅 */
          }
          
          .fork-illustration {
            width: 400px; /* 【調整】小型モバイルでの五本線幅 */
            left: -30px; /* 【調整】小型モバイルでの五本線左位置 */
          }
          
          .text-content {
            left: 20px; /* 【調整】小型モバイルでのテキスト左位置 */
          }
          
          .scroll-button {
            right: 20px; /* 【調整】小型モバイルでのscroll右位置 */
          }
        }
        
        /* 390px以下 */
        @media (max-width: 390px) {
          .fork-logo {
            width: 260px; /* 【調整】390px以下でのforkロゴ幅 */
          }
          
          .fork-illustration {
            width: 350px; /* 【調整】390px以下での五本線幅 */
            left: -40px; /* 【調整】390px以下での五本線左位置 */
          }
        }
      `}</style>
      
      <section 
        className="fork-title-section"
        style={{
          ...getBackgroundStyle(),
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.3s ease-in'
        }}
      >
        {/* forkロゴ - 中央配置、上から40px */}
        <img
          src="/images/hero/fork-logo.png"
          alt="Fork"
          className="fork-logo"
        />
        
        {/* 5本線イラスト - 文字より手前（z-index: 15） */}
        <img
          src="/images/hero/fork-illustration-pc.png"
          alt="Fork illustration"
          className="fork-illustration"
        />

        {/* テキストコンテンツ - 左下、下端から45px */}
        <div className="text-content">
          <p className="text-line">&quot;はたらく&quot;と</p>
          <p className="text-line">&quot;そだてる&quot;を</p>
          <p className="text-line">もっと自由にする。</p>
          <p className="text-line">みんなで営む、</p>
          <p className="text-line">あたらしい学童保育</p>
        </div>

        {/* scrollボタン - 右下、下端から40px */}
        <button
          onClick={scrollToNext}
          className="scroll-button"
          aria-label="次のセクションへスクロール"
        >
          <img
            src={scrollImage}
            alt="scroll"
            className="scroll-icon"
          />
        </button>
      </section>
    </>
  );
};

export default ForkTitleSection;
// app/components/ForkTitleSection.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './ForkTitleSection.module.css';

/* ============================================
 * ヒーローセクション
 * ============================================
 * 
 * 【高さ】
 * - calc(100dvh - 70px): 画面高さからヘッダー分を引く
 * - ヘッダー高さはCSS変数 --header-height で管理
 * - min-height: 550pxでコンテンツが収まる最小高さを確保
 * 
 * 【調整方法】
 * ForkTitleSection.module.css で調整
 * - --header-height: ヘッダーの高さ（70px）
 * 
 * ============================================ */

interface ForkTitleSectionProps {
  scrollImage?: string;
}

const ForkTitleSection: React.FC<ForkTitleSectionProps> = ({ 
  scrollImage = '/images/top/scroll.png'
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 初期表示のフェードイン
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    // ヘッダー高さを考慮してスクロール
    const headerHeight = 70;
    const sectionHeight = window.innerHeight - headerHeight;
    window.scrollTo({
      top: sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className={styles.section}
      style={{
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.3s ease-in'
      }}
    >
      {/* forkロゴ - 中央上部 */}
      <img
        src="/images/hero/fork-logo.png"
        alt="Fork"
        className={styles.logo}
      />
      
      {/* 五本線イラスト - PC/モバイルで画像切り替え */}
      <picture>
        {/* モバイル用（768px以下） */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/hero/fork-illustration-mobile.png"
        />
        {/* PC用（デフォルト） */}
        <img
          src="/images/hero/fork-illustration-pc.png"
          alt="Fork illustration"
          className={styles.illustration}
        />
      </picture>

      {/* テキストコンテンツ - 左下 */}
      <div className={styles.textContent}>
        <p className={styles.textLine}>&quot;はたらく&quot;と</p>
        <p className={styles.textLine}>&quot;そだてる&quot;を</p>
        <p className={styles.textLine}>もっと自由にする。</p>
        <p className={styles.textLine}>みんなで営む、</p>
        <p className={styles.textLine}>あたらしい学童保育</p>
      </div>

      {/* scrollボタン - 右下 */}
      <button
        onClick={scrollToNext}
        className={styles.scrollButton}
        aria-label="次のセクションへスクロール"
      >
        <img
          src={scrollImage}
          alt="scroll"
          className={styles.scrollIcon}
        />
      </button>
    </section>
  );
};

export default ForkTitleSection;
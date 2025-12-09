// app/components/LenisProvider.tsx
'use client';

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';

/* ============================================
 * Lenis スムーススクロール設定
 * ============================================
 * 
 * duration: 1.2 → スクロールの滑らかさ（秒）
 *   - 小さいほどネイティブに近い
 *   - 大きいほど滑らか（重くなる可能性）
 * 
 * easing: easeOutQuint → イージング関数
 *   - 参考サイト風の自然な減速
 * 
 * wheelMultiplier: 1.0 → ホイール感度
 *   - 小さいと遅い、大きいと速い
 * 
 * touchMultiplier: 2.0 → タッチ感度
 *   - モバイルでの操作感調整
 * 
 * ============================================ */

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export const useLenis = () => useContext(LenisContext);

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Lenis インスタンス作成
    const lenis = new Lenis({
      duration: 1.2,           // 【調整】スクロールの滑らかさ
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,    // 【調整】ホイール感度
      touchMultiplier: 2.0,    // 【調整】タッチ感度
      infinite: false,
    });

    lenisRef.current = lenis;

    // アニメーションフレームでLenisを更新
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // html要素にクラスを追加（CSS用）
    document.documentElement.classList.add('lenis', 'lenis-smooth');

    // クリーンアップ
    return () => {
      lenis.destroy();
      lenisRef.current = null;
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
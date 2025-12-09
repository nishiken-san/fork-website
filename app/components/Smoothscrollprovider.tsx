// app/components/SmoothScrollProvider.tsx
'use client';

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react';

// Lenisのスクロール値を他コンポーネントから参照するためのContext
interface ScrollContextType {
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: 0 });

export const useScrollContext = () => useContext(ScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * サイト全体に慣性スクロールを適用するプロバイダー
 * 
 * 【調整パラメータ】
 * - lerp: 0.1 → 補間係数（小さいほどふわっと、0.05〜0.15推奨）
 * - duration: 1.2 → アニメーション時間（秒）
 * - smoothWheel: true → マウスホイールのスムース化
 * - smoothTouch: false → タッチデバイスは無効（パフォーマンス考慮）
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // 動的インポートでLenisを読み込み（軽量化）
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        
        lenisRef.current = new Lenis({
          lerp: 0.1,           // 【調整】補間係数（0.05〜0.15）
          duration: 1.2,       // 【調整】継続時間
          smoothWheel: true,   // マウスホイールスムース化
          touchMultiplier: 2,  // タッチ感度
          infinite: false,     // 無限スクロール無効
        });

        // アニメーションループ
        function raf(time: number) {
          lenisRef.current?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

      } catch (error) {
        console.log('Lenis not available, using native scroll');
      }
    };

    initLenis();

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
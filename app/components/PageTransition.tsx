// app/components/PageTransition.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = () => {
  const pathname = usePathname();

  useEffect(() => {
    // ▼ 対象IDを 'page-wrapper' に変更
    const wrapper = document.getElementById('page-wrapper');
    if (!wrapper) return;

    // ページ遷移時：一旦loadingに戻す
    wrapper.classList.remove('page-loaded');
    wrapper.classList.add('page-loading');
    
    // インラインスタイルもリセット（念の為）
    wrapper.style.opacity = '0';
    wrapper.style.visibility = 'hidden';

    // 少し遅延させてからフェードイン
    // 画像読み込みの時間を稼ぐため 100ms 程度確保するのがおすすめです
    const timer = setTimeout(() => {
      wrapper.classList.remove('page-loading');
      wrapper.classList.add('page-loaded');
      wrapper.style.opacity = '';
      wrapper.style.visibility = '';
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
};

export default PageTransition;
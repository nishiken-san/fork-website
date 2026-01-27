// app/components/PageTransition.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = () => {
  const pathname = usePathname();

  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    // ページ遷移時：一旦loadingに戻してからloadedに
    mainContent.classList.remove('main-content-loaded');
    mainContent.classList.add('main-content-loading');
    
    // インラインスタイルもリセット
    mainContent.style.opacity = '0';
    mainContent.style.visibility = 'hidden';

    // 少し遅延させてからフェードイン
    const timer = setTimeout(() => {
      mainContent.classList.remove('main-content-loading');
      mainContent.classList.add('main-content-loaded');
      mainContent.style.opacity = '';
      mainContent.style.visibility = '';
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]); // パスが変わるたびに実行

  return null;
};

export default PageTransition;
'use client';

import { useEffect } from 'react';

const PageTransition = () => {
  useEffect(() => {
    // DOMContentLoaded後にフェードイン
    const handleLoad = () => {
      document.body.classList.remove('page-loading');
      document.body.classList.add('page-loaded');
    };

    // 既に読み込み完了している場合
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // 少し遅延させて確実にスタイルが適用されてからフェードイン
    const timer = setTimeout(() => {
      document.body.classList.remove('page-loading');
      document.body.classList.add('page-loaded');
    }, 100);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default PageTransition;
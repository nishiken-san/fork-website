// app/components/PageTransition.tsx
'use client';

import { useEffect } from 'react';

const PageTransition = () => {
  useEffect(() => {
    const handleLoad = () => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.classList.remove('main-content-loading');
        mainContent.classList.add('main-content-loaded');
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const timer = setTimeout(() => {
      handleLoad();
    }, 100);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default PageTransition;
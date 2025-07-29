// hooks/useSectionSticky.ts
'use client';

import { useEffect, useState } from 'react';

export const useSectionSticky = (
  sectionRef: React.RefObject<HTMLDivElement>, 
  contentRef: React.RefObject<HTMLDivElement>
) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && contentRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // セクションに入ったらsticky開始
        const shouldStartSticky = scrollY >= sectionTop - 80;
        // セクションから出る前にsticky解除
        const shouldEndSticky = scrollY >= sectionTop + sectionHeight - windowHeight;
        
        setIsSticky(shouldStartSticky && !shouldEndSticky);
      }
    };

    // 初期実行
    handleScroll();
    
    // イベントリスナー登録
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionRef, contentRef]);

  return { isSticky };
};
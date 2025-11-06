// app/components/ForkTitleSection.tsx
'use client';

import { useEffect, useState } from 'react';

const ForkTitleSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section style={{
      backgroundColor: '#003705',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      opacity: isReady ? 1 : 0,
      transition: 'opacity 0.3s ease-in',
      paddingTop: isMobile ? '2rem' : '3rem'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 3rem)',
        display: 'block'
      }}>
        
        {/* fork-logo.png（左上に配置） */}
        <img
          src="/images/hero/fork-logo.png"
          alt="Fork"
          style={{
            position: 'absolute',
            left: isMobile ? '5%' : '5%',
            top: isMobile ? '2rem' : '2rem',
            width: isMobile ? '60%' : '50%',
            height: 'auto',
            objectFit: 'contain',
            zIndex: 1
          }}
        />
        
        {/* fork-illustration-pc.png（大きく、下端を文章に合わせる） */}
        <img
          src="/images/hero/fork-illustration-pc.png"
          alt="Fork illustration"
          style={{
            position: 'absolute',
            right: isMobile ? '5%' : '10%',
            bottom: isMobile ? '8rem' : '8rem',
            width: isMobile ? '50%' : '45%',
            height: 'auto',
            objectFit: 'contain',
            zIndex: 2
          }}
        />
        
        {/* テキストコンテンツ */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '4rem' : '5rem',
          left: isMobile ? '2rem' : '4rem',
          color: 'white',
          zIndex: 20
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            fontSize: isMobile ? '0.75rem' : '0.9rem',
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            <p style={{ margin: 0 }}>&quot;はたらく&quot;と</p>
            <p style={{ margin: 0 }}>&quot;そだてる&quot;を</p>
            <p style={{ margin: 0 }}>もっと自由にする。</p>
            <p style={{ margin: 0 }}>みんなで生きる。</p>
            <p style={{ margin: 0 }}>あたらしい学童保育</p>
          </div>
        </div>
        
        {/* scrollテキスト */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '4rem' : '5rem',
          right: isMobile ? '2rem' : '4rem',
          zIndex: 20
        }}>
          <span style={{
            color: 'white',
            fontSize: isMobile ? '0.7rem' : '0.8rem',
            fontWeight: 300,
            letterSpacing: '0.2em',
            opacity: 0.7
          }}>
            scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default ForkTitleSection;
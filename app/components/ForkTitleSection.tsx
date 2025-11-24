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
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const calculateScale = () => {
      if (window.innerWidth >= 768) {
        // PC表示
        const windowWidth = window.innerWidth;
        const baseWidth = 1400;
        
        // 最小マージン47pxを確保
        const minWidth = 47 * 2 + 832.02;
        
        if (windowWidth < baseWidth) {
          const newScale = Math.max(windowWidth / baseWidth, minWidth / baseWidth);
          setScale(newScale);
        } else {
          setScale(1);
        }
      } else {
        // モバイル表示
        const windowWidth = window.innerWidth;
        const baseWidth = 390;
        
        if (windowWidth < baseWidth) {
          setScale(windowWidth / baseWidth);
        } else {
          setScale(1);
        }
      }
    };
    
    checkMobile();
    calculateScale();
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    window.addEventListener('resize', () => {
      checkMobile();
      calculateScale();
    });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', calculateScale);
    };
  }, []);

  // 背景色を取得
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

  // 次のセクションへスクロール
  const scrollToNext = () => {
    const scrollDistance = isMobile ? 750 : 780;
    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #003705 !important;
          margin: 0;
          padding: 0;
        }
      `}</style>
      
      <section 
        className="fork-title-section"
        style={{
          ...getBackgroundStyle(),
          height: isMobile ? '750px' : '780px',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 0.3s ease-in',
          marginTop: 0,
          paddingTop: 0
        }}
      >
        {/* scaleで縮小されるコンテンツ（イラストのみ） */}
        <div style={{
          position: 'relative',
          width: isMobile ? '390px' : '1400px',
          height: isMobile ? '750px' : '780px',
          margin: '0 auto',
          transform: `scale(${scale})`,
          transformOrigin: 'top center'
        }}>
          
          {/* fork-illustration-pc.png (5本線) */}
          <img
            src="/images/hero/fork-illustration-pc.png"
            alt="Fork illustration"
            style={{
              position: 'absolute',
              ...(isMobile 
                ? { left: '-9px', top: '101px' }
                : { right: '870px', top: '153px' }
              ),
              width: isMobile ? '460.4px' : '743.0px',
              height: isMobile ? '457.67px' : '738.55px',
              objectFit: 'contain',
              transformOrigin: 'top left',
              zIndex: 2
            }}
          />
        </div>

        {/* fork-logo.png - scale変換の外（常に左から47px、上から103px） */}
        <img
          src="/images/hero/fork-logo.png"
          alt="Fork"
          style={{
            position: 'absolute',
            left: isMobile ? '29px' : '47px',
            top: isMobile ? '100px' : '103px',
            width: isMobile ? '329.6px' : '832.02px',
            height: isMobile ? '137.5px' : '347px',
            objectFit: 'contain',
            zIndex: 10
          }}
        />

        {/* テキストコンテンツ - scale変換の外（左から47px、下端が下から240px） */}
        <div style={{
          position: 'absolute',
          left: isMobile ? '30px' : '47px',
          bottom: isMobile ? '250px' : '240px',
          color: '#FFFFFF',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            fontSize: isMobile ? '15px' : '20px',
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

        {/* scrollボタン - scale変換の外（常に右から91px、下から70px） */}
        <button
          onClick={scrollToNext}
          className="scroll-button"
          style={{
            position: 'absolute',
            right: isMobile ? '71px' : '91px',
            bottom: isMobile ? '56px' : '70px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 30,
            padding: 0,
            outline: 'none'
          }}
          aria-label="次のセクションへスクロール"
        >
          <img
            src={scrollImage}
            alt="scroll"
            style={{
              width: '41px',
              height: '36px',
              objectFit: 'contain'
            }}
          />
        </button>
      </section>
    </>
  );
};

export default ForkTitleSection;
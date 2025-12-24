'use client';

import { useRef, useEffect, useState } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';
import { forkToyamaMapStyle } from '../../../libs/mapStyleForkToyama';
import { loadGoogleMaps, isGoogleMapsLoaded } from '../../../libs/googleMaps';

const FORK_TOYAMA_LOCATION = { lat: 36.705422524872, lng: 137.30563961907245 };

const Access = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mobileMapRef = useRef<HTMLDivElement>(null);

  const [mapError, setMapError] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const mapInstancesRef = useRef<{ pc: google.maps.Map | null; mobile: google.maps.Map | null }>({
    pc: null,
    mobile: null
  });
  
  useSectionSticky(sectionRef, contentRef);

  useEffect(() => {
    // 既に初期化済みの場合はスキップ
    if (mapInstancesRef.current.pc || mapInstancesRef.current.mobile) {
      return;
    }

    let isMounted = true;

    const initMaps = async () => {
      try {
        setIsMapLoading(true);
        
        // Google Maps APIを読み込み
        await loadGoogleMaps();
        
        // コンポーネントがアンマウントされていたら中止
        if (!isMounted) return;
        
        // 読み込み確認
        if (!isGoogleMapsLoaded()) {
          throw new Error('Google Maps failed to initialize');
        }

        // マップオプション
        const mapOptions: google.maps.MapOptions = {
          center: FORK_TOYAMA_LOCATION,
          zoom: 17,
          styles: forkToyamaMapStyle,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
          scaleControl: true,
          gestureHandling: 'cooperative'
        };

        // PC用マップ
        if (mapRef.current && !mapInstancesRef.current.pc) {
          try {
            const map = new google.maps.Map(mapRef.current, mapOptions);
            mapInstancesRef.current.pc = map;
            
            // マーカー追加
            new google.maps.Marker({
              position: FORK_TOYAMA_LOCATION,
              map: map,
              title: 'fork toyama'
            });
          } catch (e) {
            console.error('PC map creation error:', e);
          }
        }

        // モバイル用マップ
        if (mobileMapRef.current && !mapInstancesRef.current.mobile) {
          try {
            const mobileMap = new google.maps.Map(mobileMapRef.current, {
              ...mapOptions,
              gestureHandling: 'greedy'
            });
            mapInstancesRef.current.mobile = mobileMap;
            
            new google.maps.Marker({
              position: FORK_TOYAMA_LOCATION,
              map: mobileMap,
              title: 'fork toyama'
            });
          } catch (e) {
            console.error('Mobile map creation error:', e);
          }
        }

        if (isMounted) {
          setIsMapLoading(false);
        }

      } catch (error) {
        console.error('Google Maps initialization error:', error);
        if (isMounted) {
          setMapError(true);
          setIsMapLoading(false);
        }
      }
    };

    // 少し遅延させて初期化（DOMが確実に準備されるように）
    const timer = setTimeout(() => {
      initMaps();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // フォールバック用iframe URL
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4579975939349!2d137.30563961907245!3d36.705422524872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff797813d97aec1%3A0x51faecf143e2bb08!2sfork%20toyama!5e0!3m2!1sja!2sjp!4v1754876356107!5m2!1sja!2sjp";

  // マップまたはiframeをレンダリング
  const renderMapContent = (ref: React.RefObject<HTMLDivElement>, isMobile: boolean = false) => {
    // エラー時はiframeにフォールバック
    if (mapError) {
      return (
        <iframe 
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ 
            border: 0,
            filter: 'grayscale(100%) sepia(100%) hue-rotate(70deg) saturate(50%) brightness(1)'
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="fork toyama location"
        />
      );
    }

    return (
      <>
        <div 
          ref={ref} 
          className="google-map"
          style={{ 
            width: '100%', 
            height: '100%',
            opacity: isMapLoading ? 0 : 1,
            transition: 'opacity 0.3s ease'
          }}
        />
        {isMapLoading && (
          <div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#e7ebe7',
              color: '#003705',
              fontSize: '14px',
              zIndex: 5
            }}
          >
            地図を読み込み中...
          </div>
        )}
      </>
    );
  };

  return (
    <section ref={sectionRef} id="access-main" className="access-bg">
      <div className="section-container">
        {/* PC用 - 左カラム */}
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">access</div>
            <div className="section-title">アクセス</div>
            
            <div className="access-info">
              <div className="facility-name">fork toyama</div>
              <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
              
              <div className="company-info">
                <div className="operator">学童保育運営：一般社団法人fork</div>
                <div className="facility-management">施設運営・企画運用：トゥ株式会社</div>
                <div className="establishment">設立：2017年7月24日</div>
                <div className="location">住所：東京都江東区永代2-20-8 河田ビル1階</div>
                <div className="representative">代表者：代表取締役 岡山史興</div>
              </div>
            </div>
          </div>
        </div>

        {/* PC用 - 右カラム（マップ） */}
        <div className="right-column">
          <div className="map-container" style={{ position: 'relative' }}>
            {renderMapContent(mapRef, false)}
          </div>
        </div>
      </div>

      {/* モバイル用 - ヘッダー */}
      <div className="mobile-header">
        <div className="section-category">access</div>
        <div className="section-title">アクセス</div>
      </div>

      {/* モバイル用 - マップ */}
      <div className="mobile-map">
        <div className="map-container" style={{ position: 'relative' }}>
          {renderMapContent(mobileMapRef, true)}
        </div>
      </div>

      {/* モバイル用 - 情報 */}
      <div className="mobile-info">
        <div className="facility-name">fork toyama</div>
        <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
        
        <div className="company-info">
          <div className="operator">学童保育運営：一般社団法人fork</div>
          <div className="facility-management">施設運営・企画運用：トゥ株式会社</div>
          <div className="establishment">設立：2017年7月24日</div>
          <div className="location">住所：東京都江東区永代2-20-8 河田ビル1階</div>
          <div className="representative">代表者：代表取締役 岡山史興</div>
        </div>
      </div>
    </section>
  );
};

export default Access;
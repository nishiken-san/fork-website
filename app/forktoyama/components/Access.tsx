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
  const mapInitialized = useRef(false);
  
  useSectionSticky(sectionRef, contentRef);

  useEffect(() => {
    // 二重初期化を防ぐ
    if (mapInitialized.current) return;

    const initMaps = async () => {
      try {
        setIsMapLoading(true);
        
        // Google Maps APIを読み込み
        await loadGoogleMaps();
        
        // 読み込み確認
        if (!isGoogleMapsLoaded()) {
          throw new Error('Google Maps failed to initialize');
        }

        // マップオプション - UIコントロールを全て有効化
        const mapOptions: google.maps.MapOptions = {
          center: FORK_TOYAMA_LOCATION,
          zoom: 17,
          styles: forkToyamaMapStyle,
          // UI設定
          disableDefaultUI: false,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          mapTypeControl: false,
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
          },
          scaleControl: true,
          rotateControl: false,
          gestureHandling: 'cooperative'
        };

        // PC用マップ
        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, mapOptions);
          
          // マーカー追加
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: map,
            title: 'fork toyama'
          });
        }

        // モバイル用マップ
        if (mobileMapRef.current) {
          const mobileMap = new google.maps.Map(mobileMapRef.current, {
            ...mapOptions,
            gestureHandling: 'greedy' // モバイルではスムーズに操作
          });
          
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: mobileMap,
            title: 'fork toyama'
          });
        }

        mapInitialized.current = true;
        setIsMapLoading(false);

      } catch (error) {
        console.error('Google Maps initialization error:', error);
        setMapError(true);
        setIsMapLoading(false);
      }
    };

    initMaps();
  }, []);

  // フォールバック用iframe URL（グレースケールフィルター付き）
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4579975939349!2d137.30563961907245!3d36.705422524872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff797813d97aec1%3A0x51faecf143e2bb08!2sfork%20toyama!5e0!3m2!1sja!2sjp!4v1754876356107!5m2!1sja!2sjp";

  // マップコンテンツをレンダリング
  const renderMap = (ref: React.RefObject<HTMLDivElement>) => {
    if (mapError) {
      return (
        <iframe 
          src={iframeSrc}
          width="100%"
          height="100%"
          style={{ 
            border: 0,
            filter: 'grayscale(100%) sepia(30%) hue-rotate(90deg) saturate(50%)'
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
            display: isMapLoading ? 'none' : 'block'
          }}
        />
        {isMapLoading && (
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#e7ebe7',
              color: '#003705',
              fontSize: '14px'
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
          <div className="map-container">
            {renderMap(mapRef)}
          </div>
        </div>
      </div>

      {/* モバイル用 - ヘッダー */}
      <div className="mobile-header">
        <div className="section-category">access</div>
        <div className="section-title">アクセス</div>
      </div>

      {/* モバイル用 - マップ（左右マージンなし） */}
      <div className="mobile-map">
        <div className="map-container">
          {renderMap(mobileMapRef)}
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
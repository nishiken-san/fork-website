'use client';

import { useRef, useEffect, useState } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

// #003705基調のマップスタイル
const mapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [{ color: '#e8efe8' }]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#003705' }]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#ffffff' }, { weight: 2 }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#a8c8a8' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#b8d4b8' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#c8e0c8' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#003705' }, { weight: 0.5 }]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#003705' }]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#d0e8d0' }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#d8ecd8' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#c0dcc0' }]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#e8f0e8' }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#003705' }, { weight: 1 }]
  }
];

const FORK_TOYAMA_LOCATION = { lat: 36.705422524872, lng: 137.30563961907245 };

const Access = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mobileMapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);
  const mapInitialized = useRef(false);
  useSectionSticky(sectionRef, contentRef);

  useEffect(() => {
    // 二重初期化を防ぐ
    if (mapInitialized.current) return;
    
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      console.warn('Google Maps API Key is not set');
      setMapError(true);
      return;
    }

    const initMaps = async () => {
      try {
        // 新しい関数型APIを使用
        const { setOptions, importLibrary } = await import('@googlemaps/js-api-loader');
        
        setOptions({
          apiKey: apiKey,
          version: 'weekly',
        });

        // mapsライブラリを読み込み
        const mapsLib = await importLibrary('maps') as google.maps.MapsLibrary;
        const { Map } = mapsLib;
        
        const mapOptions: google.maps.MapOptions = {
          center: FORK_TOYAMA_LOCATION,
          zoom: 17,
          styles: mapStyles,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };

        // PC用マップ
        if (mapRef.current) {
          const map = new Map(mapRef.current, mapOptions);
          
          // 従来のMarkerを使用
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: map,
            title: "fork toyama"
          });
        }

        // モバイル用マップ
        if (mobileMapRef.current) {
          const mobileMap = new Map(mobileMapRef.current, mapOptions);
          
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: mobileMap,
            title: "fork toyama"
          });
        }

        mapInitialized.current = true;

      } catch (error) {
        console.error('Google Maps load error:', error);
        setMapError(true);
      }
    };

    initMaps();
  }, []);

  // フォールバック用iframe URL
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4579975939349!2d137.30563961907245!3d36.705422524872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff797813d97aec1%3A0x51faecf143e2bb08!2sfork%20toyama!5e0!3m2!1sja!2sjp!4v1754876356107!5m2!1sja!2sjp";

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
            {mapError ? (
              <iframe 
                src={iframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="fork toyama location"
              />
            ) : (
              <div ref={mapRef} className="google-map"></div>
            )}
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
          {mapError ? (
            <iframe 
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="fork toyama location"
            />
          ) : (
            <div ref={mobileMapRef} className="google-map"></div>
          )}
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
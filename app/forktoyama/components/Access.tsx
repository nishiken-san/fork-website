'use client';

import { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

// Google Maps スタイルオプション
const mapStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      { hue: '#00ff00' },
      { saturation: -50 },
      { lightness: 0 },
      { gamma: 1 }
    ]
  }
];

const FORK_TOYAMA_LOCATION = { lat: 36.705422524872, lng: 137.30563961907245 };

const Access = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mobileMapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useSectionSticky(sectionRef, contentRef);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      console.warn('Google Maps API Key is not set');
      setMapError(true);
      return;
    }

    const loader = new Loader({
      apiKey: apiKey,
      version: 'weekly',
    });

    loader.importLibrary('maps').then(({ Map }) => {
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
        
        // AdvancedMarkerElementを使用
        loader.importLibrary('marker').then(({ AdvancedMarkerElement }) => {
          new AdvancedMarkerElement({
            position: FORK_TOYAMA_LOCATION,
            map: map,
            title: "fork toyama"
          });
        }).catch(() => {
          // フォールバック：従来のMarkerを使用
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: map,
            title: "fork toyama"
          });
        });
      }

      // モバイル用マップ
      if (mobileMapRef.current) {
        const mobileMap = new Map(mobileMapRef.current, mapOptions);
        
        loader.importLibrary('marker').then(({ AdvancedMarkerElement }) => {
          new AdvancedMarkerElement({
            position: FORK_TOYAMA_LOCATION,
            map: mobileMap,
            title: "fork toyama"
          });
        }).catch(() => {
          new google.maps.Marker({
            position: FORK_TOYAMA_LOCATION,
            map: mobileMap,
            title: "fork toyama"
          });
        });
      }

      setIsLoaded(true);
    }).catch((error) => {
      console.error('Google Maps load error:', error);
      setMapError(true);
    });
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
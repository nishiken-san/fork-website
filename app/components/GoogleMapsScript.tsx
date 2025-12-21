'use client';

import Script from 'next/script';

// Google Maps APIキーを環境変数から取得
// .env.localに NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=あなたのAPIキー を設定してください
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GoogleMapsScript = () => {
  if (!GOOGLE_MAPS_API_KEY) {
    console.warn('Google Maps API Key is not set. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env.local');
    return null;
  }

  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&language=ja`}
      strategy="lazyOnload"
    />
  );
};

export default GoogleMapsScript;
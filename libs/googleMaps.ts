// libs/googleMaps.ts
// Google Maps API読み込みユーティリティ

// グローバルな読み込み状態管理
let isLoading = false;
let isLoaded = false;
let loadError: Error | null = null;
const callbacks: Array<{ resolve: () => void; reject: (err: Error) => void }> = [];

// Google Mapsが読み込まれているかチェック
export const isGoogleMapsLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.google !== 'undefined' && 
         typeof window.google.maps !== 'undefined';
};

// Google Maps APIを読み込む
export const loadGoogleMaps = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 既に読み込み済み
    if (isLoaded && isGoogleMapsLoaded()) {
      resolve();
      return;
    }

    // 読み込みエラーがあった場合
    if (loadError) {
      reject(loadError);
      return;
    }

    // 読み込み中の場合はコールバックを登録
    if (isLoading) {
      callbacks.push({ resolve, reject });
      return;
    }

    // サーバーサイドでは何もしない
    if (typeof window === 'undefined') {
      reject(new Error('Google Maps can only be loaded in browser'));
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey) {
      const error = new Error('Google Maps API Key is not set');
      loadError = error;
      reject(error);
      return;
    }

    // 既にスクリプトが存在するかチェック
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // スクリプトはあるがgoogleオブジェクトがない場合は待機
      const checkGoogle = setInterval(() => {
        if (isGoogleMapsLoaded()) {
          clearInterval(checkGoogle);
          isLoaded = true;
          resolve();
        }
      }, 100);
      
      // 10秒でタイムアウト
      setTimeout(() => {
        clearInterval(checkGoogle);
        if (!isGoogleMapsLoaded()) {
          const error = new Error('Google Maps loading timeout');
          loadError = error;
          reject(error);
        }
      }, 10000);
      return;
    }

    isLoading = true;

    // コールバック関数名をユニークに
    const callbackName = `googleMapsCallback_${Date.now()}`;

    // グローバルコールバック関数を設定
    (window as any)[callbackName] = () => {
      isLoading = false;
      isLoaded = true;
      
      // 登録されたコールバックを全て実行
      callbacks.forEach(cb => cb.resolve());
      callbacks.length = 0;
      
      // コールバック関数を削除
      delete (window as any)[callbackName];
      
      resolve();
    };

    // スクリプトを作成
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    
    script.onerror = () => {
      isLoading = false;
      const error = new Error('Failed to load Google Maps script');
      loadError = error;
      
      // 登録されたコールバックを全てエラーで実行
      callbacks.forEach(cb => cb.reject(error));
      callbacks.length = 0;
      
      delete (window as any)[callbackName];
      reject(error);
    };

    document.head.appendChild(script);
  });
};

// マップインスタンスを作成
export const createMap = (
  element: HTMLElement,
  options: google.maps.MapOptions
): google.maps.Map | null => {
  if (!isGoogleMapsLoaded()) {
    console.error('Google Maps is not loaded');
    return null;
  }
  
  return new google.maps.Map(element, options);
};

// マーカーを作成
export const createMarker = (
  map: google.maps.Map,
  position: google.maps.LatLngLiteral,
  title?: string
): google.maps.Marker | null => {
  if (!isGoogleMapsLoaded()) {
    console.error('Google Maps is not loaded');
    return null;
  }
  
  return new google.maps.Marker({
    position,
    map,
    title
  });
};
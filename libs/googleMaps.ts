// libs/googleMaps.ts
// Google Maps API読み込みユーティリティ

// グローバルな読み込み状態管理
let loadPromise: Promise<void> | null = null;

// Google Mapsが読み込まれているかチェック
export const isGoogleMapsLoaded = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.google !== 'undefined' && 
         typeof window.google.maps !== 'undefined';
};

// Google Maps APIを読み込む（シングルトン）
export const loadGoogleMaps = (): Promise<void> => {
  // 既に読み込み済み
  if (isGoogleMapsLoaded()) {
    return Promise.resolve();
  }

  // 読み込み中の場合は同じPromiseを返す
  if (loadPromise) {
    return loadPromise;
  }

  // サーバーサイドでは何もしない
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only be loaded in browser'));
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return Promise.reject(new Error('Google Maps API Key is not set'));
  }

  // 既にスクリプトが存在するかチェック
  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
  if (existingScript) {
    // スクリプトは存在するが、google.mapsがまだない場合は待機
    loadPromise = new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 100; // 10秒
      
      const checkGoogle = setInterval(() => {
        attempts++;
        if (isGoogleMapsLoaded()) {
          clearInterval(checkGoogle);
          resolve();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkGoogle);
          reject(new Error('Google Maps loading timeout'));
        }
      }, 100);
    });
    return loadPromise;
  }

  // 新しくスクリプトを読み込む
  loadPromise = new Promise((resolve, reject) => {
    // コールバック関数名
    const callbackName = '__googleMapsCallback__';

    // グローバルコールバック関数を設定
    (window as any)[callbackName] = () => {
      delete (window as any)[callbackName];
      resolve();
    };

    // スクリプトを作成
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}&loading=async`;
    script.async = true;
    script.defer = true;
    
    script.onerror = () => {
      delete (window as any)[callbackName];
      loadPromise = null;
      reject(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(script);
  });

  return loadPromise;
};
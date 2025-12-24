// libs/mapStyleForkToyama.ts
// #003705基調のモノクロームマップスタイル

export const forkToyamaMapStyle: google.maps.MapTypeStyle[] = [
  // ===== 全体のベース設定 =====
  // 地図のジオメトリをグレースケール化（アイコンは除外）
  {
    featureType: 'all',
    elementType: 'geometry',
    stylers: [
      { saturation: -100 }
    ]
  },
  // ラベルテキストもグレースケール化
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      { saturation: -100 }
    ]
  },
  
  // ===== 地形・土地 =====
  // 地形全体（薄い緑）
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#e7ebe7' }
    ]
  },
  // 自然地形（やや濃い緑）
  {
    featureType: 'landscape.natural',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#dce5dc' }
    ]
  },
  // 人工地形・建物含む（グレー調）
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#d0d8d0' }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#b8c0b8' }
    ]
  },
  
  // ===== 水域 =====
  // 河川・湖（濃い緑）
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#9db89d' }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#003705' }
    ]
  },
  
  // ===== 道路 =====
  // 全ての道路を表示
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      { visibility: 'on' }
    ]
  },
  // 一般道路
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#8aaa8a' }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#6a8a6a' },
      { weight: 1 }
    ]
  },
  // 地方道・生活道路
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#9aba9a' }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#7a9a7a' },
      { weight: 0.8 }
    ]
  },
  // 幹線道路
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#7a9a7a' }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#5a7a5a' },
      { weight: 1.5 }
    ]
  },
  // 高速道路
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#6a8a6a' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#4a6a4a' },
      { weight: 2 }
    ]
  },
  // 道路ラベル
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#003705' }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' }
    ]
  },
  
  // ===== 公園・緑地 =====
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#c5d8c5' }
    ]
  },
  
  // ===== POI（施設など）=====
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#d8e2d8' }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#3a5a3a' }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' }
    ]
  },
  // アイコンはデフォルトカラー
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      { saturation: 0 },
      { lightness: 0 }
    ]
  },
  
  // ===== 交通機関 =====
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#5a7a5a' }
    ]
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#c8d4c8' }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#003705' }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [
      { saturation: 0 },
      { lightness: 0 }
    ]
  },
  
  // ===== 行政区域 =====
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#8a9a8a' },
      { weight: 1 }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#003705' }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' }
    ]
  }
];
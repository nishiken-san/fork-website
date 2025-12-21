// Google Maps API 型定義
declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element, opts?: MapOptions);
  }

  class Marker {
    constructor(opts?: MarkerOptions);
  }

  namespace marker {
    class AdvancedMarkerElement {
      constructor(opts?: AdvancedMarkerElementOptions);
    }
  }

  interface MapOptions {
    center?: LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    mapTypeControl?: boolean;
    streetViewControl?: boolean;
    fullscreenControl?: boolean;
    mapId?: string;
  }

  interface MarkerOptions {
    position?: LatLngLiteral;
    map?: Map;
    title?: string;
  }

  interface AdvancedMarkerElementOptions {
    position?: LatLngLiteral;
    map?: Map;
    title?: string;
    content?: Element;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers: MapTypeStyler[];
  }

  interface MapTypeStyler {
    color?: string;
    hue?: string;
    saturation?: number;
    lightness?: number;
    gamma?: number;
    visibility?: string;
    weight?: number;
  }
}

declare var google: {
  maps: typeof google.maps;
};
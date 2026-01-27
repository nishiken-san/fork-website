declare module 'rellax' {
  interface RellaxOptions {
    speed?: number;
    center?: boolean;
    wrapper?: string | HTMLElement | null;
    relativeToWrapper?: boolean;
    vertical?: boolean;
    horizontal?: boolean;
    round?: boolean;
    callback?: (positions: { x: number; y: number }) => void;
  }

  class Rellax {
    constructor(selector: string | HTMLElement, options?: RellaxOptions);
    destroy(): void;
    refresh(): void;
  }

  export = Rellax;
}
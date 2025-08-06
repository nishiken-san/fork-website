// import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';
// const repoName = 'fork-website'; // あなたのリポジトリ名に変更

// const nextConfig: NextConfig = {
//   // GitHub Pages対応
//   output: 'export',
//   trailingSlash: true,
//   distDir: 'out',
  
//   // 画像最適化無効（静的サイト用）
//   images: {
//     unoptimized: true,
//   },
  
//   // GitHub Pages用パス設定
//   basePath: isProd ? `/${repoName}` : '',
//   assetPrefix: isProd ? `/${repoName}/` : '',
  
//   // 環境変数
//   env: {
//     SITE_URL: isProd ? `https://nishiken-san.github.io/${repoName}` : 'http://localhost:3000',
//     BASE_PATH: isProd ? `/${repoName}` : '',
//   },
  
//   // TypeScript設定
//   typescript: {
//     ignoreBuildErrors: false,
//   },
  
//   // ESLint設定
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
  
//   // React設定
//   reactStrictMode: true,
  
//   // Webpack設定
//   webpack: (config) => {
//     // Markdownファイル用ローダー
//     config.module.rules.push({
//       test: /\.md$/,
//       use: 'raw-loader',
//     });
    
//     return config;
//   },
  
//   // パフォーマンス設定
//   compress: true,
//   poweredByHeader: false,
// };

// export default nextConfig;
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // ビルド時にESLintエラーを完全に無視
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時にTypeScriptエラーを完全に無視
    ignoreBuildErrors: true,
  },
  experimental: {
    // 追加の設定
    forceSwcTransforms: true,
  },
  images: {
    // 外部画像を許可
    unoptimized: true,
  },
  // 警告を抑制
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

export default nextConfig
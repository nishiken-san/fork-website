import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'fork-website'; // あなたのリポジトリ名に変更

const nextConfig: NextConfig = {
  // GitHub Pages対応
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // 画像最適化無効（静的サイト用）
  images: {
    unoptimized: true,
  },
  
  // GitHub Pages用パス設定
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  // 環境変数
  env: {
    SITE_URL: isProd ? `https://nishiken-san.github.io/${repoName}` : 'http://localhost:3000',
    BASE_PATH: isProd ? `/${repoName}` : '',
  },
  
  // TypeScript設定
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint設定
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // React設定
  reactStrictMode: true,
  
  // Webpack設定
  webpack: (config) => {
    // Markdownファイル用ローダー
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },
  
  // パフォーマンス設定
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
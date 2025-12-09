// import type { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';
// const repoName = 'fork-website'; // あなたのリポジトリ名に変更

// const nextConfig: NextConfig = {
//   // GitHub Pages対応
//   // output: 'export',
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


// // // import type { NextConfig } from 'next'

// // // const nextConfig: NextConfig = {
// // //   eslint: {
// // //     // ビルド時にESLintエラーを完全に無視
// // //     ignoreDuringBuilds: true,
// // //   },
// // //   typescript: {
// // //     // ビルド時にTypeScriptエラーを完全に無視
// // //     ignoreBuildErrors: true,
// // //   },
// // //   experimental: {
// // //     // 追加の設定
// // //     forceSwcTransforms: true,
// // //   },
// // //   images: {
// // //     // 外部画像を許可
// // //     unoptimized: true,
// // //   },
// // //   // 警告を抑制
// // //   onDemandEntries: {
// // //     // period (in ms) where the server will keep pages in the buffer
// // //     maxInactiveAge: 25 * 1000,
// // //     // number of pages that should be kept simultaneously without being disposed
// // //     pagesBufferLength: 2,
// // //   },
// // // }

// // // export default nextConfig


// // // import type { NextConfig } from 'next'

// // // const nextConfig: NextConfig = {
// // //   eslint: {
// // //     ignoreDuringBuilds: true,
// // //   },
// // //   typescript: {
// // //     ignoreBuildErrors: true,
// // //   },
// // //   images: {
// // //     unoptimized: true,
// // //   },
// // // }

// // // export default nextConfig


// // import type { NextConfig } from 'next';

// // // ============================================
// // // 環境自動判定
// // // ============================================
// // // 
// // // 以下の環境変数で自動判定されます：
// // // - Vercel: process.env.VERCEL が自動設定される
// // // - GitHub Pages: process.env.GITHUB_ACTIONS が自動設定される
// // // - ローカル: 上記以外
// // //
// // // 手動で切り替えたい場合は DEPLOY_TARGET 環境変数を設定:
// // // DEPLOY_TARGET=vercel / github-pages / local
// // //
// // // ============================================

// // type DeployTarget = 'vercel' | 'github-pages' | 'local';

// // // 環境判定関数
// // const getDeployTarget = (): DeployTarget => {
// //   // 手動指定があれば優先
// //   const manualTarget = process.env.DEPLOY_TARGET as DeployTarget | undefined;
// //   if (manualTarget && ['vercel', 'github-pages', 'local'].includes(manualTarget)) {
// //     return manualTarget;
// //   }
  
// //   // Vercel環境（VERCEL=1 が自動設定される）
// //   if (process.env.VERCEL === '1' || process.env.VERCEL === 'true') {
// //     return 'vercel';
// //   }
  
// //   // GitHub Actions環境（GitHub Pagesへのデプロイ時）
// //   if (process.env.GITHUB_ACTIONS === 'true') {
// //     return 'github-pages';
// //   }
  
// //   // ローカル開発環境
// //   return 'local';
// // };

// // const deployTarget = getDeployTarget();
// // const isProduction = process.env.NODE_ENV === 'production';

// // // GitHub Pages用のリポジトリ名
// // const repoName = 'fork-website';

// // // ログ出力（ビルド時に確認用）
// // console.log(`\n📦 Deploy Target: ${deployTarget}`);
// // console.log(`📦 NODE_ENV: ${process.env.NODE_ENV}\n`);

// // // ============================================
// // // 環境別設定
// // // ============================================

// // // Vercel設定（ISR対応、microCMSに最適）
// // const vercelConfig: NextConfig = {
// //   reactStrictMode: true,
  
// //   // 画像最適化（Vercelの機能を活用）
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: 'https',
// //         hostname: 'images.microcms-assets.io',
// //         port: '',
// //         pathname: '/assets/**',
// //       },
// //     ],
// //   },
  
// //   // TypeScript/ESLint
// //   typescript: {
// //     ignoreBuildErrors: false,
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: false,
// //   },
  
// //   // パフォーマンス
// //   compress: true,
// //   poweredByHeader: false,
  
// //   // 環境変数
// //   env: {
// //     SITE_URL: process.env.VERCEL_URL 
// //       ? `https://${process.env.VERCEL_URL}` 
// //       : 'http://localhost:3000',
// //     DEPLOY_TARGET: 'vercel',
// //   },
// // };

// // // GitHub Pages設定（静的エクスポート）
// // const githubPagesConfig: NextConfig = {
// //   reactStrictMode: true,
  
// //   // 静的エクスポート必須
// //   output: 'export',
// //   trailingSlash: true,
// //   distDir: 'out',
  
// //   // GitHub Pages用パス設定
// //   basePath: `/${repoName}`,
// //   assetPrefix: `/${repoName}/`,
  
// //   // 画像最適化無効（静的サイト用）
// //   images: {
// //     unoptimized: true,
// //     remotePatterns: [
// //       {
// //         protocol: 'https',
// //         hostname: 'images.microcms-assets.io',
// //         port: '',
// //         pathname: '/assets/**',
// //       },
// //     ],
// //   },
  
// //   // TypeScript/ESLint（GitHub Pagesではエラーを許容）
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
  
// //   // パフォーマンス
// //   compress: true,
// //   poweredByHeader: false,
  
// //   // 環境変数
// //   env: {
// //     SITE_URL: `https://nishiken-san.github.io/${repoName}`,
// //     BASE_PATH: `/${repoName}`,
// //     DEPLOY_TARGET: 'github-pages',
// //   },
  
// //   // Webpack設定
// //   webpack: (config) => {
// //     config.module.rules.push({
// //       test: /\.md$/,
// //       use: 'raw-loader',
// //     });
// //     return config;
// //   },
// // };

// // // ローカル開発設定
// // const localConfig: NextConfig = {
// //   reactStrictMode: true,
  
// //   // 画像設定
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: 'https',
// //         hostname: 'images.microcms-assets.io',
// //         port: '',
// //         pathname: '/assets/**',
// //       },
// //     ],
// //   },
  
// //   // TypeScript/ESLint（開発時はエラー表示）
// //   typescript: {
// //     ignoreBuildErrors: false,
// //   },
// //   eslint: {
// //     ignoreDuringBuilds: false,
// //   },
  
// //   // 環境変数
// //   env: {
// //     SITE_URL: 'http://localhost:3000',
// //     DEPLOY_TARGET: 'local',
// //   },
  
// //   // Webpack設定
// //   webpack: (config) => {
// //     config.module.rules.push({
// //       test: /\.md$/,
// //       use: 'raw-loader',
// //     });
// //     return config;
// //   },
// // };

// // // ============================================
// // // 設定の選択とエクスポート
// // // ============================================

// // const getConfig = (): NextConfig => {
// //   switch (deployTarget) {
// //     case 'vercel':
// //       return vercelConfig;
// //     case 'github-pages':
// //       return githubPagesConfig;
// //     case 'local':
// //     default:
// //       return localConfig;
// //   }
// // };

// // const nextConfig = getConfig();

// // export default nextConfig;

import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'fork-website';

const nextConfig: NextConfig = {
  // GitHub Pages対応
  // output: 'export',
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
  
  // TypeScript設定 - ビルド時のエラーを無視
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint設定 - ビルド時のエラーを無視
  eslint: {
    ignoreDuringBuilds: true,
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
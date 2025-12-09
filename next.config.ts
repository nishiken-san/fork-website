import type { NextConfig } from 'next';

// ============================================
// 環境自動判定
// ============================================
// 
// Vercel: process.env.VERCEL === '1' (自動設定)
// GitHub Pages: process.env.GITHUB_ACTIONS === 'true' (自動設定)
// ローカル: 上記以外
//
// 手動切替: DEPLOY_TARGET=vercel / github-pages / local
// ============================================

type DeployTarget = 'vercel' | 'github-pages' | 'local';

const getDeployTarget = (): DeployTarget => {
  // 手動指定があれば優先
  const manualTarget = process.env.DEPLOY_TARGET as DeployTarget | undefined;
  if (manualTarget && ['vercel', 'github-pages', 'local'].includes(manualTarget)) {
    return manualTarget;
  }
  
  // Vercel環境
  if (process.env.VERCEL === '1') {
    return 'vercel';
  }
  
  // GitHub Actions環境
  if (process.env.GITHUB_ACTIONS === 'true') {
    return 'github-pages';
  }
  
  // ローカル開発環境
  return 'local';
};

const deployTarget = getDeployTarget();
const repoName = 'fork-website';

// ログ出力
console.log(`\n📦 Deploy Target: ${deployTarget}`);
console.log(`📦 NODE_ENV: ${process.env.NODE_ENV}\n`);

// ============================================
// 環境別設定
// ============================================

const nextConfig: NextConfig = (() => {
  // 共通設定
  const commonConfig: NextConfig = {
    reactStrictMode: true,
    
    // TypeScript/ESLint - ビルド時のエラーを無視
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    
    // パフォーマンス
    compress: true,
    poweredByHeader: false,
    
    // Webpack設定
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
      return config;
    },
  };

  // Vercel設定
  if (deployTarget === 'vercel') {
    return {
      ...commonConfig,
      
      // 画像最適化（Vercelの機能を活用）
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.microcms-assets.io',
            port: '',
            pathname: '/assets/**',
          },
        ],
      },
      
      // 環境変数
      env: {
        SITE_URL: process.env.VERCEL_URL 
          ? `https://${process.env.VERCEL_URL}` 
          : 'http://localhost:3000',
        DEPLOY_TARGET: 'vercel',
      },
    };
  }

  // GitHub Pages設定
  if (deployTarget === 'github-pages') {
    return {
      ...commonConfig,
      
      // 静的エクスポート必須
      output: 'export',
      trailingSlash: true,
      distDir: 'out',
      
      // GitHub Pages用パス設定
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
      
      // 画像最適化無効
      images: {
        unoptimized: true,
      },
      
      // 環境変数
      env: {
        SITE_URL: `https://nishiken-san.github.io/${repoName}`,
        BASE_PATH: `/${repoName}`,
        DEPLOY_TARGET: 'github-pages',
      },
    };
  }

  // ローカル開発設定
  return {
    ...commonConfig,
    
    // 画像設定
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.microcms-assets.io',
          port: '',
          pathname: '/assets/**',
        },
      ],
    },
    
    // 環境変数
    env: {
      SITE_URL: 'http://localhost:3000',
      DEPLOY_TARGET: 'local',
    },
  };
})();

export default nextConfig;
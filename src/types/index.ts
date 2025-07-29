// 基本的な型定義

export interface Project {
    title: string;
    slug: string;
    description: string;
    image: string;
    client: string;
    year: number;
    category: 'ブランディング' | 'ウェブデザイン' | 'グラフィックデザイン' | 'コンサルティング';
    tags: string[];
    published: boolean;
    featured: boolean;
    date: string;
    content: string;
  }
  
  export interface NewsPost {
    title: string;
    date: string;
    description: string;
    image?: string;
    category: 'お知らせ' | 'プロジェクト' | 'イベント' | 'コラム';
    published: boolean;
    content: string;
    slug: string;
  }
  
  export interface SiteSettings {
    title: string;
    tagline: string;
    description: string;
    company: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
  }
  
  export interface HomePage {
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    about: {
      title: string;
      content: string;
    };
  }
  
  // CMS用の型定義
  export interface CMSEntry {
    data: Record<string, any>;
    content: string;
    slug: string;
  }
  
  // SEO用の型定義
  export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }
  
  // ユーティリティ型
  export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
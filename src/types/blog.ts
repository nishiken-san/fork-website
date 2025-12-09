// types/blog.ts
// microCMS のコンテンツ型定義

/**
 * microCMS の共通フィールド
 */
export interface MicroCMSBase {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }
  
  /**
   * タグ
   * microCMS API: tags
   */
  export interface Tag extends MicroCMSBase {
    name: string;
    slug: string;
    color?: string; // タグの色（オプション）
  }
  
  /**
   * お知らせ記事
   * microCMS API: info
   */
  export interface InfoArticle extends MicroCMSBase {
    title: string;
    content: string; // リッチエディタ（HTML）
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };
    tags?: Tag[];
    excerpt?: string; // 抜粋（プレーンテキスト）
  }
  
  /**
   * microCMS リストレスポンス
   */
  export interface MicroCMSListResponse<T> {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
  }
  
  /**
   * 記事一覧取得用のクエリパラメータ
   */
  export interface InfoListQuery {
    limit?: number;
    offset?: number;
    filters?: string;
    orders?: string;
    fields?: string;
    tag?: string; // タグでフィルタリング
  }
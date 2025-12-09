// lib/microcms.ts
// microCMS API クライアント
// 
// 【セキュリティ】このファイルはサーバーサイドでのみ実行されます
// クライアントコンポーネントからは直接インポートしないでください

import { 
  InfoArticle, 
  Tag, 
  MicroCMSListResponse, 
  InfoListQuery 
} from '@/src/types/blog';

// ユーティリティ関数を再エクスポート（後方互換性のため）
export { formatDate, generateExcerpt } from './Utils';

// ============================================
// 環境変数の検証
// ============================================

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain) {
  console.warn('Warning: MICROCMS_SERVICE_DOMAIN is not set');
}

if (!apiKey) {
  console.warn('Warning: MICROCMS_API_KEY is not set');
}

// ============================================
// API基本設定
// ============================================

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1`;

/**
 * microCMS API リクエストヘッダー
 * APIキーはサーバーサイドでのみ使用
 */
const getHeaders = (): HeadersInit => ({
  'X-MICROCMS-API-KEY': apiKey || '',
});

// ============================================
// 汎用フェッチ関数
// ============================================

interface FetchOptions {
  endpoint: string;
  queries?: Record<string, string | number | undefined>;
  id?: string;
}

/**
 * microCMS API への汎用リクエスト関数
 * Next.js のキャッシュ機能を活用
 */
async function fetchFromMicroCMS<T>({ 
  endpoint, 
  queries = {}, 
  id 
}: FetchOptions): Promise<T> {
  // URLを構築
  const url = new URL(
    id ? `${BASE_URL}/${endpoint}/${id}` : `${BASE_URL}/${endpoint}`
  );

  // クエリパラメータを追加
  Object.entries(queries).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      url.searchParams.append(key, String(value));
    }
  });

  try {
    const response = await fetch(url.toString(), {
      headers: getHeaders(),
      // ISR: 60秒ごとに再検証
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`microCMS API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('microCMS fetch error:', error);
    throw error;
  }
}

// ============================================
// お知らせ記事 API
// ============================================

/**
 * お知らせ記事一覧を取得
 * @param query - 取得条件
 */
export async function getInfoList(
  query: InfoListQuery = {}
): Promise<MicroCMSListResponse<InfoArticle>> {
  const { limit = 10, offset = 0, filters, orders = '-publishedAt', tag } = query;

  // タグでフィルタリング
  let filterQuery = filters || '';
  if (tag) {
    filterQuery = filterQuery 
      ? `${filterQuery}[and]tags[contains]${tag}`
      : `tags[contains]${tag}`;
  }

  return fetchFromMicroCMS<MicroCMSListResponse<InfoArticle>>({
    endpoint: 'info',
    queries: {
      limit,
      offset,
      filters: filterQuery || undefined,
      orders,
    },
  });
}

/**
 * お知らせ記事の詳細を取得
 * @param id - 記事ID
 */
export async function getInfoDetail(id: string): Promise<InfoArticle> {
  return fetchFromMicroCMS<InfoArticle>({
    endpoint: 'info',
    id,
  });
}

/**
 * 全てのお知らせ記事IDを取得（静的生成用）
 */
export async function getAllInfoIds(): Promise<string[]> {
  const data = await fetchFromMicroCMS<MicroCMSListResponse<InfoArticle>>({
    endpoint: 'info',
    queries: {
      limit: 100,
      fields: 'id',
    },
  });

  return data.contents.map((article) => article.id);
}

// ============================================
// タグ API
// ============================================

/**
 * タグ一覧を取得
 */
export async function getTagList(): Promise<MicroCMSListResponse<Tag>> {
  return fetchFromMicroCMS<MicroCMSListResponse<Tag>>({
    endpoint: 'tags',
    queries: {
      limit: 50,
    },
  });
}

/**
 * タグの詳細を取得
 * @param id - タグID
 */
export async function getTagDetail(id: string): Promise<Tag> {
  return fetchFromMicroCMS<Tag>({
    endpoint: 'tags',
    id,
  });
}

// ユーティリティ関数はutils.tsから再エクスポートしています
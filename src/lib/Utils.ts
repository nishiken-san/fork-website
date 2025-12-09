// src/lib/utils.ts
// クライアント・サーバー両方で使用可能なユーティリティ関数

/**
 * 日付をフォーマット
 * @param dateString - ISO 8601形式の日付文字列
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  /**
   * HTMLから抜粋テキストを生成
   * @param html - HTMLコンテンツ
   * @param maxLength - 最大文字数
   */
  export function generateExcerpt(html: string, maxLength: number = 100): string {
    // HTMLタグを除去
    const text = html.replace(/<[^>]*>/g, '');
    // 空白を正規化
    const normalized = text.replace(/\s+/g, ' ').trim();
    // 指定文字数で切り詰め
    if (normalized.length <= maxLength) {
      return normalized;
    }
    return normalized.slice(0, maxLength) + '...';
  }
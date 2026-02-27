// app/api/news/latest/route.ts
import { NextResponse } from 'next/server';
import { client } from '@/libs/microcms';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await client.get({
      endpoint: 'info',
      queries: {
        limit: 2,
        orders: '-publishedAt',
      },
    });

    const articles = (response.contents || []).map((article: any) => {
      // タグの取得（フィールド名: tags）
      let tagLabel = '';
      
      const tagField = article.tags;
      
      if (tagField) {
        if (Array.isArray(tagField) && tagField.length > 0) {
          const firstTag = tagField[0];
          if (typeof firstTag === 'object' && firstTag !== null) {
            // 日本語フィールド名「タグ名」を優先
            tagLabel = firstTag['タグ名'] || firstTag.name || firstTag.title || firstTag.label || firstTag.tag || '';
          } else {
            tagLabel = String(firstTag);
          }
        } else if (typeof tagField === 'object' && tagField !== null) {
          tagLabel = tagField['タグ名'] || tagField.name || tagField.title || tagField.label || tagField.tag || '';
        } else if (typeof tagField === 'string') {
          tagLabel = tagField;
        }
      }

      return {
        id: article.id,
        title: article.title || '',
        date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).replace(/\//g, '.'),
        tagLabel: tagLabel,
      };
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching latest news:', error);
    return NextResponse.json([]);
  }
}
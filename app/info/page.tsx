// app/info/page.tsx
// お知らせ一覧ページ（サーバーコンポーネント - データ取得用）

import { Metadata } from 'next';
import { getInfoList, getTagList } from '@/src/lib/microcms';
import InfoPageClient from './InfoPageClient';

// ============================================
// メタデータ
// ============================================

export const metadata: Metadata = {
  title: 'おしらせ | fork toyama',
  description: 'fork toyamaからのお知らせ一覧です。',
};

// ============================================
// ページコンポーネント（サーバー側）
// ============================================

interface PageProps {
  searchParams: { tag?: string; page?: string };
}

export default async function InfoPage({ searchParams }: PageProps) {
  const currentTag = searchParams.tag;
  const currentPage = Number(searchParams.page) || 1;
  const perPage = 10;
  const offset = (currentPage - 1) * perPage;

  // データ取得（サーバーサイドで実行）
  let articles = [];
  let totalCount = 0;
  let tags = [];

  try {
    const [infoData, tagData] = await Promise.all([
      getInfoList({ 
        limit: perPage, 
        offset,
        tag: currentTag,
      }),
      getTagList(),
    ]);
    
    articles = infoData.contents;
    totalCount = infoData.totalCount;
    tags = tagData.contents;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  const totalPages = Math.ceil(totalCount / perPage);

  // クライアントコンポーネントにデータを渡す
  return (
    <InfoPageClient
      articles={articles}
      tags={tags}
      currentTag={currentTag}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
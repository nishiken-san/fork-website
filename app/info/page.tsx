import InfoListPage from './InfoListPage';
import { client } from '../../libs/microcms';
import Header from './../components/Header';
import Footer from './../components/Footer';

// microCMSから記事を取得（エンドポイント: info）
async function getArticles() {
  try {
    const response = await client.get({
      endpoint: 'info',
      queries: {
        limit: 100,
        orders: '-publishedAt',
      },
    });
    return response.contents || [];
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}

// タグ一覧を取得（エンドポイント: tags）
async function getTags() {
  try {
    const response = await client.get({
      endpoint: 'tags',
      queries: {
        limit: 100,
      },
    });
    return response.contents || [];
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

export default async function InfoPage() {
  const [articles, tags] = await Promise.all([getArticles(), getTags()]);
  
  // デバッグ用（確認後削除可）
  if (tags.length > 0) {
    console.log('Tag structure:', JSON.stringify(tags[0], null, 2));
  }
  
  // タグ一覧を整形
  // microCMSの日本語フィールド名「タグ名」と「スラッグ」に対応
  const formattedTags = tags.map((tag: any) => ({
    id: tag.id,
    // 日本語フィールド名「タグ名」を優先、なければ他のフィールドを試す
    label: tag['タグ名'] || tag.name || tag.title || tag.label || tag.tag || tag.id,
    slug: tag['スラッグ'] || tag.slug || tag.id,
  }));
  
  // 記事データを整形
  const formattedArticles = articles.map((article: any) => {
    // タグの取得（フィールド名: tags）
    let tagId = '';
    let tagLabel = '';
    
    const tagField = article.tags;
    
    if (tagField) {
      if (Array.isArray(tagField) && tagField.length > 0) {
        const firstTag = tagField[0];
        if (typeof firstTag === 'object' && firstTag !== null) {
          tagId = firstTag.id || '';
          // 日本語フィールド名「タグ名」を優先
          tagLabel = firstTag['タグ名'] || firstTag.name || firstTag.title || firstTag.label || firstTag.tag || '';
        } else {
          tagId = String(firstTag);
          tagLabel = String(firstTag);
        }
      } else if (typeof tagField === 'object' && tagField !== null) {
        tagId = tagField.id || '';
        tagLabel = tagField['タグ名'] || tagField.name || tagField.title || tagField.label || tagField.tag || '';
      } else if (typeof tagField === 'string') {
        tagId = tagField;
        tagLabel = tagField;
      }
    }
    
    return {
      id: article.id,
      date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).replace(/\//g, '.'),
      tag: tagId,
      tagLabel: tagLabel,
      title: article.title || '',
      image: article.thumbnail?.url || article.image?.url || null,
      slug: article.id,
      description: article.description || '',
    };
  });
  
  return (
    <>
      <Header />
      <InfoListPage articles={formattedArticles} tags={formattedTags} />
      <Footer />
    </>
  );
}
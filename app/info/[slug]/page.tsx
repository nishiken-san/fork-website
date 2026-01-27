import { client } from '../../../libs/microcms';
import { notFound } from 'next/navigation';
import InfoDetailPage from './InfoDetailPage';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

// 記事を取得（エンドポイント: info）
async function getArticle(slug: string) {
  try {
    const article = await client.get({
      endpoint: 'info',
      contentId: slug,
    });
    return article;
  } catch (error) {
    console.error('Failed to fetch article:', error);
    return null;
  }
}

export default async function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // タグの取得（フィールド名: tags）
  let tagLabel = '';
  let tagId = '';
  const tagField = article.tags;
  
  if (tagField) {
    if (Array.isArray(tagField) && tagField.length > 0) {
      const firstTag = tagField[0];
      if (typeof firstTag === 'object' && firstTag !== null) {
        tagId = firstTag.id || '';
        // nameフィールドを優先、なければtitle、label
        tagLabel = firstTag.name || firstTag.title || firstTag.label || firstTag.tag || '';
      } else {
        tagId = String(firstTag);
        tagLabel = String(firstTag);
      }
    } else if (typeof tagField === 'object' && tagField !== null) {
      tagId = tagField.id || '';
      tagLabel = tagField.name || tagField.title || tagField.label || tagField.tag || '';
    } else if (typeof tagField === 'string') {
      tagId = tagField;
      tagLabel = tagField;
    }
  }
  
  // 記事データを整形
  const formattedArticle = {
    id: article.id,
    date: new Date(article.publishedAt || article.createdAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '.'),
    tag: tagLabel,
    tagId: tagId,
    title: article.title || '',
    image: article.thumbnail?.url || article.image?.url || null,
    content: article.content || article.body || '',
    caption: article.caption || '',
  };
  
  return (
    <>
      <InfoDetailPage article={formattedArticle} />
      <Footer />
    </>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../styles/info-list.css';

// 記事の型定義
interface InfoArticle {
  id: string;
  date: string;
  tag: string;        // タグID
  tagLabel?: string;  // タグ名（表示用）
  title: string;
  image?: string;
  slug: string;
  description?: string;
}

// タグの型定義
interface Tag {
  id: string;
  label: string;
}

interface InfoListPageProps {
  articles: InfoArticle[];
  tags?: Tag[];
}

const InfoListPage = ({ articles = [], tags = [] }: InfoListPageProps) => {
  const [activeTag, setActiveTag] = useState('all');

  // タグリスト（「すべての記事」を先頭に追加）
  const tagList = [
    { id: 'all', label: 'すべての記事' },
    ...tags
  ];

  // タグ名でフィルタリング（tagLabelを使用）
  const filteredArticles = activeTag === 'all' 
    ? articles 
    : articles.filter(article => {
        // タグIDで一致、またはタグ名で一致
        const selectedTag = tagList.find(t => t.id === activeTag);
        return article.tag === activeTag || article.tagLabel === selectedTag?.label;
      });

  // 記事がない場合
  if (!articles || articles.length === 0) {
    return (
      <div className="info-list-page">
        <div className="info-list-container">
          <div className="info-list-left">
            <div className="info-list-sticky">
              <h1 className="info-list-title">おしらせ・記録</h1>
              
              <div className="info-list-topics">topics</div>
              <div className="info-list-tags">
                {tagList.map((tag) => (
                  <button
                    key={tag.id}
                    className={`info-tag-button ${activeTag === tag.id ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag.id)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="info-list-right">
            <div className="info-list-mobile-tags">
              <div className="info-list-mobile-topics">topics</div>
              <div className="info-list-tags">
                {tagList.map((tag) => (
                  <button
                    key={tag.id}
                    className={`info-tag-button ${activeTag === tag.id ? 'active' : ''}`}
                    onClick={() => setActiveTag(tag.id)}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="info-list-content">
              <div className="info-articles-grid">
                <p style={{ color: '#003705', fontSize: '14px' }}>記事がありません</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="info-list-page">
      <div className="info-list-container">
        {/* PC: 左カラム / モバイル: 右カラム（縦書きタイトル） */}
        <div className="info-list-left">
          <div className="info-list-sticky">
            <h1 className="info-list-title">おしらせ・記録</h1>
            
            {/* PC用タグ */}
            <div className="info-list-topics">topics</div>
            <div className="info-list-tags">
              {tagList.map((tag) => (
                <button
                  key={tag.id}
                  className={`info-tag-button ${activeTag === tag.id ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag.id)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PC: 右カラム / モバイル: 左カラム（記事） */}
        <div className="info-list-right">
          {/* モバイル用タグ */}
          <div className="info-list-mobile-tags">
            <div className="info-list-mobile-topics">topics</div>
            <div className="info-list-tags">
              {tagList.map((tag) => (
                <button
                  key={tag.id}
                  className={`info-tag-button ${activeTag === tag.id ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag.id)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* 記事グリッド */}
          <div className="info-list-content">
            <div className="info-articles-grid">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Link 
                    href={`/info/${article.slug}`} 
                    key={article.id}
                    className="info-article-card"
                  >
                    <div className="info-article-image">
                      {article.image ? (
                        <img src={article.image} alt={article.title} />
                      ) : (
                        <span className="no-image">No Image</span>
                      )}
                    </div>
                    <div className="info-article-date">{article.date}</div>
                    {article.tagLabel && (
                      <span className="info-article-tag">
                        {article.tagLabel}
                      </span>
                    )}
                    <h2 className="info-article-title">{article.title}</h2>
                  </Link>
                ))
              ) : (
                <p style={{ color: '#003705', fontSize: '14px' }}>
                  該当する記事がありません
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoListPage;
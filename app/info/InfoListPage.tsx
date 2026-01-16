'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import './../styles/info-list.css';

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
  slug?: string;
}

interface InfoListPageProps {
  articles: InfoArticle[];
  tags?: Tag[];
  initialTag?: string;  // 初期タグ（URLパラメータから）
}

const InfoListPage = ({ articles = [], tags = [], initialTag = '' }: InfoListPageProps) => {
  // 初期タグがある場合、それに一致するタグIDを探す
  const findMatchingTagId = (tagParam: string): string => {
    if (!tagParam || tagParam === 'all') return 'all';
    
    const decodedParam = decodeURIComponent(tagParam);
    
    // タグリストから一致するものを探す（ID、ラベル、スラッグで検索）
    const matchedTag = tags.find(t => 
      t.id === tagParam || 
      t.id === decodedParam ||
      t.label === tagParam || 
      t.label === decodedParam ||
      t.slug === tagParam ||
      t.slug === decodedParam
    );
    
    // マッチしたタグがあればそのIDを返す、なければパラメータをそのまま返す
    return matchedTag ? matchedTag.id : tagParam;
  };

  const [activeTag, setActiveTag] = useState(() => findMatchingTagId(initialTag));

  // initialTagが変更されたときにactiveTagを更新
  useEffect(() => {
    const newTagId = findMatchingTagId(initialTag);
    setActiveTag(newTagId);
  }, [initialTag, tags]);

  // タグリスト（「すべての記事」を先頭に追加）
  const tagList = useMemo(() => [
    { id: 'all', label: 'すべての記事', slug: 'all' },
    ...tags
  ], [tags]);

  // フィルタリング（複数の条件で一致を確認）
  const filteredArticles = useMemo(() => {
    if (activeTag === 'all') {
      return articles;
    }
    
    // 選択されたタグの情報を取得
    const selectedTag = tagList.find(t => t.id === activeTag);
    
    return articles.filter(article => {
      // タグIDで一致
      if (article.tag === activeTag) return true;
      
      // タグ名で一致
      if (selectedTag && article.tagLabel === selectedTag.label) return true;
      
      // タグ名が直接一致（日本語タグ名の場合）
      if (article.tagLabel === activeTag) return true;
      
      // デコードしたパラメータと一致
      const decodedActiveTag = decodeURIComponent(activeTag);
      if (article.tag === decodedActiveTag) return true;
      if (article.tagLabel === decodedActiveTag) return true;
      
      return false;
    });
  }, [articles, activeTag, tagList]);

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
                      <img 
                        src={article.image || '/images/info/default.png'} 
                        alt={article.title} 
                      />
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
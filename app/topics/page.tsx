'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/topics.css';

interface Topic {
  id: string;
  slug: string;
  date: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail?: string;
}

export default function TopicsPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data.topics || []));
  }, []);

  // カテゴリとタグの一覧を取得
  const categories = ['all', ...Array.from(new Set(topics.map(t => t.category)))];
  const allTags = Array.from(new Set(topics.flatMap(t => t.tags)));

  // フィルタリング
  const filteredTopics = topics.filter(topic => {
    const categoryMatch = selectedCategory === 'all' || topic.category === selectedCategory;
    const tagMatch = selectedTag === 'all' || topic.tags.includes(selectedTag);
    return categoryMatch && tagMatch;
  });

  return (
    <>
      <Header />
      <div className="topics-page">
        <div className="topics-container">
          {/* 左側: 固定サイドバー */}
          <aside className="topics-sidebar">
            <div className="topics-sidebar-sticky">
              {/* 縦書きタイトル */}
              <h1 className="topics-title-vertical">お知らせ・記録</h1>
              
              {/* カテゴリフィルター */}
              <div className="filter-section">
                <h3 className="filter-title">category</h3>
                <div className="filter-list">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat === 'all' ? 'すべて' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* タグフィルター */}
              <div className="filter-section">
                <h3 className="filter-title">tags</h3>
                <div className="filter-tags">
                  <button
                    className={`tag-button ${selectedTag === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedTag('all')}
                  >
                    すべて
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* 右側: 記事一覧 */}
          <main className="topics-main">
            <div className="topics-grid">
              {filteredTopics.map(topic => (
                <Link 
                  key={topic.id} 
                  href={`/topics/${topic.slug}`}
                  className="topic-card"
                >
                  <div className="topic-thumbnail">
                    {topic.thumbnail ? (
                      <img src={topic.thumbnail} alt={topic.title} />
                    ) : (
                      <div className="topic-thumbnail-placeholder">
                        {/* デフォルト画像またはアイコン */}
                        <span>📄</span>
                      </div>
                    )}
                  </div>
                  <div className="topic-info">
                    <div className="topic-meta">
                      <span className="topic-date">{topic.date}</span>
                      <span className="topic-category">{topic.category}</span>
                    </div>
                    <h2 className="topic-title">{topic.title}</h2>
                    <p className="topic-excerpt">{topic.content.substring(0, 80)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
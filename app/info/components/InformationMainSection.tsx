'use client';

import { useState, useEffect } from 'react';
import '../../styles/Information-section.css';

interface Article {
  id: string;
  title: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  slug: string;
}

const Information = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        // articlesの一覧を取得
        const response = await fetch('/api/articles');
        if (response.ok) {
          const data = await response.json();
          setArticles(data.articles);
          setFilteredArticles(data.articles);
          
          // タグ一覧を抽出
          const tags = Array.from(new Set(data.articles.flatMap((article: Article) => article.tags)));
          setAllTags(tags);
        } else {
          console.error('記事の読み込みに失敗しました');
        }
      } catch (error) {
        console.error('記事の読み込みエラー:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  // タグフィルタリング
  const handleTagFilter = (tag: string) => {
    setSelectedTag(tag);
    if (tag === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.tags.includes(tag)));
    }
  };

  return (
    <div className="information-page">
      {/* Main Content */}
      <main className="information-main">
        <div className="information-container">
          {/* Left Sidebar - Sticky */}
          <aside className="information-sidebar">
            <div className="sidebar-content">
              <h1 className="page-title">おしらせ・記録</h1>
              
              <div className="sidebar-title">topics</div>
              
              {/* Tag Filter */}
              <div className="tag-filter">
                <button 
                  className={`tag-button ${selectedTag === 'all' ? 'active' : ''}`}
                  onClick={() => handleTagFilter('all')}
                >
                  すべて記事
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => handleTagFilter(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Filter Buttons */}
              <div className="filter-buttons">
                <button className="filter-btn">first toyama</button>
                <button className="filter-btn">メディア掲載</button>
                <button className="filter-btn">ワークショップ</button>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <section className="content-area">
            {loading ? (
              <div className="loading">記事を読み込み中...</div>
            ) : filteredArticles.length > 0 ? (
              <div className="articles-grid">
                {filteredArticles.map(article => (
                  <article key={article.id} className="article-card">
                    <div className="article-image">
                      <img src={article.image} alt={article.title} />
                    </div>
                    
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="article-date">{article.date}</span>
                        <div className="article-tags">
                          {article.tags.map(tag => (
                            <span key={tag} className="article-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                      
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-excerpt">{article.excerpt}</p>
                      
                      <a href={`/information/${article.slug}`} className="read-more">
                        続きを読む →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-articles">該当する記事が見つかりません。</div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="information-footer">
        <div className="footer-container">
          <p>&copy; 2024 Fork Toyama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Information;
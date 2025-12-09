// app/info/InfoPageClient.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { InfoArticle, Tag } from '@/src/types/blog';
import { formatDate, generateExcerpt } from '../../src/lib/Utils';

interface InfoPageClientProps {
  articles: InfoArticle[];
  tags: Tag[];
  currentTag?: string;
  currentPage: number;
  totalPages: number;
}

export default function InfoPageClient({
  articles,
  tags,
  currentTag,
  currentPage,
  totalPages,
}: InfoPageClientProps) {
  return (
    <>
      <style jsx>{`
        .info-page {
          min-height: 100vh;
          background-color: #E7EBE7;
        }
        
        .info-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 50px 80px;
        }
        
        .info-header {
          margin-bottom: 60px;
        }
        
        .info-title {
          font-size: 14px;
          font-weight: 700;
          color: #B4B4B4;
          letter-spacing: 0.1em;
          margin: 0 0 10px 0;
        }
        
        .info-title-ja {
          font-size: 32px;
          font-weight: 700;
          color: #003705;
          margin: 0;
        }
        
        .no-articles {
          text-align: center;
          padding: 80px 20px;
          color: #666;
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .info-container {
            padding: 100px 30px 60px;
          }
          
          .info-title-ja {
            font-size: 24px;
          }
        }
      `}</style>

      <style jsx global>{`
        .tag-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }
        
        .tag-filter-item {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 700;
          color: #003705;
          background-color: transparent;
          border: 1px solid #003705;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .tag-filter-item:hover,
        .tag-filter-item.active {
          background-color: #003705;
          color: #FFFFFF;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .info-card {
          display: flex;
          gap: 30px;
          padding: 30px;
          background-color: #FFFFFF;
          border: 1px solid #003705;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .info-card:hover {
          box-shadow: 4px 4px 0 #003705;
          transform: translate(-2px, -2px);
        }
        
        .info-card-thumbnail {
          flex-shrink: 0;
          width: 200px;
          height: 150px;
          position: relative;
          overflow: hidden;
          background-color: #E7EBE7;
        }
        
        .info-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .info-card-date {
          font-size: 13px;
          font-weight: 700;
          color: #B4B4B4;
          margin-bottom: 10px;
        }
        
        .info-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #003705;
          margin: 0 0 15px 0;
          line-height: 1.5;
        }
        
        .info-card-excerpt {
          font-size: 14px;
          font-weight: 400;
          color: #333;
          line-height: 1.8;
          margin: 0 0 15px 0;
          flex: 1;
        }
        
        .info-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .info-card-tag {
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 700;
          color: #003705;
          background-color: #E7EBE7;
        }
        
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 60px;
        }
        
        .pagination-item {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: #003705;
          background-color: transparent;
          border: 1px solid #003705;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .pagination-item:hover,
        .pagination-item.active {
          background-color: #003705;
          color: #FFFFFF;
        }
        
        @media (max-width: 768px) {
          .info-card {
            flex-direction: column;
            padding: 20px;
          }
          
          .info-card-thumbnail {
            width: 100%;
            height: 200px;
          }
          
          .info-card-title {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="info-page">
        <Header />
        
        <main className="info-container">
          <header className="info-header">
            <p className="info-title">news, information</p>
            <h1 className="info-title-ja">おしらせ</h1>
          </header>

          {/* タグフィルター */}
          {tags.length > 0 && (
            <nav className="tag-filter">
              <Link 
                href="/info" 
                className={`tag-filter-item ${!currentTag ? 'active' : ''}`}
              >
                すべて
              </Link>
              {tags.map((tag) => (
                <Link
                  key={tag.id}
                  href={`/info?tag=${tag.id}`}
                  className={`tag-filter-item ${currentTag === tag.id ? 'active' : ''}`}
                >
                  {tag.name}
                </Link>
              ))}
            </nav>
          )}

          {/* 記事リスト */}
          {articles.length > 0 ? (
            <div className="info-list">
              {articles.map((article) => (
                <Link 
                  key={article.id} 
                  href={`/info/${article.id}`}
                  className="info-card"
                >
                  <div className="info-card-thumbnail">
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail.url}
                        alt={article.title}
                        fill
                        sizes="200px"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#B4B4B4',
                        fontSize: '12px'
                      }}>
                        No Image
                      </div>
                    )}
                  </div>
                  
                  <div className="info-card-content">
                    <time className="info-card-date">
                      {formatDate(article.publishedAt)}
                    </time>
                    <h2 className="info-card-title">{article.title}</h2>
                    <p className="info-card-excerpt">
                      {article.excerpt || generateExcerpt(article.content, 120)}
                    </p>
                    {article.tags && article.tags.length > 0 && (
                      <div className="info-card-tags">
                        {article.tags.map((tag) => (
                          <span key={tag.id} className="info-card-tag">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-articles">
              <p>お知らせはまだありません。</p>
            </div>
          )}

          {/* ページネーション */}
          {totalPages > 1 && (
            <nav className="pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/info?${currentTag ? `tag=${currentTag}&` : ''}page=${page}`}
                  className={`pagination-item ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </Link>
              ))}
            </nav>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
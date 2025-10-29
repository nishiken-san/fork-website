// app/components/NewsSection.tsx
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  category: string;
}

const NewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  // サンプルデータ
  const newsItems: NewsItem[] = [
    {
      id: '1',
      date: '2024.01.01',
      title: 'WEBサイトがリニューアルしました。WEBサイトがリニューアルしました。',
      content: '',
      category: 'fork toyama'
    },
    {
      id: '2',
      date: '2024.01.01',
      title: '令和7年度の学童募集を開始しました。',
      content: '',
      category: 'fork toyama'
    }
  ];

  return (
    <>
      <style jsx>{`
        .news-bg {
          background-color: #E7E7E7;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 66.666667%;
          background-color: #E7E7E7;
        }
        .right-column {
          width: 33.333333%;
          background-color: #E7E7E7;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #E7E7E7;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .section-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
        }
        .content-area {
          padding: 4rem 4rem 4rem 2rem;
          min-height: 100vh;
        }
        .section-header {
          color: #666;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 3rem;
          letter-spacing: 0.05em;
        }
        .news-item {
          margin-bottom: 3rem;
        }
        .news-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .news-date {
          color: #666;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .news-category {
          background-color: #D9D9D9;
          color: #666;
          padding: 0.25rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 4px;
        }
        .news-title {
          color: #003705;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.8;
        }
        .view-all-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 4rem;
        }
        .view-all-link {
          color: #003705;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: underline;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .view-all-link:hover {
          opacity: 0.7;
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="news" className="news-bg relative">
        <div className="section-container">
          {/* 左側: スクロールするニュース記事エリア */}
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="section-header">news, records</div>
              
              {newsItems.map((item) => (
                <article key={item.id} className="news-item">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                </article>
              ))}
              
              
            </div>
          </div>

          {/* 右側: 固定ヘッダー */}
          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">お知らせ・記録</h2>
            </div>

            <div className="view-all-container">
                <a href="/news" className="view-all-link">
                  すべてのおしらせ ＝＞
                </a>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
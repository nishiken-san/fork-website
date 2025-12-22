// app/components/NewsSection.tsx
'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

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
      title: 'WEBサイトがリニューアルしました。',
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
          background-color: #E7EBE7;
          height: 400px;
        }
        .section-container {
          display: flex;
          height: 400px;
        }
        .left-column {
          width: 66.666667%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .sticky-header {
          position: relative;
          background-color: #E7EBE7;
          z-index: 20;
          height: 100%;
        }
        .section-title {
          position: absolute;
          right: 50px;
          top: 45px;
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
        }
        .content-area {
          position: relative;
          height: 100%;
        }
        .section-header {
          position: absolute;
          left: 50px;
          top: 100px;
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        
        .news-list {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .news-item-1 {
          position: absolute;
          left: 50px;
          top: 145px;
        }
        
        .news-item-2 {
          position: absolute;
          left: 50px;
          top: 216px;
        }
        
        .news-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .news-date {
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 400;
        }
        
        .news-category {
          background-color: transparent;
          color: #B4B4B4;
          border: 1px solid #B4B4B4;
          padding: 0 0.25rem;
          font-size: 10px;
          font-weight: 700;
          height: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          white-space: nowrap;
        }
        
        .news-title {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .view-all-container {
          position: absolute;
          right: 0;
          bottom: 81px;
          padding-right: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .view-all-link {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        
        .view-all-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #003705;
        }
        
        .arrow-icon {
          width: 24px;
          height: 12px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .view-all-container:hover .view-all-link {
          transform: translateX(0.5em);
        }
        
        .view-all-container:hover .arrow-icon {
          transform: translateX(0.5em);
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .news-bg {
            height: 400px;
          }
          
          .section-container {
            height: 400px;
          }
          
          .left-column {
            width: 66.666667%;
          }
          
          .right-column {
            width: 33.333333%;
          }
          
          .sticky-header {
            position: relative;
            height: 100%;
          }
          
          .section-title {
            position: absolute;
            right: 30px;
            top: 45px;
            font-size: 25px;
            font-weight: 700;
            writing-mode: vertical-rl;
          }
          
          .section-header {
            left: 30px;
            top: 100px;
          }
          
          .news-item-1 {
            left: 30px;
            top: 145px;
          }
          
          .news-item-2 {
            left: 30px;
            top: 216px;
          }
          
          .news-title {
            font-size: 13px;
            font-weight: 700;
            max-width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          
          .view-all-container {
            position: absolute;
            right: 0;
            bottom: 50px;
            left: auto;
            padding-right: 30px;
            flex-direction: row;
          }
          
          .view-all-link {
            writing-mode: horizontal-tb;
          }
        }
      `}</style>

      <section ref={sectionRef} id="news" className="news-bg relative">
        <div className="section-container">
          {/* 左側: ニュース記事エリア */}
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="section-header">news, records</div>
              
              <div className="news-list">
                {/* 1個目のニュース */}
                <article className="news-item-1">
                  <div className="news-meta">
                    <span className="news-date">{newsItems[0].date}</span>
                    <span className="news-category">{newsItems[0].category}</span>
                  </div>
                  <h3 className="news-title">{newsItems[0].title}</h3>
                </article>
                
                {/* 2個目のニュース */}
                <article className="news-item-2">
                  <div className="news-meta">
                    <span className="news-date">{newsItems[1].date}</span>
                    <span className="news-category">{newsItems[1].category}</span>
                  </div>
                  <h3 className="news-title">{newsItems[1].title}</h3>
                </article>
              </div>
            </div>
          </div>

          {/* 右側: 固定ヘッダー */}
          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">おしらせ･記録</h2>
              <div className="view-all-container">
                <a href="/news" className="view-all-link">
                  すべてのおしらせ
                </a>
                <img 
                  src={IMAGES.logo.vec}
                  alt="arrow"
                  className="arrow-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
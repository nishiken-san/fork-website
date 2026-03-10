// app/components/NewsSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';
import { IMAGES } from '@/constants/images';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  tagLabel?: string;
}

const NewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);
  
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await fetch('/api/news/latest');
        if (response.ok) {
          const data = await response.json();
          setNewsItems(data);
        }
      } catch (error) {
        console.error('Error fetching latest news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

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
          right: 40px;
          top: 45px;
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
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
        
        .news-item {
          position: absolute;
          left: 50px;
          text-decoration: none;
          display: block;
          transition: opacity 0.3s ease;
        }
        
        .news-item:hover {
          opacity: 0.7;
        }
        
        .news-item-1 {
          top: 145px;
        }
        
        .news-item-2 {
          top: 216px;
        }
        
        .news-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem 0.75rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        
        .news-date {
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 700;
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
          display: inline-flex;
          align-items: center;
          gap: 5px;
          width: fit-content;
          cursor: pointer;
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
          bottom: 0px;
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
        
        .view-all-container:hover .view-all-link,
        .view-all-container:hover .arrow-icon {
          transform: translateX(0.5em);
        }
        
        .no-articles {
          position: absolute;
          left: 50px;
          top: 145px;
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 700;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .news-bg {
            height: auto;
            min-height: 400px;
            padding-bottom: 30px;
          }
          
          .section-container {
            height: auto;
            min-height: 400px;
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
            min-height: 400px;
          }
          
          .section-title {
            position: absolute;
            right: 20px;
            top: 45px;
            font-size: 25px;
            font-weight: 700;
            writing-mode: vertical-rl;
          }
          
          .section-header {
            left: 30px;
            top: 100px;
          }
          
          .news-list {
            position: relative;
            height: auto;
            padding-top: 145px;
            padding-bottom: 80px;
            padding-left: 30px;
            padding-right: 10px;
          }
          
          .news-item {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            display: block;
            margin-bottom: 20px;
          }
          
          .news-item-1,
          .news-item-2 {
            position: relative !important;
            top: auto !important;
          }
          
          .news-meta {
            max-width: 100%;
          }
          
          .news-title {
            font-size: 13px;
            font-weight: 700;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          
          .view-all-container {
            position: absolute;
            right: 0;
            bottom: 30px;
            left: auto;
            padding-right: 30px;
            flex-direction: row;
          }
          
          .view-all-link {
            writing-mode: horizontal-tb;
          }
          
          .no-articles {
            position: relative;
            left: auto;
            top: auto;
            padding-top: 145px;
            padding-left: 30px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="news" className="news-bg relative">
        <div className="section-container">
          <div ref={contentRef} className="left-column">
            <div className="content-area">
              <div className="section-header">news, records</div>
              
              <div className="news-list">
                {isLoading ? (
                  <p className="no-articles">読み込み中...</p>
                ) : newsItems.length > 0 ? (
                  <>
                    {newsItems[0] && (
                      <a 
                        href={`/info/${newsItems[0].id}`}
                        className="news-item news-item-1"
                      >
                        <div className="news-meta">
                          <span className="news-date">{newsItems[0].date}</span>
                          {newsItems[0].tagLabel && (
                            <span className="news-category">{newsItems[0].tagLabel}</span>
                          )}
                        </div>
                        <h3 className="news-title">{newsItems[0].title}</h3>
                      </a>
                    )}
                    
                    {newsItems[1] && (
                      <a 
                        href={`/info/${newsItems[1].id}`}
                        className="news-item news-item-2"
                      >
                        <div className="news-meta">
                          <span className="news-date">{newsItems[1].date}</span>
                          {newsItems[1].tagLabel && (
                            <span className="news-category">{newsItems[1].tagLabel}</span>
                          )}
                        </div>
                        <h3 className="news-title">{newsItems[1].title}</h3>
                      </a>
                    )}
                  </>
                ) : (
                  <p className="no-articles">記事がありません</p>
                )}
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">おしらせ・記録</h2>
              <div className="view-all-container">
                <a href="/info" className="view-all-link">
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
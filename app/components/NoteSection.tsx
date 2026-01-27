// app/components/NoteSection.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { IMAGES } from '@/constants/images';

interface NoteItem {
  id: string;
  url: string;
  date: string;
  title: string;
  image: string;
  category: string;
}

const NoteSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [noteItems, setNoteItems] = useState<NoteItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNoteArticles = async () => {
      try {
        const response = await fetch('/api/note');
        if (response.ok) {
          const data = await response.json();
          setNoteItems(data);
        }
      } catch (error) {
        console.error('Error fetching note articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoteArticles();
  }, []);

  return (
    <>
      <style jsx>{`
        .note-bg {
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
          justify-content: space-between;
        }
        .left-column {
          flex: 0 0 auto;
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          flex: 0 0 auto;
          width: min(66.666%, 900px);
          max-width: 900px;
          background-color: #E7EBE7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 80px 0 50px 50px;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .section-title {
          color: #003705;
          font-size: 25px;
          font-weight: 700;
          line-height: 1.4;
        }
        .content-area {
          padding: 80px 0 4rem 0;
          position: relative;
        }
        
        .scroll-wrapper {
          position: relative;
          padding-right: 50px;
          display: flex;
          align-items: center;
        }
        
        .scroll-line-left,
        .scroll-line-right {
          position: absolute;
          width: 1px;
          background-color: #003705;
          z-index: 10;
          top: -80px;
          bottom: -80px;
        }
        
        .scroll-line-left {
          left: 0;
        }
        
        .scroll-line-right {
          right: 50px;
        }
        
        .scroll-container {
          display: flex;
          gap: 25px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding: 30px 0;
          align-items: flex-start;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .note-card {
          flex: 0 0 300px;
          height: auto;
          background-color: #FFFFFF;
          border: 1px solid #003705;
          box-shadow: 3px 3px 0px #003705;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .note-card:hover {
          transform: translateY(-4px);
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 20px;
        }
        .card-date {
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 700;
        }
        .card-category {
          background-color: transparent;
          color: #B4B4B4;
          border: 1px solid #B4B4B4;
          padding: 0 0.25rem;
          font-size: 13px;
          font-weight: 700;
          height: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          white-space: nowrap;
        }
        .card-title {
          color: #003705;
          font-size: 0.875rem;
          font-weight: 700;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .view-all-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 2rem;
          padding-right: 50px;
          gap: 0.5rem;
        }
        .view-all-link {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          position: relative;
          padding-bottom: 0px;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .view-all-link::after {
          content: '';
          position: absolute;
          bottom: -0.5px;
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
        
        .loading-text {
          color: #B4B4B4;
          font-size: 14px;
        }
        
        @media (max-width: 768px) {
          .section-container {
            flex-direction: column;
          }
          
          .left-column {
            width: 100%;
          }
          
          .right-column {
            width: 100%;
          }
          
          .sticky-header {
            position: static;
            padding: 50px 30px 30px 30px;
          }
          
          .section-label {
            margin-bottom: 1rem;
          }
          
          .content-area {
            padding: 0 0 2rem 30px;
          }
          
          .scroll-wrapper {
            padding-right: 30px;
          }
          
          .scroll-line-left,
          .scroll-line-right {
            top: -30px;
            bottom: -30px;
          }
          
          .scroll-line-right {
            right: 30px;
          }
          
          .view-all-container {
            padding-right: 30px;
            padding-top: 20px;
          }
        }
        
        @media (min-width: 1024px) {
          .section-title {
            font-size: 25px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="note" className="note-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">note</div>
              <h2 className="section-title">note</h2>
            </div>
          </div>

          <div className="right-column">
            <div className="content-area">
              <div className="scroll-wrapper">
                <div className="scroll-line-left"></div>
                <div className="scroll-line-right"></div>
                
                <div ref={scrollContainerRef} className="scroll-container">
                  {isLoading ? (
                    <span className="loading-text">読み込み中...</span>
                  ) : noteItems.length > 0 ? (
                    noteItems.map((item) => (
                      <a 
                        key={item.id} 
                        href={item.url} 
                        className="note-card"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div 
                          style={{
                            width: '100%',
                            height: '150px',
                            backgroundColor: '#D9D9D9',
                            marginBottom: '1rem',
                            overflow: 'hidden',
                          }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.title}
                            style={{
                              width: '100%',
                              height: '150px',
                              objectFit: 'cover',
                              objectPosition: 'center center',
                              display: 'block',
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/note/default.png';
                            }}
                          />
                        </div>
                        <div className="card-meta">
                          <span className="card-date">{item.date}</span>
                          <span className="card-category">{item.category}</span>
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                      </a>
                    ))
                  ) : (
                    <span className="loading-text">記事が見つかりませんでした</span>
                  )}
                </div>
              </div>
              
              <div className="view-all-container">
                <a 
                  href="https://note.com/forktoyama" 
                  className="view-all-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  noteをみる
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

export default NoteSection;
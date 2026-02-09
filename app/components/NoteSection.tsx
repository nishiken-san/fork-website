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
  
  // ドラッグスクロール用の状態
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  // マウスドラッグ開始
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
  };

  // マウスドラッグ中
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  // マウスドラッグ終了
  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = 'grab';
    }
  };

  // マウスが要素から離れた時
  const handleMouseLeave = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.style.cursor = 'grab';
    }
  };

  // タッチドラッグ開始
  const handleTouchStart = (e: React.TouchEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  // タッチドラッグ中
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  };

  // タッチドラッグ終了
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // カードクリック時（ドラッグ中はリンク遷移を防ぐ）
  const handleCardClick = (e: React.MouseEvent, url: string) => {
    if (isDragging) {
      e.preventDefault();
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          padding: 80px 0 80px 0;
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
          top: 0px;
          bottom: 0px;
        }
        
        
        .scroll-line-right {
          right: 50px;
        }
        
        .scroll-container {
          display: flex;
          gap: 25px;
          overflow-x: auto;
          overflow-y: visible;
          padding: 30px 5px 35px 0;
          align-items: stretch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          -webkit-overflow-scrolling: touch;
        }
        
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .scroll-container.dragging {
          cursor: grabbing;
          scroll-behavior: auto;
        }
        
        .note-card {
          flex: 0 0 250px;
          height: 315px;
          background-color: #FFFFFF;
          border: 1px solid #003705;
          box-shadow: 3px 3px 0px #003705;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        
        .note-card:hover {
          transform: translateY(-4px);
        }
        
        .note-card.dragging {
          cursor: grabbing;
        }
        
        .card-image-wrapper {
          width: 100%;
          height: 150px;
          min-height: 120px;
          max-height: 150px;
          background-color: #D9D9D9;
          margin-bottom: 15px;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .card-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          object-position: center center;
          display: block;
          pointer-events: none;
        }
        
        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 15px;
          flex-shrink: 0;
        }
        
        .card-date {
          color: #B4B4B4;
          font-size: 11px;
          font-weight: 700;
        }
        
        .card-category {
          background-color: transparent;
          color: #B4B4B4;
          border: 1px solid #B4B4B4;
          padding: 0 0.25rem;
          font-size: 10px;
          font-weight: 700;
          height: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
          white-space: nowrap;
        }
        
        .card-title {
          color: #003705;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
          height: 54px;
          min-height: 54px;
          max-height: 54px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
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
            padding: 50px 30px 20px 30px;
          }
          
          .section-label {
            margin-bottom: 20px;
          }
          
          .content-area {
            padding: 0 0 ;
          }
          
          .scroll-wrapper {
            padding-bottom: 0px;
          }
          
          .scroll-line-left,
          .scroll-line-right {
            display: none;
          }
          
          .note-card {
            flex: 0 0 180px;
            height: 260px;
          }
          
          .card-image-wrapper {
            height: 100px;
            min-height: 100px;
            max-height: 100px;
          }
          
          .card-image {
            height: 100px;
          }
          
          .view-all-container {
            padding-right: 30px;
            padding-top: 0px;
            padding-bottom: 50px;
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
                
                <div 
                  ref={scrollContainerRef} 
                  className={`scroll-container ${isDragging ? 'dragging' : ''}`}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {isLoading ? (
                    <span className="loading-text">読み込み中...</span>
                  ) : noteItems.length > 0 ? (
                    noteItems.slice(0, 4).map((item) => (
                      <div 
                        key={item.id} 
                        className={`note-card ${isDragging ? 'dragging' : ''}`}
                        onClick={(e) => handleCardClick(e, item.url)}
                      >
                        <div className="card-image-wrapper">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="card-image"
                            draggable={false}
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
                      </div>
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
// app/components/NoteSection.tsx
'use client';

import { useRef } from 'react';
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

  // noteの記事情報（手動で設定）
  const noteItems: NoteItem[] = [
    {
      id: '1',
      url: 'https://note.com/forktoyama/n/n9c44750f387b',
      date: '2024.12.10',
      title: 'ここに記事のタイトルが入ります。',
      image: '/images/note/note1.jpg',
      category: 'fork toyama'
    },
    {
      id: '2',
      url: 'https://note.com/forktoyama',
      date: '2024.12.10',
      title: 'ここに記事のタイトルが入ります。',
      image: '/images/note/note2.jpg',
      category: 'fork toyama'
    },
    {
      id: '3',
      url: 'https://note.com/forktoyama',
      date: '2024.12.10',
      title: 'ここに記事のタイトルが入ります。',
      image: '/images/note/note3.jpg',
      category: 'fork toyama'
    },
    {
      id: '4',
      url: 'https://note.com/forktoyama',
      date: '2024.12.10',
      title: 'ここに記事のタイトルが入ります。',
      image: '/images/note/note4.jpg',
      category: 'fork toyama'
    },
    {
      id: '5',
      url: 'https://note.com/forktoyama',
      date: '2024.12.10',
      title: 'ここに記事のタイトルが入ります。',
      image: '/images/note/note5.jpg',
      category: 'fork toyama'
    }
  ];

  return (
    <>
      <style jsx>{`
        .note-bg {
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #E7EBE7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 0;
          margin-left: 50px;
          margin-top: 80px;
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
          padding: 110px 0 4rem 50px;
          position: relative;
        }
        
        /* スクロールコンテナと左右の線 */
        .scroll-wrapper {
          position: relative;
          padding-right: 50px;
          height: 320px;
          display: flex;
          align-items: center;
        }
        
        .scroll-line-left,
        .scroll-line-right {
          position: absolute;
          width: 1px;
          height: 380px;
          background-color: #003705;
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .scroll-line-left {
          left: 0;
        }
        
        .scroll-line-right {
          right: 0;
        }
        
        .scroll-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding-bottom: 0;
          height: 320px;
          align-items: center;
          
          /* スクロールバーを非表示 */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        /* Webkit (Chrome, Safari) のスクロールバーを非表示 */
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .note-card {
          flex: 0 0 300px;
          background-color: #FFFFFF;
          border: 1px solid #003705;
          box-shadow: 1px 1px 0px #003705;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .note-card:hover {
          transform: translateY(-4px);
        }
        .card-image {
          width: 100%;
          height: 200px;
          background-color: #D9D9D9;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .card-date {
          color: #B4B4B4;
          font-size: 13px;
          font-weight: 400;
        }
        .card-category {
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
        .card-title {
          color: #003705;
          font-size: 0.875rem;
          font-weight: 600;
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
          padding-bottom: 2px;
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
            padding: 0;
            margin-left: 30px;
            margin-top: 50px;
          }
          
          .section-label {
            margin-bottom: 1rem;
          }
          
          .content-area {
            padding: 50px 0 2rem 30px;
          }
          
          .scroll-wrapper {
            padding-right: 30px;
          }
          
          .view-all-container {
            padding-right: 30px;
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
          {/* 左側: 固定ヘッダー */}
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">note</div>
              <h2 className="section-title">note</h2>
            </div>
          </div>

          {/* 右側: スクロールコンテンツ */}
          <div className="right-column">
            <div className="content-area">
              <div className="scroll-wrapper">
                {/* 左右の線 */}
                <div className="scroll-line-left"></div>
                <div className="scroll-line-right"></div>
                
                <div ref={scrollContainerRef} className="scroll-container">
                  {noteItems.map((item) => (
                    <a 
                      key={item.id} 
                      href={item.url} 
                      className="note-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="card-image">
                        <img 
                          src={item.image} 
                          alt={item.title}
                        />
                      </div>
                      <div className="card-meta">
                        <span className="card-date">{item.date}</span>
                        <span className="card-category">{item.category}</span>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                    </a>
                  ))}
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
// app/components/NoteSection.tsx
'use client';

import { useRef } from 'react';

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
          background-color: #E7E7E7;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 33.333333%;
          background-color: #E7E7E7;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #E7E7E7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #E7E7E7;
          z-index: 20;
        }
        .section-label {
          color: #999;
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .section-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .content-area {
          padding: 4rem 2rem 4rem 2rem;
          position: relative;
        }
        .scroll-container {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding-bottom: 2rem;
          scrollbar-width: thin;
          scrollbar-color: #003705 #E7E7E7;
        }
        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #E7E7E7;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #003705;
          border-radius: 4px;
        }
        .note-card {
          flex: 0 0 300px;
          background-color: #FFFFFF;
          border: 2px solid #003705;
          box-shadow: 4px 4px 0px #003705;
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
          color: #666;
          font-size: 0.75rem;
        }
        .card-category {
          background-color: #E7E7E7;
          color: #666;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 4px;
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
          margin-top: 2rem;
          padding-right: 2rem;
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
              
              <div className="view-all-container">
                <a 
                  href="https://note.com/forktoyama" 
                  className="view-all-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  noteをみる →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoteSection;
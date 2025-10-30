'use client';

import { useRef, useState, useEffect } from 'react';

interface Supporter {
  name: string;
  type: 'frenz' | 'partner';
}

const SupporterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [loading, setLoading] = useState(true);

  // コンポーネントマウント時にデータ取得
  useEffect(() => {
    fetchSupporters();
  }, []);

  // APIからサポーター情報を取得
  const fetchSupporters = async () => {
    try {
      const response = await fetch('/api/supporters/public');
      if (response.ok) {
        const data = await response.json();
        setSupporters(data.supporters || []);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching supporters:', error);
      setLoading(false);
    }
  };

  // フレンズとパートナーに分類
  const frenzSupporters = supporters.filter(s => s.type === 'frenz');
  const partnerSupporters = supporters.filter(s => s.type === 'partner');

  return (
    <>
      <style jsx>{`
        .supporter-bg {
          background-color: #003705;
        }
        .section-container {
          display: flex;
        }
        .left-column {
          width: 66.666667%;
          background-color: #003705;
        }
        .right-column {
          width: 33.333333%;
          background-color: #003705;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #003705;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .section-title {
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.8;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          letter-spacing: 0.3em;
        }
        .content-area {
          padding: 4rem 4rem 4rem 2rem;
        }
        .section-label {
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 400;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }
        .description {
          color: #FFFFFF;
          font-size: 1rem;
          line-height: 2;
          margin-bottom: 3rem;
          font-weight: 400;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .support-button {
          background-color: #FFFFFF;
          color: #003705;
          padding: 1.5rem 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: center;
          border: none;
        }
        .support-button:hover {
          opacity: 0.8;
        }
        .supporters-list {
          margin-bottom: 3rem;
        }
        .list-title {
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .supporter-names {
          color: #FFFFFF;
          font-size: 0.875rem;
          line-height: 2;
          font-weight: 400;
        }
        .note {
          color: #FFFFFF;
          font-size: 0.75rem;
          opacity: 0.7;
          margin-top: 3rem;
        }
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="supporter" className="supporter-bg relative">
        <div className="section-container">
          {/* 左側: コンテンツエリア（2/3幅） */}
          <div className="left-column">
            <div className="content-area">
              <div className="section-label">supporter</div>
              
              <p className="description">
                子育てをみんなのものにする仲間を募集しています。
              </p>

              {/* 募集ボタン */}
              <div className="button-group">
                <a href="/supporter/frenz" className="support-button">
                  みん盆フレンズ〈個人サポーター〉はこちら
                </a>
                <a href="/supporter/partner" className="support-button">
                  みん盆パートナー〈法人サポーター〉はこちら
                </a>
              </div>

              {/* サポーター一覧 */}
              {loading ? (
                <div style={{ color: '#FFFFFF' }}>読み込み中...</div>
              ) : (
                <>
                  {/* みん盆フレンズ */}
                  {frenzSupporters.length > 0 && (
                    <div className="supporters-list">
                      <h3 className="list-title">みん盆フレンズのみなさま</h3>
                      <div className="supporter-names">
                        {frenzSupporters.map((supporter, index) => (
                          <span key={index}>
                            {supporter.name}
                            {index < frenzSupporters.length - 1 && ' / '}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* みん盆パートナー */}
                  {partnerSupporters.length > 0 && (
                    <div className="supporters-list">
                      <h3 className="list-title">みん盆パートナーのみなさま</h3>
                      <div className="supporter-names">
                        {partnerSupporters.map((supporter, index) => (
                          <span key={index}>
                            {supporter.name}
                            {index < partnerSupporters.length - 1 && ' / '}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <p className="note">
                *2022年度までをさせていただきがたいです
              </p>
            </div>
          </div>

          {/* 右側: 固定タイトル（1/3幅） */}
          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">サポート募集</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupporterSection;
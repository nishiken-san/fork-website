'use client';

import { useRef } from 'react';
import supportersData from '@/public/data/supporters.json';

const SupporterSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style jsx>{`
        .supporter-bg {
          background-color: #003705;
          min-height: 100vh;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 66.666667%;
          background-color: #003705;
          padding: 70px 50px 50px 50px;
        }
        .right-column {
          width: 33.333333%;
          background-color: #003705;
          position: relative;
        }
        .sticky-header {
          position: sticky;
          
          padding: 70px 50px;
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
          letter-spacing: 0.1em;
        }
        .section-label {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
          opacity: 0.8;
        }
        .description {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          line-height: 2;
          padding-top: 20px;
          margin-bottom: 30px;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 4rem;
          max-width: 900px;
        }
        .support-button {
          background-color: #E7EBE7;
          color: #003705;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: block;
          text-align: center;
          border: 1px solid #FFFFFF;
          box-shadow: 3px 3px 0px #FFFFFF;
          width: 100%;
          max-width: 900px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .support-button:hover {
          background-color: #93A794;
        }
        .supporters-list {
          margin-bottom: 3rem;
        }
        .list-title {
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .supporter-names {
          color: #FFFFFF;
          font-size: 13px;
          line-height: 2;
          font-weight: 700;
          max-width: 900px;
        }
        .note {
          color: #FFFFFF;
          font-size: 0.75rem;
          opacity: 0.7;
          margin-top: 3rem;
        }
        
        .mobile-header {
          display: none;
        }
        
        .mobile-content {
          display: none;
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .section-container {
            display: none;
          }
          
          .mobile-header {
            display: flex;
            padding: 50px 0 30px 0;
          }

          .mobile-header-left {
            width: 75%;
            padding-left: 30px;
            padding-top: 100px;
          }
          
          .mobile-header-right {
            width: 25%;
            padding-right: 30px;
            display: flex;
            justify-content: flex-end;
          }
          
          .mobile-header .section-title {
            writing-mode: vertical-rl;
            font-size: 25px;
          }
          
          .mobile-content {
            display: block;
            padding: 0 30px 0px 30px;
          }

          .button-group {
          margin-bottom: 110px;
        }
          
          .mobile-content .button-group {
            max-width: none;
          }
          
          .mobile-content .support-button {
            max-width: none;
          }

          .section-label {
            color: #FFFFFF;
            font-size: 15px;
            font-weight: 700;
            letter-spacing: 0.05em;
            opacity: 0.8;
          }

          .description {
            padding-top: 0px;
          }

          .section-label {
            margin-bottom: 35px;
          }

          .list-title {
          margin-bottom: 45px;
        }
          .supporters-list {
          margin-bottom: 110px;
        }
          .note {
          margin-bottom: 10px;
        }
        }
        
        @media (min-width: 1024px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <section ref={sectionRef} id="supporter" className="supporter-bg">
        {/* PC表示 */}
        <div className="section-container">
          {/* 左側: コンテンツエリア（2/3幅） */}
          <div className="left-column">
            <div className="section-label">supporter</div>
            
            <p className="description">
              子育てをみんなのものにする仲間を募集しています。
            </p>

            {/* 募集ボタン */}
            <div className="button-group">
              <a href="/supporter" className="support-button">
                みん営フレンズ〈個人サポーター〉はこちら
              </a>
              <a href="/supportercorp" className="support-button">
                みん営パートナー〈法人サポーター〉はこちら
              </a>
            </div>

            {/* みん営フレンズ */}
            <div className="supporters-list">
              <h3 className="list-title">みん営フレンズのみなさま</h3>
              <div className="supporter-names">
                {supportersData.frenz.map((name, index) => (
                  <span key={index}>
                    {name}
                    {index < supportersData.frenz.length - 1 && ' / '}
                  </span>
                ))}
              </div>
            </div>

            {/* みん営パートナー */}
            <div className="supporters-list">
              <h3 className="list-title">みん営パートナーのみなさま</h3>
              <div className="supporter-names">
                {supportersData.partners.map((name, index) => (
                  <span key={index}>
                    {name}
                    {index < supportersData.partners.length - 1 && ' / '}
                  </span>
                ))}
              </div>
            </div>

            <p className="note">
              ※2022年に実施した設立クラウドファンディングへのご支援者を含みます。
            </p>
          </div>

          {/* 右側: 固定タイトル（1/3幅） */}
          <div className="right-column">
            <div className="sticky-header">
              <h2 className="section-title">サポート募集</h2>
            </div>
          </div>
        </div>

        {/* モバイル表示 */}
        {/* ヘッダー部分（2カラム） */}
        <div className="mobile-header">
          <div className="mobile-header-left">
            <div className="section-label">supporter</div>
            <p className="description">
              子育てをみんなのものにする仲間を募集しています。
            </p>
          </div>
          <div className="mobile-header-right">
            <h2 className="section-title">サポート募集</h2>
          </div>
        </div>

        {/* コンテンツ部分（全幅） */}
        <div className="mobile-content">
          {/* 募集ボタン */}
          <div className="button-group">
            <a href="/supporter" className="support-button">
              みん営フレンズ〈個人サポーター〉はこちら
            </a>
            <a href="/supportercorp" className="support-button">
              みん営パートナー〈法人サポーター〉はこちら
            </a>
          </div>

          {/* みん営フレンズ */}
          <div className="supporters-list">
            <h3 className="list-title">みん営フレンズのみなさま</h3>
            <div className="supporter-names">
              {supportersData.frenz.map((name, index) => (
                <span key={index}>
                  {name}
                  {index < supportersData.frenz.length - 1 && ' / '}
                </span>
              ))}
            </div>
          </div>

          {/* みん営パートナー */}
          <div className="supporters-list">
            <h3 className="list-title">みん営パートナーのみなさま</h3>
            <div className="supporter-names">
              {supportersData.partners.map((name, index) => (
                <span key={index}>
                  {name}
                  {index < supportersData.partners.length - 1 && ' / '}
                </span>
              ))}
            </div>
          </div>

          <p className="note">
            ※2022年に実施した設立クラウドファンディングへのご支援者を含みます。
          </p>
        </div>
      </section>
    </>
  );
};

export default SupporterSection;

'use client';

import Link from 'next/link';
import './../../styles/info-detail.css';

interface ArticleData {
  id: string;
  date: string;
  tag: string;
  tagId: string;
  title: string;
  image?: string | null;
  content: string;
  caption?: string;
}

interface InfoDetailPageProps {
  article: ArticleData;
}

const InfoDetailPage = ({ article }: InfoDetailPageProps) => {
  return (
    <div className="info-detail-page">
      <div className="info-detail-container">
        {/* 左カラム - 日付・タグ・タイトル・戻るリンク */}
        <div className="info-detail-left">
          <div className="info-detail-sticky">
            {/* 更新日時 */}
            <div className="info-detail-date">{article.date}</div>
            
            {/* タグ - 常に表示（タグがない場合は「タグ分類なし」） */}
            <span className="info-detail-tag">
              {article.tag && article.tag.trim() !== '' ? article.tag : 'タグ分類なし'}
            </span>
            
            {/* 記事タイトル */}
            <h1 className="info-detail-article-title">{article.title}</h1>
            
            {/* 戻るリンク（PC用 - 左カラム最下部） */}
            <div className="info-back-link-container">
              <img 
                src="/images/main/arrow_g.svg"
                alt="arrow"
                className="info-back-arrow"
              />
              <Link href="/info" className="info-back-link">
                <span className="info-back-link-text">すべての記事</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 右カラム - サムネイル・本文 */}
        <div className="info-detail-right">
          {/* サムネイル画像 */}
          {article.image && (
            <div className="info-detail-thumbnail">
              <img src={article.image} alt={article.title} />
              {article.caption && (
                <p className="info-detail-caption">{article.caption}</p>
              )}
            </div>
          )}
          
          {/* 記事本文 */}
          <div 
            className="info-detail-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* 戻るリンク（モバイル・タブレット用 - 本文の下） */}
          <div className="info-back-link-mobile">
            <img 
              src="/images/main/arrow_g.svg"
              alt="arrow"
              className="info-back-arrow"
            />
            <Link href="/info" className="info-back-link">
              <span className="info-back-link-text">すべての記事</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoDetailPage;
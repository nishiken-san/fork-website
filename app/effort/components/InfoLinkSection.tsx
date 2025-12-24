'use client';

import Link from 'next/link';

interface InfoLinkSectionProps {
  // リンク先のタグID（オプション）- タグIDまたはタグ名を指定
  tagId?: string;
  // ボタンのテキスト
  buttonText?: string;
  // カスタムクラス
  className?: string;
  // ボタンスタイルのバリエーション
  variant?: 'default' | 'outline' | 'filled';
}

const InfoLinkSection = ({ 
  tagId,
  buttonText = 'おしらせ一覧を見る',
  className = '',
  variant = 'default'
}: InfoLinkSectionProps) => {
  // タグIDがある場合はクエリパラメータを追加
  const href = tagId ? `/info?tag=${encodeURIComponent(tagId)}` : '/info';

  return (
    <>
      <style jsx>{`
        .info-link-button {
          background-color: #E7EBE7;
          border: 1px solid #003705;
          color: #003705;
          padding: 0;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 53px;
          text-align: center;
          position: relative;
          box-shadow: 3px 3px 0px #003705;
        }
        
        .info-link-button:hover {
          background-color: #93A794;
        }
        
        .info-link-button.outline {
          background-color: transparent;
          border: 1px solid #003705;
          color: #003705;
          box-shadow: none;
        }
        
        .info-link-button.outline:hover {
          background-color: rgba(0, 55, 5, 0.1);
        }
        
        .info-link-button.filled {
          background-color: #003705;
          border: 1px solid #003705;
          color: #FFFFFF;
          box-shadow: 3px 3px 0px rgba(0, 55, 5, 0.5);
        }
        
        .info-link-button.filled:hover {
          background-color: #004d07;
        }
        
        @media (max-width: 768px) {
          .info-link-button {
            font-size: 14px;
            height: 48px;
          }
        }
        
        @media (max-width: 480px) {
          .info-link-button {
            font-size: 13px;
            height: 45px;
          }
        }
      `}</style>
      
      <Link 
        href={href}
        className={`info-link-button ${variant} ${className}`}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default InfoLinkSection;
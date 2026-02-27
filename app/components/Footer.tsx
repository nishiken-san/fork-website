// app/components/Footer.tsx
'use client';

import { IMAGES } from '@/constants/images';

const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer-bg {
          background-color: #003705;
          padding: 100px 0 20px 0;
        }
        
        .footer-container {
          padding: 0 50px;
        }
        
        .nav-links {
          margin-bottom: 2rem;
        }
        
        .nav-link {
          color: #FFFFFF;
          font-size: 15px;
          text-decoration: none;
          display: inline-flex; /* flex → inline-flex */
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
          width: fit-content; /* 文字幅に合わせる */
        }
        
        /* ブロック要素として改行させる */
        .nav-link-wrapper {
          display: block;
        }

        .nav-link-icon {
          width: 1em;
          height: 1em;
          object-fit: contain;
          flex-shrink: 0;
        }

        .nav-link-icon-sub {
          width: 0.8em;
          height: 0.8em;
          object-fit: contain;
          flex-shrink: 0;
        }
        
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
          margin-bottom: 2rem;
        }
        
        .social-link-container {
          display: inline-flex; /* flex → inline-flex */
          align-items: center; /* flex-end → center */
          gap: 5px;
          cursor: pointer;
          width: fit-content; /* 文字幅に合わせる */
        }
        
        .social-link {
          color: #FFFFFF;
          font-size: 13px;
          text-decoration: none;
          transition: transform 0.3s ease;
          display: inline-block;
          position: relative;
          padding-bottom: 2px; /* 下線用のスペース */
        }
        
        /* 下線を疑似要素で実装 */
        .social-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #FFFFFF;
        }
        
        .arrow-icon {
          width: 24px;
          height: 12px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .social-link:hover,
        .social-link-container:has(.arrow-icon:hover) .social-link {
          transform: translateX(0.5em);
        }
        
        .social-link-container:has(.social-link:hover) .arrow-icon,
        .arrow-icon:hover {
          transform: translateX(0.5em);
        }
        
        .copyright {
          color: #FFFFFF;
          font-size: 13px;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            padding: 0 30px;
          }
          
          .social-links {
            align-items: flex-end;
          }
        }
      `}</style>

      <footer className="footer-bg">
        <div className="footer-container">
          {/* ナビゲーションリンク */}
          <div className="nav-links">
            <div className="nav-link-wrapper">
              <a href="/" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> top
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/about" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> わたしたちについて
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/effort" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> とりくみ
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/supporter" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> みん営フレンズ〈個人サポーター〉
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/supportercorp" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> みん営パートナー〈法人・団体サポーター〉
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/info" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> おしらせ
              </a>
            </div>
            <div className="nav-link-wrapper">
              <a href="/forktoyama" className="nav-link">
                <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> お問い合わせ
              </a>
            </div>
          </div>
          
          {/* ソーシャルリンク */}
          <div className="social-links">
            {/* Instagram */}
            <div className="social-link-container">
              <a 
                href="https://www.instagram.com/fork_toyama/" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <img 
                src={IMAGES.logo.vecw}
                alt="arrow"
                className="arrow-icon"
              />
            </div>
            
            {/* note */}
            <div className="social-link-container">
              <a 
                href="https://note.com/forktoyama" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                note
              </a>
              <img 
                src={IMAGES.logo.vecw}
                alt="arrow"
                className="arrow-icon"
              />
            </div>
          </div>
          
          {/* コピーライト */}
          <p className="copyright">
            © fork toyama, 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
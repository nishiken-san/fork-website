// app/components/Footer.tsx
'use client';

import { IMAGES } from '@/constants/images';

const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer-bg {
          background-color: #003705;
          padding: 3rem 0;
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
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
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
          display: flex;
          align-items: flex-end;  /* 右寄せ */
          gap: 10px;
          cursor: pointer;
        }
        
        .social-link {
          color: #FFFFFF;
          font-size: 13px;
          text-decoration: none;
          transition: transform 0.3s ease;
          display: inline-block;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        
        .arrow-icon {
          width: 24px;
          height: 12px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .social-link-container:hover .social-link {
          transform: translateX(0.5em);
        }
        
        .social-link-container:hover .arrow-icon {
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
            <a href="/" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> top
            </a>
            <a href="/about" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> わたしたちについて
            </a>
            <a href="/effort" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> とりくみ
            </a>
            <a href="/supporter" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> みん営フレンズ〈個人サポーター〉
            </a>
            <a href="/supportercorp" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> みん営パートナー〈法人・団体サポーター〉
            </a>
            <a href="/info" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> おしらせ
            </a>
            <a href="/forktoyama" className="nav-link">
              <img src="/images/main/menu-vec.png" alt="" className="nav-link-icon" /> お問い合わせ
            </a>
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
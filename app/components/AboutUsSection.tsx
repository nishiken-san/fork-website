// app/components/AboutUsSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { useSectionSticky } from '../hooks/useSectionSticky';

const AboutUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <style jsx>{`
  .about-section {
    background-color: #003705;
  }

  .section-container {
    display: flex;
    justify-content: space-between;
  }

  .left-column {
    flex: 0 0 auto;
    width: 33.333333%;
    position: relative;
  }

  .right-column {
    flex: 0 0 auto;
    width: min(66.666%, 900px);
    max-width: 900px;
  }

  /* ===== PC ===== */
  .sticky-header {
    position: sticky;
    top: 70px;
    padding-top: 50px;
    padding-left: 40px;
    padding-bottom: 50px;
  }

  .section-title {
    color: #ffffff;
    font-size: 25px;
    font-weight: 700;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin: 0;
    letter-spacing: 0.1em;
  }

  .content-area {
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  .section-label {
    color: #B4B4B4;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    padding-bottom: 40px;
  }

  .main-text {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 2;
    margin: 0;
    padding-bottom: 75px;
  }

  .illustration-container {
  }

  .illustration {
    width: 100%;
    height: auto;
    object-fit: contain;
    padding-bottom: 30px;
  }

  .button-container {
    padding-right: 0;
    padding-bottom: 0;
  }

  .more-button {
    background-color: #E7EBE7;
    color: #003705;
    width: 100%;
    height: 53px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFFFFF;
    box-shadow: 3px 3px 0px #FFFFFF;
  }

  .more-button:hover {
    background-color: #93A794;
  }

  /* ===== Mobile / Tablet ===== */
  @media (max-width: 768px) {

  .section-container {
    display: flex;
  }

  .left-column {
    width: 25% !important;
  }

  .right-column {
    width: 75% !important;
  }
    .sticky-header {
      position: relative;
      top: auto;
      padding-top: 50px;
      padding-left: 20px;
      padding-right: 0px;
      padding-bottom: 40px;
    }

    .section-title {
      font-size: 25px;
    }

    .content-area {
      padding-top: 145px;
      padding-right: 30px;
      padding-bottom: 50px;
      gap: 32px;
    }

    .content-area .illustration-container,
    .content-area .button-container {
      display: none;
    }

    .mobile-media-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 50px;
      gap: 32px;
    }

    .mobile-media-container .illustration {
      width: 100%;
    }

    .mobile-media-container .more-button {
      width: 100%;
      height: 52px;
    }
  }
`}</style>


      <section ref={sectionRef} id="about" className="about-section">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <h2 className="section-title">わたしたちについて</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="content-area">
              <div className="section-label">about us</div>

              <p className="main-text">
                forkとは「選択肢」のこと。<br />
                社会全体で子育てする仕組みづくりを通じて、
                大人も子どもも自分らしい生き方を選べる世の中をつくります。
              </p>

              <div className="illustration-container">
                <img
                  src="/images/about/silhouette.png"
                  alt="様々な人々のイラスト"
                  className="illustration"
                />
              </div>

              <div className="button-container">
                <a href="/about" className="more-button">
                  もっとくわしく
                </a>
              </div>
            </div>
          </div>
        </div>

        {isMobile && (
          <div className="mobile-media-container">
            <img
              src="/images/about/silhouette-mini.png"
              alt="様々な人々のイラスト"
              className="illustration"
            />
            <a href="/about" className="more-button">
              もっとくわしく
            </a>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutUsSection;
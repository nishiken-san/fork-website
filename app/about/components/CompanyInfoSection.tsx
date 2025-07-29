'use client';

import { useEffect, useRef, useState } from 'react';

const CompanyInformation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const [showHeader, setShowHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollingDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        if (entry.isIntersecting && scrollingDown) {
          setShowHeader(true);
        } else if (!entry.isIntersecting) {
          setShowHeader(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .company-bg {
          background-color: #E7EBE7;
        }
        .sticky-left-header {
          position: fixed;
          top: 80px;
          left: 0;
          width: 33.333333%;
          z-index: 20;
          background-color: #E7EBE7;
          padding: 2rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .normal-header {
          padding: 2rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .company-label {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .horizontal-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }
        @media (min-width: 1024px) {
          .horizontal-title {
            font-size: 1.75rem;
          }
        }
        .company-entry {
          margin-bottom: 1rem;
          color: #003705;
          font-size: 0.875rem;
        }
        .company-name {
          font-weight: 700;
        }
      `}</style>

      <section ref={sectionRef} id="company" className="company-bg relative">
        <div className="flex">
          {/* 左カラム */}
          <div className="w-1/3 company-bg">
            <div className={isSticky ? 'sticky-left-header' : 'normal-header'}>
              <div className="company-label">company</div>
              <h2 className="horizontal-title">企業情報</h2>
            </div>
          </div>

          {/* 右カラム */}
          <div className="w-2/3 company-bg py-16 px-8 lg:px-16">
            <div className="company-entry company-name">一般社団法人fork</div>
            <div className="company-entry">設立：2023年7月</div>
            <div className="company-entry">住所：富山県中新川郡舟橋村竹内325</div>
            <div className="company-entry">代表者：代表理事 岡山支善</div>

            {/* Sticky解除用Sentinel */}
            <div ref={sentinelRef} style={{ height: '1px' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyInformation;

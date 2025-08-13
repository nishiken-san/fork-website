'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';

const Access = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <section ref={sectionRef} id="access-main" className="access-bg relative">
      <div className="section-container">
        <div ref={contentRef} className="left-column">
          <div className="content-area">
            <div className="section-category">ACCESS</div>
            <div className="section-title">アクセス</div>
            
            <div className="access-info">
              <div className="facility-name">fork toyama</div>
              <div className="address">〒930-0289 富山県中新川郡舟橋村竹内325</div>
              
              <div className="company-info">
                <div className="operator">学童保育運営：一般社団法人fork</div>
                <div className="facility-management">施設運営・企画運用：トゥ神株式会社</div>
                <div className="establishment">設立：2017年7月24日</div>
                <div className="location">住所：東京都江東区永代1丁目20-8 河田ビル1階</div>
                <div className="representative">代表者：代表取締役 岡山史樹</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565.4579975939349!2d137.30563961907245!3d36.705422524872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff797813d97aec1%3A0x51faecf143e2bb08!2sfork%20toyama!5e0!3m2!1sja!2sjp!4v1754876356107!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="fork toyama location"
            ></iframe>
            <div className="map-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
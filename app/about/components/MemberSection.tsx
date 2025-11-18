// app/about/components/MemberSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { IMAGES, IMAGE_ALT_TEXTS } from '../../../constants/images';

const MemberSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const members = [
    { name: '大橋えつこ', nickname: 'ジーン', image: IMAGES.members.member1, alt: IMAGE_ALT_TEXTS.members.member1 },
    { name: '板谷あつこ', nickname: 'ダコダ', image: IMAGES.members.member2, alt: IMAGE_ALT_TEXTS.members.member2 },
    { name: '滝澤茜', nickname: 'たっきー', image: IMAGES.members.member3, alt: IMAGE_ALT_TEXTS.members.member3 },
    { name: '戸谷朱李', nickname: 'あかどん', image: IMAGES.members.member4, alt: IMAGE_ALT_TEXTS.members.member4 },
    { name: '山口未来子', nickname: 'みっこ', image: IMAGES.members.member5, alt: IMAGE_ALT_TEXTS.members.member5 },
    { name: '吉田ゆかり', nickname: 'よっしー', image: IMAGES.members.member6, alt: IMAGE_ALT_TEXTS.members.member6 },
    { name: '大庭日菜', nickname: 'にわにわ', image: IMAGES.members.member7, alt: IMAGE_ALT_TEXTS.members.member7 },
    { name: '松野志保', nickname: 'おまつ', image: IMAGES.members.member8, alt: IMAGE_ALT_TEXTS.members.member8 },
    { name: '大石和', nickname: 'やまぴー', image: IMAGES.members.member9, alt: IMAGE_ALT_TEXTS.members.member9 },
    { name: 'えみこむ', nickname: '', image: IMAGES.members.member10, alt: IMAGE_ALT_TEXTS.members.member10 }
  ];

  // モバイル表示
  if (isMobile) {
    return (
      <section ref={sectionRef} id="members" className="member-main-bg">
        <div className="member-mobile-container">
          {/* ヘッダー */}
          <div className="member-mobile-header">
            <div className="member-label">member</div>
            <h2 className="member-title">メンバー</h2>
          </div>

          {/* コンテンツ */}
          <div className="member-mobile-content">
            {/* 代表者カード */}
            <div className="member-leader-card">
              <img
                src={IMAGES.members.leader}
                alt={IMAGE_ALT_TEXTS.members.leader}
                className="member-leader-image"
              />
              <div className="member-leader-content">
                <div className="member-leader-role">代表理事</div>
                <div className="member-leader-name">岡山 史興</div>
                <p className="member-leader-description">
                  子育てのため2018年に舟橋村へ移住。自らの息子が小学1年生になるタイミングで安心して預けられる学童保育がなくなってしまう危機感からforkの設立を決意。「みん営」の仕組みを発案して実現、運営している。
                </p>
              </div>
            </div>

            {/* メンバー一覧（2列） */}
            <div className="member-grid-mobile">
              {members.map((member, index) => (
                <div key={index} className="member-card">
                  <img 
                    src={member.image} 
                    alt={member.alt} 
                    className="member-image" 
                  />
                  <div className="member-name">{member.name}</div>
                  {member.nickname && (
                    <div className="member-nickname">{member.nickname}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // PC表示
  return (
    <section ref={sectionRef} id="members" className="member-main-bg">
      <div className="member-section-container">
        {/* 左側: Stickyタイトル */}
        <div className="member-left-column">
          <div className="member-sticky-header">
            <div className="member-label">member</div>
            <h2 className="member-title">メンバー</h2>
          </div>
        </div>

        {/* 右側: コンテンツ */}
        <div ref={contentRef} className="member-right-column">
          <div className="member-content-area">
            {/* 代表者カード */}
            <div className="member-leader-card">
              <img
                src={IMAGES.members.leader}
                alt={IMAGE_ALT_TEXTS.members.leader}
                className="member-leader-image"
              />
              <div className="member-leader-content">
                <div className="member-leader-role">代表理事</div>
                <div className="member-leader-name">岡山 史興</div>
                <p className="member-leader-description">
                  子育てのため2018年に舟橋村へ移住。自らの息子が小学1年生になるタイミングで安心して預けられる学童保育がなくなってしまう危機感からforkの設立を決意。「みん営」の仕組みを発案して実現、運営している。
                </p>
              </div>
            </div>

            {/* メンバー一覧（4列） */}
            <div className="member-grid">
              {members.map((member, index) => (
                <div key={index} className="member-card">
                  <img 
                    src={member.image} 
                    alt={member.alt} 
                    className="member-image" 
                  />
                  <div className="member-name">{member.name}</div>
                  {member.nickname && (
                    <div className="member-nickname">{member.nickname}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
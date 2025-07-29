// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { IMAGES, IMAGE_ALT_TEXTS } from '../../../constants/images';
// import { useSectionSticky } from '../../hooks/useSectionSticky';

// const MemberSection = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const leftColumnRef = useRef<HTMLDivElement>(null);
//   const rightColumnRef = useRef<HTMLDivElement>(null);

  
//   const [showHeader, setShowHeader] = useState(false);
// const lastScrollY = useRef(0);

// useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       const scrollingDown = window.scrollY > lastScrollY.current;
//       lastScrollY.current = window.scrollY;

//       if (entry.isIntersecting && scrollingDown) {
//         setShowHeader(true);
//       } else if (!entry.isIntersecting) {
//         setShowHeader(false);
//       }
//     },
//     {
//       threshold: 0.1,
//     }
//   );

//   const section = sectionRef.current;
//   if (section) observer.observe(section);

//   return () => {
//     if (section) observer.unobserve(section);
//   };
// }, []);

//   const members = [
//     { name: '大橋えつこ', nickname: 'ジーン', image: IMAGES.members.member1, alt: IMAGE_ALT_TEXTS.members.member1 },
//     { name: '板谷あつこ', nickname: 'ダコダ', image: IMAGES.members.member2, alt: IMAGE_ALT_TEXTS.members.member2 },
//     { name: '滝澤茜', nickname: 'たっきー', image: IMAGES.members.member3, alt: IMAGE_ALT_TEXTS.members.member3 },
//     { name: '戸谷朱李', nickname: 'あかどん', image: IMAGES.members.member4, alt: IMAGE_ALT_TEXTS.members.member4 },
//     { name: '山口未来子', nickname: 'みっこ', image: IMAGES.members.member5, alt: IMAGE_ALT_TEXTS.members.member5 },
//     { name: '吉田ゆかり', nickname: 'よっしー', image: IMAGES.members.member6, alt: IMAGE_ALT_TEXTS.members.member6 },
//     { name: '大庭日菜', nickname: 'にわにわ', image: IMAGES.members.member7, alt: IMAGE_ALT_TEXTS.members.member7 },
//     { name: '松野志保', nickname: 'おまつ', image: IMAGES.members.member8, alt: IMAGE_ALT_TEXTS.members.member8 },
//     { name: '大石和', nickname: 'やまぴー', image: IMAGES.members.member9, alt: IMAGE_ALT_TEXTS.members.member9 },
//     { name: 'えみこむ', nickname: '', image: IMAGES.members.member10, alt: IMAGE_ALT_TEXTS.members.member10 }
//   ];

//   return (
//     <>
//       <style jsx>{`
//         .member-bg {
//           background-color: #E7EBE7;
//         }
//         .sticky-left-header {
//           position: fixed;
//           top: 80px;
//           left: 0;
//           width: 33.333333%;
//           z-index: 20;
//           background-color: #E7EBE7;
//           padding: 2rem 3rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: auto;
//         }
//         .normal-header {
//           padding: 2rem 3rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: auto;
//         }
//         .member-label {
//           color: #B4B4B4;
//           font-size: 0.875rem;
//           font-weight: 400;
//           letter-spacing: 0.1em;
//           margin-bottom: 0.5rem;
//         }
//         .horizontal-title {
//           color: #333;
//           font-size: 1.5rem;
//           font-weight: 300;
//           line-height: 1.4;
//         }
//         @media (min-width: 1024px) {
//           .horizontal-title {
//             font-size: 1.75rem;
//           }
//         }
//         .member-card {
//           text-align: left;
//           margin-bottom: 2rem;
//         }
//         .member-image {
//           width: 120px;
//           height: 120px;
//           object-fit: cover;
//           margin: 0 0 0.75rem 0;
//           display: block;
//         }
//         .member-name {
//           font-size: 0.875rem;
//           color: #003705;
//           font-weight: 500;
//           margin-bottom: 0.25rem;
//         }
//         .member-nickname {
//           font-size: 0.75rem;
//           color: #B4B4B4;
//           font-weight: 400;
//         }
//         .leader-card {
//           display: flex;
//           gap: 2rem;
//           margin-bottom: 3rem;
//         }
//         .leader-image {
//           width: 200px;
//           height: 200px;
//           object-fit: cover;
//           flex-shrink: 0;
//         }
//         .leader-content {
//           flex: 1;
//         }
//         .leader-role {
//           font-size: 0.875rem;
//           color: #B4B4B4;
//           font-weight: 400;
//           margin-bottom: 0.5rem;
//         }
//         .leader-name {
//           font-size: 1rem;
//           color: #003705;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//         }
//         .leader-description {
//           font-size: 0.75rem;
//           color: #003705;
//           line-height: 1.6;
//           text-align: left;
//         }
//       `}</style>

//       <section ref={sectionRef} id="members" className="member-bg relative">
//         <div className="flex">
//           {/* 左カラム：Sticky対象 */}
//           <div className="w-1/3 member-bg">
//             <div className={isSticky ? 'sticky-left-header' : 'normal-header'}>
//               <div className="member-label">member</div>
//               <h2 className="horizontal-title">メンバー</h2>
//             </div>
//           </div>

//           {/* 右カラム：代表＋メンバー一覧 */}
//           <div ref={rightColumnRef} className="w-2/3 member-bg">
//             <div className="py-16 px-8 lg:px-16">
//               {/* 代表者 */}
//               <div className="leader-card">
//                 <img
//                   src={IMAGES.members.leader}
//                   alt={IMAGE_ALT_TEXTS.members.leader}
//                   className="leader-image"
//                 />
//                 <div className="leader-content">
//                   <div className="leader-role">代表理事</div>
//                   <h3 className="leader-name">岡山支善</h3>
//                   <p className="leader-description">
//                     子ども時代の経験は一生の財産になると信じ、より良い子育て環境の実現に向けて活動しています。
//                     地域の子どもたちが多様な選択肢と出会える場づくりに取り組んでいます。
//                   </p>
//                 </div>
//               </div>

//               {/* メンバー一覧 */}
//               <div className="grid grid-cols-4 gap-6">
//                 {members.map((member, index) => (
//                   <div key={index} className="member-card">
//                     <img
//                       src={member.image}
//                       alt={member.alt}
//                       className="member-image"
//                     />
//                     <h4 className="member-name">{member.name}</h4>
//                     <p className="member-nickname">{member.nickname}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MemberSection;

'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import { IMAGES, IMAGE_ALT_TEXTS } from '../../../constants/images';

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

const MemberSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  return (
    <>
      <style jsx>{`
        .member-bg {
          background-color: #E7EBE7;
        }
        .section-container {
          display: flex;
          min-height: 100vh;
        }
        .left-column {
          width: 33.333333%;
          background-color: #E7EBE7;
          position: relative;
        }
        .right-column {
          width: 66.666667%;
          background-color: #E7EBE7;
        }
        .sticky-header {
          position: sticky;
          top: 80px;
          padding: 2rem 3rem;
          background-color: #E7EBE7;
          z-index: 20;
        }
        .section-label {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .section-title {
          color: #003705;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .leader-card {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 2rem;
        }
        .leader-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .leader-content {
          flex: 1;
        }
        .leader-role {
          font-size: 0.875rem;
          color: #B4B4B4;
          margin-bottom: 0.25rem;
        }
        .leader-name {
          font-size: 1rem;
          color: #003705;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .leader-description {
          font-size: 0.75rem;
          color: #003705;
          line-height: 1.6;
        }
        .member-card {
          text-align: left;
          margin-bottom: 2rem;
        }
        .member-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          margin: 0 0 0.75rem 0;
          display: block;
        }
        .member-name {
          font-size: 0.875rem;
          color: #003705;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        .member-nickname {
          font-size: 0.75rem;
          color: #B4B4B4;
        }
      `}</style>

      <section ref={sectionRef} id="members" className="member-bg relative">
        <div className="section-container">
          <div className="left-column">
            <div className="sticky-header">
              <div className="section-label">member</div>
              <h2 className="section-title">メンバー</h2>
            </div>
          </div>

          <div ref={contentRef} className="right-column">
            <div className="py-16 px-8 lg:px-16">
              {/* 代表者 */}
              <div className="leader-card">
                <img
                  src={IMAGES.members.leader}
                  alt={IMAGE_ALT_TEXTS.members.leader}
                  className="leader-image"
                />
                <div className="leader-content">
                  <div className="leader-role">代表理事</div>
                  <div className="leader-name">岡山 史興</div>
                  <p className="leader-description">
                    子育てのため2018年に舟橋村へ移住。自らの息子が小学1年生になるタイミングで安心して預けられる学童保育がなくなってしまう危機感からforkの設立を決意。「みん営」の仕組みを発案して実現、運営している。
                  </p>
                </div>
              </div>

              {/* メンバー一覧 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                  <div key={index} className="member-card">
                    <img src={member.image} alt={member.alt} className="member-image" />
                    <div className="member-name">{member.name}</div>
                    <div className="member-nickname">{member.nickname}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberSection;
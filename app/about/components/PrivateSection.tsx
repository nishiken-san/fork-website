// // app/about/components/PrivateSection.tsx
// 'use client';

// import { useEffect, useState, useRef } from 'react';

// const PrivateSection = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const leftColumnRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current && leftColumnRef.current) {
//         const sectionTop = sectionRef.current.offsetTop;
//         const sectionHeight = sectionRef.current.offsetHeight;
//         const scrollY = window.scrollY;
//         const windowHeight = window.innerHeight;
        
//         // セクションに入ったらsticky開始
//         const shouldStartSticky = scrollY >= sectionTop - 80;
//         // セクション終了でsticky解除
//         const shouldEndSticky = scrollY >= sectionTop + sectionHeight - windowHeight + 80;
        
//         setIsSticky(shouldStartSticky && !shouldEndSticky);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         .private-bg {
//           background-color: #003705;
//         }
//         .sticky-left-header-private {
//           position: fixed;
//           top: 80px;
//           left: 0;
//           width: 33.333333%;
//           z-index: 20;
//           background-color: #003705;
//           padding: 1rem 3rem;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: flex-start;
//           height: auto;
//           transition: none;
//         }
//         .normal-header-private {
//           padding: 1rem 3rem;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: flex-start;
//           height: auto;
//           transition: none;
//         }
//         .minei-text-private {
//           color: #B4B4B4;
//           font-size: 0.875rem;
//           font-weight: 400;
//           letter-spacing: 0.1em;
//           margin-bottom: 1rem;
//         }
//         .horizontal-title-private {
//           color: white;
//           font-size: 1.5rem;
//           font-weight: 300;
//           line-height: 1.4;
//         }
//         @media (min-width: 1024px) {
//           .horizontal-title-private {
//             font-size: 1.75rem;
//           }
//         }
//         .card-item {
//           background-color: #F0F8F0;
//           border-radius: 8px;
//           padding: 1.5rem;
//           margin-bottom: 1rem;
//         }
//         .card-number {
//           color: #003705;
//           font-size: 1.5rem;
//           font-weight: bold;
//           margin-bottom: 0.5rem;
//         }
//         .card-title {
//           color: #003705;
//           font-size: 1rem;
//           font-weight: 600;
//           margin-bottom: 0.75rem;
//         }
//         .card-text {
//           color: #003705;
//           font-size: 0.875rem;
//           line-height: 1.6;
//         }
//       `}</style>

//       <section ref={sectionRef} id="private" className="private-bg relative">
//         <div className="flex">
//           <div className="w-1/3 private-bg p-8 lg:p-12">
//             <div className={isSticky ? 'sticky-left-header-private' : 'normal-header-private'}>
//               <h2 className="horizontal-title-private">
//                 みん営がひらく可能性
//               </h2>
//             </div>
//           </div>
//           <div ref={leftColumnRef} className="w-2/3 private-bg">
            
//             <div className="py-16 px-8 lg:px-16">
//             <div className="minei-text-private">potential created by "MINEI"</div>
//               {/* カード1 */}
//               <div className="card-item">
//                 <div className="flex items-start">
//                   <div className="card-number mr-4">1</div>
//                   <div className="flex-1">
//                     <h3 className="card-title">"はたらく"をひらく</h3>
//                     <p className="card-text">
//                     家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* カード2 */}
//               <div className="card-item">
//                 <div className="flex items-start">
//                   <div className="card-number mr-4">2</div>
//                   <div className="flex-1">
//                     <h3 className="card-title">"そだてる"をひらく</h3>
//                     <p className="card-text">
//                     家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* カード3 */}
//               <div className="card-item">
//                 <div className="flex items-start">
//                   <div className="card-number mr-4">3</div>
//                   <div className="flex-1">
//                     <h3 className="card-title">"くらす"をひらく</h3>
//                     <p className="card-text">
//                     家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PrivateSection;

// app/about/components/PrivateSection.tsx
'use client';

import { useEffect, useState, useRef } from 'react';

const PrivateSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && leftColumnRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // セクションに入ったらsticky開始
        const shouldStartSticky = scrollY >= sectionTop - 80;
        // セクション終了でsticky解除
        const shouldEndSticky = scrollY >= sectionTop + sectionHeight - windowHeight + 80;
        
        setIsSticky(shouldStartSticky && !shouldEndSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .private-bg {
          background-color: #003705;
        }
        .sticky-left-header-private {
          position: fixed;
          top: 80px;
          left: 0;
          width: 33.333333%;
          z-index: 20;
          background-color: #003705;
          padding: 1rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          height: auto;
          transition: none;
        }
        .normal-header-private {
          padding: 1rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          height: auto;
          transition: none;
        }
        .minei-text-private {
          color: #B4B4B4;
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .horizontal-title-private {
          color: white;
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 1.4;
        }
        @media (min-width: 1024px) {
          .horizontal-title-private {
            font-size: 1.75rem;
          }
        }
        .card-item {
          background-color: #F0F8F0;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-top: 2px solid #003705;
        }
        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #003705;
        }
        .card-number {
          color: #003705;
          font-size: 1.5rem;
          font-weight: bold;
          padding-right: 1rem;
          border-right: 1px solid #003705;
          min-width: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-title {
          color: #003705;
          font-size: 1rem;
          font-weight: 600;
          flex: 1;
          text-align: center;
          margin: 0;
        }
        .card-text {
          color: #003705;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <section ref={sectionRef} id="private" className="private-bg relative">
        <div className="flex">
          <div className="w-1/3 private-bg p-8 lg:p-12">
            <div className={isSticky ? 'sticky-left-header-private' : 'normal-header-private'}>
              <div className="minei-text-private">potential created by "MINEI"</div>
              <h2 className="horizontal-title-private">
                みんな営がひらく可能性
              </h2>
            </div>
          </div>
          <div ref={leftColumnRef} className="w-2/3 private-bg">
            <div className="py-16 px-8 lg:px-16">
              
              {/* カード1 */}
              <div className="card-item">
                <div className="card-header">
                  <div className="card-number">1</div>
                  <h3 className="card-title">"はたらく"をひらく</h3>
                </div>
                <p className="card-text">
                家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
                </p>
              </div>

              {/* カード2 */}
              <div className="card-item">
                <div className="card-header">
                  <div className="card-number">2</div>
                  <h3 className="card-title">"そだてる"をひらく</h3>
                </div>
                <p className="card-text">
                家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
                </p>
              </div>

              {/* カード3 */}
              <div className="card-item">
                <div className="card-header">
                  <div className="card-number">3</div>
                  <h3 className="card-title">"くらす"をひらく</h3>
                </div>
                <p className="card-text">
                家庭の状況や周囲の環境にとらわれず子どもが安心して過ごせる場所をつくることで親の“はたらく”に自由な選択肢が生まれます。
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivateSection;
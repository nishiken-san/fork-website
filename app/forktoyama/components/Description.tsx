'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/forktoyama-sections.css';

const Description = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const principles = [
    "ありがとうや日々のあいさつを言う、言われる",
    "人の話を聞く、自分の気持ちを伝える", 
    "道具や食べ物を大切に扱う"
  ];

  return (
    <section ref={sectionRef} className="forktoyama-description-bg forktoyama-section">
      <div className="forktoyama-description-container">
        <div ref={contentRef} className="forktoyama-description-left">
          <div className="forktoyama-description-content">
            
            <div className="forktoyama-description-section">
              <div className="forktoyama-description-category">保育理念</div>
              <h2 className="forktoyama-description-title">子どもは「らしさ」の原石</h2>
              <p className="forktoyama-description-text">
                子どもたちはだれか大切にする人だけの「宝」ではなく、未来のみんなの「宝」でもあります。
              </p>
              <p className="forktoyama-description-text">
                それぞれの可能性を秘めているながら、一方で築かれる意欲がある「原石」だと考えています。
              </p>
              <p className="forktoyama-description-text">
                forkでは守り育むほどとりどりの可能性を磨くためのものです。
              </p>
            </div>

            <div className="forktoyama-description-section">
              <div className="forktoyama-description-category">保育方針</div>
              <h2 className="forktoyama-description-title">対話を通して磨きあう</h2>
              <p className="forktoyama-description-text">
                居石が変化にみるために最も重要なのは「どうやって磨くか」。
              </p>
              <p className="forktoyama-description-text">
                forkは大人も子どもも真摯が妥当に「磨き合う」環境であったと考えました。
              </p>
              <p className="forktoyama-description-text">
                そのために大切なのは、相手を尊重する、大切にしあえる「対話」が培う真の関係です。一方的に主張するのではなく、自分も相手も向きながら、正しい可能性を高めあえる関係をつくることを、forkでは目指します。
              </p>
            </div>

            <div className="forktoyama-description-section">
              <div className="forktoyama-description-category">保育コミュニケーション方針</div>
              <h2 className="forktoyama-description-title">「ありがとう」を育む</h2>
              <p className="forktoyama-description-text">
                「対話」の前提となる信頼を築く・大切にする気持ちや行動は日々の生活のあれこれに育まれていくものです。そのため、私たちは「ありがとう」やあいさつを言える・言われることと、「自分以外の存在をもあんと認識
              </p>
              <p className="forktoyama-description-text">
                する「それぞれ」ごと、そして様々な背景・願いでもあることと、ありがとうの対象を人以外にも向けられる
              </p>
              <p className="forktoyama-description-text">
                ことのうちです。forkが大切にするコミュニケーションとして実践します
              </p>
              
              <ul className="forktoyama-description-list">
                {principles.map((principle, index) => (
                  <li key={index} className="forktoyama-description-list-item">
                    <span className="forktoyama-description-list-number">{index + 1}.</span>
                    <span className="forktoyama-description-list-text">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        <div className="forktoyama-description-right">
          <div className="forktoyama-description-sticky">
            <img 
              src="/images/forktoyama/description.jpg" 
              alt="fork toyama の様子" 
              className="forktoyama-description-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
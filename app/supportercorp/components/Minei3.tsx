'use client';

import { useRef } from 'react';
import { useSectionSticky } from '../../hooks/useSectionSticky';
import '../../styles/supporter-sections.css';
import { IMAGES } from '@/constants/images';

interface VoiceItem {
  id: string;
  name: string;
  occupation: string;
  location: string;
  message: string;
}

const Minei3 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isSticky } = useSectionSticky(sectionRef, contentRef);

  const voices: VoiceItem[] = [
    {
      id: '1',
      name: 'K.R',
      occupation: '職業職業',
      location: '地域',
      message: 'supporter事業の理由の導入文をいれますsupporter事業の理由の導入文をいれますsupporter事業。（100文字程度）'
    },
    {
      id: '2',
      name: 'K.R',
      occupation: '職業職業',
      location: '地域',
      message: 'supporter事業の理由の導入文をいれますsupporter事業の理由の導入文をいれますsupporter事業。（100文字程度）'
    },
    {
      id: '3',
      name: 'K.R',
      occupation: '職業職業',
      location: '地域',
      message: 'supporter事業の理由の導入文をいれますsupporter事業の理由の導入文をいれますsupporter事業。（100文字程度）'
    }
  ];

  return (
    <section ref={sectionRef} id="minei3" className="minei3-section relative">
      <div className="minei3-container">
        {/* 左側: 固定ヘッダー */}
        <div className="minei3-left">
          <div className="minei3-sticky">
            <div className="minei3-subtitle">tie-up</div>
            <h2 className="minei3-title">コラボレーション事例</h2>
          </div>
        </div>

        {/* 右側: スクロールコンテンツ */}
        <div ref={contentRef} className="minei3-right">
          <div className="minei3-content">
            <div className="minei3-voices-list">
              {voices.map((voice) => (
                <div key={voice.id} className="minei3-voice-card">
                  <div className="minei3-voice-header">
                    <div className="minei3-voice-name">{voice.name}</div>
                    <div className="minei3-voice-info">
                      {voice.occupation} [{voice.location}]
                    </div>
                  </div>
                  <div className="minei3-voice-divider"></div>
                  <p className="minei3-voice-text">{voice.message}</p>
                </div>
              ))}
            </div>

            <div className="minei1-link-container">
              <a href="/info?tag=tie-up" className="view-corp-link">
                <span className="menu-bottom-link-text">タイアップ事例一覧</span>
              </a>
              <img 
                src={IMAGES.logo.vec}
                alt="arrow"
                className="arrow-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minei3;
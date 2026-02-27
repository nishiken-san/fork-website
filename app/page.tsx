// app/page.tsx
'use client';

import { useState } from 'react';

import Image from 'next/image';
import HeaderTop from './components/HeaderTop';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ForkTitleSection from './components/ForkTitleSection';
import ParallaxSection1 from './components/ParallaxSection1';
import NewsSection from './components/NewsSection';
import AboutUsSection from './components/AboutUsSection';
// import GakudoSection from './components/GakudoSection';
import ParallaxSection2 from './components/ParallaxSection2';
import NoteSection from './components/NoteSection';
import SupportSection from './components/SupportSection';
import ParallaxSection3 from './components/ParallaxSection3';

import Footer from './components/Footer';
import './globals.css';

// microCMSから最新記事を取得する関数
async function getLatestNews() {
  try {
    // microCMSクライアントが設定されていない場合
    if (!client) {
      return [];
    }

    const data = await client.get({
      endpoint: 'info',
      queries: {
        limit: 2,
        orders: '-publishedAt', // 公開日の新しい順
        fields: 'id,title,publishedAt,tag',
      },
    });

    // データを整形
    return data.contents.map((item: any) => ({
      id: item.id,
      title: item.title,
      date: item.publishedAt 
        ? new Date(item.publishedAt).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\//g, '.')
        : '',
      tagLabel: item.tag?.タグ名 || item.tag?.label || '',
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export default function Home() {
  return (
    <div className="pt-16">
      {/* <HeroSection /> */}
      <ForkTitleSection />
      <ParallaxSection1 />
      <NewsSection />
      <AboutUsSection />
      <AboutSection />
      {/* <GakudoSection /> */}
      <ParallaxSection2 />
      <NoteSection />
      <SupportSection />
      <ParallaxSection3 />
      <Footer />
    </div>
  );
}


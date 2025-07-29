// app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import ForkTitleSection from './components/ForkTitleSection';
import ParallaxPhotoSection from './components/ParallaxPhotoSection';
import NewsSection from './components/NewsSection';
import AboutUsSection from './components/AboutUsSection';
// import GakudoSection from './components/GakudoSection';
import ParallaxSection2 from './components/ParallaxSection2';
import NoteSection from './components/NoteSection';
import SupportSection from './components/SupportSection';
import ParallaxSection3 from './components/ParallaxSection3';

import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="pt-16">
      <Header />
      {/* <HeroSection /> */}
      <ForkTitleSection />
      <ParallaxPhotoSection />
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


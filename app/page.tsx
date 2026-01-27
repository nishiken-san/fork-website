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


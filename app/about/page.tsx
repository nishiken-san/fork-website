'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutParallaxSection4 from './components/AboutParallaxSection4';
import AboutMainSection from './components/AboutMainSection';
import ChildcareSection from './components/ChildcareSection';
import PrivateSection from './components/PrivateSection';
import AboutParallaxSection2 from './components/AboutParallaxSection2';
import HistorySection from './components/HistorySection';
import MemberSection from './components/MemberSection';
import PartnerSection from './components/PartnerSection';
import CompanyInfoSection from './components/CompanyInfoSection';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <Header />
      <AboutParallaxSection4 />
      <AboutMainSection />
      <ChildcareSection />
      <PrivateSection />
      <AboutParallaxSection2 />
      <HistorySection />
      <MemberSection />
      <PartnerSection />
      <CompanyInfoSection />
      <Footer />
    </div>
  );
}
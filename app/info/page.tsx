// app/effort/page.tsx
import Header from '../components/Header';
import ParallaxSection from './components/ParallaxSection1';
import InformationMainSection from './components/InformationMainSection';
import Minei1 from './components/Minei1';
import Minei2 from './components/Minei2';
import Minei3 from './components/Minei3';
import Minei4 from './components/Minei4';
import Minei5 from './components/Minei5';
import Footer from '../components/Footer';

export default function InformationPage() {
  return (
    <div className="pt-16">
      <Header />
      <ParallaxSection />
      <InformationMainSection />
      <Footer />
    </div>
  );
}


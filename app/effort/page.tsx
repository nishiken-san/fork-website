// app/effort/page.tsx
import Header from '../components/Header';
import ParallaxSection from './components/ParallaxSection1';
import EffortMainSection from './components/EffortMainSection';
import Gakudou1 from './components/Gakudou1';
import Support2 from './components/Support2';
import Curriculum3 from './components/Curriculum3';
import Training4 from './components/Training4';
import Footer from '../components/Footer';

export default function EffortPage() {
  return (
    <div className="pt-16">
      <Header />
      <ParallaxSection />
      <EffortMainSection />
      <Gakudou1 />
      <Support2 />
      <Curriculum3 />
      <Training4 />
      <Footer />
    </div>
  );
}


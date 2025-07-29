//  app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Parallax1 from './components/Parallax1';
import Intro from './components/Intro';
import Description from './components/Description';
import Staff from './components/Staff';
import Parallax2 from './components/Parallax2';
import Place from './components/Place';
import Structure from './components/Structure';
import Noki from './components/Noki';
import Collaboration from './components/Collaboration';
import Coworking from './components/Coworking';
import Access from './components/Access';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Parallax1 />
      <Intro />
      <Description />
      <Staff />
      <Parallax2 />
      <Place />
      <Structure />
      <Noki />
      <Collaboration />
      <Coworking />
      <Access />
      <Footer />
    </main>
  );
}
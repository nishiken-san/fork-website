// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';
import GoogleMapsScript from './components/GoogleMapsScript';
import PageTransition from './components/PageTransition';
import HeaderWrapper from './components/HeaderWrapper';

const inter = Inter({ subsets: ['latin'] });
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-zen-kaku',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Fork',
  description: '',
  keywords: '',
  authors: [{ name: 'Fork Company' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#003705',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={zenKaku.variable}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            #page-wrapper.page-loading {
              opacity: 0 !important;
              visibility: hidden !important;
              transform: translateY(10px) !important;
            }
          `
        }} />
      </head>
      <body>
        <div 
          id="page-wrapper" 
          className="page-loading"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          <HeaderWrapper />
          
          <main>
            {children}
          </main>
        </div>
        
        <GoogleMapsScript />
        <PageTransition />
      </body>
    </html>
  );
}
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleMapsScript from './components/GoogleMapsScript';
import PageTransition from './components/PageTransition';
import HeaderWrapper from './components/HeaderWrapper';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="ja">
      <head>
        {/* CSS読み込み前にチラつきを防ぐためのスタイル */}
        {/* IDを page-wrapper に変更し、対象を広げます */}
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
        {/* ▼変更点: 
          1. IDを 'page-wrapper' に変更
          2. HeaderWrapper をこの div の「中」に移動
        */}
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
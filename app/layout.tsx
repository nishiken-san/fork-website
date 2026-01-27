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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* CSSが読み込まれる前に非表示にするインラインスタイル */}
        <style dangerouslySetInnerHTML={{
          __html: `
            #main-content.main-content-loading {
              opacity: 0 !important;
              visibility: hidden !important;
              transform: translateY(-30px) !important;
            }
          `
        }} />
      </head>
      <body>
        <HeaderWrapper />
        
        <div 
          id="main-content" 
          className="main-content-loading"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          {children}
        </div>
        
        <GoogleMapsScript />
        <PageTransition />
      </body>
    </html>
  );
}
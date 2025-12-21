
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleMapsScript from './components/GoogleMapsScript';

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
      <body className={inter.className}>
        {children}
        <GoogleMapsScript />
      </body>
    </html>
  );
}
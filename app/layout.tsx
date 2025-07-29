
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fork - 革新的なソリューションを提供する企業',
  description: '私たちは、革新的なソリューションを通じて、お客様のビジネスの成長を支援します。',
  keywords: 'コンサルティング, システム開発, デザイン, サポート',
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
      </body>
    </html>
  );
}
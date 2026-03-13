import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog built with Next.js and Paper Shaders.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}

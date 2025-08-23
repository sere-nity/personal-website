'use client';

import './globals.css';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
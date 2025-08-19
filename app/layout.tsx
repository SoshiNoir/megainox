import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/Nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mega Inox',
  description: 'Equipamentos em inox com qualidade e eficiência',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <body
        className={`${inter.className} antialiased text-white`}
        style={{ backgroundColor: '#333333' }}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}

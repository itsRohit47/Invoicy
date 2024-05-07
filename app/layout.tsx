import '@/app/ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoicy Dashboard',
  description: 'Rohit Bajaj',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}

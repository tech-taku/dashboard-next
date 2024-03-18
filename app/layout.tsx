import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      {/* Making use of inter in the body to apply the font to the whole application 
      antialiased is a tailwind class that smoothens the font.
      */}

      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

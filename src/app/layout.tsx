
import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BookingProvider } from '@/components/booking-context';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Dr. Poornesh Gowda | Orthopedic & Spine Surgeon',
  description: 'Specialized in Spine Surgery, Joint Replacement & Trauma Care. 9+ Years of experience at The Bangalore Hospital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <BookingProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </BookingProvider>
      </body>
    </html>
  );
}

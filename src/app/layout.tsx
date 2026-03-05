import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Dr. Poornesh Gowda | Best Orthopedic & Spine Surgeon in Bangalore',
  description: 'Dr. Poornesh Gowda is a leading Orthopedic and Spine Surgeon at The Bangalore Hospital, Jayanagar. Specialist in Spine Surgery, Joint Replacement, Complex Trauma & Back Pain treatment. 9+ years experience.',
  keywords: [
    'Dr. Poornesh Gowda',
    'Orthopedic Surgeon Bangalore',
    'Spine Surgeon Bangalore',
    'Best Spine Surgeon Jayanagar',
    'Back Pain Treatment Bangalore',
    'Knee Replacement Surgery',
    'Hip Replacement Surgeon',
    'Slip Disc Surgery',
    'Trauma Specialist',
    'Fracture Treatment',
    'Microdiscectomy Bangalore',
    'Spinal Fusion Surgery',
    'Spondylosis Treatment',
    'Sciatica Specialist',
    'The Bangalore Hospital Orthopedics'
  ],
  authors: [{ name: 'Dr. Poornesh Gowda' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

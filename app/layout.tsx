import { ReactNode } from 'react';
import { CartProvider } from '../components/CartProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Script from 'next/script';

export const metadata = {
    title: 'Nyams Hardware Store',
    description: 'Nyams Hardware Store - Top quality hardware materials',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
                <script dangerouslySetInnerHTML={{
                    __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#A08666',
                  secondary: '#1A1A1A',
                  accent: '#F5F5F0',
                  'off-white': '#FAFAFA'
                },
                fontFamily: {
                  sans: ['Inter', 'sans-serif'],
                },
                keyframes: {
                  fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                  },
                  fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                  },
                  slideInRight: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                  },
                  float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  }
                },
                animation: {
                  'fade-in': 'fadeIn 0.5s ease-out',
                  'fade-in-up': 'fadeInUp 0.8s ease-out',
                  'slide-in-right': 'slideInRight 0.3s ease-out',
                  'bounce-slow': 'bounce 3s infinite',
                  'float': 'float 3s ease-in-out infinite'
                }
              },
            },
          }
        `}} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <style dangerouslySetInnerHTML={{
                    __html: `
          body {
            font-family: 'Inter', sans-serif;
            background-color: #FAFAFA;
            margin: 0;
            padding: 0;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
            </head>
            <body>
                <CartProvider>
                    <div className="bg-[#FAFAFA] min-h-screen relative">
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <WhatsAppButton />
                    </div>
                </CartProvider>
            </body>
        </html>
    );
}

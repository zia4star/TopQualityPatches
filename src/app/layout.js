'use client'
// import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./components/Footer";
import { useEffect } from "react";
import WhatsAppChat from "./components/WhatsappChat";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // choose what you need
  variable: '--font-montserrat', // optional if you want to use as CSS variable
})

// export const metadata = {
//   title: 'Top Quality Patches',
//   description: 'Professional embroidery digitizing and vector design services',
// }

export default function RootLayout({ children }) {
   //////////////////////Tawk Button/////////////////////////////
   useEffect(() => {
    const loadTawkToScript = () => {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      // s1.src = 'https://embed.tawk.to/655278d7958be55aeaaf4065/1hf52g3fn';
      s1.src = "https://embed.tawk.to/66fb2570e5982d6c7bb6d00a/1i92gkgou";
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    };

    loadTawkToScript();
    return () => {
      document.getElementById('tawk-to-script')?.remove();
    };
  }, []);//tawk Button End
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header/>
        <main >
          {children}
        </main>
        <Footer />
      <WhatsAppChat/>
      </body>
    </html>
  );
}

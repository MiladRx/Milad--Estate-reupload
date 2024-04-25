import { Roboto } from 'next/font/google'
import "./globals.css";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Real state agent",
  description: "Created by sampath kumara for real state agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

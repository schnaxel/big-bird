import "@/styles/bootstrap.scss";
import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import {Navigation} from "@/src/components/Navigation/Navigation";
import Footer from "@/src/components/Footer/Footer";
import Script from "next/script";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Big Birds Farm',
  description: 'Big-Bird',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${poppins.variable} h-100`}>
    <body className={`${poppins.className} h-100`}>
      <Navigation/>
      {children}
      <Footer/>
      <Script src={'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'}/>
    </body>
    </html>
  )
}

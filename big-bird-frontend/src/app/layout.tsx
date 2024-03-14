import "@/styles/bootstrap.scss";
import type { Metadata } from 'next'
import {Open_Sans, Playfair_Display} from 'next/font/google'
import {NavigationDesktop} from "@/src/components/NavigationDesktop/NavigationDesktop";
import Footer from "@/src/components/Footer/Footer";
import Script from "next/script";

const playfairDisplay = Playfair_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfairDisplay',
  display: 'swap',
})
const openSans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Big-Bird',
  description: 'Big-Bird',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfairDisplay.variable} ${openSans.variable} h-100`}>
    <body className={`${openSans.className} h-100`}>
      <NavigationDesktop/>
      {children}
      <Footer/>
      <Script src={'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'}/>
    </body>
    </html>
  )
}

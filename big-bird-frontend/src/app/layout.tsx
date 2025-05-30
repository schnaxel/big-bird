import "@/styles/bootstrap.scss";
import {Amatic_SC, Poppins} from 'next/font/google'
import Footer from "@/src/components/Footer/Footer";
import Script from "next/script";
import {Navigation} from "@/src/components/Navigation/Navigation";
import {Header} from "@/src/components/Header/Header";

const poppins = Poppins({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

const amatic = Amatic_SC({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-amatic',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de" className={`${poppins.variable} ${amatic.variable} h-100`}>
            <body className={`h-100 bg-repeat`}>
                <Navigation />
                <Header />
                {children}
                <Footer/>
                <Script src={'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'}/>
            </body>
        </html>
    )
}

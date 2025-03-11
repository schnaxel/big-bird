import "@/styles/bootstrap.scss";
import {Amatic_SC, Poppins, Bebas_Neue, Lora} from 'next/font/google'
import Footer from "@/src/components/Footer/Footer";
import Script from "next/script";
import {Navigation} from "@/src/components/Navigation/Navigation";
import {Header} from "@/src/components/Header/Header";

const bebasNeue = Bebas_Neue({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-bebas-neue',
});
  
const lora = Lora({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-lora',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de" className={`${lora.variable} ${bebasNeue.variable} $ h-100`}>
            <body className={`h-100 bg-beige`}>
                <Navigation />
                <Header />
                {children}
                <Footer/>
                <Script src={'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js'}/>
            </body>
        </html>
    )
}

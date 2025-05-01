import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import React from "react";
import {Metadata} from "next";
import ImageCarousel from "@/src/components/ImageCarousel/ImageCarousel";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Café',
    description: 'Das Big Birds Café hat das Ziel euch den besten Kaffee mit handgemachten Torten & Kuchen zu servieren.',
}

export default function Cafe() {

    return (
        <>
            <div className={'container'}>
                <div className="mt-4 row justify-content-center">
                    <div className="col-10 px-0 border border-muted rounded-end">
                        <div className="d-flex flex-row align-items-center justify-content-center border-start border-caro border-4 py-3 px-3">
                            <div className="px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg>
                            </div>
                            <h4 className="mb-0">Kartenzahlung ist möglich</h4>                  
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-lg-6 col-12">
                        <img src="/images/cafe/header/cafe-header.jpg" alt={'Cafe'} className="w-100" style={{objectFit: "cover", height: 450}} />
                    </div>
                    <div className="col-lg-6 col-12 text-center row justify-content-md-center my-lg-auto mt-5 px-5">
                    <h2>Kaffee? Kuchen? Kleine Pause?</h2>
                        <div className="mt-4 col-12 col-md-10">
                            <p>
                                In unserem Café erwarten dich hausgemachte Kuchen, herzhafte Snacks und ausgewählte Heiß- und Kaltgetränke – alles serviert in entspannter Farm-Atmosphäre.
                                Wir freuen uns auf deinen Besuch!
                            </p>
                            <p className="lead">
                                Mittwoch bis Sonntag von 11:00–17:00 Uhr<br />
                                Montag & Dienstag ist Ruhetag.
                            </p>
                            <p className="mb-4">Du erreichst uns telefonisch unter: <b>0XXX</b></p>

                            <Link href={'/shop'} className="btn btn-outline-primary rounded-pill px-4">Zum Hofladen</Link>
                        </div>                    
                    </div>
                </div>

                <hr/>

                <div className="d-flex flex-column flex-lg-row align-items-center my-5">
                    <div className="col-lg-7 col-12 my-md-auto py-3 order-2 order-lg-1 px-5">
                        <h2>Unser Angebot</h2>
                        <div className="mt-4">
                            <p>Ob eine gute Tasse Kaffee Crema, eine cremige Café Latte oder einen 
                                kräftigen Espresso. Natürlich bieten wir auch ausgesuchte Tees und 
                                feinste Schokoladengetränke. Besonders unsere Hot Chocolate Delux in 
                                Weiß, Vollmilch oder Zartbitter aus heißer, geschäumter Milch gemischt 
                                mit belgischer Schokolade garniert mit Sahne und Marshmallows ist ein 
                                wahr gewordener Schokoladentraum. 
                            </p>
                            <p>
                                Oder Du lässt Dich von unseren 
                                Jahreszeiten-Specials überraschen, ob Cool Mint Ice Tea oder einer 
                                weihnachtlichen Chai Latte werden wir immer etwas Besonderes im 
                                Angebot haben. 
                            </p>
                            <p>
                                Als Milchalternative haben wir laktosefreie Hafermilch. 
                            </p>
                        </div>                          
                    </div>
                    <div className="col-lg-5 col-12 p-3 order-1 order-lg-2">
                        <img src="/images/cafe/cafe-01.jpg" alt={'Feiern auf der Farm'} className="w-100" style={{objectFit: "cover", height: 450}} />
                    </div>
                </div>
                
                <div className="text-center my-lg-5">
                    <p>Eine Reservierung ist bei uns nicht möglich.</p>
                </div>
            </div>

            <ImageCarousel pathname="cafe" />
        </>
    )
}

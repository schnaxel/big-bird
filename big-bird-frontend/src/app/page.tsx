import React from "react";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Barnd & Jens Farm - Startsteite',
    description: 'Willkommen auf der Farm! Öffnungszeiten: Mittwoch bis Sonntag von 11 bis 17 Uhr. Jeden ersten Samstag im Monat Event auf der Farm.',
}

export default function Home() {
    return (
        <>
            <div className={'container'}>
                <div className="row justify-content-center">
                    <div className="mt-4 row justify-content-center">
                        <div className="col-11 px-0 border border-muted rounded-end">
                            <div className="border-start border-caro border-4 py-3 px-3">
                                <h4>Wichtiger Hinweis!</h4>
                                <p className="mb-0">
                                    Leider ist das Mitführen von Hunden nicht mehr erlaubt und denkt bitte an die
                                    Temperaturen, der Hund im Auto ist nicht die Lösung.
                                    Wir bitten um euer Verständnis.
                                </p>                    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center mt-5">
                    <div className="col-lg-4 col-md-6 col-12 my-2">
                        <Link href="/events/">
                            <div className="d-grid gap-3 mx-4 bg-white">

                                <img src="/images/feiern/feiern-15.jpg" alt={''} className="img-fluid"></img>
                                <h2>Events</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 my-2">
                        <Link href="/shop/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/farm-shop.jpg" alt={''} className="img-fluid"></img>
                                <h2>Shop</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 my-2">
                        <Link href="/cafe/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/cafe/header/cafe-header.jpg" alt={''} className="img-fluid"></img>
                                <h2>Café</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-4 col-md-6 col-12 my-2">
                        <Link href="/alter-stall/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/alterStall/alterStall-04.jpg" alt={''} className="img-fluid"></img>
                                <h2>Alter Stall</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 my-2">
                        <Link href="/feiern/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/feiern1.jpg" alt={''} className="img-fluid"></img>
                                <h2>Feiern</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="my-5">
                    <hr />
                </div>

                <div className="row">
                    <div className="col-12 col-md-4 align-self-center text-center">
                        <img src="/images/Farmlogo.png" style={{maxHeight: '240px'}} alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-12 col-md-8 mt-5 mt-md-0 align-self-center">
                        <p>
                            Im <a href="/shop">Hofladen</a> und <a href="/cafe">Café</a> gibt es immer etwas zu
                            entdecken. Bioprodukte, Skandinavische
                            Deko, Schönes und Praktisches für die Küche, Wohnung und euren Garten,
                            Weine & Spirituosen. Im <a href="/alter-stall">„Alten Stall“</a> findet ihr handgemachte Möbel und
                            Dekorationsartikel.
                        </p>
                        <p>
                            Kulinarisch verwöhnen wir euch mit selbstgemachten Torten, Kuchen, Muffins und weiteren
                            Leckereien und bestem Kaffee.
                        </p>
                    </div>
                </div>

                <Oeffnungszeiten />

            </div>
            <ContactSection pageName={'Home'} subjects={['Allgemeine Anfrage', 'Besuchsanfrage', 'Feedback']}/>
        </>
    )
}

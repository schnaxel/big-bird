import React from "react";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import Link from "next/link";

export default function Home() {
    return (
        <>

            <div className={'container'}>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-12 mb-4 text-center">
                        <Link href="/farm/" className="btn btn-outline-primary">
                            mehr zur Farm
                        </Link>
                    </div>

                    <div className="row py-3 border border-caro bg-caro text-secondary">
                        <div className="col-1 text-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                            </svg>
                        </div>
                        <div className="col-10">
                            <h4>Wichtiger Hinweis!</h4>
                            <p className="mb-0">
                                Leider ist das Mitführen von Hunden nicht mehr erlaubt und denkt bitte an die
                                Temperaturen, der Hund im Auto ist nicht die Lösung.
                                Wir bitten um euer Verständnis.
                            </p>                    
                        </div>
                    </div>

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
                    <div className="col-4">
                        <Link href="/shop/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/farm-shop.jpg" alt={''} className="img-fluid"></img>
                                <h2>Shop</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link href="/cafe/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/farm-shop.jpg" alt={''} className="img-fluid"></img>
                                <h2>Café</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link href="/straussenfleisch/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/farm2.jpg" alt={''} className="img-fluid"></img>
                                <h2>Straußenfleisch</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="row text-center mt-4">
                    <div className="col-4">
                        <Link href="/alter-stall/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/farm3.jpg" alt={''} className="img-fluid"></img>
                                <h2>Alter Stall</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link href="/feiern/">
                            <div className="d-grid gap-3 mx-4 bg-white">
                                <img src="/images/placeholder/feiern1.jpg" alt={''} className="img-fluid"></img>
                                <h2>Feiern</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="col-4">
                        <Link href="/ferienwohnungen/">
                            <div className="d-grid gap-3 mx-4 bg-white">

                                <img src="/images/placeholder/fewo.jpg" alt={''} className="img-fluid"></img>
                                <h2>Ferienwohnungen</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="my-5">
                    <hr />
                </div>

                <div className="row">
                    <div className="col-4 align-self-center text-center">
                        <img src="/images/bigbirds_logo.png" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-8">
                        <p>
                            Ihr möchtet <a href="/straussenfleisch">Straußenfleisch</a> kaufen? Bei uns findet ihr
                            Filet, Steak, Braten, Wurst und Burger Patties. Alle Straußenfleischprodukte gibt es bei
                            uns auf der Farm oder können per Kühlpaket an euch versendet werden.
                        </p>
                        <p>
                            Im <a href="/shop">Hofladen</a> und <a href="/cafe">Café</a> gibt es immer etwas zu
                            entdecken. Bioprodukte, Skandinavische
                            Deko, Schönes und Praktisches für die Küche, Wohnung und euren Garten, alles Rund um die
                            Strauße,
                            Weine & Spirituosen. Im <a href="/alter-stall">„Alten Stall“</a> findet ihr handgemachte Möbel und
                            Dekorationsartikel.
                        </p>
                        <p>
                            Kulinarisch verwöhnen wir euch mit selbstgemachten Torten, Kuchen, Muffins und weiteren
                            Leckereien von Tante Dani und bestem Kaffee.
                        </p>
                    </div>
                </div>

                <Oeffnungszeiten />

            </div>
            <ContactSection pageName={'Home'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

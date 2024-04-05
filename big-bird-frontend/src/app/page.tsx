import React from "react";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import Link from "next/link";

export default function Home() {
    return (
        <>

            <div className={'container'}>
                <div className="row justify-content-center text-center ">
                    <div className="col-md-10 col-12 mb-4">
                        <h4 className="pb-3">
                            <a href="mailto:info@big-birds.de" target="_blank">info@big-birds.de</a>
                        </h4>
                        <p>
                            Bei Regen finden die Führungen nur begrenzt bzw. gar nicht statt.
                        </p>
                        <Link href="/farm/" className="btn btn-outline-primary">
                            mehr zur Farm
                        </Link>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-2 text-center mb-4 text-md-end">
                            <img src="/images/placeholder/hunde.png" alt={''} className="img-fluid"></img>
                        </div>
                        <div className="col-md-9">
                            <p className="mb-0">
                                Leider ist das Mitführen von Hunden nicht mehr erlaubt und denkt bitte an die
                                Temperaturen, der Hund im Auto ist nicht die Lösung.
                                Wir bitten um euer Verständnis.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row my-5 text-center">
                    <div className="col-md-6 col-12">
                        <img src="/images/placeholder/farm2.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 col-12 my-md-auto my-5">
                        <h2>Straußenfleisch</h2>
                        <div className="mt-4">
                            <p>Ihr möchtet <a href="/straussenfleisch">Straußenfleisch</a> kaufen? Bei uns findet ihr
                                Filet, Steak, Braten, Wurst und Burger Patties. Alle Straußenfleischprodukte gibt es bei
                                uns auf der Farm oder können per Kühlpaket an euch versendet werden.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 text-center">
                    <div className="col-md-6 col-12 my-md-auto my-5 order-2 order-md-1">
                        <h2>Shop und Café</h2>
                        <div className="mt-4">
                            <p>
                                Im <a href="/shop">Hofladen</a> und <a href="/cafe">Café</a> gibt es immer etwas zu
                                entdecken. Bioprodukte, Skandinavische
                                Deko, Schönes und Praktisches für die Küche, Wohnung und euren Garten, alles Rund um die
                                Strauße,
                                Weine & Spirituosen.
                            </p>
                            <p>
                                Kulinarisch verwöhnen wir euch mit selbstgemachten Torten, Kuchen, Muffins und weiteren
                                Leckereien von Tante Dani und bestem Kaffee.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-1 order-md-2">
                        <img src="/images/placeholder/farm-shop.jpg" alt={''} className="img-fluid"></img>
                    </div>
                </div>

                <div className="row mt-5 text-center">
                    <div className="col-md-6 col-12">
                        <img src="/images/placeholder/farm2.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 col-12 my-md-auto my-5">
                        <h2>Alter Stall</h2>
                        <div className="mt-4">
                            <p>
                                Im <a href="/alter-stall">„Alten Stall“</a> findet ihr handgemachte Möbel und
                                Dekorationsartikel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection pageName={'Home'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

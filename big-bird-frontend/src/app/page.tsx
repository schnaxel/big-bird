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
                    <div className="row d-flex align-items-center py-4 bg-black text-secondary">
                        <div className="col-md-2">
                                <i className="bi bi-exclamation-circle fs-6"></i>
                        </div>
                        <div className="col-md-10">
                            <p className="mb-0">
                                Leider ist das Mitführen von Hunden nicht mehr erlaubt und denkt bitte an die
                                Temperaturen, der Hund im Auto ist nicht die Lösung.
                            </p>
                            <p className="mb-0">Wir bitten um euer Verständnis.</p>
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
                                <h2>Shop und Café</h2>
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

            </div>
            <ContactSection pageName={'Home'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

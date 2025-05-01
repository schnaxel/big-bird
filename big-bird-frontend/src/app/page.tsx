import React from "react";
import Link from "next/link";
import {Metadata} from "next";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Startsteite',
    description: 'Willkommen auf Big Birds Farm! Öffnungszeiten: Mittwoch bis Sonntag von 11 bis 17 Uhr. Jeden ersten Samstag im Monat Event auf der Farm. Unsere Strauße könnt ihr nur bei Führungen sehen – Samstag und Sonntag 13.30Uhr und 15.30Uhr',
}

export default function Home() {
    return (
        <>
            <div className={'container'}>
                <section className="row justify-content-center">
                    <div className="col-md-10 col-12 mb-4 text-center">
                        <Link href="/farm/" className="btn btn-green rounded-pill px-4">
                            mehr zur Farm
                        </Link>
                    </div>

                    <div className="mt-4 row justify-content-center">
                        <div className="col-11 px-0 border border-muted rounded-end">
                            <div className="border-start border-green border-4 py-3 px-3">
                                <h4>Wichtiger Hinweis!</h4>
                                <p className="mb-0">
                                    Leider ist das Mitführen von Hunden nicht mehr erlaubt und denkt bitte an die
                                    Temperaturen, der Hund im Auto ist nicht die Lösung.
                                    Wir bitten um euer Verständnis.
                                </p>                    
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row my-5">
                    <div className="col-lg-6 col-12">
                        <img src="/images/feiern/feiern-15.jpg" alt={'Feiern auf der Farm'} className="w-100" style={{objectFit: "cover", height: 450}} />
                    </div>
                    <div className="col-lg-6 col-12 row justify-content-md-center my-lg-auto px-5">
                        <h2>Wer steckt hinter der Farm?</h2>
                        <p>Lerne das Team kennen, das die Farm lebendig macht.</p>
                        <p>Lorem ipsum.</p>
                        <div>
                            <Link href="/about/" className="btn btn-outline-primary rounded-pill px-4">
                                Zum Team
                            </Link>
                        </div>
                    </div>
                </div>

                <section className="row g-4 my-5">
                    {[
                        { title: 'Events', href: '/events/', img: '/images/feiern/feiern-15.jpg' },
                        { title: 'Farm', href: '/farm/', img: '/images/feiern/feiern-15.jpg' },
                        { title: 'Shop', href: '/shop/', img: '/images/placeholder/farm-shop.jpg' },
                        { title: 'Ferienwohnungen', href: '/ferienwohnungen/', img: '/images/feiern/feiern-15.jpg' },
                        { title: 'Café', href: '/cafe/', img: '/images/cafe/header/cafe-header.jpg' },
                        { title: 'Feiern', href: '/feiern/', img: '/images/placeholder/feiern1.jpg' },
                    ].map((item, i) => (
                        <div key={i} className="col-md-4 col-sm-6 col-12">
                            <Link href={item.href}>
                                <div className="card border-0 shadow-sm h-100">
                                    <img src={item.img} alt={item.title} />
                                    <div className="card-body text-center">
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>

                <div className="my-5">
                    <hr />
                </div>

                <section className="py-5">
                    <div className="text-center mb-4">
                        <h2>Was unsere Besucher sagen</h2>
                        <p className="text-muted">Eindrücke direkt von der Farm</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                        {
                            name: 'Lisa K.',
                            text: 'Lorem ipsum Text',
                        },
                        {
                            name: 'Tim & Nora',
                            text: 'Lorem ipsum Text.',
                        },
                        {
                            name: 'Sebastian R.',
                            text: 'Lorem ipsum Text',
                        },
                        ].map((t, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="bg-white p-4 h-100 rounded shadow-sm">
                                <p className="fst-italic">“{t.text}”</p>
                                <p className="fw-semibold text-end mb-0">– {t.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>

                <div className="my-5">
                    <hr />
                </div>

                <section className="row">
                    <div className="col-12 col-md-4 align-self-center text-center">
                        <img src="/images/Farmlogo.png" style={{maxHeight: '240px'}} alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-12 col-md-8 mt-5 mt-md-0">
                        <h2 className="mb-3">Mehr als nur ein Hof</h2>
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
                            Leckereien und bestem Kaffee.
                        </p>
                    </div>
                </section>
            </div>

            <InstagramFeed />
        </>
    )
}

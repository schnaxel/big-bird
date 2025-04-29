import ContactSection from "@/src/components/ContactSection/ContactSection";
import React from "react";
import {Metadata} from "next";
import ImageCarousel from "@/src/components/ImageCarousel/ImageCarousel";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Shop',
    description: 'Integriert in das Big Birds Café ist der Big Birds Shop, unser Hofladen, in dem Ihr Produkte aus eigener Produktion sowie ausgewählte zugekaufte Produkte findet.',
}

export default function Shop() {

    return (
        <>
            <div className={'container'}>
                <div className="text-center">
                    <p>
                        Erweitert wird das Big Birds Shop Sortiment durch saisonale Geschenkartikeln,
                        Deko- und Wohnaccessoires aus Skandinavien. Im ständigen Angebot sind zudem
                        besondere Küchenaccessoires, die die Herzen von kochbegeisterten Männern und
                        Frauen gleichermaßen höher schlagen lassen. Mit unserem Shop wollen wir Dir
                        die Möglichkeit geben die Atmosphäre der Big Birds Farm in Dein Zuhause
                        mitzunehmen.
                    </p>
                </div>

                <div className="row my-5 text-center">
                    <div className="col-lg-6 col-12">
                        <img src="/images/placeholder/farm-shop.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-lg-6 col-12 row justify-content-md-center my-lg-auto mt-5">
                        <h2>Eine Auswahl aus dem Sortiment</h2>
                        <div className="mt-4 text-start col-12 col-md-10">
                            <ul>
                                <li><a href="/straussenfleisch">Fleisch unserer Strauße</a></li>
                                <li>Straußeneiern, Straußfedern und Staubwedeln</li>
                                <li>Straußenei-Nudeln und Straußeneierlikör</li>
                                <li>Fleisch unserer Highland – bzw. Gallowayrinder</li>
                                <li>Lebensmittel und Geschenkideen aus Dänemark und Schweden</li>
                                <li>Deko- und Wohnaccessoires aus Skandinavien</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="d-flex flex-column flex-lg-row align-items-center mt-5">
                    <div className="col-lg-7 col-12 my-md-auto py-3 order-2 order-lg-1">
                        <h2>Geschenke</h2>
                        <div className="mt-4">
                            <p>
                                Ihr sucht ein Geschenk für einen lieben Menschen? Ihr benötigt ein
                                Mitbringsel für jemanden der bereits alles hat? Ihr wollt euren
                                Mitarbeitern unterjährig eine Freude bereiten oder etwas zum
                                Firmenjubiläum überreichen? Ihr sucht Weihnachtspräsente für eure
                                Geschäftspartner oder auch die gesamte Belegschaft?
                            </p>
                            <p>
                                Egal ob ein oder 1000 Geschenke, wir haben die Lösung. Nennt uns ein paar
                                Eckdaten wie das Budget, den Anlass und einige Details zur Person bzw. der
                                Personengruppe und wir stellen euch etwas Besonders zusammen.
                            </p>
                            <p>
                                Egal wie klein oder groß das Budget ist, durch unsere langjährige Erfahrung
                                und Vielfältigkeit der Produkte aus unserem Hofladen von Lebensmitteln, über
                                Dekorativem bis zu Praktischem finden wir für jeden etwas Passendes und die
                                Freude des Beschenkten wird groß sein. Jedes Geschenk wird bei uns auf der
                                Farm von Hand verpackt und drückt die Wertschätzung aus, die ihr vermitteln
                                möchtet.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12 p-3 order-1 order-lg-2">
                        <img src="/images/geschenke/geschenke_16.jpg" alt={''} className="img-fluid"></img>
                    </div>
                </div>
                <div className="mb-4 mt-lg-4 mt-0">
                    <p>
                        Falls ihr euch nicht entscheiden könnt, ist unser Gutschein genau das
                        Richtige, denn der kann sowohl in unserem <a href="/cafe">Café</a> als
                        auch in unserem Hofladen eingelöst werden.
                    </p>
                    <p>
                        Ihr wohnt weiter weg? Wir versenden die Präsente gerne.
                        Sprecht uns im Hofladen an oder kontaktiert uns über unser Kontaktformular.
                    </p>
                </div>

                <div className="my-5 row justify-content-center">
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
            </div>

            <ImageCarousel pathname="shop" />
        </>
    )
}

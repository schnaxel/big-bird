import ContactSection from "@/src/components/ContactSection/ContactSection";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Events',
    description: 'Hier findest du alle anstehenden Events und Veranstaltungen auf der Big Birds Farm',
}

export default function Events() {
    return (
        <>
            <div className={'container text-center'}>

                <div className="mt-5">

                    <h2>Unsere kommenden Events</h2>

                    <div className="row justify-content-center mt-4">
                        <div className="col-11 px-0 border border-muted rounded-end">
                            <div className="border-start border-caro border-4 py-3 px-3">
                                <h4>Frühstück (ab Oktober)</h4>
                                <p className="mb-0">Von 8:30 bis 11 Uhr</p>
                                <p className="mb-0">
                                    Nur mit Reservierung (kleines Tellerfrühstück ab 5,90 € – auch für Gruppen ab, 14,90 € - Tellerbuffet)
                                </p>                    
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/events/events_oktober.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Oktober</h3>
                                <div className="mt-2">
                                    <h4>05.10.2024 – Herbst-Beginn-Event</h4>
                                    <ul>
                                        <li>Flammkuchen aus dem Steinofen</li>
                                        <li>Kinder-Herbst-Basteln mit Naturprodukten und haushaltsüblichen Dingen</li>
                                    </ul>
                                    <h4>19.10.2024 - Kürbisevent</h4>
                                    <ul>
                                        <li>Kürbissuppe und Kürbisbrot</li>
                                        <li>Alles rund um den Kürbis: Kürbisschnitzen für Familien</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/events/events_november.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>November</h3>
                                <div className="mt-2">
                                    <h4>02.11.2024 - Farm-Day Erntedankfest</h4>
                                    <ul>
                                        <li>Straußengulasch (wenn möglich)</li>
                                        <li>Laternebasteln für Kinder</li>
                                    </ul>
                                    <h4>16.11.2024 – Chili con Carne Event</h4>
                                    <ul>
                                        <li>Chili con Carne (auch vegetarisch)</li>
                                        <li>Lesung für Kinder</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/farm/farm-15.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Dezember</h3>
                                <div className="mt-2">
                                    <p><b>Jeden Samstag & Sonntag:</b> Tannenbaumverkauf</p>
                                    <h4>30.11.2024 – 1. Adventswochenende</h4>
                                    <ul>
                                        <li>Punsch & Bratwurst</li>
                                        <li>Basteln für die Weihnachtszeitn</li>
                                        <li>Weihnachtsmarkt</li>
                                    </ul>
                                    <h4>07.12.2024 – 2. Adventswochenende</h4>
                                    <ul>
                                        <li>Punsch & Erbsensuppe</li>
                                        <li>Weihnachtsmarkt & Weihnachtsgeschichten für Kinder</li>
                                    </ul>
                                    <h4>14.12.2024 – 3. Adventswochenende</h4>
                                    <ul>
                                        <li>Punsch & Flammkuchen</li>
                                        <li>Weihnachtsmarkt</li>
                                        <li>Geschenke basteln (Kinder)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection pageName={'Straußenfleisch'} subjects={['Verfügbarkeit von Straußenfleisch', 'Bestellung von Straußenfleisch', 'Informationen zu Straußenfleisch']}/>
        </>
    )
}

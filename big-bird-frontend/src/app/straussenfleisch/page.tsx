import ContactSection from "@/src/components/ContactSection/ContactSection";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Straußenfleisch',
    description: 'Wir bieten verschiedene Fleischprodukte vom Strauß, sowie vom Wasserbüffel und Wild an.',
}

export default function Straussenfleisch() {
    return (
        <>
            <div className={'container text-center'}>

                <div className="mt-5">
                    <h2>Unsere Produkte</h2>

                    <div>
                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/placeholder/straußenfleisch-filet.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Straußenfilet</h3>
                                <div className="mt-2">
                                    <p>
                                        Das Straußenfilet zeichnet sich durch einen niedrigen Cholesterin- und 
                                        Fettgehalt aus, ist jedoch reich an Eiweiß und Eisen, was es 
                                        besonders gesund und leicht verdaulich macht.
                                    </p>
                                    <p>Das Straußenfilet wird zuerst scharf in der Pfanne angebraten und 
                                        anschließend im Ofen saftig gegart. Sein Aroma ist nussig, der 
                                        Geschmack auf der Zunge butterzart mit einer feinen Note von Wild 
                                        und Leber.
                                    </p>
                                    <p className="mb-0">
                                        Die hohe Qualität des eiweißreichen Straußenfilets erkennt man 
                                        besonders an der geringen Fettmarmorierung.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/placeholder/straußenfleisch-steak.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Straußensteak</h3>
                                <div className="mt-2">
                                    <p>
                                        Unsere Steaks werden am besten wie ein Filet auf dem Grill 
                                        zubereitet. Auch hier sind die Nährwerte wieder besonders beeindruckend: 
                                        Dieses außergewöhnliche Geschmackserlebnis enthält erstaunlich wenig 
                                        Cholesterin und Fett.
                                    </p>
                                    <p className="mb-0">
                                        Gleichzeitig hat es sogar einen höheren Eiweißgehalt als das 
                                        Fleisch von Huhn oder Pute. Deshalb ist gerade für Sportler und 
                                        Diätbewusste ein saftiges Steak von unseren Big Birds genau das Richtige.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10 d-none">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/placeholder/straußenfleisch-filet.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Straußenbraten</h3>
                                <div className="mt-2">
                                    <p>
                                        Das zarte Fleisch unserer Big Birds wird langsam gegart und 
                                        entfaltet dabei einen einzigartigen Geschmack.
                                    </p>
                                    <p>
                                        Dieser Braten verleiht euren Gerichten eine besondere Note und 
                                        hebt sie auf ein neues kulinarisches Niveau.
                                    </p>
                                    <p className="mb-0">
                                        Unser Braten zergeht auf der Zunge und verwöhnt den Gaumen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10 d-none">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/placeholder/straußenfleisch-steak.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Straußenwurst</h3>
                                <div className="mt-2">
                                    <p>                                
                                        Unsere Straußenbratwurst ist weich, zart und saftig und besteht 
                                        hauptsächlich aus fettarmem Straußenfleisch.
                                    </p>
                                    <p className="mb-0">
                                        Unsere Wurstspezialitäten sind keine Massenware, sondern entstehen in echter Handarbeit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 mx-2 mx-lg-0 text-center bg-primary bg-opacity-10 d-none">
                            <div className="col-lg-4 col-12 p-0">
                                <img src="/images/placeholder/straußenfleisch-filet.jpg" alt={''} className="img-fluid w-100 h-100 object-fit-cover"></img>
                            </div>
                            <div className="col-lg-8 col-12 text-start p-4 px-lg-5 row justify-content-md-center my-md-auto">
                                <h3>Burger Patties vom Strauß</h3>
                                <div className="mt-2">
                                    <p>
                                        Weniger ist mehr - das gilt besonders für Burger mit unserem Burger Patty vom Strauß.
                                    </p>
                                    <p>
                                        Käse, Sauce und andere Zutaten sollten unserer Erfahrung nach 
                                        eine untergeordnete Rolle spielen, wenn ihr eure Freunde beim 
                                        nächsten Kochevent begeistern wollen.
                                    </p>
                                    <p className="mb-0">
                                        Das fett- und cholesterinarme Patty aus Straßenfleisch spricht für sich.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center my-5">
                    <p>
                        Unser Straußenfleisch schmeckt nicht nur sehr gut, sondern ist auch gesund!
                        Es ist fett- und cholesterinarm. Grundsätzlich kann Straußenfleisch wie
                        Rindfleisch zubereitet werden. Es verbindet die Vielseitigkeit und den
                        Geschmack des roten Fleisches mit den positiven Nährwerteigenschaften des
                        weißen Fleisches.
                    </p>
                    <p>
                        Mit einem Fettgehalt von rund 1% ist Straußenfleisch äußerst mager und
                        cholesterinarm (unter 60 mg/100 g) eine ideale Alternative für
                        Gesundheitsbewusste.
                    </p>
                </div>

                <div className="d-flex flex-column flex-lg-row my-5 text-center">
                    <div className="col-lg-6 col-12">
                        <img src="/images/placeholder/straußenfleisch-steak.jpg" alt={''} className="img-fluid w-75"></img>
                    </div>
                    <div className="col-lg-6 col-12 row justify-content-md-center my-md-auto pt-4">
                        <h3>Unser Fleisch ist ideal für:</h3>
                        <div className="mt-4 text-start col-12 col-md-10">
                            <ul>
                                <li>Nahrungsmittelallergiker</li>
                                <li>sportliche Menschen</li>
                                <li>Diät bei Gewichtsproblemen</li>
                                <li>hoher Cholesterinspiegel</li>
                                <li>Bluthochdruck und koronaren Herzerkrankungen</li>
                                <li>und selbstverständlich für jeden Gourmet & Griller.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column-reverse flex-lg-row mt-5 text-center">
                    <div className="col-lg-6 col-12 row justify-content-md-center my-md-auto pt-4 mb-0">
                        <h2>Garzeiten</h2>
                        <div className="mt-4 col-12 col-md-10">
                            <p>
                                Die Garzeiten sind bei Straußenfleisch durchschnittlich um ein Drittel
                                kürzer als bei einem entsprechenden Stück Rindfleisch. In Vakuum
                                verpackt ist Straußenfleisch bei sachgerechter Lagerung (unter 4°C)
                                und eingehaltener Kühlkette vier Wochen haltbar – je länger es gelagert
                                wird, desto zarter wird das Fleisch vom Strauß.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src="/images/placeholder/straußenfleisch-filet.jpg" alt={''} className="img-fluid w-75"></img>
                    </div>
                </div>

                <div className="text-center mt-lg-5 my-0">
                    <div className="my-4">
                        <p>
                            Unser Straußenfleischwird frisch & vakuumiert verpackt. Das frische
                            Straußenfleisch wird immer in einer Styroporkiste mit Trockeneis versendet!
                        </p>
                        <p>Schreibt uns gerne für eine Bestellung über das Kontaktformular an.</p>
                    </div>
                    <p>Selbstverständlich bieten wir auch Hundefutter an.</p>
                </div>
            </div>
            <ContactSection pageName={'Straußenfleisch'} subjects={['Verfügbarkeit von Straußenfleisch', 'Bestellung von Straußenfleisch', 'Informationen zu Straußenfleisch']}/>
        </>
    )
}

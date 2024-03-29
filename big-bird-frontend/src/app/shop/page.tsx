import ContactSection from "@/src/components/ContactSection/ContactSection";

export default function Datenschutz() {
    return (
        <>

            <div className={'container'}>
                <div className="text-center row justify-content-md-center">
                    <div className="col-11">
                        <p>
                            Erweitert wird das Big Birds Shop Sortiment durch saisonale Geschenkartikeln,
                            Deko- und Wohnaccessoires aus Skandinavien. Im ständigen Angebot sind zudem
                            besondere Küchenaccessoires, die die Herzen von kochbegeisterten Männern und
                            Frauen gleichermaßen höher schlagen lassen. Mit unserem Shop wollen wir Dir
                            die Möglichkeit geben die Atmosphäre der Big Birds Farm in Dein Zuhause
                            mitzunehmen.
                        </p>
                    </div>
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
                <div className="row mt-5 text-center">
                    <div className="col-md-6 col-12 my-md-auto my-5 order-2 order-md-1">
                        <h2>Geschenke</h2>
                        <div className="mt-4">
                            <p>
                                Ihr sucht ein Geschenk für einen lieben Menschen? Ihr benötigt ein
                                Mitbringsel für jemanden der bereits alles hat? Ihr wollt euren
                                Mitarbeitern unterjährig eine Freude bereiten oder etwas zum
                                Firmenjubiläum überreichen? Ihr sucht Weihnachtspräsente für eure
                                Geschäftspartner oder auch die gesamte Belegschaft?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-1 order-md-2">
                        <img src="/images/placeholder/farm2.jpg" alt={''} className="img-fluid"></img>
                    </div>
                </div>
                <div className="text-center mb-4 mt-md-5 mt-0 row justify-content-md-center">
                    <div className="col-md-11 col-12">
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
                            möchten.
                        </p>
                        <p>
                            Falls ihr euch nicht entscheiden könnt, ist unser Gutschein genau das
                            Richtige, denn der kann sowohl in unserem <a href="/cafe">Café</a> als
                            auch in unserem Hofladen eingelöst werden.
                        </p>
                        <p>
                            Ihr wohnt weiter weg? Wir versenden die Präsente gerne.
                            Sprecht uns im Hofladen an, oder kontaktiert uns unter
                        </p>
                        <h4>
                            <a href="mailto:info@big-birds.de" target="_blank">info@big-birds.de</a>
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src="/images/placeholder/farm2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <ContactSection pageName={'Shop'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

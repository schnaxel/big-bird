import ContactSection from "@/src/components/ContactSection/ContactSection";
import Öffnungszeiten from "@/src/components/Öffnungszeiten/Öffnungszeiten";

export default function Cafe() {
    return (
        <>

            <div className={'container'}>
                <div className="d-flex flex-row py-4 bg-black justify-content-center text-secondary">
                    <div className="px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                    </div>
                    <div className="px-3 align-self-center">
                        <h3 className="mb-0">Kartenzahlung ist möglich</h3>
                    </div>
                </div>

                <div className="row my-5 text-center">
                    <div className="col-md-6 col-12">
                        <img src="/images/placeholder/farm6.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 col-12 row justify-content-md-center my-md-auto mt-5">
                        <h2>Eine Auswahl aus dem Angebot</h2>
                        <div className="mt-4 text-start col-12 col-md-10">
                            <ul>
                                <li>Farmtorte</li>
                                <li>Straußenlikörtorte</li>
                                <li>Donauwelle</li>
                                <li>Kaffee Crema, Café Latte und Espresso</li>
                                <li>ausgesuchte Tees</li>
                                <li>feinste Schokoladengetränke</li>
                            </ul>
                        </div>
                        <div className="mt-3 d-none d-lg-block">
                            <h3>Jahreszeiten-Specials</h3>
                            <p>Ob Cool Mint Ice Tea oder einer weihnachtlichen Chai Latte - wir haben auch immer etwas
                                Besonderes im Angebot</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 d-block d-lg-none text-center">
                    <h3>Jahreszeiten-Specials</h3>
                    <p>Ob Cool Mint Ice Tea oder einer weihnachtlichen Chai Latte - wir haben auch immer etwas
                        Besonderes im Angebot</p>
                </div>
                <div className="text-center my-4">
                    <p>Als Milchalternative haben wir laktosefreie Hafermilch.</p>
                    <p>Eine Reservierung ist bei uns nicht möglich.</p>
                </div>

                <Öffnungszeiten />
            </div>
            <ContactSection pageName={'Café'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

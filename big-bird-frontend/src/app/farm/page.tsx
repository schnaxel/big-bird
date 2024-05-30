import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";

export default function Feiern() {
    return (
        <>

            <div className={'container'}>
                <div className="row mb-md-5 mt-5">
                    <div className="col-md-4 col-12">
                        <img src="/images/placeholder/farm5.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-md-8 col-12 my-md-auto my-5">
                        <h2>Führungen</h2>
                        <div className="mt-4">
                            <p>Die Führungen finden am Wochenende ab 13.30 Uhr und 15.30 Uhr statt und sind aktuell kostenlos.</p>
                            <p>Bei Regen finden die Führungen nur begrenzt statt und bei starkem Regen werden keine
                                Führungen durchgeführt.</p>
                        </div>
                    </div>
                </div>
                <div className="row my-md-5">
                    <div className="col-md-4 col-12">
                        <img src="/images/farm/farm-20.jpg" alt={''} className="img-fluid"></img>
                    </div>
                    <div className="col-md-8 col-12 my-md-auto my-5">
                        <h2>Die Farm</h2>
                        <div className="mt-4">
                            <p>Das Küken-Gehege direkt neben dem Eingang ist die Aufzuchtstube, in denen unsere „little
                                big birds“ die ersten drei Monate verbringen.
                            </p>
                            <p>Der häufige Kontakt zu einer menschlichen Bezugsperson und Besuchern ist in diesem Alter
                                besonders wichtig, damit die Tiere später bei der täglichen Pflege und Fütterung so
                                wenig Stress wie möglich verspüren.
                            </p>
                            <p className="d-none d-lg-block">Danach ziehen die Jungstrauße in eines der Jungtiergehege um, die ihr auf eurem Rundgang durch
                                die Farm besuchen könnt. Hier bleiben die Strauße, die sehr Standorttreu sind, bis sie groß
                                genug für die Vermarktung sind. Durch alle drei Stationen führen wir euch, so dass ihr jede
                                Entwicklung von wenigen Wochen bis zu ihrer vollen Größe nach 14 Monaten erleben und vor allem
                                streicheln könnt. Das Brutgehege wird von unserem stattlichen Straußenhahn Hektor und seinen
                                Damen beherbergt, die die wertvollen Straußeneier liefern.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none">
                    <div className="row my-md-5">
                        <div className="col-md-4 col-12">
                            <img src="/images/farm/farm-19.jpg" alt={''} className="img-fluid"></img>
                        </div>
                        <div className="col-md-8 col-12 my-md-auto my-5">
                            <p>Danach ziehen die Jungstrauße in eines der Jungtiergehege um, die ihr auf eurem Rundgang durch
                                die Farm besuchen könnt. Hier bleiben die Strauße, die sehr Standorttreu sind, bis sie groß
                                genug für die Vermarktung sind. Durch alle drei Stationen führen wir euch, so dass ihr jede
                                Entwicklung von wenigen Wochen bis zu ihrer vollen Größe nach 14 Monaten erleben und vor allem
                                streicheln könnt. Das Brutgehege wird von unserem stattlichen Straußenhahn Hektor und seinen
                                Damen beherbergt, die die wertvollen Straußeneier liefern.</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/farm/farm-04.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/farm/farm-05.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/farm/farm-06.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/farm/farm-07.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/farm/farm-08.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/farm/farm-10.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/farm/farm-23.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/farm/farm-24.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/farm/farm-25.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/farm/farm-27.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/farm/farm-28.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/farm/farm-29.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>
                </div>

                <Oeffnungszeiten />
            </div>

            <ContactSection pageName={'Farm'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

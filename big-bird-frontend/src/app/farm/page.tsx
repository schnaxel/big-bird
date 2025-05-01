import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import React from "react";
import {Metadata} from "next";
import ImageCarousel from "@/src/components/ImageCarousel/ImageCarousel";

export const metadata: Metadata = {
    title: 'Jens & Barnd Farm',
    description: 'Tiere hautnah erleben! Die Farm umfasst Gehege, Weiden und Wiesen zwischen Haithabu und Fahrdorf, entlang der Schlei, auf denen unsere Tiere draußen weiden. Direkt auf dem Hof an der B76 findet Ihr unsere Farm.',
}

export default function Feiern() {
    return (
        <>
            <div className={'container'}>
                <div className="row mb-md-5 mt-5 bg-beige rounded shadow-sm">
                    <div className="col-md-5 col-12 ps-0">
                        <img src="/images/farm/fuehrung_1.jpg" alt={''} className="img-fluid rounded shadow-sm"></img>
                    </div>
                    <div className="col-md-7 col-12 my-md-auto my-5">
                        <h2>Führungen</h2>
                        <div className="mt-4">
                            <p>Die kostenlosen Führungen finden am Wochenende von Mai bis Oktober 13.30 Uhr und 15.30 Uhr statt.</p>
                            <p>Bei Regen finden die Führungen nur begrenzt statt und bei starkem Regen werden keine
                                Führungen durchgeführt.</p>
                        </div>
                    </div>
                </div>

                <section className="row my-md-5 bg-beige rounded shadow-sm">
                    <div className="col-md-5 col-12">
                        <img src="/images/farm/fuehrung_1.jpg" alt={''} className="img-fluid rounded shadow-sm"></img>
                    </div>
                    <div className="col-md-7 col-12 my-md-auto my-5">
                        <h2>Die Farm</h2>
                        <div className="mt-4">
                            <p>Das Küken-Gehege direkt neben dem Eingang ist die Aufzuchtstube, in denen unsere „little
                                big birds“ die ersten drei Monate verbringen.
                            </p>
                            <p>Der häufige Kontakt zu einer menschlichen Bezugsperson und Besuchern ist in diesem Alter
                                besonders wichtig, damit die Tiere später bei der täglichen Pflege und Fütterung so
                                wenig Stress wie möglich verspüren.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="row my-md-5 bg-beige rounded shadow-sm">
                    <div className="col-md-5 col-12">
                        <img src="/images/farm/fuehrung_1.jpg" alt={''} className="img-fluid rounded shadow-sm"></img>
                    </div>
                    <div className="col-md-7 col-12 my-md-auto my-5">
                        <h2>Die Farm</h2>
                        <div className="mt-4">
                            <p className="d-none d-lg-block">Danach ziehen die Jungstrauße in eines der Jungtiergehege um, die ihr auf eurem Rundgang durch
                                die Farm besuchen könnt. Hier bleiben die Strauße, die sehr Standorttreu sind, bis sie groß
                                genug für die Vermarktung sind. Durch alle drei Stationen führen wir euch, so dass ihr jede
                                Entwicklung von wenigen Wochen bis zu ihrer vollen Größe nach 14 Monaten erleben und vor allem
                                streicheln könnt. Das Brutgehege wird von unserem stattlichen Straußenhahn Hektor und seinen
                                Damen beherbergt, die die wertvollen Straußeneier liefern.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ImageCarousel pathname="farm" />
        </>
    )
}

import React from "react";
import {Metadata} from "next";
import ContactForm from "@/src/components/ContactSection/CantactForm";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Kontakt',
    description: 'Schreibt uns gerne über das Kontaktformular an, wenn ihr Fragen, Anregungen oder einfach Moin sagen wollt.',
}

export default function Kontakt() {
    return (
        <>
            <div className={'container text-center footer-margin'}>
                <div className="mb-5">
                    <h2 className="mb-4">Besucht uns auf der Farm</h2>
                    <p className="lead mb-1">Café und Hofladen geöffnet:</p>
                    <p className="mb-3">Mittwoch bis Sonntag von 11:00–17:00 Uhr</p>
                    <p className="text-muted">Montag & Dienstag: Ruhetage</p>
                </div>

                <div className="row justify-content-center text-start mb-5">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-6 vertical-line pe-4 text-end">
                                <h5>Adresse</h5>
                                <p className="mb-1">Jens & Barnd - Farm</p>
                                <p className="mb-1">Bundesstr. 7</p>
                                <p className="mb-0">24857 Fahrdorf</p>
                            </div>
                            <div className="col-6 ps-4">
                                <h5>Kontakt</h5>
                                <p className="mb-1">Tel: +49</p>
                                <p className="mb-1">E-Mail: <a href="mailto:test" className="text-decoration-underline">mail</a></p>
                                <p className="mb-0">www.big-birds.de</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className={'position-relative col-md-10 col-12 px-0'}>
                        <h2 className="mb-3 text-start">So findet ihr uns</h2>
                        <div className="position-relative rounded shadow overflow-hidden">
                            <iframe
                                className="w-100"
                                height="360"
                                loading="lazy"
                                allowFullScreen={true}
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{border: 0}}
                                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58329.88629020078!2d9.557441502205137!3d54.50853099105894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b30d020e5902d9%3A0x74a032102b6989ab!2sBig%20Birds%20-%20Strau%C3%9Fenfarm%20%26%20Hofladen!5e0!3m2!1sde!2sde!4v1711559282174!5m2!1sde!2sde'}>
                            </iframe>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                backgroundImage: 'url("/images/asfalt-light.png")',
                                pointerEvents: 'none'
                            }}></div>
                        </div>
                    </div>
                </div>

                <div className="row text-start justify-content-center">
                    <div className="col-12 col-md-8 mt-4">
                        <h2>Schreib uns eine Nachricht</h2>
                        <p>Hast du Fragen, Anregungen oder willst einfach Moin sagen? Schreibe uns gerne über das Kontaktformular.</p>
                    </div>
                    <div className="col-12 col-md-8 p-4 border rounded bg-white shadow">
                        <ContactForm pageName={'Kontakt'} subjects={['Allgemeine Anfrage', 'Besuchsanfrage', 'Feedback']}/>
                    </div>
                </div>
            </div>
        </>
    )
}

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
                    <h2 className="mb-3">Öffnungszeiten - Café und Hofladen</h2>
                    <p>Mittwoch bis Sonntag von 11 bis 17 Uhr</p>
                    <p>Montag und Dienstag ist Ruhetag.</p>
                </div>

                <div className="mb-5 row justify-content-center">
                    <div className="col-5 col-md-3 text-end vertical-line pe-3">
                        Jens & Barnd - B76 Farm<br />
                        Bundesstr. 7<br />
                        24857 Fahrdorf
                    </div>
                    <div className="col-5 col-md-3 text-start ps-3">
                        Tel: +49 <br />
                        E-Mail: <a href="mailto:test">mail</a><br />
                        www.big-birds.de
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className={'position-relative col-md-8 col-12 px-0'}>
                        <iframe
                            className={'bg-secondary mt-3'}
                            width="100%"
                            height="300px"
                            loading="lazy"
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{border: 0}}
                            src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58329.88629020078!2d9.557441502205137!3d54.50853099105894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b30d020e5902d9%3A0x74a032102b6989ab!2sBig%20Birds%20-%20Strau%C3%9Fenfarm%20%26%20Hofladen!5e0!3m2!1sde!2sde!4v1711559282174!5m2!1sde!2sde'}>
                        </iframe>
                        <div style={{
                            position: 'absolute',
                            top: '16px',
                            left: 0,
                            width: '100%',
                            height: '300px',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            backgroundImage: 'url("/images/asfalt-light.png")',
                            pointerEvents: 'none'
                        }}></div>
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

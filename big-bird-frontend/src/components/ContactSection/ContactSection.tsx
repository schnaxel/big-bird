import React from 'react';
import Link from "next/link";
import ContactForm from "@/src/components/ContactSection/CantactForm";

const ContactSection: React.FC<{ pageName: string, subjects: string[], activeFewo?: string }> = ({ pageName, subjects, activeFewo }) => {

    return (
        <section className={'py-5'}>
            <div className="container">
                <div className="row bg-primary py-4" style={{backgroundImage: 'url("/images/asfalt-light.png")', backgroundSize: "233px 175px", backgroundRepeat: 'repeat'}}>
                    <div className="col-12 col-lg-6 px-4 pe-lg-2">
                        <div className="row">
                            <div className="col-12">
                                <h2 className={'text-white fw-medium'}>Kontakt</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p className={'m-0'}>
                                    <Link href={'https://maps.app.goo.gl/1mV7BoTaTNsbDTu66'} rel="noopener" target="_blank" className={'text-white'}>
                                        Bundesstraße 7, 24857 Fahrdorf
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className={'position-relative'}>
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
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-4 ps-lg-3 align-content-end justify-content-center">
                        <ContactForm pageName={pageName} subjects={subjects} activeFewo={activeFewo}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
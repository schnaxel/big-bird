'use client'
import React from 'react';
import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <>        
            <footer className='py-5 bg-beige'>
                <div className="container mt-5">
                    <div className="row my-5">
                        <div className="col-md-3">
                            <img src="/images/Farmlogo.png" style={{marginTop: -25}} alt="Logo" width={150} />
                        </div>

                        <div className="col-md-3">
                            <h3>Kontakt</h3>
                            <p>
                                <a href="/">mailXXX</a><br />
                                Jens & Barnd - Farm Fahrdorf<br />
                                Bundesstr. 7<br />
                                24857 Fahrdorf
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h3>Links</h3>
                            <div className="d-flex gap-5">
                                <ul className="list-unstyled">
                                    <li><Link href="/events">Events</Link></li>
                                    <li><Link href="/about">Wer wir sind</Link></li>
                                    <li><Link href="/farm">Die Farm</Link></li>
                                    <li><Link href="/kontakt">Kontakt</Link></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><Link href="/cafe">Cafe</Link></li>
                                    <li><Link href="/shop">Hofladen</Link></li>
                                    <li><Link href="/feiern">Feiern</Link></li>
                                    <li><Link href="/ferienwohnungen">Ferienwohnungen</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2 justify-items-end">
                            <h3>Follow us!</h3>
                            <div className="d-flex gap-4">
                                <Link href="https://www.facebook.com/mocfor" rel="noopener" target="_blank">
                                    <i className="bi bi-facebook fs-2 text-primary"></i>
                                </Link>
                                <Link href="https://www.instagram.com/bigbirdsfarm" rel="noopener" target="_blank">
                                    <i className="bi bi-instagram fs-2 text-primary"></i>
                                </Link>
                                <Link href="https://www.youtube.com/channel/UCXrHqywSfUoacvzpduod_8g" rel="noopener"
                                        target="_blank">
                                    <i className="bi bi-youtube fs-2 text-primary"></i>
                                </Link>
                            </div>
                        </div>
                    </div>      

                    <hr className={'m-0'}/>

                    <div className="d-flex justify-content-between mt-4 text-center small">
                        <div>
                            <Link href="/impressum" className="me-3">Impressum</Link>
                            <Link href="/datenschutz" className="me-3">Datenschutz</Link>
                        </div>
                        <p>© 2025 Jens & Barnd - Farm Fahrdorf</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

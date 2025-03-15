'use client'
import React from 'react';
import {ElfsightWidget} from "react-elfsight-widget";
import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer className='py-5'>
            <div >
                <h2 className={'mb-4'} >
                    <Link href={'https://www.instagram.com/bigbirdsfarm'} rel="noopener" target="_blank">
                        #BIGBIRDS
                    </Link>
                </h2>
                <ElfsightWidget widgetId={"28c5f280-cfed-4ebf-8486-2cabcf09b089"} lazy className={'pb-5'}/>
            </div>

            <div className="container mt-4">
                <div className="row my-4">
                    <div className="col-md-3">
                        <img src="/images/logo_draft.png" alt="Logo" width={150} />
                    </div>

                    <div className="col-md-4">
                        <h3>Kontakt</h3>
                        <p>
                            Tel. +49<br />
                            <a href="/">mailXXX</a><br />
                            Jens & Barnd - B76 Farm<br />
                            Bundesstr. 7<br />
                            24857 Fahrdorf
                        </p>
                    </div>

                    <div className="col-md-3">
                        <h3>Links</h3>
                        <div className="d-flex">
                            <ul className="list-unstyled">
                                <li><Link href="/">Farm</Link></li>
                                <li><Link href="/">Events</Link></li>
                                <li><Link href="/">Cafe</Link></li>
                                <li><Link href="/">Shop</Link></li>
                                <li><Link href="/">FAQ</Link></li>
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

                <div className="d-flex justify-content-between mt-3 text-center small">
                    <div>
                        <Link href="/impressum" className="me-3">Impressum</Link>
                        <Link href="/datenschutz" className="me-3">Datenschutz</Link>
                    </div>
                    <p>© 2025 Jens & Barnd B76 Farm</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

'use client'
import React from 'react';
import {ElfsightWidget} from "react-elfsight-widget";
import Link from "next/link";


const Footer: React.FC = () => {
    return (
        <footer>
            <div className={'container py-5'}>
                <div className={'row'}>
                    <div className="col-12">
                        <h3 className={'text-center mb-4'} >
                            <Link href={'https://www.instagram.com/bigbirdsfarm'} rel="noopener" target="_blank">
                                #BIGBIRDS
                            </Link>
                        </h3>
                        <ElfsightWidget widgetId={"28c5f280-cfed-4ebf-8486-2cabcf09b089"} lazy className={'pb-5'}/>
                        <hr className={'m-0'}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className="col-12">
                        <div className={'py-4 d-flex flex-column align-items-center'}>
                            <div className="d-flex justify-content-center">
                                <div className="px-3">
                                    <Link href="https://www.facebook.com/mocfor" rel="noopener" target="_blank">
                                        <i className="bi bi-facebook fs-2 text-primary"></i>
                                    </Link>
                                </div>
                                <div className="px-3">
                                    <Link href="https://www.instagram.com/bigbirdsfarm" rel="noopener" target="_blank">
                                        <i className="bi bi-instagram fs-2 text-primary"></i>
                                    </Link>
                                </div>
                                <div className="px-3">
                                    <Link href="https://www.youtube.com/channel/UCXrHqywSfUoacvzpduod_8g" rel="noopener"
                                          target="_blank">
                                        <i className="bi bi-youtube fs-2 text-primary"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <hr className={'m-0'}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center pt-5 gap-4">
                            <Link href={'/'}>Kontakt</Link>
                            <Link href={'/impressum/'}>Impressum</Link>
                            <Link href={'/datenschutz/'}>Datenschutz</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Die Farm - Café',
    description: 'Das Café hat das Ziel euch den besten Kaffee mit handgemachten Torten & Kuchen zu servieren.',
}

export default function Cafe() {

    return (
        <>
            <div className={'container'}>
                <div className="mt-4 row justify-content-center">
                    <div className="col-10 px-0 border border-muted rounded-end">
                        <div className="d-flex flex-row align-items-center justify-content-center border-start border-caro border-4 py-3 px-3">
                            <div className="px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                </svg>
                            </div>
                            <h4 className="mb-0">Kartenzahlung ist möglich</h4>                  
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-lg-row mt-5 text-center align-items-center">
                    <div className="col-lg-6 col-12 p-3">
                        <img src="/images/cafe/header/cafe-header.jpg" alt={''} className="img-fluid" />
                    </div>
                    <div className="col-lg-6 col-12 row justify-content-md-center my-md-auto pt-4">
                        <h2>Unser Angebot</h2>
                        <div className="mt-4 text-center col-12">
                            <p>Ob eine gute Tasse Kaffee Crema, eine cremige Café Latte oder einen 
                                kräftigen Espresso. Natürlich bieten wir auch ausgesuchte Tees und 
                                feinste Schokoladengetränke. Besonders unsere Hot Chocolate Delux in 
                                Weiß, Vollmilch oder Zartbitter aus heißer, geschäumter Milch gemischt 
                                mit belgischer Schokolade garniert mit Sahne und Marshmallows ist ein 
                                wahr gewordener Schokoladentraum. 
                            </p>
                            <p>
                                Oder Du lässt Dich von unseren 
                                Jahreszeiten-Specials überraschen, ob Cool Mint Ice Tea oder einer 
                                weihnachtlichen Chai Latte werden wir immer etwas Besonderes im 
                                Angebot haben. 
                            </p>
                            <p>
                                Als Milchalternative haben wir laktosefreie Hafermilch. 
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="text-center my-lg-5">
                    <p>Eine Reservierung ist bei uns nicht möglich.</p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/cafe/cafe-01.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/cafe/cafe-27.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/cafe/cafe-10.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/cafe/cafe-13.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/cafe/cafe-14.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/cafe/cafe-15.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/cafe/cafe-16.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/cafe/cafe-17.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/cafe/cafe-18.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/cafe/cafe-26.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/cafe/cafe-21.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/cafe/cafe-22.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>
                </div>

                <Oeffnungszeiten />
            </div>
            <ContactSection pageName={'Café'} subjects={['Reservierung im Café', 'Menüanfrage']}/>
        </>
    )
}

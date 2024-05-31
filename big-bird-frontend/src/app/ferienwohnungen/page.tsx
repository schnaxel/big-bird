'use client'
import React, {useState} from 'react';
import ContactSection from "@/src/components/ContactSection/ContactSection";
import SliderFewo from "@/src/components/SliderFewo/SliderFewo";
import FewoDetails from "@/src/components/FewoDetails/FewoDetails";
import Link from "next/link";

export default function Ferienwohnungen() {
    const [activeFewo, setActiveFewo] = useState('fewo1');

    const imagesFewo1 = [
        {
            src: '/images/fewos/fewo01-9.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Wohnzimmer'
        },
        {
            src: '/images/fewos/fewo01-5.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Wohnzimmer'
        },
        {
            src: '/images/fewos/fewo01-4.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Voll ausgestattete Küche'
        },
        {
            src: '/images/fewos/fewo01-1.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Essbereich'
        },
        {
            src: '/images/fewos/fewo01-8.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Essbereich'
        },
        {
            src: '/images/fewos/fewo01-3.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Schlafzimmer 1'
        },
        {
            src: '/images/fewos/fewo01-2.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Schlafzimmer 2'
        },
        {
            src: '/images/fewos/fewo01-6.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Wäschebereich'
        },
        {
            src: '/images/fewos/fewo01-7.jpg',
            alt: 'Ferienwohnung Lily',
            description: 'Badezimmer'
        },


    ];
    const imagesFewo2 = [
        {
            src: '/images/placeholder/farm1.jpg',
            alt: 'Ferienwohnung Lova',
            description: 'Ferienwohnung 2'
        },
        {
            src: '/images/placeholder/farm1.jpg',
            alt: 'Ferienwohnung Lova',
            description: 'Ferienwohnung 2'
        },
    ];

    const detailsFewo1 = {
        name: 'Ferienwohnung Lily',
        apartmentSize: '65',
        rooms: '3',
        persons: '4',
        bedrooms: '2',
        highlights: ['kostenlose Parkmöglichkeiten', 'Kinderspielplatz'],
        checkIn: ['Eigenständiger Check-in', 'Checke per Schlüsselbox selbst ein.'],
        bookingLink: 'https://www.airbnb.de/rooms/912202930363128131'
    }

    const detailsFewo2 = {
        name: 'Ferienwohnung Lova',
        apartmentSize: '60',
        rooms: '5',
        persons: '5',
        bedrooms: '4',
        highlights: ['kostenlose Parkmöglichkeiten', 'Kinderspielplatz'],
        checkIn: ['Eigenständiger Check-in', 'Checke per Schlüsselbox selbst ein.'],
        bookingLink: ''
    }

    return (
        <>
            {/*<section className={'py-5'}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center gap-3">
                            <button
                                className={`btn btn-outline-primary ${activeFewo === 'fewo1' ? 'active' : ''}`}
                                onClick={() => setActiveFewo('fewo1')}
                            >
                                {detailsFewo1.name}
                            </button>
                            <button
                                className={`btn btn-outline-primary ${activeFewo === 'fewo2' ? 'active' : ''}`}
                                onClick={() => setActiveFewo('fewo2')}
                            >
                                {detailsFewo2.name}
                            </button>
                        </div>
                    </div>
                </div>
            </section>*/}
            <section className={'pt-4 pb-5'}>
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-12">
                            <h2 className={'fw-medium fs-2 text-center mb-0'}>
                                {activeFewo === 'fewo1' ? detailsFewo1.name : detailsFewo2.name}
                            </h2>
                        </div>
                    </div>
                    <div className="row flex-lg-row-reverse py-4">
                        <div className="col-12 col-lg-6">
                            <FewoDetails detailsFewo={activeFewo === 'fewo1' ? detailsFewo1 : detailsFewo2}/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <SliderFewo images={activeFewo === 'fewo1' ? imagesFewo1 : imagesFewo2}/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 text-center">
                            <Link href={activeFewo === 'fewo1' ? detailsFewo1.bookingLink : detailsFewo2.bookingLink} rel="noopener" target="_blank" className={'btn btn-outline-primary rounded-0'}>
                                Bei Airbnb reservieren
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection subjects={['Verfügbarkeit und Buchung', 'Ausstattung der Ferienwohnung']} pageName={'Ferienwohnung'} activeFewo={activeFewo}/>
        </>
    )
}

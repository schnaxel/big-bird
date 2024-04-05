'use client'
import React, {useState} from 'react';
import ContactSection from "@/src/components/ContactSection/ContactSection";
import SliderFewo from "@/src/components/SliderFewo/SliderFewo";
import FewoDetails from "@/src/components/FewoDetails/FewoDetails";
import Link from "next/link";

export default function Ferienwohnungen() {
    const [activeFewo, setActiveFewo] = useState('fewo1'); // Zustand für die aktive Ferienwohnung

    const imagesFewo1 = [
        {
            src: '/images/placeholder/fewo.jpg',
            alt: 'Ferienwohnung 1',
            description: 'Ferienwohnung 1'
        },
        {
            src: '/images/placeholder/feiern1.jpg',
            alt: 'Ferienwohnung 1',
            description: 'Ferienwohnung 1'
        },
        {
            src: '/images/placeholder/feiern2.jpg',
            alt: 'Ferienwohnung 1',
            description: 'Ferienwohnung 1'
        }
    ];
    const imagesFewo2 = [
        {
            src: '/images/placeholder/farm1.jpg',
            alt: 'Ferienwohnung 2',
            description: 'Ferienwohnung 2'
        },
        {
            src: '/images/placeholder/farm2.jpg',
            alt: 'Ferienwohnung 2',
            description: 'Ferienwohnung 2'
        },
        {
            src: '/images/placeholder/farm3.jpg',
            alt: 'Ferienwohnung 2',
            description: 'Ferienwohnung 2'
        }
    ];

    const detailsFewo1 = {
        name: 'Ferienwohnung Lily',
        apartmentSize: '65',
        rooms: '3',
        persons: '4',
        bedrooms: '2',
        highlights: ['Highlight1', 'Highlight2', 'Highlight3', 'Highlight4'],
        bookingLink: 'https://www.airbnb.de/rooms/912202930363128131?adults=2&check_in=2024-05-01&check_out=2024-05-05&source_impression_id=p3_1688875466_JdNQmqPEVQ3XQJgi&previous_page_section_name=1000&federated_search_id=76ebf474-e5c8-4edd-9bbb-ac9a9ec98aaf'
    }

    const detailsFewo2 = {
        name: 'Ferienwohnung Lova',
        apartmentSize: '60',
        rooms: '5',
        persons: '5',
        bedrooms: '4',
        highlights: ['Highlight1', 'Highlight2', 'Highlight3', 'Highlight4'],
        bookingLink: 'https://www.airbnb.de/rooms/912202930363128131?adults=2&check_in=2024-05-01&check_out=2024-05-05&source_impression_id=p3_1688875466_JdNQmqPEVQ3XQJgi&previous_page_section_name=1000&federated_search_id=76ebf474-e5c8-4edd-9bbb-ac9a9ec98aaf'
    }

    const descriptionFewo1 = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.'
    ];
    const descriptionFewo2 = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis sit amet odio aliquam tincidunt. Nullam nec odio nec nunc ultricies ultricies.'
    ];

    const descriptionFewo = activeFewo === 'fewo1' ? descriptionFewo1 : descriptionFewo2;

    return (
        <>
            <section className={'py-5'}>
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
            </section>
            <section className={'pt-4 pb-5'}>
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-12">
                            <h2 className={'fw-medium text-center mb-0'}>
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
                    <div className="row py-4">
                        <div className="col-12 text-center">
                            <Link href={activeFewo === 'fewo1' ? detailsFewo1.bookingLink : detailsFewo2.bookingLink} rel="noopener" target="_blank" className={'btn btn-lg btn-outline-primary rounded-0'}>
                                Hier Reservieren
                            </Link>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 col-lg-6">
                            <span>{descriptionFewo[0]}</span>
                            <span>{descriptionFewo[1]}</span>
                            <span>{descriptionFewo[2]}</span>
                            <span>{descriptionFewo[3]}</span>
                        </div>
                        <div className="col-12 col-lg-6">
                            <span>{descriptionFewo[4]}</span>
                            <span>{descriptionFewo[5]}</span>
                            <span>{descriptionFewo[6]}</span>
                            <span>{descriptionFewo[7]}</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* Übergeben Sie activeFewo als Props an ContactSection */}
            <ContactSection subjects={['sub1', 'sub2', 'sub3']} pageName={'Ferienwohnung'} activeFewo={activeFewo}/>
        </>
    )
}

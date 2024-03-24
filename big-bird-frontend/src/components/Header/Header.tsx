'use client'
import {usePathname} from 'next/navigation'
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

interface HeaderImage {
    src: string;
    alt: string;
}

interface HeaderImages {
    [key: string]: HeaderImage[];
}

interface HeaderTexts {
    [key: string]: {
        title: string;
        subtitle: string;
        paragraphs: string[];
    };
}


export function Header() {
    const pathname = usePathname()
    const headerImages: HeaderImages = {
        home: [
            {src: 'images/placeholder/farm1.jpg', alt: 'Home 1'},
            {src: 'images/placeholder/farm2.jpg', alt: 'Home 2'},
            {src: 'images/placeholder/farm3.jpg', alt: 'Home 3'},
        ],
        farm: [
            {src: '/images/placeholder/farm4.jpg', alt: 'Farm 1'},
            {src: '/images/placeholder/farm5.jpg', alt: 'Farm 2'},
            {src: '/images/placeholder/farm6.jpg', alt: 'Farm 3'},
        ],
        cafe: [
            {src: '/images/placeholder/farm7.jpg', alt: 'Cafe 1'},
            {src: '/images/placeholder/farm1.jpg', alt: 'Cafe 2'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Cafe 3'},
        ],
        shop: [
            {src: '/images/placeholder/farm-shop.jpg', alt: 'Shop 1'},
            {src: '/images/placeholder/farm4.jpg', alt: 'Shop 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Shop 3'},
        ],
        alterStall: [
            {src: '/images/placeholder/farm5.jpg', alt: 'Alter Stall 1'},
            {src: '/images/placeholder/farm6.jpg', alt: 'Alter Stall 2'},
            {src: '/images/placeholder/farm7.jpg', alt: 'Alter Stall 3'},
        ],
        straussenfleisch: [
            {src: '/images/placeholder/farm6.jpg', alt: 'Straussenfleisch 1'},
            {src: '/images/placeholder/farm5.jpg', alt: 'Straussenfleisch 2'},
            {src: '/images/placeholder/farm4.jpg', alt: 'Straussenfleisch 3'},
        ],
        feiern: [
            {src: '/images/placeholder/feiern1.jpg', alt: 'Feiern 1'},
            {src: '/images/placeholder/feiern2.jpg', alt: 'Feiern 2'},
            {src: '/images/placeholder/feiern3.jpg', alt: 'Feiern 3'},
        ],
        ferienwohnungen: [
            {src: '/images/placeholder/fewo.jpg', alt: 'Ferienwohnungen 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Ferienwohnungen 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Ferienwohnungen 3'},
        ],
    }
    const headerTexts: HeaderTexts = {
        home: {
            title: 'Willkommen auf Big Birds Farm',
            subtitle: 'Unsere Farm bietet Ihnen viele Möglichkeiten',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas',
                'vulputate. Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.',
                'Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.'
            ]
        },
        farm: {
            title: 'Willkommen auf der Farm',
            subtitle: 'Entdecken Sie unsere vielfältige Farm',
            paragraphs: [
                'Herzlich willkommen auf unserer wunderschönen Farm. Hier finden Sie alles, was das Herz begehrt.',
                'Genießen Sie die Natur und erleben Sie unvergessliche Momente mit Ihrer Familie.',
                'Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!'
            ]
        },
        cafe: {
            title: 'Willkommen im Café',
            subtitle: 'Genießen Sie köstliche Speisen und Getränke',
            paragraphs: [
                'Treten Sie ein in unser gemütliches Café und lassen Sie sich von unserer vielfältigen Auswahl an Speisen und Getränken verzaubern.',
                'Unsere freundlichen Mitarbeiter freuen sich darauf, Ihnen eine unvergessliche kulinarische Erfahrung zu bieten.',
                'Entspannen Sie sich und genießen Sie den Moment!'
            ]
        },
        shop: {
            title: 'Willkommen im Shop',
            subtitle: 'Entdecken Sie unser breites Sortiment',
            paragraphs: [
                'Herzlich willkommen in unserem Shop, wo Sie eine große Auswahl an hochwertigen Produkten finden.',
                'Von frischem Obst und Gemüse bis hin zu handgefertigten Produkten - bei uns werden Sie fündig.',
                'Wir stehen Ihnen gerne mit Rat und Tat zur Seite. Schauen Sie sich um und lassen Sie sich inspirieren!'
            ]
        },
        alterStall: {
            title: 'Willkommen im alten Stall',
            subtitle: 'Tauchen Sie ein in die Geschichte',
            paragraphs: [
                'Besuchen Sie unseren alten Stall und entdecken Sie die faszinierende Geschichte unseres Anwesens.',
                'Hier können Sie antike Gegenstände und Relikte vergangener Zeiten bestaunen und mehr über die Traditionen unserer Region erfahren.',
                'Erleben Sie eine Zeitreise in die Vergangenheit und lassen Sie sich von der Magie vergangener Epochen verzaubern.'
            ]
        },
        straussenfleisch: {
            title: 'Willkommen bei Straußenfleisch',
            subtitle: 'Entdecken Sie die Delikatesse aus der Savanne',
            paragraphs: [
                'Treten Sie ein in die Welt des exquisiten Straußenfleischs und erleben Sie einen Gaumenschmaus der besonderen Art.',
                'Unsere hochwertigen Produkte werden nach traditionellen Methoden hergestellt und versprechen ein unvergleichliches Geschmackserlebnis.',
                'Entdecken Sie die Vielfalt der Straußenküche und lassen Sie sich von unseren köstlichen Spezialitäten verwöhnen.'
            ]
        },
        feiern: {
            title: 'Willkommen bei Feiern',
            subtitle: 'Feiern Sie besondere Anlässe bei uns',
            paragraphs: [
                'Planen Sie eine unvergessliche Feier und lassen Sie sich von unserem erfahrenen Team unterstützen.',
                'Ob Hochzeit, Geburtstag oder Firmenfeier - wir bieten Ihnen die perfekte Location für jeden Anlass.',
                'Genießen Sie einen unvergesslichen Tag mit Ihren Liebsten und lassen Sie sich von unserer Gastfreundschaft verwöhnen.'
            ]
        },
        ferienwohnungen: {
            title: 'Willkommen in den Ferienwohnungen',
            subtitle: 'Entspannen Sie sich in unserer idyllischen Umgebung',
            paragraphs: [
                'Verbringen Sie Ihren Urlaub in unseren gemütlichen Ferienwohnungen und genießen Sie die Ruhe und Natur.',
                'Unsere komfortablen Unterkünfte bieten Ihnen alles, was Sie für einen erholsamen Aufenthalt benötigen.',
                'Entdecken Sie die Schönheit unserer Umgebung und erleben Sie unvergessliche Momente inmitten der Natur.'
            ]
        },
    };


    const pageKey = pathname!== '/' ? pathname === '/alter-stall/' ? 'alterStall' : pathname.split('/')[1] : 'home';
    const images = headerImages[pageKey] || [];

    return (
        pathname !== '/impressum/' && pathname !== '/datenschutz/' && (
            <section>
                <div className={'container'}>
                    <div className="row">
                        <div className="col-12 pb-4">
                            <Splide hasTrack={false} aria-label="..."
                                    data-splide='{"type":"loop","perPage":1,"perMove":1,"autoplay":true,"pauseOnFocus":true,"pagination":false}'>
                                <div className="custom-wrapper">
                                    <SplideTrack>
                                        {images.map(({src, alt}, index) => (
                                            <SplideSlide key={index}>
                                                <img src={src} alt={alt}/>
                                            </SplideSlide>
                                        ))}
                                    </SplideTrack>
                                </div>
                            </Splide>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center pt-4">
                                <h1 className={'fw-bold fs-2 mb-3'}>{headerTexts[pageKey]?.title}</h1>
                                <h2 className={'fw-normal fs-3'}>{headerTexts[pageKey]?.subtitle}</h2>
                                <div className={'py-4'}>
                                    {headerTexts[pageKey]?.paragraphs.map((paragraph, index) => (
                                        <p key={index} className={'m-0'}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    );
}
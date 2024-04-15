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
            subtitle: 'Oeffnungszeiten: Freitag bis Sonntag von 11 Uhr bis 17 Uhr',
            paragraphs: [
                'Unsere Strauße könnt ihr nur bei Führungen sehen – ab 13.30 Uhr und 15.30 Uhr. ',
                'Der Spielplatz, Ziegen & Gänse stehen euch gerne zur Verfügung. Größere Gruppen bitte vorher anmelden.',
                'Bei Regen finden die Führungen nur begrenzt bzw. gar nicht statt.',
            ]
        },
        farm: {
            title: 'Die Big Birds Farm',
            subtitle: 'Strauße hautnah erleben',
            paragraphs: [
                'Der ehemalige Kastanienhof aus dem Jahr 1847, in Fahrdorf an der Schlei, wurde in den letzten Jahren in die Big Birds Farm verwandelt.',
                'Die Big Birds Farm umfasst Gehege, Weiden und Wiesen zwischen Haithabu und Fahrdorf, entlang der Schlei,',
                'auf denen unsere Tiere draußen weiden. Direkt auf dem Hof an der B76 findet Ihr unsere',
                'Straußengehege, in denen ihr unsere Tiere während unserer Führungen beobachten und fotografieren könnt.',
            ]
        },
        cafe: {
            title: 'Big Birds Café',
            subtitle: 'Das Big Birds Café hat das Ziel euch den besten Kaffee mit handgemachten Torten & Kuchen zu servieren.',
            paragraphs: [
                'Fair gehandelter und lokal gerösteter Kaffee bezogen über eine Kieler Manufaktur.',
                'Kulinarisch verwöhnen wir euch mit selbstgemachten Torten, Kuchen, Muffins und weiteren Leckereien von',
                'Tante Dani. Unser wechselndes Angebot könnt ihr natürlich jederzeit bei Instagram einsehen.',
                'Selbstverständlich bieten wir euch unsere Kostbarkeiten zum Teil auch vegan und laktosefrei an.'
            ]
        },
        shop: {
            title: 'Big Birds Shop',
            subtitle: 'Integriert in das Big Birds Café ist der Big Birds Shop, unser Hofladen in dem Sie Produkte aus eigener Produktion sowie ausgewählte zugekaufte Produkte finden.',
            paragraphs: [
                'Vom Fleisch unserer Strauße, auf das bereits Hildegard von Bingen schwor, und das Fleisch unserer Highland – bzw. Gallowayrinder, ',
                'über Straußenei-Nudeln und Straußeneierlikör, bis zu pikanten Saucen ist das kulinarische Angebot groß.',
                'Durch die Nähe zu Skandinavien bekommst Du bei uns ausgewählte Lebensmittel und Geschenkideen aus Dänemark und Schweden, wie zum ',
                'Beispiel schwedische Blaubeermarmelade. Du wirst außerdem Produkte rund um das ',
                'Thema Strauß finden, von Straußeneiern, über Federn und Staubwedeln.'
            ]
        },
        alterStall: {
            title: 'Willkommen im alten Stall',
            subtitle: 'Handgefertigte Möbel und Dekorationsideen aus ursprünglichen Materialien.',
            paragraphs: [
                'Besucht unseren alten Stall und entdeckt einzigartige Möbel.',
                'Unsere Möbel erhalten durch die Verarbeitung von Altholz ihren einzigartigen, rustikalen Charakter.',
                '– für Möbel mit Geschichte.'
            ]
        },
        straussenfleisch: {
            title: 'Straußenfleisch von der Big Birds Farm',
            subtitle: 'Entdecke die Delikatesse aus der Savanne',
            paragraphs: [
                'Bei uns findet ihr Filet, Steak, Braten, Wurst und Burger Patties. Alle Straußenfleischprodukte gibt ',
                'es bei uns auf der Farm oder können per Kühlpaket an euch versendet werden.',
                '- probiere die Vielfalt der Straußenküche!'
            ]
        },
        feiern: {
            title: 'Feiern auf der Straußenfarm',
            subtitle: 'Ein besonderer Ort für besondere Anlässe',
            paragraphs: [
                'Unsere Farm bietet eine gemütliche und einzigartige Atmosphäre für dein Fest,',
                'ob Hochzeit, Geburtstag, Weihnachtsessen, Konfirmation, Firmenevent, lockere Party oder stilvolle Feier',
                '– wir beraten Dich gerne und erstellen dir ein individuelles Angebot. '
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
                <div className={'container-fluid'}>
                    <div className="row">
                        <div className="col-12 px-0 pb-4">
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
                                <h1 className={'fw-bold mb-3'}>{headerTexts[pageKey]?.title}</h1>
                                <p className={'fw-normal fs-4'}>{headerTexts[pageKey]?.subtitle}</p>
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
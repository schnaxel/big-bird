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
        ],
        events: [],
        cafe: [
            {src: '/images/cafe/header/cafe-header-2.jpg', alt: 'Cafe 1'},
            {src: '/images/cafe/header/cafe-18.jpg', alt: 'Cafe 2'},
            {src: '/images/cafe/header/cafe-22.jpg', alt: 'Cafe 3'},
        ],
        shop: [
            {src: '/images/placeholder/farm-shop.jpg', alt: 'Shop 1'},
        ],
        alterStall: [],
        feiern: [],
        ferienwohnungen: [],
    }
    const headerTexts: HeaderTexts = {
        home: {
            title: 'Willkommen auf der Farm',
            subtitle: 'Öffnungszeiten: Mittwoch bis Sonntag von 11 bis 17 Uhr</br>Jeden ersten Samstag im Monat Event auf der Farm',
            paragraphs: [
            ]
        },
        events: {
            title: 'Events',
            subtitle: 'Hier findest du alle anstehenden Events und Veranstaltungen auf der Farm',
            paragraphs: [
                'Ob ihr nun Tiere streicheln, Neues lernen oder einfach nur lecker essen und eine gute Zeit haben wollt',
                '- Auf der Farm ist immer was los.',
                'Informiere dich hier über unsere aktuellen Veranstaltungen und plane deinen nächsten Besuch.',
                'Wir freuen uns auf dich!',
            ]
        },
        cafe: {
            title: 'Das Café',
            subtitle: 'Das Café hat das Ziel euch den besten Kaffee mit handgemachten Torten & Kuchen zu servieren.',
            paragraphs: [
                'Fair gehandelter und lokal gerösteter Kaffee bezogen über eine Kieler Manufaktur.',
                'Kulinarisch verwöhnen wir euch mit selbstgemachten Torten, Kuchen, Muffins und weiteren Leckereien.',
                'Unser wechselndes Angebot könnt ihr natürlich jederzeit bei Instagram einsehen.',
                'Selbstverständlich bieten wir euch unsere Kostbarkeiten zum Teil auch vegan und laktosefrei an.'
            ]
        },
        shop: {
            title: 'Shop',
            subtitle: 'Unser Hofladen, in dem Ihr Produkte aus eigener Produktion sowie ausgewählte zugekaufte Produkte findet.',
            paragraphs: [
                'Vom Fleisch unserer Highland – bzw. Gallowayrinder bis zu pikanten Saucen ist das kulinarische Angebot groß.',
                'Durch die Nähe zu Skandinavien bekommst Du bei uns ausgewählte Lebensmittel und Geschenkideen aus Dänemark und Schweden, wie zum ',
                'Beispiel schwedische Blaubeermarmelade.'
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
        feiern: {
            title: 'Feiern auf der Farm',
            subtitle: 'Ein besonderer Ort für besondere Anlässe',
            paragraphs: [
                'Unsere Farm bietet eine gemütliche und einzigartige Atmosphäre für dein Fest,',
                'ob Hochzeit, Geburtstag, Weihnachtsessen, Konfirmation, Firmenevent, lockere Party oder stilvolle Feier',
                '– wir beraten Dich gerne und erstellen dir ein individuelles Angebot. '
            ]
        },
        ferienwohnungen: {
            title: 'Willkommen in den Ferienwohnungen',
            subtitle: 'Entspannt Euch in unserer idyllischen Umgebung',
            paragraphs: [
                'Verbringt Euren Urlaub in unseren gemütlichen Ferienwohnungen und genießt die Ruhe und Natur.',
                'Unsere komfortablen Unterkünfte bieten Euch alles, was Ihr für einen erholsamen Aufenthalt benötigt.',
                'Entdeckt die Schönheit unserer Umgebung und erlebt unvergessliche Momente inmitten der Natur.'
            ]
        },
    };


    const pageKey = pathname !== '/' ? pathname === '/alter-stall/' ? 'alterStall' : pathname.split('/')[1] : 'home';
    const images = headerImages[pageKey] || [];

    return (
        pathname !== '/impressum/' && pathname !== '/datenschutz/' && (
            <section>
                <div className={'container-fluid'} style={{maxWidth: '1296px'}}>
                    <div className="row">
                        <div className="col-12 px-0 pb-4">
                            {images.length > 1 ? (
                                <Splide hasTrack={false} aria-label="..."
                                        data-splide='{"type":"loop","perPage":1,"perMove":1,"autoplay":true,"pauseOnFocus":true,"pagination":false}'
                                >
                                    <div className="custom-wrapper">
                                        <SplideTrack>
                                            {images.map(({src, alt}, index) => (
                                                <SplideSlide key={index}>
                                                    <img src={src} alt={alt}/>
                                                </SplideSlide>
                                            ))
                                            }
                                        </SplideTrack>
                                    </div>
                                </Splide>
                            ) : images.length === 1 ?
                                (
                                    <header className={'w-100'} style={{
                                        height: '70vh',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url(${images[0]?.src})`
                                    }}/>
                                ) :
                                null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center pt-4">
                                <h1 className={'fw-bold fs-1 mb-3'}>{headerTexts[pageKey]?.title}</h1>
                                <p className={'fw-normal fs-4'} dangerouslySetInnerHTML={{ __html: headerTexts[pageKey]?.subtitle }}/>
                                <div className={'py-4'}>
                                    {headerTexts[pageKey]?.paragraphs.map((paragraph, index) => (
                                        <p key={index} className={'m-0'} dangerouslySetInnerHTML={{ __html: paragraph }} />
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
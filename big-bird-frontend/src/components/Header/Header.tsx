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


export function Header() {
    const pathname = usePathname()
    const headerImages: HeaderImages = {
        home: [
            {src: 'images/placeholder/farm1.jpg', alt: 'Home 1'},
            {src: 'images/placeholder/farm2.jpg', alt: 'Home 2'},
            {src: 'images/placeholder/farm3.jpg', alt: 'Home 3'},
        ],
        farm: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Farm 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Farm 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Farm 3'},
        ],
        cafe: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Cafe 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Cafe 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Cafe 3'},
        ],
        shop: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Shop 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Shop 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Shop 3'},
        ],
        alterStall: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Alter Stall 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Alter Stall 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Alter Stall 3'},
        ],
        straussenfleisch: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Straussenfleisch 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Straussenfleisch 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Straussenfleisch 3'},
        ],
        feiern: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Feiern 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Feiern 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Feiern 3'},
        ],
        ferienwohnungen: [
            {src: '/images/placeholder/farm1.jpg', alt: 'Ferienwohnungen 1'},
            {src: '/images/placeholder/farm2.jpg', alt: 'Ferienwohnungen 2'},
            {src: '/images/placeholder/farm3.jpg', alt: 'Ferienwohnungen 3'},
        ],
    }

    const pageKey = pathname!== '/' ? pathname === '/alter-stall/' ? 'alterStall' : pathname.split('/')[1] : 'home';
    const images = headerImages[pageKey] || [];

    return (
        pathname !== '/impressum/' && pathname !== '/datenschutz/' && (
            <section>
                <div className={'container'}>
                    <div className="col-12">
                        <Splide hasTrack={false} aria-label="..." data-splide='{"type":"loop","perPage":1,"perMove":1,"autoplay":true,"pauseOnFocus":true,"pagination":false}'>
                            <div className="custom-wrapper">
                                <SplideTrack>
                                    {images.map(({ src, alt }, index) => (
                                        <SplideSlide key={index}>
                                            <img src={src} alt={alt}/>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </div>
                        </Splide>
                    </div>
                </div>
            </section>
        )
    );
}
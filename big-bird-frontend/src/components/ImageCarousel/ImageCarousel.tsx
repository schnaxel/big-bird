'use client'
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";

interface CarouselImage {
    src: string;
    alt: string;
}

interface CarouselImages {
    [key: string]: CarouselImage[];
}

const ImageCarousel: React.FC<{ pathname: string }> = ({ pathname }) => {
    const carouselImages: CarouselImages = {
        farm: [
            {src: '/images/farm/farm-30.jpg', alt: 'Farm 1'},
            {src: '/images/farm/farm-09.jpg', alt: 'Farm 2'},
            {src: '/images/farm/farm-08.jpg', alt: 'Farm 3'},
            {src: '/images/farm/hund_2.jpg', alt: 'Farm 3'},
            {src: '/images/farm/farm-25.jpg', alt: 'Farm 3'},
            {src: '/images/farm/hund_3.jpg', alt: 'Farm 3'}
        ],
        feiern: [
            {src: '/images/feiern/feiern-06.jpg', alt: 'Feiern 1'},
            {src: '/images/feiern/feiern-09.jpg', alt: 'Feiern 2'},
            {src: '/images/feiern/feiern-05.jpg', alt: 'Feiern 3'}
        ],
        shop: [
            {src: '/images/geschenke/geschenke_01.jpg', alt: 'Hofladen 1'},
            {src: '/images/geschenke/geschenke_15.jpg', alt: 'Hofladen 2'},
            {src: '/images/geschenke/geschenke_05.jpg', alt: 'Hofladen 3'},
            {src: '/images/geschenke/geschenke_06.jpg', alt: 'Hofladen 4'},
            {src: '/images/geschenke/geschenke_16.jpg', alt: 'Hofladen 5'},
            {src: '/images/geschenke/geschenke_09.jpg', alt: 'Hofladen 6'}
        ],
        cafe: [
            {src: '/images/cafe/cafe-27.jpg', alt: 'Cafe 1'},
            {src: '/images/cafe/cafe-10.jpg', alt: 'Cafe 2'},
            {src: '/images/cafe/cafe-13.jpg', alt: 'Cafe 3'},
            {src: '/images/cafe/cafe-14.jpg', alt: 'Cafe 4'},
            {src: '/images/cafe/cafe-15.jpg', alt: 'Cafe 5'},
            {src: '/images/cafe/cafe-16.jpg', alt: 'Cafe 6'},
            {src: '/images/cafe/cafe-17.jpg', alt: 'Cafe 7'},
            {src: '/images/cafe/cafe-18.jpg', alt: 'Cafe 8'},
            {src: '/images/cafe/cafe-26.jpg', alt: 'Cafe 9'},
            {src: '/images/cafe/cafe-21.jpg', alt: 'Cafe 10'},
            {src: '/images/cafe/cafe-22.jpg', alt: 'Cafe 11'}
        ],
    }

    const images = carouselImages[pathname];

    return (
        <Splide hasTrack={false} aria-label="..." options={{gap: 20, padding: '10vw'}}
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
    );
}

export default ImageCarousel;
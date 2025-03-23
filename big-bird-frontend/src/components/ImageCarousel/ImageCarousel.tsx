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
        feiern: [
            {src: '/images/feiern/feiern-06.jpg', alt: 'Feiern 1'},
            {src: '/images/feiern/feiern-09.jpg', alt: 'Feiern 2'},
            {src: '/images/feiern/feiern-05.jpg', alt: 'Feiern 3'}
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
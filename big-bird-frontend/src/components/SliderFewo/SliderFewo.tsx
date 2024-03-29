'use client'
import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';

interface SliderFewoProps {
    images: {
        src: string;
        alt: string;
        description?: string;
    }[];
}

const SliderFewo: React.FC<SliderFewoProps> = ({ images }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePrevImage = () => {
        setSelectedImage((prev) => {
            if (prev === 0 || prev === null) {
                return images.length - 1; // Wenn es kein ausgewähltes Bild gibt, zeige das letzte Bild an
            } else {
                return prev > 0 ? prev - 1 : 0; // Vorheriges Bild oder erstes Bild, wenn es das erste Bild ist
            }
        });
    };

    const handleNextImage = () => {
        setSelectedImage((prev) => {
            if (prev === null) {
                return 0;
            } else {
                return prev < images.length - 1 ? prev + 1 : 0;
            }
        });
    };

    const renderSlides = () => {
        return images.map((image, index) => (
            <Carousel.Item key={index} onClick={() => handleImageClick(index)}>
                <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
        ));
    };

    return (
        <>
            <Carousel
                touch={true}
                indicators={false}
                interval={null}
                activeIndex={selectedImage !== null ? selectedImage : undefined}
                onSelect={(index) => setSelectedImage(index)}
                style={{ cursor: 'pointer'}}
            >
                {renderSlides()}
            </Carousel>

            {/* Modal für das Vollbild */}
            <Modal show={showModal} onHide={handleCloseModal} centered size={"xl"}>
                <Modal.Body>
                    {selectedImage !== null && (
                        <>
                            <img className="img-fluid" src={images[selectedImage].src} alt={images[selectedImage].alt} />
                            <p className={'text-center mt-2'}>{images[selectedImage]?.description}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer className={'d-flex justify-content-between'}>
                    <Button variant="secondary" onClick={handlePrevImage}>
                        <i className="bi bi-caret-left-fill"></i>
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        <i className="bi bi-x-lg"></i>
                    </Button>
                    <Button variant="secondary" onClick={handleNextImage}>
                        <i className="bi bi-caret-right-fill"></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SliderFewo;
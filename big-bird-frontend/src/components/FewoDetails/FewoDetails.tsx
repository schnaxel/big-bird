import React from 'react';

interface FewoDetailsProps {
    detailsFewo: {
        name: string,
        apartmentSize: string,
        rooms: string,
        persons: string,
        bedrooms: string,
        highlights: string[],
        checkIn: string[]
    }
}

const FewoDetails: React.FC<FewoDetailsProps> = ({ detailsFewo}) => {
    return (
        <ul className={'list-group'}>
            <li className={'list-group-item border-0 d-flex mb-3 bg-transparent'}>
                <div style={{width: '3rem', height: '3rem'}}
                     className={'d-flex align-items-center justify-content-center border border-primary border-2 rounded-circle me-3'}
                >
                    <i className="bi bi-person fs-3"></i>
                </div>
                <div className={'d-flex flex-column justify-content-center'}>
                    <p className={'m-0'}>max. {detailsFewo.persons} Personen</p>
                    <p className={'m-0'}>{detailsFewo.bedrooms} Schlafzimmer</p>
                </div>
            </li>
            <li className={'list-group-item border-0 d-flex mb-3 bg-transparent'}>
                <div style={{width: '3rem', height: '3rem'}}
                     className={'d-flex align-items-center justify-content-center border border-primary border-2 rounded-circle me-3'}
                >
                    <i className="bi bi-box fs-3"></i>
                </div>
                <div className={'d-flex flex-column justify-content-center'}>
                    <p className={'m-0'}>{detailsFewo.apartmentSize} m²</p>
                    <p className={'m-0'}>{detailsFewo.rooms} Zimmer</p>
                </div>
            </li>
            <li className={'list-group-item border-0 d-flex mb-3 bg-transparent'}>
                <div style={{width: '3rem', height: '3rem'}}
                     className={'d-flex align-items-center justify-content-center border border-primary border-2 rounded-circle me-3'}
                >
                    <i className="bi bi-star fs-3"></i>
                </div>
                <div className={'d-none d-lg-flex flex-column justify-content-center'}>
                    {detailsFewo.highlights.map((highlight, index) => (
                        <p key={index} className={'mb-1'}>{highlight}</p>
                    ))}
                </div>
                <div className={'d-flex d-lg-none flex-column justify-content-center'}>
                    <p className={'mb-1'}>{detailsFewo.highlights[0]}</p>
                    <p className={'mb-1'}>{detailsFewo.highlights[1]}</p>
                </div>
            </li>
            <li className={'list-group-item border-0 d-flex mb-3 bg-transparent'}>
                <div style={{width: '3rem', height: '3rem'}}
                     className={'d-flex align-items-center justify-content-center border border-primary border-2 rounded-circle me-3'}
                >
                    <i className="bi bi-door-open fs-3"></i>
                </div>
                <div className={'d-none d-lg-flex flex-column justify-content-center'}>
                    {detailsFewo.checkIn.map((checkin, index) => (
                        <p key={index} className={'mb-1'}>{checkin}</p>
                    ))}
                </div>
                <div className={'d-flex d-lg-none flex-column justify-content-center'}>
                    <p className={'mb-1'}>{detailsFewo.checkIn[0]}</p>
                    <p className={'mb-1'}>{detailsFewo.checkIn[1]}</p>
                </div>
            </li>
        </ul>

    );
};

export default FewoDetails;
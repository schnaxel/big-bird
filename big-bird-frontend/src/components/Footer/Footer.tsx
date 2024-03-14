import React from 'react';
import Link from "next/link";

const contact = {
    name: 'Max Mustermann',
    street: 'Musterstraße 123',
    city: '12345 Musterstadt',
    email: 'max@mustermann.com'
}

const Footer: React.FC = () => {
    return (
            <footer>
                <div  className={'container py-5'}>
                    <div className={'row'}>
                        <div className="col-4">
                            <h3 className={'mb-4'}>Kontakt</h3>
                            <p className={''}>
                                {contact.name}
                            </p>
                            <p>
                                {contact.street}
                            </p>
                            <p>
                                {contact.city}
                            </p>
                            <p className={'mb-5'}>
                                <a href={'mailto:' + contact.email} className={'hoverLink'}>{contact.email}</a>
                            </p>
                            <Link href={'/impressum'} className={'me-2'}>Impressum</Link>
                            <span>|</span>
                            <Link href={'/datenschutz'} className={'ms-2'}>Datenschutz</Link>
                        </div>
                        <div className="col-8">
                            <h3 className={'mb-4'}>Über uns</h3>
                            <p>Fashion axe mukbang neutral milk hotel, occupy post-ironic polaroid whatever. Readymade adaptogen salvia hot chicken cray literally pitchfork truffaut slow-carb raw denim +1. Hammock typewriter small batch man braid. Portland whatever yuccie yes plz iceland. Jawn tbh snackwave tonx 3 wolf moon, activated charcoal whatever gorpcore tilde selfies twee farm-to-table four dollar toast. Roof party bodega boys chia unicorn try-hard hashtag flannel af. Slow-carb street art plaid everyday carry cloud bread mukbang fit, hell of trust fund. (SEO-Text)</p>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from "next/link";

function OffCanvasMenu(props: { navigationItems: { href: string, label: string }[], pathname: string }): JSX.Element {
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <>
            <Button variant="secondary" onClick={handleToggle} className={'pe-0 border-0'} style={{backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>
                <i className="bi bi-list fs-2 text-primary"></i>
            </Button>
            <Offcanvas show={show} onHide={handleToggle} placement={'top'} style={{height: '100vh', backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>

                <Offcanvas.Header onClick={handleToggle} closeButton>
                    Menü schließen
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav">
                        {props.navigationItems.map(({href, label}, index) => (
                            <li key={index} className={'nav-item'}>
                                <Link href={href}
                                      scroll={false}
                                      onClick={handleToggle}
                                      className={`nav-link text-nowrap fs-4 border-bottom text-primary ${props.pathname === href ? 'text-black fw-medium border-2 border-black' : ''}`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasMenu;
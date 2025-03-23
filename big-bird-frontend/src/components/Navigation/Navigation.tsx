'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import NavigationOffcanvas from "@/src/components/Navigation/NavigationOffcanvas";

export function Navigation() {
    const pathname = usePathname()
    const navigationItems = [
        {href: '/about/', label: 'Über uns'},
        {href: '/farm/', label: 'Die Farm'},
        {href: '/cafe/', label: 'Café'},
        {href: '/shop/', label: 'Hofladen'},
        {href: '/feiern/', label: 'Feiern'},
        {href: '/ferienwohnungen/', label: 'Ferienwohnungen'}
    ]
    return (
        <>
            {/* Navigation Desktop */}
            <nav className={"navbar navbar-expand bg-beige user-select-none p-0 d-none d-xxl-flex flex-column"}>
                <div className='w-100 py-2' style={{backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>
                    <div className='container d-flex justify-content-between align-items-center'>
                        <div>
                            <span className='me-3'>WhatsApp: +49</span>
                            <Link href="/">E-Mail: XXX</Link>
                        </div>
                        <Link href='/kontakt/'>Kontakt</Link>
                    </div>
                </div>
                <div className={'container align-items-center justify-content-center position-relative py-2'}>
                    <div className="d-flex justify-content-end" style={{width: '40%'}}>
                        <ul className="navbar-nav">
                            {navigationItems.slice(0, 4).map(({href, label}, index) => (
                                <li key={index} className={'nav-item'}>
                                    <Link href={href}
                                        scroll={false}
                                        style={{fontSize: '20px'}}
                                        className={`nav-link text-nowrap text-primary p-0 m-3 ${pathname === href ? 'text-black fw-medium border-bottom border-3 border-black' : ''}`}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href={'/'} scroll={false} className={'navbar-brand position-relative px-3 mx-0'} style={{ marginTop: '-50px', marginBottom: '-40px', zIndex: 10 }}>
                        <img src="/images/logo_draft.png" alt="Logo" height={'149px'} draggable={"false"}/>
                    </Link>
                    <div className="d-flex justify-content-start" style={{width: '40%'}}>
                        <ul className="navbar-nav d-flex flex-row align-items-center">
                            {navigationItems.slice(-2).map(({href, label}, index) => (
                                <li key={index} className={'nav-item'}>
                                    <Link href={href}
                                        scroll={false}
                                        style={{fontSize: '20px'}}
                                        className={`nav-link text-nowrap text-primary p-0 m-3 ${pathname === href ? 'text-black fw-medium border-bottom border-3 border-black' : ''}`}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li className="nav-item">
                                <Link href="/events/" className="btn btn-custom m-3" style={{fontSize: '19px'}}>
                                    Events
                                </Link>   
                            </li>
                        </ul>   
                    </div>          
                </div>
            </nav>

            {/* Navigation Mobil */}
            <nav className="navbar d-xxl-none user-select-none bg-secondary" style={{backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>
                <div className="container">
                    <Link href={'/'} scroll={false} className={'navbar-brand'}>
                        <img src="/images/logo.JPG" alt="Logo" height={'89px'}
                             className={"d-inline-block align-text-top"} draggable={"false"}/>
                    </Link>
                    <NavigationOffcanvas navigationItems={navigationItems} pathname={pathname}/>
                </div>
            </nav>
        </>
    )
}
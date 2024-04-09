'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import NavigationOffcanvas from "@/src/components/Navigation/NavigationOffcanvas";

export function Navigation() {
    const pathname = usePathname()
    const navigationItems = [
        {href: '/', label: 'Home'},
        {href: '/farm/', label: 'Farm'},
        {href: '/cafe/', label: 'Café'},
        {href: '/shop/', label: 'Shop'},
        {href: '/alter-stall/', label: 'Alter Stall'},
        {href: '/straussenfleisch/', label: 'Straußenfleisch'},
        {href: '/feiern/', label: 'Feiern'},
        {href: '/ferienwohnungen/', label: 'Ferienwohnungen'}
    ]
    return (
        <>
            {/* Navigation Desktop */}
            <nav className={"navbar navbar-expand user-select-none p-0 d-none d-lg-flex"} style={{backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>
                <div className={'container py-3 align-items-center justify-content-start'}>
                    <Link href={'/'} scroll={false} className={'navbar-brand'}>
                        <img src="/images/bigbirds_logo.png" alt="Logo Big Birds" height={'89px'}
                             className={"d-inline-block align-text-top"} draggable={"false"}/>
                    </Link>
                    <ul className="navbar-nav">
                        {navigationItems.map(({href, label}, index) => (
                            <li key={index} className={'nav-item'}>
                                <Link href={href}
                                      scroll={false}
                                      className={`nav-link text-nowrap fs-4 text-primary p-0 m-2 ${pathname === href ? 'text-black fw-medium border-bottom border-3 border-black' : ''}`}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Navigation Mobil */}
            <nav className="navbar d-lg-none user-select-none bg-secondary" style={{backgroundImage: 'url("/images/bg-repeat.jpg")', backgroundRepeat: 'repeat'}}>
                <div className="container">
                    <Link href={'/'} scroll={false} className={'navbar-brand'}>
                        <img src="/images/bigbirds_logo.png" alt="Logo Big Birds" height={'89px'}
                             className={"d-inline-block align-text-top"} draggable={"false"}/>
                    </Link>
                    <NavigationOffcanvas navigationItems={navigationItems} pathname={pathname}/>
                </div>
            </nav>
        </>
    )
}
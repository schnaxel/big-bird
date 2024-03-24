'use client'
import Link from 'next/link'

export function NavigationDesktop() {
    return (
            <nav className="navbar container-fluid d-none d-md-flex py-3 px-4 user-select-none">
                <Link href={'/'} className={'navbar-brand'}>
                    <img src="/images/logo.jpg" alt="Big-Bird" height={'100px'} className="d-inline-block align-text-top" draggable={"false"}/>
                </Link>
                <div className={'text-center'}>
                    <Link href={'/'}>
                        <h1 className="fs-2 mb-0">Big-Bird</h1>
                    </Link>
                </div>
            </nav>
    )
}
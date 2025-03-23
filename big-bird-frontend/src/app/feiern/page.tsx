import React from "react";
import {Metadata} from "next";
import ImageCarousel from "@/src/components/ImageCarousel/ImageCarousel";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Feiern',
    description: 'Ein besonderer Ort für besondere Anlässe - Unsere Farm bietet eine gemütliche und einzigartige Atmosphäre für dein Fest, ob Hochzeit, Geburtstag, Weihnachtsessen, Konfirmation, Firmenevent, lockere Party oder stilvolle Feier – wir beraten Dich gerne und erstellen dir ein individuelles Angebot.',
}

export default function Feiern() {
    
    return (
        <>
            <div className={'container'}>
                <div className="text-center mb-5">
                    <p>Schreib uns gerne über das Kontaktformular an.</p>
                </div>

                <div className="row py-5 justify-content-center text-center">
                    <div className="col-3 vertical-line py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                        <h3 className="mt-2">Moderne Technik</h3>
                    </div>
                    <div className="col-3 vertical-line py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                        <h3 className="mt-2">Bis 50 Personen</h3>
                    </div>
                    <div className="col-3 vertical-line py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                        <h3 className="mt-2">Kostenfreie Parkplätze</h3>
                    </div>
                    <div className="col-3 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                        </svg>
                        <h3 className="mt-2">Individuelles Angebot</h3>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-6">
                        <img src="/images/feiern/feiern-06.jpg" alt="Feiern auf der Farm" className="w-100" style={{objectFit: "cover", height: 450}} />
                    </div>
                    <div className="col-6 p-5">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-6 p-5">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-6">
                        <img src="/images/feiern/feiern-09.jpg" alt="Feiern auf der Farm" className="w-100" style={{objectFit: "cover", height: 450}} />
                    </div>
                </div>
            </div>

            <ImageCarousel pathname="feiern" />
        </>
    )
}

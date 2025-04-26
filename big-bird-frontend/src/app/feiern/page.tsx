import ContactSection from "@/src/components/ContactSection/ContactSection";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Die Farm - Feiern',
    description: 'Ein besonderer Ort für besondere Anlässe - Unsere Farm bietet eine gemütliche und einzigartige Atmosphäre für dein Fest, ob Hochzeit, Geburtstag, Weihnachtsessen, Konfirmation, Firmenevent, lockere Party oder stilvolle Feier – wir beraten Dich gerne und erstellen dir ein individuelles Angebot.',
}

export default function Datenschutz() {
    return (
        <>
            <div className={'container'}>
                <div className="text-center">
                    <p>Schreib uns gerne über das Kontaktformular an.</p>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/feiern/feiern-01.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/feiern/feiern-02.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/feiern/feiern-03.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/feiern/feiern-04.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/feiern/feiern-05.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/feiern/feiern-06.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/feiern/feiern-07.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/feiern/feiern-08.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/feiern/feiern-09.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/feiern/feiern-10.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/feiern/feiern-11.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/feiern/feiern-12.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                </div>
            </div>
            <ContactSection pageName={'Feiern'} subjects={['Eventplanung und -organisation', 'Betriebsausflug']}/>
        </>
    )
}

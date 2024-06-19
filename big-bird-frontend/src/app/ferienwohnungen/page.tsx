import React from 'react';
import ContactSection from "@/src/components/ContactSection/ContactSection";
import {Metadata} from "next";
import FewoSection from "@/src/components/FewoSection/FewoSection";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Ferienwohnungen',
    description: 'Verbringt Euren Urlaub in unseren gemütlichen Ferienwohnungen und genießt die Ruhe und Natur. Unsere komfortablen Unterkünfte bieten Euch alles, was Ihr für einen erholsamen Aufenthalt benötigt. Entdeckt die Schönheit unserer Umgebung und erlebt unvergessliche Momente inmitten der Natur.',
}

export default function Ferienwohnungen() {

    return (
        <>
            <FewoSection />
        </>
    )
}

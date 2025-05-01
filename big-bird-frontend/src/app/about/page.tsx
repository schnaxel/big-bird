import ContactSection from "@/src/components/ContactSection/ContactSection";
import Oeffnungszeiten from "@/src/components/Oeffnungszeiten/Oeffnungszeiten";
import React from "react";
import {Metadata} from "next";
import { Badge } from "react-bootstrap";

export const metadata: Metadata = {
    title: 'Big Birds Farm - Wer wir sind',
    description: '',
}

const teamMembers = [
    {
        name: 'Jens',
        role: 'Gründer & Herz der Farm',
        image: '/images/farm/hund_2.jpg',
        description: 'Immer unterwegs zwischen Gehege, Backhaus und Büro. Jens kennt jeden Winkel der Farm.',
    },
    {
        name: 'Barnd',
        role: 'Gründer & Kreativdirektor',
        image: '/images/farm/hund_2.jpg',
        description: 'Gestaltet Atmosphäre, Shop-Design & Kundenbeziehungen mit Liebe zum Detail.',
    },
];
  
const crewMembers = [
    {
        name: 'Test',
        role: 'Leitung Shop',
        image: '/images/farm/hund_2.jpg',
        group: 'Shop',
    },
    {
        name: 'Test',
        role: 'Tiere & Führungen',
        image: '/images/farm/hund_2.jpg',
        group: 'Tiere',
    },
    {
        name: 'Test',
        role: 'Café',
        image: '/images/farm/hund_2.jpg',
        group: 'Café',
    }
];

export default function About() {
    return (
        <div className="container pb-4">
            <div className="row justify-content-center mb-5">
                {teamMembers.map((person, index) => (
                    <div className="col-md-4 col-12 text-center mb-4 px-4" key={index}>
                        <img
                            src={person.image}
                            alt={person.name}
                            className="rounded-circle mb-3"
                            style={{ width: '300px', height: '300px', objectFit: 'cover', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
                        />
                        <h3 className="mb-1">{person.name}</h3>
                        <p className="mb-2">{person.role}</p>
                        <p className="text-muted small">{person.description}</p>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <h2 className="text-center mb-4">Unsere Crew</h2>
                <div className="row g-4 justify-content-center">
                {crewMembers.map((person, index) => (
                        <div className="col-md-3 col-sm-6 col-12 text-center" key={index}>
                            <img
                                src={person.image}
                                alt={person.name}
                                className="rounded-circle mb-3"
                                style={{ width: '240px', height: '240px', objectFit: 'cover', boxShadow: '0 0 8px rgba(0,0,0,0.08)' }}
                            />
                            <h3 className="mb-1">{person.name}</h3>
                            <p className="text-muted small mb-1">{person.role}</p>
                            {/*
                            <Badge className="bg-green">{person.group}</Badge>
                            */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

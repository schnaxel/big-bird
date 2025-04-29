'use client'
import React from 'react';
import {useForm, ValidationError} from '@formspree/react';

const ContactForm: React.FC<{ pageName: string, subjects: string[], activeFewo?: string }> = ({ pageName, subjects, activeFewo }) => {
    const [state, handleSubmit] = useForm("mnqeknwn");
    if (state.succeeded) {
        return (
            <div className="alert alert-secondary d-flex flex-column align-items-center mb-1 mt-4" role="alert">
                <h4 className="alert-heading">Vielen Dank für die Anfrage</h4>
                <p className={'pb-2'}>Wir werden uns umgehend melden.</p>
                <button type={'button'} className={'btn btn-outline-primary'} onClick={() => {
                    window.location.reload()
                }}>Weitere Nachricht
                </button>
            </div>

        );
    }
    if (state.errors) {
        return (
            <div className="alert alert-secondary d-flex flex-column align-items-center mb-1 mt-4" role="alert">
                <h4 className="alert-heading">Etwas ist schiefgegangen</h4>
                <p className={'mb-0'}>Bitte erneut versuchen oder eine Mail an:</p>
                <a href="mailto:info@big-birds.de" className={'pb-3 text-muted'}>info@big-birds.de</a>
                <button type={'button'} className={'btn btn-outline-primary'} onClick={() => {
                    window.location.reload()
                }}>Erneut versuchen
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} id="contact" className="row g-4">

            {/* Hidden Field */}
            <input type="hidden" name="Seite" value={pageName + (activeFewo ? ' - ' + activeFewo : '')} />

            {/* Name */}
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input
                    id="name"
                    type="text"
                    name="Name"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Vor- und Nachname *"
                    required
                    />
                    <label htmlFor="name">Vor- und Nachname *</label>
                </div>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email */}
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input
                    id="email"
                    type="email"
                    name="E-Mail Adresse"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="E-Mail Adresse *"
                    required
                    />
                    <label htmlFor="email">E-Mail Adresse *</label>
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Phone */}
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <input
                    id="phone"
                    type="tel"
                    name="Telefonnummer"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Telefonnummer *"
                    required
                    />
                    <label htmlFor="phone">Telefonnummer *</label>
                </div>
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            {/* Subject */}
            <div className="col-12 col-md-6">
                <div className="form-floating">
                    <select
                    id="subject"
                    name="Betreff"
                    className="form-select rounded-3 shadow-sm"
                    required
                    >
                    {subjects.map((subject, index) => (
                        <option key={index} value={subject}>{subject}</option>
                    ))}
                    </select>
                    <label htmlFor="subject">Betreff *</label>
                </div>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            {/* Message */}
            <div className="col-12">
                <div className="form-floating">
                    <textarea
                    id="message"
                    name="Anfrage"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Deine Nachricht *"
                    style={{ height: "200px" }}
                    required
                    ></textarea>
                    <label htmlFor="message">Deine Nachricht *</label>
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center pt-2">
                <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 shadow-sm"
                    disabled={state.submitting}
                >
                    Anfrage abschicken
                </button>
            </div>
        </form>

    );
}

export default ContactForm;
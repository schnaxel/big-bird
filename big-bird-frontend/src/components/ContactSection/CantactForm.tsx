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
        <form onSubmit={handleSubmit} className={''} id={'contact'}>
            <div className="row">
                <div className={'d-flex flex-column mb-3 col-12 col-md-6 pt-4'}>
                    <input
                        id="page"
                        type="hidden"
                        name="Seite"
                        value={pageName + (activeFewo ? ' - ' + activeFewo : '')}
                        required={true}
                    />
                    <input
                        id="name"
                        className={'form-control rounded-0 bg-secondary bg-opacity-33'}
                        //style={{backgroundImage: "url('/images/bg-repeat.jpg')", backgroundRepeat: 'repeat'}}
                        type="text"
                        name="Name"
                        placeholder={'Vor- und Nachname *'}
                        required={true}
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className={'d-flex flex-column mb-3 col-12 col-md-6 pt-md-4'}>
                    <input
                        id="email"
                        className={'form-control rounded-0 bg-secondary bg-opacity-33'}
                        //style={{backgroundImage: "url('/images/bg-repeat.jpg')", backgroundRepeat: 'repeat'}}
                        type="email"
                        name="E-Mail Adresse"
                        placeholder={'E-Mail Adresse *'}
                        required={true}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="row">
                <div className={'d-flex flex-column mb-3 col-12 col-md-6'}>
                    <input
                        id="phone"
                        className={'form-control rounded-0 bg-secondary bg-opacity-33'}
                        //style={{backgroundImage: "url('/images/bg-repeat.jpg')", backgroundRepeat: 'repeat'}}

                        type="tel"
                        name="Telefonnummer"
                        placeholder={'Telefonnummer*'}
                        required={true}
                    />
                    <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                    />
                </div>
                <div className={'d-flex flex-column mb-3 col-12 col-md-6'}>
                    <select id="subject"
                            name="Betreff"
                            className={'form-select rounded-0 bg-secondary bg-opacity-33'}
                            //style={{backgroundImage: "url('/images/bg-repeat.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'auto'}}
                            required={true}
                    >
                        {subjects.map((subject, index) => (
                            <option key={index} value={subject}>{subject}</option>
                        ))}
                    </select>
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="row">
                <div className={'d-flex flex-column pb-4 col-12'}>
                    <textarea
                        id="message"
                        className={'form-control rounded-0 bg-secondary bg-opacity-33'}
                        //style={{backgroundImage: "url('/images/bg-repeat.jpg')", backgroundRepeat: 'repeat', resize: 'none'}}
                        name="Anfrage"
                        placeholder={'Nachricht *'}
                        rows={5}
                        required={true}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12 pb-1 d-flex justify-content-center">
                    <button type="submit"
                            className={'btn btn-outline-primary rounded-0 align-self-center'}
                            disabled={state.submitting}>
                        Anfrage abschicken
                    </button>
                </div>
            </div>
        </form>

    );
}

export default ContactForm;
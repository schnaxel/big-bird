export function Oeffnungszeiten() {
    return (
        <section className="mt-4 p-4 bg-primary bg-opacity-10">
            <div className="row text-center text-muted mt-4">
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center flex-column px-4 opening-border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    <h2 className="pt-2">Öffnungszeiten</h2>
                </div>
                <hr className="d-md-none"/>
                <div className="col-12 col-md-8 px-4">
                    <h3>Café und Shop</h3>
                    <p className="mt-3 mb-4">Mittwoch bis Sonntag von 11 bis 17 Uhr</p>
                </div>
            </div>
        </section>
    );
}

export default Oeffnungszeiten;
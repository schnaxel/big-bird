export function Oeffnungszeiten() {
    return (
        <section className="mt-4 p-4 bg-primary bg-opacity-10">
            <div className="row text-center text-muted mt-4">
                <div className="col-4 px-4  border-end border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    <h2 className="pt-2">Öffnungszeiten</h2>
                </div>
                <div className="col-4 px-4 border-end border-primary">
                    <h3>Café und Shop</h3>
                    <p className="mt-3 mb-1">Freitag bis Sonntag</p>
                    <p>11 Uhr bis 17 Uhr</p>
                </div>
                <div className="col-4 px-4">
                    <h3>Führungen</h3>
                    <p className="mt-3 mb-1">Ab 13.30 Uhr und ab 15.30 Uhr</p>
                    <p>
                        Bei Regen finden die Führungen nur begrenzt bzw. gar nicht statt.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Oeffnungszeiten;
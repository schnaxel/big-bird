export function Oeffnungszeiten() {
    return (
        <section className="mt-4 p-4 bg-primary bg-opacity-10">
            <div className="text-center">
                <h2>Öffnungszeiten</h2>
            </div>
            <div className="row text-center text-muted mt-4">
                <div className="col-6 px-4 border-end border-primary">
                    <h3>Café und Shop</h3>
                    <p className="mt-3 mb-1">Freitag bis Sonntag</p>
                    <p>11 Uhr bis 17 Uhr</p>
                </div>
                <div className="col-6 px-4">
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
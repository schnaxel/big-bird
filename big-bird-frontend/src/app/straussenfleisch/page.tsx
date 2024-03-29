export default function Straussenfleisch() {
  return (
    <div className={'container text-center'}>
      <button type="button" className="btn border border-black fw-bold bg-white">
        <a href="https://mocfor.com">zum Straußenfleisch Shop</a>
      </button>
      <div className="text-center my-5">
        <p>
          Unser Straußenfleisch schmeckt nicht nur sehr gut, sondern ist auch gesund! 
          Es ist fett- und cholesterinarm. Grundsätzlich kann Straußenfleisch wie 
          Rindfleisch zubereitet werden. Es verbindet die Vielseitigkeit und den 
          Geschmack des roten Fleisches mit den positiven Nährwerteigenschaften des 
          weißen Fleisches.
        </p>
        <p>
          Mit einem Fettgehalt von rund 1% ist Straußenfleisch äußerst mager und 
          cholesterinarm (unter 60 mg/100 g) eine ideale Alternative für 
          Gesundheitsbewusste.
        </p>
      </div>

      <div className="row my-5 text-center">
        <div className="col-md-6 col-12">
          <img src="/images/placeholder/straußenfleisch-steak.jpg" className="img-fluid"></img>
        </div>
        <div className="col-md-6 col-12 row justify-content-md-center my-md-auto mt-5">
          <h3>Unser Fleisch ist ideal für:</h3>
          <div className="mt-4 text-start col-12 col-md-10">
            <ul>
              <li>Nahrungsmittelallergiker</li>
              <li>sportliche Menschen</li>
              <li>Diät bei Gewichtsproblemen</li>
              <li>hoher Cholesterinspiegel</li>
              <li>Bluthochdruck und koronaren Herzerkrankungen</li>
              <li>und selbstverständlich für jeden Gourmet & Griller.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-6 col-12 my-md-auto mt-5 mb-0 order-2 order-md-1">
          <h2>Garzeiten</h2>
          <div className="mt-4">
            <p>
              Die Garzeiten sind bei Straußenfleisch durchschnittlich um ein Drittel 
              kürzer als bei einem entsprechenden Stück Rindfleisch. In Vakuum 
              verpackt ist Straußenfleisch bei sachgerechter Lagerung (unter 4°C) 
              und eingehaltener Kühlkette vier Wochen haltbar – je länger es gelagert 
              wird, desto zarter wird das Fleisch vom Strauß.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 order-1 order-md-2">
          <img src="/images/placeholder/straußenfleisch-filet.jpg" className="img-fluid"></img>
        </div>
      </div>

      <div className="text-center my-md-5 my-0">
        <div className="my-5">
          <p>
            Unser Straußenfleischwird frisch & vakuumiert verpackt. Das frische 
            Straußenfleisch wird immer in einer Styroporkiste mit Trockeneis versendet! 
          </p>
          <p>Schreibt uns gerne für eine Bestellung an</p>
          <h4>
            <a href="mailto:info@big-birds.de" target="_blank">info@big-birds.de</a>
          </h4>
          <p>Oder schaut im Shop vorbei</p>
          <button type="button" className="btn border border-black fw-bold bg-white">
            <a href="https://mocfor.com">zum Straußenfleisch Shop</a>
          </button>
        </div>
        <p>Selbstverständlich bieten wir auch Hundefutter an.</p>
      </div>
    </div>
  )
}

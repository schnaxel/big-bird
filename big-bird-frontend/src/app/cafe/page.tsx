export default function Cafe() {
  return (
    <div className={'container'}>
      <div className="row my-5 text-center">
        <div className="col-md-6 col-12">
          <img src="/images/placeholder/farm6.jpg" className="img-fluid"></img>
        </div>
        <div className="col-md-6 col-12 row justify-content-md-center my-md-auto mt-5">
          <h2>Eine Auswahl aus dem Angebot</h2>
          <div className="mt-4 text-start col-12 col-md-10">
            <ul>
              <li>Farmtorte</li>
              <li>Straußenlikörtorte</li>
              <li>Donauwelle</li>
              <li>Kaffee Crema, Café Latte und Espresso</li>
              <li>ausgesuchte Tees</li>
              <li>feinste Schokoladengetränke</li>
            </ul>
          </div>
          <div className="mt-3">
            <h3>Jahreszeiten-Specials</h3>
            <p>Ob Cool Mint Ice Tea oder einer weihnachtlichen Chai Latte - wir haben auch immer etwas Besonderes im Angebot</p>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <p>Als Milchalternative haben wir laktosefreie Hafermilch.</p>
        <p>Kartenzahlung ist möglich.</p>
        <p>Eine Reservierung ist bei uns nicht möglich.</p>
      </div>
    </div>
  )
}

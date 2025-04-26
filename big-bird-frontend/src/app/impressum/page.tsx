import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Die Farm - Impressum',
}
export default function Impessum() {
  return (
    <div className={'container'}>
      <h1 className={''}>Impressum</h1>
      <p className="m-0">Straußenpark Nord GmbH</p>
      <p className="m-0">Bundesstr. 7 </p>
      <p className="m-0">24857 Fahrdorf</p>
      <p className="m-0">Mail: info@big-birds.de</p>
      <p>Tel: Nur per Mail erreichbar</p>

      <p>Geschäftsführer: Jens Lohmann</p>

      <h3>Rechtliche Hinweise zur Webseite</h3>
      <p>
        Alle Texte, Bilder und weitere hier veröffentlichten Informationen unterliegen dem Urheberrecht des Seitenbetreibers. 
        Eine Vervielfältigung, Verbreitung oder öffentliche Wiedergabe ist ausschließlich im Falle einer widerruflichen und nicht 
        übertragbaren Zustimmung des Seitenbetreibers gestattet. 
      </p>
      <p>
        Linksetzungen, welche auf die Inhalte der vorliegenden Website verweisen, bedürfen der Zustimmung des Seitenbetreibers. 
        Eine solche Zustimmung ist bei jeder grundlegenden Veränderung des Webseiteninhaltes neu zu beantragen, sie kann jederzeit 
        formlos widerrufen werden. Eine Verlinkung auf  illegale, anstößige, irreführende, diffamierende oder nicht jugendfreie 
        Inhalte ist in jedem Fall ausgeschlossen. 
      </p>
      <p>
        Die Inhalte unserer Webseite werden mit größter Sorgfalt erstellt. Dennoch kann keine Garantie für Aktualität und 
        Vollständigkeit übernommen werden.
      </p>
      <p>
        Für alle mittels Querverweis (Link) verbundene Webinhalte übernimmt der Seitenbetreiber keine Verantwortung, da es sich 
        dabei um keine eigenen Inhalte handelt. Externe Links wurden auf rechtswidrige Inhalte überprüft, zum jeweiligen Zeitpunkt 
        waren solche nicht erkennbar. Bezüglich fremder Inhalte besteht jedoch keine allgemeine Überwachungs- und Prüfungspflicht. 
      </p>
    </div>
  )
}

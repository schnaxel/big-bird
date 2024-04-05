import ContactSection from "@/src/components/ContactSection/ContactSection";

export default function Datenschutz() {
    return (
        <>

            <div className={'container'}>
                <div className="text-center">
                    <p>Schreib uns gerne an</p>
                    <h4>
                        <a href="mailto:info@big-birds.de" target="_blank">info@big-birds.de</a>
                    </h4>
                </div>
            </div>
            <ContactSection pageName={'Feiern'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

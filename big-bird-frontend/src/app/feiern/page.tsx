import ContactSection from "@/src/components/ContactSection/ContactSection";

export default function Datenschutz() {
    return (
        <>

            <div className={'container'}>
                <div className="text-center">
                    <p>Schreib uns gerne über das Kontaktformular an.</p>
                </div>
            </div>
            <ContactSection pageName={'Feiern'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

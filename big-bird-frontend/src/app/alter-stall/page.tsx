import ContactSection from "@/src/components/ContactSection/ContactSection";

export default function AlterStall() {
    return (
        <>

            <div className={'container text-center'}>
                <button type="button" className="btn border border-black fw-bold bg-white">
                    <a href="https://mocfor.com">zum MOCFOR Shop</a>
                </button>
            </div>
            <ContactSection pageName={'Alter Stall'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

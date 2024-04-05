import ContactSection from "@/src/components/ContactSection/ContactSection";
import Link from "next/link";

export default function AlterStall() {
    return (
        <>

            <div className={'container text-center'}>
                <Link href="https://mocfor.com" className="btn btn-outline-primary">
                    zum MOCFOR Shop
                </Link>
            </div>
            <ContactSection pageName={'Alter Stall'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

import ContactSection from "@/src/components/ContactSection/ContactSection";
import Link from "next/link";

export default function AlterStall() {
    return (
        <>

            <div className={'container text-center'}>
                <Link href="https://mocfor.com" className="btn btn-outline-primary">
                    zum MOCFOR Shop
                </Link>

                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/alterStall/alterStall-01.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/alterStall/alterStall-02.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/alterStall/alterStall-03.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/alterStall/alterStall-04.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/alterStall/alterStall-05.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/alterStall/alterStall-06.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/alterStall/alterStall-07.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/alterStall/alterStall-08.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                        <img
                            src="/images/alterStall/alterStall-09.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                        <img
                            src="/images/alterStall/alterStall-10.jpg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/alterStall/alterStall-11.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />

                        <img
                            src="/images/alterStall/alterStall-12.jpeg"
                            className="w-100 shadow-1-strong mb-4"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <ContactSection pageName={'Alter Stall'} subjects={['sub1', 'sub2', 'sub3']}/>
        </>
    )
}

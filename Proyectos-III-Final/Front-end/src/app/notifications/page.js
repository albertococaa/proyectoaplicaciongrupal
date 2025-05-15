import Image from "next/image";
import NotificationSection from "../../components/NotificationSection";
import Link from "next/link";
import ArrowBackIcon from "../../resources/images/backArrow.png";
import Navbar from "../../components/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar/>
            <div className="items-center">
                <div className="flex">
                    <Image src={ArrowBackIcon} className="h-10 w-10" alt="Back arrow"/>
                    <h1 className="m-0">Notificaciones</h1>
                </div>
            </div>
            <NotificationSection />
        </main>
    );
}
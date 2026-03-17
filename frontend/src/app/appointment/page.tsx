import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import AppointmentHero from "@/components/AppointmentPage/AppointmentHero";
import AppointmentForm from "@/components/AppointmentPage/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book an Appointment | Dento – Salida, CO",
    description: "Ready for a smile makeover? Book your dental appointment at Dento in Salida, CO. Easy scheduling for all our services.",
};

export default function AppointmentRoute() {
    return (
        <main className="min-h-screen">
            <MainNavbar />
            <AppointmentHero />
            <div className="bg-[#EADDD7]">
                <AppointmentForm />
            </div>
            <Footer />
        </main>
    );
}

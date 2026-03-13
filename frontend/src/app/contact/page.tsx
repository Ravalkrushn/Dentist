import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import ContactSection from "@/components/ContactPage/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Relaxation Dental – Salida, CO",
    description: "Get in touch with Relaxation Dental. Schedule your dental appointment or ask questions about our services in Salida, CO.",
};

export default function ContactRoute() {
    return (
        <main className="min-h-screen">
            <MainNavbar />
            <ContactSection />
            <Footer />
        </main>
    );
}

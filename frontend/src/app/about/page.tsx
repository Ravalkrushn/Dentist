import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import DoctorProfile from "@/components/AboutUsPage/Doctor_Profile";
import OurMissionVision from "@/components/AboutUsPage/Our_Mission_Vision";
import ClinicOverview from "@/components/AboutUsPage/Clinic_Overview";
import WhyChooseDento from "@/components/AboutUsPage/WhyChooseDento";
import AchievementsCertifications from "@/components/AboutUsPage/Achievements_Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Dento – Salida, CO",
    description:
        "Meet Dr. Nicholas Brown and the Dento team. Learn about our mission, modern clinic, and award-winning dental care in Salida, Colorado.",
};

export default function AboutPage() {
    return (
        <main className="bg-[#EADDD7]">
            <MainNavbar />
            <DoctorProfile />
            <OurMissionVision />
            <WhyChooseDento />
            <ClinicOverview />
            <AchievementsCertifications />
            <Footer />
        </main>
    );
}

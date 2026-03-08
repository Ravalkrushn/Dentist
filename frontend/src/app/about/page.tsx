import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import DoctorProfile from "@/components/AboutUsPage/Doctor_Profile";
import OurMissionVision from "@/components/AboutUsPage/Our_Mission_Vision";
import ClinicOverview from "@/components/AboutUsPage/Clinic_Overview";
import AchievementsCertifications from "@/components/AboutUsPage/Achievements_Certifications";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Relaxation Dental – Salida, CO",
    description:
        "Meet Dr. Nicholas Brown and the Relaxation Dental team. Learn about our mission, modern clinic, and award-winning dental care in Salida, Colorado.",
};

export default function AboutPage() {
    return (
        <main>
            <MainNavbar />
            <DoctorProfile />
            <OurMissionVision />
            <ClinicOverview />
            <AchievementsCertifications />
            <Footer />
        </main>
    );
}

import MainNavbar from "@/components/Navbar/MainNavbar";
import HeroSection from "@/components/HomePage/LandingPage";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorSection from "@/components/sections/DoctorSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ComprehensiveServicesSection from "@/components/sections/ComprehensiveServicesSection";
import LocationSection from "@/components/sections/LocationSection";
import AppointmentSection from "@/components/sections/AppointmentSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <ReviewsSection />
      <ComprehensiveServicesSection />
      <LocationSection />
      <AppointmentSection />
      <Footer />
    </main>
  );
}
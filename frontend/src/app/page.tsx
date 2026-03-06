import MainNavbar from "@/components/Navbar/MainNavbar";
import HeroSection from "@/components/HomePage/LandingPage";
import DoctorSection from "@/components/sections/DoctorSection";
import ComprehensiveServicesSection from "@/components/sections/ComprehensiveServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import BeforeAfterGallery from "@/components/gallery/BeforeAfterGallery";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <MainNavbar />
      <HeroSection />
      <DoctorSection />
      <ComprehensiveServicesSection />
      <AboutSection />
      <BeforeAfterGallery />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}

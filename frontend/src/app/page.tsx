import MainNavbar from "@/components/Navbar/MainNavbar";
import HeroSection from "@/components/HomePage/LandingPage";
import DoctorSection from "@/components/HomePage/AboutDocter/DoctorSection";
import ComprehensiveServicesSection from "@/components/HomePage/DentalServices/ComprehensiveServicesSection";
import AboutSection from "@/components/HomePage/ChooseUs/AboutSection";
import BeforeAfterGallery from "@/components/HomePage/Before&AfterGallery/BeforeAfterGallery";
import ReviewsSection from "@/components/HomePage/Testimonials/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocationSection from "@/components/HomePage/ClinicTiming&ContactInfo/LocationSection";
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

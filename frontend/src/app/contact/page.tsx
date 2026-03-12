"use client";
import AppointmentHero from "@/components/AppointmentPage/AppointmentHero";
import AppointmentForm from "@/components/AppointmentPage/AppointmentForm";
import NavbarAlert from "@/components/Navbar/Navbar-alert";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcf9f7]">
      <NavbarAlert />
      <Navbar />
     
      <AppointmentHero />
      <AppointmentForm />
      <Footer />
    </main>
  );
}

"use client";
import NavbarAlert from "@/components/Navbar/Navbar-alert";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GalleryHeader from "@/components/GalleryPage/GalleryHeader";
import GalleryGrid from "@/components/GalleryPage/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#fcf9f7]">
            <NavbarAlert />
            <Navbar />
            <GalleryHeader />
            <GalleryGrid />
            <Footer />
        </main>
    );
}

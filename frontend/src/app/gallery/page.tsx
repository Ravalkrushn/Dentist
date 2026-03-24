import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import GalleryHeader from "@/components/GalleryPage/GalleryHeader";
import GalleryGrid from "@/components/GalleryPage/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#EADDD7]">
            <MainNavbar />
            <GalleryHeader />
            <GalleryGrid />
            <Footer />
        </main>
    );
}

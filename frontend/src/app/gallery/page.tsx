import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import GalleryHeader from "@/components/GalleryPage/GalleryHeader";
import GalleryGrid from "@/components/GalleryPage/GalleryGrid";

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
            <MainNavbar />
            <GalleryHeader />
            <GalleryGrid />
            <Footer />
        </main>
    );
}

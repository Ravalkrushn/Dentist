import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import BlogSection from "@/components/BlogPage/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Relaxation Dental – Salida, CO",
    description: "Read our latest blog posts for dental health tips, treatment insights, and expert advice from Relaxation Dental in Salida, CO.",
};

export default function BlogPage() {
    return (
        <main className="bg-[#E2DED9] min-h-screen">
            <MainNavbar />
            
            {/* The BlogSection component handles the main content and layout */}
            <div className="pt-20"> {/* Add padding for the fixed navbar */}
                <BlogSection />
            </div>

            <Footer />
        </main>
    );
}

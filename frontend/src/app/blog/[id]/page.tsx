import { blogData } from "@/data/blogData";
import BlogPostContent from "@/components/BlogPage/BlogPostContent";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = blogData.find((b) => b.id === resolvedParams.id);
    return {
        title: blog ? `${blog.title} | Blog` : "Blog Not Found",
        description: blog ? blog.excerpt : "Dental Health Blog Details"
    }
}

export async function generateStaticParams() {
    return blogData.map((blog) => ({
        id: blog.id,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const blog = blogData.find((b) => b.id === resolvedParams.id);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <MainNavbar />
            <BlogPostContent blog={blog} />
            <Footer />
        </main>
    );
}

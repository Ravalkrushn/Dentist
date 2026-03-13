"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogData } from "@/data/blogData";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out"
            });

            // Blog cards staggered animation
            gsap.from(".blog-card", {
                scrollTrigger: {
                    trigger: ".blog-grid",
                    start: "top 80%",
                },
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full">
            {/* Header Section part with #E2DED9 */}
            <section className="w-full pt-32 pb-55 px-6 lg:px-12 bg-[#E2DED9]">
                <div className="max-w-[1400px] mx-auto">
                    <div ref={headerRef} className="text-center space-y-6">
                        <h1 className="text-[#3b2a28] text-5xl md:text-6xl font-[Playfair_Display] leading-tight">
                            Relaxation Dental Blog
                        </h1>
                        <p className="text-[#3b2a28]/60 text-lg md:text-xl font-[Playfair_Display] italic text-center mx-auto">
                            Expert Dental Tips, News, and Patient Resources
                        </p>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-[#3b2a28]/80 font-[Lato] text-lg leading-relaxed">
                                Welcome to the Relaxation Dental Blog, your go-to resource for dental health tips, treatment insights, and expert advice. We believe in patient education, and our blog is here to help you make informed decisions about your oral health and treatment options. Check back regularly for updates on preventive care, advanced procedures, and the latest in dental technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section part with #0097AB */}
            <section className="w-full py-24 px-6 lg:px-12 bg-[#0097AB]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                        {blogData.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blog/${blog.id}`}
                                className="blog-card group flex flex-col"
                            >
                                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-8 shadow-2xl shadow-black/10 relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md text-[#0097ab] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-white text-2xl md:text-3xl font-[Playfair_Display] group-hover:text-[#E2DED9] transition-colors duration-300 leading-tight">
                                        {blog.title}
                                    </h2>
                                    <p className="text-white/70 font-[Lato] text-base md:text-lg leading-relaxed line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    <div className="pt-2 flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all duration-300">
                                        Read More <ArrowRight size={18} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ChevronLeft,
    Calendar,
    Clock,
    Tag,
    Sparkles,
    CheckCircle2,
    User,
    ArrowRight,
    Check,
    Heart,
    Smile,
    AlertCircle,
    Thermometer,
    ShieldCheck,
    Lightbulb,
    Mail,
    Phone
} from "lucide-react";
import Link from "next/link";
import { Blog } from "@/data/blogData";

interface BlogPostContentProps {
    blog: Blog;
}

// Icon mapper to fix serialization error
const IconComponent = ({ name, size = 24 }: { name: string; size?: number }) => {
    switch (name) {
        case "Sparkles": return <Sparkles size={size} />;
        case "Heart": return <Heart size={size} />;
        case "Smile": return <Smile size={size} />;
        case "AlertCircle": return <AlertCircle size={size} />;
        case "Thermometer": return <Thermometer size={size} />;
        case "ShieldCheck": return <ShieldCheck size={size} />;
        case "Lightbulb": return <Lightbulb size={size} />;
        case "Clock": return <Clock size={size} />;
        default: return <Sparkles size={size} />;
    }
};

export default function BlogPostContent({ blog }: BlogPostContentProps) {
    const articleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".blog-header > *", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Content sections staggered entrance
            gsap.from(".animate-section", {
                scrollTrigger: {
                    trigger: ".blog-body",
                    start: "top 80%"
                },
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, articleRef);
        return () => ctx.revert();
    }, []);

    return (
        <article ref={articleRef} className="w-full bg-[#E2DED9]">
            {/* 1. Header Section - Premium Design */}
            <header className="bg-[#E2DED9] pt-8 pb-10 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto blog-header flex flex-col gap-8">
                    {/* Back Link - Aligned with the content/logo below navbar */}
                    <div className="flex justify-start">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-[#0097ab] font-bold hover:gap-3 transition-all duration-300"
                        >
                            <ChevronLeft size={18} /> BACK TO ALL BLOGS
                        </Link>
                    </div>

                    {/* Centered Title */}
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-[Playfair_Display] text-[#3b2a28] leading-[1.2] font-medium max-w-4xl mx-auto px-4">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </header>

            {/* 2. Featured Image Section with Parallax Feel */}
            <div className="w-full px-6 lg:px-12 pb-24">
                <div className="max-w-6xl mx-auto relative group">
                    <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
            </div>

            {/* 3. Main Content - "Big Data" Structured Layout */}
            <div className="w-full bg-[#0097AB] py-24 px-6 lg:px-12 rounded-t-[4rem]">
                <div className="max-w-5xl mx-auto blog-body flex flex-col gap-20">

                    {/* Intro Section */}
                    <section className="animate-section">
                        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-black/10">
                            <div className="max-w-4xl">
                                {(() => {
                                    const firstDotIndex = blog.detailedData.intro.indexOf('.');
                                    const heading = blog.detailedData.intro.substring(0, firstDotIndex + 1);
                                    const body = blog.detailedData.intro.substring(firstDotIndex + 1);

                                    return (
                                        <>
                                            <h2 className="text-[#3b2a28] text-3xl md:text-4xl font-[Playfair_Display] leading-tight mb-8 font-semibold">
                                                {heading}
                                            </h2>
                                            <p className="text-[#3b2a28]/80 text-lg md:text-xl font-[Lato] leading-relaxed">
                                                {body}
                                            </p>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </section>

                    {/* Quick Tips Grid */}
                    {blog.detailedData.quickTips && blog.detailedData.quickTips.length > 0 && (
                        <section className="animate-section">
                            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-black/10">
                                <h2 className="text-[#3b2a28] text-3xl font-[Playfair_Display] mb-10 text-center flex items-center justify-center gap-4">
                                    <Sparkles className="text-[#0097ab]" /> Quick Tips for Success
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {blog.detailedData.quickTips.map((tip, i) => (
                                        <div key={i} className="flex items-start gap-4 text-[#3b2a28]">
                                            <div className="bg-[#0097ab] text-white p-1.5 rounded-full shrink-0 mt-1">
                                                <Check size={16} strokeWidth={4} />
                                            </div>
                                            <span className="text-lg font-[Lato] opacity-90">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Main Highlights - Card Grid Style */}
                    {blog.detailedData.mainHighlights && blog.detailedData.mainHighlights.length > 0 && (
                        <section className="animate-section">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {blog.detailedData.mainHighlights.map((highlight, i) => (
                                    <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform h-full flex flex-col items-center text-center">
                                        <div className="bg-[#0097ab]/10 p-5 rounded-2xl mb-6 text-[#0097ab]">
                                            <IconComponent name={highlight.iconName} size={40} />
                                        </div>
                                        <h3 className="text-[#3b2a28] text-2xl font-[Playfair_Display] mb-4 font-bold">{highlight.title}</h3>
                                        <p className="text-[#3b2a28]/70 font-[Lato] leading-relaxed">{highlight.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Informative Steps / Procedures */}
                    {blog.detailedData.detailedSteps && (
                        <section className="animate-section bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-black/10">
                            <h2 className="text-[#3b2a28] text-4xl font-[Playfair_Display] mb-12 text-center">Comprehensive Steps & Professional Insights</h2>
                            <div className="space-y-10">
                                {blog.detailedData.detailedSteps.map((step, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="text-[#0097ab] text-5xl font-serif opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                        <div className="flex flex-col gap-2 pt-2">
                                            <h4 className="text-[#3b2a28] text-2xl font-[Playfair_Display] font-bold">{step.title}</h4>
                                            <p className="text-[#3b2a28]/70 text-lg leading-relaxed font-[Lato]">{step.point}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Conclusion & Call to Action */}
                    <section className="animate-section">
                        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-black/10 flex flex-col items-center gap-10">
                            <div className="max-w-3xl text-center">
                                <p className="text-[#3b2a28]/80 text-xl md:text-2xl font-[Lato] leading-relaxed">
                                    {blog.detailedData.conclusion}
                                </p>
                            </div>

                            <div className="flex flex-col items-center gap-8 w-full">
                                <span className="text-[#3b2a28] font-[Playfair_Display] text-2xl md:text-3xl font-medium">Connect With Our Experts</span>
                                
                                <div className="flex flex-wrap justify-center gap-6">
                                    <a
                                        href="tel:7195393145"
                                        className="group relative overflow-hidden bg-[#0097ab] text-white px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-2 flex items-center gap-4"
                                    >
                                        <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                                            <Phone className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                                            719-539-3145
                                        </span>
                                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#3b2a28] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                                    </a>

                                    <Link
                                        href="/contact"
                                        className="group relative overflow-hidden bg-white border-2 border-[#0097ab] text-[#0097ab] px-10 py-5 rounded-full text-xl md:text-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-2 flex items-center gap-4"
                                    >
                                        <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                                            <Mail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                                            Send Us a Message
                                        </span>
                                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                                    </Link>
                                </div>

                                <p className="text-[#3b2a28]/60 font-[Lato] text-sm md:text-base italic">
                                    Our team usually responds within one business day.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </article>
    );
}

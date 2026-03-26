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
import { Blog, blogData } from "@/data/blogData";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

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
            const sections = document.querySelectorAll(".animate-section");
            sections.forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });

            // Specific line indicator growth animation
            gsap.to(".line-indicator", {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".line-indicator",
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: true
                }
            });
        }, articleRef);

        return () => ctx.revert();
    }, []);

    return (
        <article ref={articleRef} className="w-full bg-[#EADDD7]">
            {/* 1. Header Section - Redesigned to exactly match BlogPage.tsx structure */}
            <header className="bg-[#EADDD7] h-[400px] flex flex-col pt-12 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 z-20 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    {/* Top Row: Back Link & Breadcrumbs */}
                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-2 text-[#0097ab] font-mono text-xs font-bold tracking-[0.2em] hover:gap-4 transition-all duration-300"
                    >
                        <ChevronLeft size={16} /> BACK TO JOURNALS
                    </Link>

                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: blog.category, href: "#", active: true }
                        ]}
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 z-10 w-full flex items-start justify-center pt-10">
                    {/* Centered Title & Excerpt */}
                    <div className="text-center relative z-10 px-6 hero-content flex flex-col">
                        <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-[#3b2a28] leading-tight font-black max-w-[1400px] mx-auto italic mb-6">
                            {blog.title}
                        </h1>

                        <p className="text-[#3b2a28]/70 text-lg md:text-xl font-[Lato] max-w-3xl mx-auto leading-relaxed font-medium">
                            {blog.excerpt}
                        </p>
                    </div>
                </div>


            </header>

            {/* Featured Image Section Removed As Requested */}


            {/* 3. Main Content - "Big Data" Structured Layout */}
            <div className="w-full bg-[#0097AB] py-24 rounded-t-[5rem] -mt-12 z-20 relative">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 blog-body flex flex-col gap-20">


                    {/* Intro Section - Two Column (Photo + Text in main column, Widget in sidebar) */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative">
                        {/* Main Column */}
                        <div className="flex-[2.8] flex flex-col gap-10">
                            {/* Featured Image - Inside the left column but outside the white text box */}
                            <div className="w-full aspect-video md:aspect-[16/7] rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-white/10 animate-section">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Main Text Content (White Box) */}
                            <section className="animate-section">
                                <div className="bg-white rounded-[4rem] p-10 md:p-14 lg:p-20 shadow-[0_50px_120px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                                    {/* Decorative Grid Accent */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0097ab_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>

                                    {(() => {
                                        if (!blog.detailedData.intro) return null;
                                        const firstDotIndex = blog.detailedData.intro.indexOf('.');
                                        const heading = firstDotIndex !== -1 ? blog.detailedData.intro.substring(0, firstDotIndex + 1) : blog.detailedData.intro;
                                        const body = firstDotIndex !== -1 ? blog.detailedData.intro.substring(firstDotIndex + 1) : "";

                                        return (
                                            <div className="relative z-10">
                                                <h2 className="text-[#3b2a28] text-4xl md:text-5xl lg:text-6xl font-[Playfair_Display] leading-[1.15] mb-12 font-medium">
                                                    {heading}
                                                </h2>
                                                <div className="space-y-8 relative">
                                                    {/* Animated Scroll Indicator Line */}
                                                    <div
                                                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#0097ab] origin-top scale-y-0 opacity-40 line-indicator"
                                                        style={{ transformOrigin: 'top' }}
                                                    ></div>

                                                    <p className="text-[#3b2a28]/90 text-xl lg:text-2xl font-[Lato] leading-relaxed font-medium pl-8">
                                                        {body}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            </section>
                        </div>

                        {/* Right Side: Related Read Widget (Starts at the top level of the photo) */}
                        <div className="w-full lg:w-[320px] lg:sticky lg:top-32 shrink-0">
                            <div className="bg-[#EADDD7]/30 rounded-[3rem] p-8 border border-white/10 shadow-2xl backdrop-blur-md">
                                <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                                    </div>
                                    Curated For You
                                </h3>

                                {(() => {
                                    const currentIndex = blogData.findIndex(b => b.id === blog.id);
                                    const related = blogData[(currentIndex + 1) % blogData.length];
                                    if (!related || related.id === blog.id) return null;

                                    return (
                                        <Link href={`/blog/${related.id}`} className="group block">
                                            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-2xl ring-1 ring-white/20">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                                />
                                            </div>
                                            <h4 className="text-white font-[Playfair_Display] text-2xl font-bold mb-5 group-hover:text-white/80 transition-colors line-clamp-2 leading-tight">
                                                {related.title}
                                            </h4>
                                            <div className="flex items-center gap-3 text-white font-bold text-[11px] tracking-[0.2em] uppercase origin-left group-hover:scale-110 transition-transform">
                                                EXPLORE NOW <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>

                    {/* Quick Tips Grid */}
                    {blog.detailedData.quickTips && blog.detailedData.quickTips.length > 0 && (
                        <section className="animate-section">
                            <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
                                {/* Title with Decorative Bar */}
                                <div className="text-center mb-16 relative">
                                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#3b2a28]/5 z-0"></div>
                                    <h2 className="bg-white px-8 relative z-10 text-[#3b2a28] text-3xl md:text-4xl font-[Playfair_Display] inline-flex items-center gap-4 italic">
                                        <Sparkles className="text-[#0097ab] w-6 h-6" /> Daily Essentials
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                                    {blog.detailedData.quickTips.map((tip, i) => (
                                        <div key={i} className="flex items-start gap-6 group">
                                            <div className="bg-[#0097ab] text-white p-2 rounded-xl shrink-0 mt-0.5 shadow-lg shadow-[#0097ab]/20 transform group-hover:rotate-12 transition-transform duration-300">
                                                <Check size={18} strokeWidth={3} />
                                            </div>
                                            <span className="text-xl font-[Lato] text-[#3b2a28]/80 leading-snug font-medium">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Main Highlights - Card Grid Style */}
                    {blog.detailedData.mainHighlights && blog.detailedData.mainHighlights.length > 0 && (
                        <section className="animate-section">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {blog.detailedData.mainHighlights.map((highlight, i) => (
                                    <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.06)] hover:shadow-[0_45px_100px_rgba(0,151,171,0.1)] hover:-translate-y-3 transition-all duration-500 h-full flex flex-col items-center text-center border-t border-white/80">
                                        <div className="w-24 h-24 bg-[#0097ab]/5 rounded-[2rem] mb-10 text-[#0097ab] flex items-center justify-center transform group-hover:scale-110 transition-transform ring-1 ring-[#0097ab]/10">
                                            <IconComponent name={highlight.iconName} size={48} />
                                        </div>
                                        <h3 className="text-[#3b2a28] text-3xl font-[Playfair_Display] mb-6 font-bold tracking-tight">{highlight.title}</h3>
                                        <div className="w-12 h-0.5 bg-[#0097ab]/20 mb-8 rounded-full"></div>
                                        <p className="text-[#3b2a28]/60 font-[Lato] text-lg leading-relaxed">{highlight.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Informative Steps / Procedures */}
                    {blog.detailedData.detailedSteps && blog.detailedData.detailedSteps.length > 0 && (
                        <section className="animate-section bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
                            {/* Accent Circles */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EADDD7]/20 rounded-full -translate-y-1/2 translate-x-1/2 -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FBF8F7] rounded-full translate-y-1/2 -translate-x-1/2 -z-10 group-hover:scale-110 transition-transform duration-1000"></div>

                            <h2 className="text-[#3b2a28] text-4xl md:text-6xl font-[Playfair_Display] mb-20 text-center tracking-tight leading-tight">
                                Detailed Narrative & <span className="italic font-normal text-[#0097ab]">Expert Insights</span>
                            </h2>
                            <div className="space-y-32 max-w-6xl mx-auto">
                                {blog.detailedData.detailedSteps.map((step, i) => (
                                    <div
                                        key={i}
                                        className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center group/step`}
                                    >
                                        {/* Text Side */}
                                        <div className="flex-1 space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div className="text-[#0097ab] text-6xl font-serif opacity-20 group-hover/step:opacity-100 transition-opacity duration-500">
                                                    0{i + 1}
                                                </div>
                                                <div className="h-[1px] flex-1 bg-[#3b2a28]/10 group-hover/step:bg-[#0097ab]/30 transition-colors"></div>
                                            </div>
                                            <h4 className="text-[#3b2a28] text-3xl font-[Playfair_Display] font-bold leading-tight">{step.title}</h4>
                                            <p className="text-[#3b2a28]/70 text-xl leading-relaxed font-[Lato]">{step.point}</p>
                                        </div>

                                        {/* Image Side */}
                                        <div className="flex-1 w-full">
                                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover/step:scale-[1.02] ring-1 ring-[#3b2a28]/5">
                                                <img
                                                    src={step.image || blog.image}
                                                    alt={step.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* 4. Related Blogs Suggestions Section - Custom Background */}
            <div className="w-full bg-[#E2DED9] py-24">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="w-full pb-10">
                        <div className="bg-[#0097ab] rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden">
                            {/* Decorative Shape */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                            
                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                                    <div className="space-y-4">
                                        <h4 className="text-white text-4xl md:text-5xl font-[Playfair_Display]">Continue Reading</h4>
                                        <p className="text-white/60 font-[Lato] text-xl">Expand your knowledge with more professional insights.</p>
                                    </div>
                                    <Link href="/blog" className="text-white font-bold text-sm tracking-widest uppercase border-b-2 border-white/30 pb-2 hover:text-white/70 transition-colors">
                                        View Library
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {(() => {
                                        const currentIndex = blogData.findIndex(b => b.id === blog.id);
                                        const relatedBlogs = [
                                            blogData[(currentIndex + 1) % blogData.length],
                                            blogData[(currentIndex + 2) % blogData.length]
                                        ].filter(b => b.id !== blog.id);

                                        return relatedBlogs.map((item: Blog, i: number) => (
                                            <Link
                                                key={i}
                                                href={`/blog/${item.id}`}
                                                className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col h-max"
                                            >
                                                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                                    />
                                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                                                        <span className="text-[#0097ab] font-bold text-[10px] uppercase tracking-widest">{item.category}</span>
                                                    </div>
                                                </div>

                                                <div className="p-8 md:p-10 flex flex-col">
                                                    <div className="flex items-center gap-4 text-[#3b2a28]/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                                                        <span className="flex items-center gap-2">
                                                            <Calendar size={12} className="text-[#0097ab]" /> {item.date}
                                                        </span>
                                                        <span className="w-[1px] h-3 bg-[#3b2a28]/10"></span>
                                                        <span>{item.readTime}</span>
                                                    </div>

                                                    <h5 className="text-[#3b2a28] text-2xl font-[Playfair_Display] font-bold mb-4 group-hover:text-[#0097ab] transition-colors line-clamp-2 leading-tight">
                                                        {item.title}
                                                    </h5>

                                                    <p className="text-[#3b2a28]/60 font-[Lato] text-base line-clamp-2 mb-6 leading-relaxed">
                                                        {item.excerpt}
                                                    </p>

                                                    <div className="border-t border-[#3b2a28]/5 pt-6 flex items-center justify-between">
                                                        <div className="flex items-center gap-3 text-[#0097ab] font-bold text-[11px] tracking-[0.2em] group-hover:gap-5 transition-all duration-500">
                                                            READ FULL FEATURE <ArrowRight size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ));
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion & Call to Action - Back to Teal container */}
                </div>
            </div>

            <div className="w-full bg-[#0097AB] py-24 pb-32">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <section className="animate-section">
                        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group text-center">
                            {/* Subtle Background Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif text-[#EADDD7]/10 opacity-30 whitespace-nowrap pointer-events-none select-none italic">
                                Care Without Compromise
                            </div>

                            <div className="max-w-4xl mx-auto relative z-10 space-y-16">
                                <div className="space-y-10">
                                    <p className="text-[#3b2a28]/80 text-2xl md:text-4xl font-[Playfair_Display] leading-[1.3] italic font-medium">
                                        {blog.detailedData.conclusion}
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    <h3 className="text-[#3b2a28] font-[Playfair_Display] text-3xl md:text-5xl font-bold tracking-tight">Your Health, Reimagined.</h3>
                                    
                                    <div className="flex flex-wrap justify-center gap-8">
                                        <a
                                            href="tel:7195393145"
                                            className="group/btn relative overflow-hidden bg-[#0097ab] text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 shadow-[0_20px_50px_rgba(0,151,171,0.25)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,151,171,0.4)] flex items-center gap-4"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                <Phone className="w-6 h-6 animate-pulse" />
                                                719-539-3145
                                            </span>
                                            <div className="absolute inset-0 z-0 h-full w-full bg-[#007b8a] scale-y-0 transform transition-transform duration-500 group-hover/btn:scale-y-100 origin-bottom"></div>
                                        </a>

                                        <Link
                                            href="/contact"
                                            className="group/btn relative overflow-hidden border-2 border-[#0097ab] text-[#0097ab] px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 bg-white hover:-translate-y-2 shadow-xl"
                                        >
                                            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover/btn:text-white">
                                                <Mail className="w-6 h-6" />
                                                Send Us a Message
                                            </span>
                                            <div className="absolute inset-0 z-0 h-full w-full bg-[#0097ab] scale-y-0 transform transition-transform duration-500 group-hover/btn:scale-y-100 origin-bottom"></div>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 text-[#3b2a28]/40 font-mono text-[11px] uppercase tracking-[0.3em]">
                                        <div className="w-8 h-[1px] bg-[#3b2a28]/10"></div>
                                        Trusted Specialist Care
                                        <div className="w-8 h-[1px] bg-[#3b2a28]/10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
}

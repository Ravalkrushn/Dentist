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
    Lightbulb
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
            <header className="bg-[#E2DED9] pt-32 pb-20 px-6 lg:px-12 text-center">
                <div className="max-w-4xl mx-auto blog-header">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-[#0097ab] font-bold mb-8 hover:gap-3 transition-all duration-300"
                    >
                        <ChevronLeft size={18} /> BACK TO ALL BLOGS
                    </Link>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6 text-[#3b2a28]/60 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        <span className="flex items-center gap-1.5"><User size={14} className="text-[#0097ab]" /> {blog.author}</span>
                        <span className="bg-[#0097ab] text-white px-3 py-1 rounded-full text-[10px] tracking-widest">{blog.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-[Playfair_Display] text-[#3b2a28] mb-10 leading-[1.1] font-medium">
                        {blog.title}
                    </h1>

                    <div className="w-24 h-1.5 bg-[#0097ab] mx-auto rounded-full"></div>
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
                    <section className="animate-section text-center max-w-4xl mx-auto">
                        <p className="text-white text-2xl md:text-3xl font-[Playfair_Display] leading-relaxed italic opacity-95">
                            "{blog.detailedData.intro}"
                        </p>
                    </section>

                    {/* Quick Tips Grid */}
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

                    {/* Main Highlights - Card Grid Style */}
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

                    {/* Informative Steps / Procedures */}
                    {blog.detailedData.detailedSteps && (
                        <section className="animate-section bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-black/10">
                            <h2 className="text-[#3b2a28] text-4xl font-[Playfair_Display] mb-12 text-center">Comprehensive Steps & Professional Insights</h2>
                            <div className="space-y-10">
                                {blog.detailedData.detailedSteps.map((step, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="text-[#0097ab] text-5xl font-serif opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
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
                        <section className="animate-section flex flex-col items-center gap-8 pt-10">
                            <div className="max-w-3xl text-center">
                                <p className="text-white/80 text-xl md:text-2xl font-[Lato] leading-relaxed">
                                    {blog.detailedData.conclusion}
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center gap-4">
                                <span className="text-[#E2DED9] font-[Playfair_Display] text-2xl">Connect With Our Experts</span>
                                <a 
                                    href="tel:7195393145" 
                                    className="group relative overflow-hidden bg-[#E2DED9] text-[#3b2a28] px-10 py-5 rounded-full text-2xl font-bold transition-all duration-300 shadow-2xl hover:-translate-y-2"
                                >
                                    <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                                        <ArrowRight className="transition-transform duration-300 group-hover:rotate-12" />
                                        719-539-3145
                                    </span>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                                </a>
                            </div>
                        </section>

                </div>
            </div>
        </article>
    );
}

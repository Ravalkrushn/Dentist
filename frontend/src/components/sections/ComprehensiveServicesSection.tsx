"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function ComprehensiveServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    once: true,
                }
            });

            tl.from(".comp-header", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out",
                immediateRender: false
            });

            tl.from(".comp-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                immediateRender: false
            }, "-=0.6");

            tl.from(".comp-button", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                immediateRender: false
            }, "-=0.4");

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const cards = [
        {
            title: "Dental Exams &\nCleanings",
            desc: "Prevent cavities and gum disease with regular checkups.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 18V22H10V18" />
                    <rect x="6" y="10" width="12" height="8" rx="2" />
                    <path d="M12 6V10" />
                    <circle cx="12" cy="4" r="2" />
                    <path d="M6 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10H6" />
                    <path d="M18 14H20C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10H18" />
                </svg>
            )
        },
        {
            title: "Dental Implants\n& Restorations",
            desc: "Replace missing teeth with long-lasting, natural-looking implants.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 11.5 14 14 12 16C10 14 8 11.5 8 8Z" />
                    <path d="M12 16V20" strokeWidth="2" strokeDasharray="2 2" />
                    <path d="M10 18H14" />
                    <path d="M10 20H14" />
                </svg>
            )
        },
        {
            title: "Emergency\nDentistry",
            desc: "Experiencing a dental emergency? We offer same-day care when you need it most.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 11.5 14 14 12 16C10 14 8 11.5 8 8Z" />
                    <path d="M12 3L11 6H13L12 9" stroke="#fff" strokeWidth="1.5" />
                    <path d="M5 8L7 9" />
                    <path d="M19 8L17 9" />
                </svg>
            )
        },
        {
            title: "Invisalign®\nClear Aligners",
            desc: "Straighten your teeth discreetly and comfortably with clear aligners.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" strokeDasharray="4 2" />
                    <rect x="8" y="10" width="2" height="4" rx="1" />
                    <rect x="14" y="10" width="2" height="4" rx="1" />
                    <rect x="11" y="10" width="2" height="4" rx="1" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-center overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/videos/videoplayback.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <div className="comp-header w-full text-center max-w-3xl mb-16">
                    <h2 className="text-white mb-6 text-4xl md:text-5xl font-serif">
                        Comprehensive Dental
                        <br />
                        Services for Every Smile
                    </h2>
                    <p className="text-white/90 text-lg">
                        At Relaxation Dental, we offer a full range of general, cosmetic, and restorative treatments to
                        keep your smile healthy and beautiful.
                    </p>
                </div>

                {/* Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="comp-card group relative flex flex-col items-center text-center px-6 py-12 rounded-3xl border border-white/40 bg-black/20 backdrop-blur-md transition-all duration-500 hover:bg-black/40 hover:border-white/70"
                        >
                            <div className="text-white mb-6 transition-transform duration-500 group-hover:scale-110">
                                {card.icon}
                            </div>
                            <h3 className="text-white mb-4 text-xl whitespace-pre-line font-serif">
                                {card.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="comp-button">
                    <Link
                        href="/procedures"
                        className="inline-block border border-white/60 text-white rounded-full px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black"
                    >
                        Explore our full range of dental services
                    </Link>
                </div>

            </div>
        </section>
    );
}
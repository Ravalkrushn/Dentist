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
            title: "Teeth Cleaning",
            desc: "Prevent cavities and gum disease with regular checkups and professional cleanings.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(12, 13) scale(0.7) translate(-12, -12)">
                        <path d="M 12 5.5 C 11.2 3 9.7 2 8 2 C 4.7 2 2 4.7 2 8 C 2 11 4.2 12.5 4.2 17 C 4.2 19 5.7 20 7.5 20 C 9 20 10 18.5 10 17 C 10 16 11 15.5 12 15.5 C 13 15.5 14 16 14 17 C 14 18.5 15 20 16.5 20 C 18.3 20 19.8 19 19.8 17 C 19.8 12.5 22 11 22 8 C 22 4.7 19.3 2 16 2 C 14.3 2 12.8 3 12 5.5 Z" />
                    </g>
                    <circle cx="19" cy="7" r="2" />
                    <circle cx="17" cy="13" r="1" />
                    <circle cx="5" cy="9" r="2" />
                    <circle cx="8" cy="4" r="1" />
                </svg>
            )
        },
        {
            title: "Root Canal",
            desc: "Save your natural tooth and relieve pain with our gentle root canal therapies.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 12 5.5 C 11.2 3 9.7 2 8 2 C 4.7 2 2 4.7 2 8 C 2 11 4.2 12.5 4.2 17 C 4.2 19 5.7 20 7.5 20 C 9 20 10 18.5 10 17 C 10 16 11 15.5 12 15.5 C 13 15.5 14 16 14 17 C 14 18.5 15 20 16.5 20 C 18.3 20 19.8 19 19.8 17 C 19.8 12.5 22 11 22 8 C 22 4.7 19.3 2 16 2 C 14.3 2 12.8 3 12 5.5 Z" />
                    <path d="M 12 7 L 12 10" />
                    <path d="M 12 10 Q 10 12 9 16" />
                    <path d="M 12 10 Q 14 12 15 16" />
                    <circle cx="9" cy="16" r="0.5" fill="currentColor" />
                    <circle cx="15" cy="16" r="0.5" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Dental Implants",
            desc: "Replace missing teeth with long-lasting, natural-looking permanent implants.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 12 4.5 C 11.2 2 9.7 1 8 1 C 4.7 1 2 3.7 2 7 C 2 10 4.2 11.5 6 12 C 9 13 10 12 12 11 C 14 12 15 13 18 12 C 19.8 11.5 22 10 22 7 C 22 3.7 19.3 1 16 1 C 14.3 1 12.8 2 12 4.5 Z" />
                    <path d="M 12 11 L 12 22" />
                    <path d="M 9 14 L 15 14" />
                    <path d="M 9 17 L 15 17" />
                    <path d="M 10 20 L 14 20" />
                    <path d="M 12 22 L 10 20 M 12 22 L 14 20" />
                </svg>
            )
        },
        {
            title: "Braces & Aligners",
            desc: "Straighten your teeth discreetly and comfortably with modern orthodontic care.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 12 5.5 C 11.2 3 9.7 2 8 2 C 4.7 2 2 4.7 2 8 C 2 11 4.2 12.5 4.2 17 C 4.2 19 5.7 20 7.5 20 C 9 20 10 18.5 10 17 C 10 16 11 15.5 12 15.5 C 13 15.5 14 16 14 17 C 14 18.5 15 20 16.5 20 C 18.3 20 19.8 19 19.8 17 C 19.8 12.5 22 11 22 8 C 22 4.7 19.3 2 16 2 C 14.3 2 12.8 3 12 5.5 Z" />
                    <path d="M 1.5 10 Q 12 14 22.5 10" />
                    <rect x="5.5" y="10.5" width="2" height="2" rx="0.5" fill="currentColor" />
                    <rect x="11" y="11" width="2" height="2" rx="0.5" fill="currentColor" />
                    <rect x="16.5" y="10.5" width="2" height="2" rx="0.5" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Teeth Whitening",
            desc: "Enhance your smile instantly with professional and safe teeth whitening treatments.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(12, 13) scale(0.8) translate(-12, -12)">
                        <path d="M 12 5.5 C 11.2 3 9.7 2 8 2 C 4.7 2 2 4.7 2 8 C 2 11 4.2 12.5 4.2 17 C 4.2 19 5.7 20 7.5 20 C 9 20 10 18.5 10 17 C 10 16 11 15.5 12 15.5 C 13 15.5 14 16 14 17 C 14 18.5 15 20 16.5 20 C 18.3 20 19.8 19 19.8 17 C 19.8 12.5 22 11 22 8 C 22 4.7 19.3 2 16 2 C 14.3 2 12.8 3 12 5.5 Z" />
                    </g>
                    <path d="M 19 1 Q 19 4 16 4 Q 19 4 19 7 Q 19 4 22 4 Q 19 4 19 1 Z" fill="currentColor" />
                    <path d="M 6 15 Q 6 16.5 4.5 16.5 Q 6 16.5 6 18 Q 6 16.5 7.5 16.5 Q 6 16.5 6 15 Z" fill="currentColor" />
                    <path d="M 5 3 L 5 5 M 4 4 L 6 4" />
                </svg>
            )
        },
        {
            title: "Pediatric Dentistry",
            desc: "Gentle and specialized dental care to keep your child's smile healthy and bright.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <g transform="translate(12, 13) scale(0.85) translate(-12, -12)">
                        <path d="M 12 5.5 C 11.2 3 9.7 2 8 2 C 4.7 2 2 4.7 2 8 C 2 11 4.2 12.5 4.2 17 C 4.2 19 5.7 20 7.5 20 C 9 20 10 18.5 10 17 C 10 16 11 15.5 12 15.5 C 13 15.5 14 16 14 17 C 14 18.5 15 20 16.5 20 C 18.3 20 19.8 19 19.8 17 C 19.8 12.5 22 11 22 8 C 22 4.7 19.3 2 16 2 C 14.3 2 12.8 3 12 5.5 Z" />
                    </g>
                    <circle cx="9" cy="11" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="11" r="0.8" fill="currentColor" stroke="none" />
                    <path d="M 9.5 13 Q 12 16 14.5 13" />
                </svg>
            )
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen py-24 flex items-center overflow-hidden"
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
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">

                {/* Header */}
                <div className="comp-header w-full text-center max-w-3xl mb-16">
                    <h2 className="text-white mb-6 text-4xl md:text-5xl font-serif">
                        Our Dental Services
                    </h2>
                    <p className="text-white/90 text-lg">
                        At Relaxation Dental, we offer a full range of general, cosmetic, and restorative treatments to
                        keep your smile healthy and beautiful.
                    </p>
                </div>

                {/* Cards Grid: changed to 3 columns on large screens to fit 6 cards perfectly */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {cards.map((card, idx) => (
                        <Link
                            href="/services"
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
                        </Link>
                    ))}
                </div>

                {/* Services Page Link Button */}
                <div className="comp-button">
                    <Link
                        href="/services"
                        className="inline-block border border-white/60 text-white rounded-full px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
                    >
                        Explore Our Full Range of Services
                    </Link>
                </div>

            </div>
        </section>
    );
}


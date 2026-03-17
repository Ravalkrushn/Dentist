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
            id: "teeth-cleaning",
            desc: "Prevent cavities and gum disease with regular checkups and professional cleanings.",
            icon: (
                <img src="/image/L1.svg" alt="Teeth Cleaning" />
            )
        },
        {
            title: "Root Canal",
            id: "root-canal-treatment",
            desc: "Save your natural tooth and relieve pain with our gentle root canal therapies.",
            icon: (
                <img src="/image/L2.svg" alt="Root Canal" />
            )
        },
        {
            title: "Dental Implants",
            id: "dental-implants",
            desc: "Replace missing teeth with long-lasting, natural-looking permanent implants.",
            icon: (
                <img src="/image/l3.svg" alt="Dental Implants" />
            )
        },
        {
            title: "Braces & Aligners",
            id: "orthodontics",
            desc: "Straighten your teeth discreetly and comfortably with modern orthodontic care.",
            icon: (
                <img src="/image/L4.svg" alt="Braces & Aligners" />
            )
        },
        {
            title: "Teeth Whitening",
            id: "teeth-whitening",
            desc: "Enhance your smile instantly with professional and safe teeth whitening treatments.",
            icon: (
                <img src="/image/L5.svg" alt="Teeth Whitening" />
            )
        },
        {
            title: "Pediatric Dentistry",
            id: "pediatric-dentistry",
            desc: "Gentle and specialized dental care to keep your child's smile healthy and bright.",
            icon: (
                <img src="/image/L6.svg" alt="Pediatric Dentistry" />
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
                        At Dento, we offer a full range of general, cosmetic, and restorative treatments to
                        keep your smile healthy and beautiful.
                    </p>
                </div>

                {/* Cards Grid: changed to 3 columns on large screens to fit 6 cards perfectly */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {cards.map((card, idx) => (
                        <Link
                            href={`/services/${card.id}`}
                            key={idx}
                            className="comp-card group relative flex flex-col items-center text-center px-8 py-12 rounded-3xl border border-white/40 bg-black/20 backdrop-blur-md transition-all duration-500 hover:bg-black/40 hover:border-white/70 h-full"
                        >
                            <div className="relative w-20 h-20 mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    {/* Applying consistent sizing to the icon */}
                                    {typeof card.icon === 'object' && 'type' in card.icon && card.icon.type === 'img' ? (
                                        <img 
                                            src={card.icon.props.src} 
                                            alt={card.icon.props.alt} 
                                            className="max-w-full max-h-full w-auto h-auto object-contain"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                            {card.icon}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow items-center">
                                <h3 className="text-white mb-4 text-2xl font-serif min-h-[64px] flex items-center justify-center">
                                    {card.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed max-w-[260px]">
                                    {card.desc}
                                </p>
                            </div>
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


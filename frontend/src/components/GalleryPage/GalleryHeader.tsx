"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function GalleryHeader() {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.to(".animate-item", {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, []);

    return (
        <section className="relative h-[650px] flex flex-col overflow-hidden pt-12" 
                 ref={headerRef}>
            {/* Parallax Background - stays fixed while scrolling */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/image/ABOUT.png')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center 35%",
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-20">
                <Breadcrumbs 
                    light 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Gallery", href: "/gallery", active: true }
                    ]} 
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
                <div className="animate-item opacity-0 translate-y-10">
                    <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-white mb-6 leading-tight drop-shadow-2xl font-black">
                        Our <span className="italic text-[#0097ab] drop-shadow-md">Gallery.</span>
                    </h1>
                </div>

                <div className="animate-item opacity-0 translate-y-10">
                    <p className="text-white text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium opacity-90">
                        Take a look at our clinic, the advanced technology we use, and the beautiful smiles we&apos;ve helped create.
                    </p>
                </div>
                
                {/* Decorative underline */}
                <div className="animate-item opacity-0 translate-y-10 mt-10 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0097ab]/60 to-transparent rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
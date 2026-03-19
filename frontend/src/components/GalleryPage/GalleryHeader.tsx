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
        <section className="relative h-[400px] flex flex-col overflow-hidden pt-12 bg-[#EADDD7]" 
                 ref={headerRef}>
            
            {/* Decorative Orbs for premium look */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097ab]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2a28]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-20">
                <Breadcrumbs 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Gallery", href: "/gallery", active: true }
                    ]} 
                />
            </div>

            <div className="flex flex-col items-center pt-4 relative z-10 px-6">
                <div className="animate-item opacity-0 translate-y-10">
                    <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-[#3b2a28] mb-6 leading-tight font-black">
                        Our <span className="italic text-[#0097ab]">Gallery.</span>
                    </h1>
                </div>

                <div className="animate-item opacity-0 translate-y-10">
                    <p className="text-[#3b2a28]/70 text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed font-medium">
                        Take a look at our clinic, the advanced technology we use, and the beautiful smiles we&apos;ve helped create.
                    </p>
                </div>
                
            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function AppointmentHero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-content > *", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#EADDD7] h-[580px] text-center relative overflow-hidden flex flex-col pt-12">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-20">
                <Breadcrumbs 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Appointment", href: "/appointment", active: true }
                    ]} 
                />
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097ab]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2a28]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto hero-content relative z-10 flex-1 flex flex-col justify-center">
                <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-[#3b2a28] mb-6 leading-tight">
                    Book Your <span className="italic text-[#0097ab]">Visit.</span>
                </h1>
                
                <p className="text-[#3b2a28]/70 text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed">
                    Take the first step towards a healthier, brighter smile. 
                    Simple, fast, and stress-free appointment scheduling for the care you deserve.
                </p>
                
                {/* Visual Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0097ab] to-transparent mx-auto mt-10 opacity-30" />
            </div>
        </section>
    );
}
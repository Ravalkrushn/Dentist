"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AppointmentHero() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // Entrance animations removed for immediate visibility
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#eaddd7]">
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="overflow-hidden">
                    <h1 
                        ref={titleRef}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#4a2e2b] mb-6"
                    >
                        Book Your <span className="text-[#0097ab] italic">Visit</span>
                    </h1>
                </div>
                <p className="hero-subtext text-lg md:text-xl text-[#5a3a3a] max-w-2xl mx-auto font-light leading-relaxed">
                    Take the first step towards a healthier, brighter smile. 
                    Simple, fast, and stress-free appointment scheduling.
                </p>
            </div>
            
        </section>
    );
}

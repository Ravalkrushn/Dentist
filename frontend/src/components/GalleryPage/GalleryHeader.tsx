"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GalleryHeader() {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.to(".animate-item", {
            y: 0,
            opacity: 1,
            duration: 1.5,
            stagger: 0.4,
            ease: "expo.out",
            delay: 0.2
        });
    }, []);

    return (
        <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/ABOUT.png"
                    alt="Clinic Gallery"
                    className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-black/80" /> {/* Darkened to black/80 for maximum text clarity */}
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto text-center relative z-10 px-6" ref={headerRef}>
                <div className="animate-item opacity-0 translate-y-20">
                    <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                        Our <span className="text-[#0097ab] italic font-light font-sans">Gallery</span>
                    </h1>
                </div>

                <div className="animate-item opacity-0 translate-y-20">
                    <p className="text-[#eaddd7] max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed drop-shadow-xl">
                        Take a look at our clinic, the advanced technology we use, and the beautiful smiles we've helped create.
                    </p>
                </div>


            </div>
        </section>
    );
}
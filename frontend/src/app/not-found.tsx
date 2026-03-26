"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".fade-in", {
                y: 30,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: "power3.out",
            });

            gsap.to(".x-ray-float", {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center" ref={containerRef}>
            {/* Very Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-[#0097ab]/5 blur-[120px] -z-10 rounded-full"></div>

            <div className="w-full max-w-xl flex flex-col items-center gap-10">
                {/* Floating X-Ray Image - Shifted further to the left */}
                <div className="relative fade-in -translate-x-10">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 x-ray-float">
                        <Image
                            src="/image/x-ray.png"
                            alt="404 Error"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Main Heading & Message */}
                <div className="space-y-6 fade-in w-full text-center">
                    <h1 className="text-[#3b2a28] text-5xl md:text-7xl font-[Playfair_Display] font-bold tracking-tight">
                        404 : <span className="text-[#0097ab] italic font-normal">Page Not Found</span>
                    </h1>
                    <p className="text-[#3b2a28]/40 text-xl font-[Lato] mx-auto leading-relaxed max-w-md">
                        The requested page could not be found. Let's get you back on track to your healthy smile.
                    </p>
                </div>
            </div>
        </div>
    );
}

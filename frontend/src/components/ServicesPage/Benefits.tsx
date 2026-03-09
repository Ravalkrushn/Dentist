"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Benefits({ benefits }: { benefits: string[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".benefit-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                clearProps: "all",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#0097ab] py-20 px-6 lg:px-28 z-10"
        >
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">
                    Benefits of This Treatment
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="benefit-card bg-[#E2DED9] p-6 rounded-2xl shadow-sm border border-white/20 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
                    >
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0097ab] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                            ✓
                        </span>

                        <p className="text-[#3b2a28] font-medium text-lg leading-relaxed">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
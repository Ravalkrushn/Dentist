"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Benefits({ benefits }: { benefits: string[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#EADDD7] py-20 px-6 lg:px-28 z-10"
        >
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Benefits of This Treatment
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="benefit-card bg-white p-6 rounded-2xl shadow-md border border-[#0097ab]/10 flex items-start gap-4 hover:-translate-y-1 transition-all duration-300"
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
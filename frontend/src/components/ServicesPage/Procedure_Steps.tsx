"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Procedure_Steps({ steps }: { steps: { stepTitle: string; stepDesc: string }[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            gsap.from(".step-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E2DED9] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Treatment Procedure
                </h2>
                <p className="text-[#5a3a3a] text-lg mt-6">What you can expect during your visit.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-[#0097ab] opacity-30 hidden md:block" />

                <div className="space-y-6">
                    {steps.map((item, idx) => (
                        <div key={idx} className="step-card flex items-start gap-6 relative">
                            {/* Step number */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0097ab] text-white flex items-center justify-center text-xl font-bold z-10 shadow-md">
                                {idx + 1}
                            </div>
                            {/* Content */}
                            <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                <h4 className="text-[#3b2a28] font-bold text-xl mb-3">{item.stepTitle}</h4>
                                <p className="text-[#5a3a3a] leading-relaxed">{item.stepDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

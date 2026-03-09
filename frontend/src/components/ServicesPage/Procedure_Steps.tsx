"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Procedure_Steps({ steps }: { steps: { stepTitle: string; stepDesc: string }[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const cards = gsap.utils.toArray(".procedure-card");

            // Timeline for pinning and sequential stepping
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70px",
                    end: `+=${steps.length * 100}%`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    pinSpacing: true,
                }
            });

            cards.forEach((card, i) => {
                if (i === 0) return; // First card is initially static

                tl.fromTo(card as HTMLElement,
                    { y: "120vh" },
                    {
                        y: i * 35, // Staggered stack downward for top edges
                        ease: "power2.inOut",
                        duration: 1
                    }
                );
            });

            // Hold the final card
            tl.to({}, { duration: 0.5 });
        }
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="w-full h-screen bg-[#E2DED9] relative flex flex-col items-center justify-center px-6 pb-24"
        >
            {/* Background Texture/Accent */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097ab] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2a28] rounded-full blur-[120px]" />
            </div>

            {/* Pinned Title Section */}
            <div className="absolute top-12 lg:top-16 left-0 right-0 z-[20] text-center px-4">
                <h2 className="text-[#3b2a28] text-3xl md:text-5xl font-serif inline-block border-b-4 border-[#0097ab] pb-2 leading-tight">
                    Your Treatment Journey
                </h2>
            </div>

            <div className="relative w-full max-w-3xl h-[60vh] flex items-center justify-center mt-32">
                {steps.map((item, idx) => (
                    <div
                        key={idx}
                        className={`procedure-card absolute w-[94%] md:w-full h-full bg-[#fdfaf8] rounded-[3rem] lg:rounded-[4rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#eaddd7] overflow-hidden flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transform-gpu`}
                        style={{ zIndex: idx + 1 }}
                    >
                        {/* Content Side */}
                        <div className="flex-[1.2] p-6 lg:p-12 flex flex-col justify-center relative">
                            {/* Step Indicator */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-[#0097ab] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl shadow-lg ring-4 ring-[#0097ab]/10">
                                    {idx + 1}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-[#0097ab] font-bold uppercase tracking-[0.25em] text-[10px] lg:text-[11px]">
                                        Phase {idx + 1}
                                    </span>
                                    <span className="text-[#b5a7a3] font-serif italic text-xs lg:text-sm">
                                        {idx % 2 === 0 ? 'Primary Procedure' : 'Detailed Care'}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-[#3b2a28] font-serif text-2xl lg:text-4xl mb-4 lg:mb-6 leading-[1.15]">
                                {item.stepTitle}
                            </h3>

                            <p className="text-[#5a3a3a] text-base lg:text-xl leading-relaxed mb-6 font-[Lato] opacity-90">
                                {item.stepDesc}
                            </p>

                            {/* Bottom Footer for Page */}
                            <div className="mt-auto pt-8 border-t border-[#eaddd7]/50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-[#0097ab]" />
                                    <span className="text-[#0097ab] text-[10px] font-bold uppercase tracking-widest">Procedural Step</span>
                                </div>
                                <span className="text-[#b5a7a3] font-serif text-sm lg:text-lg italic">
                                    Page {idx + 1} of {steps.length}
                                </span>
                            </div>
                        </div>

                        {/* Image Side (The Arch) */}
                        <div className="hidden lg:flex flex-1 bg-[#fcfaf9] relative overflow-hidden items-center justify-center p-12">
                            <div className="w-full h-full bg-[#f8f0ed] rounded-t-full relative overflow-hidden shadow-[inset_0_10px_40px_rgba(0,0,0,0.05)] ring-1 ring-[#eaddd7]">
                                <img
                                    src="/image/ABOUT2.png"
                                    alt={item.stepTitle}
                                    className="w-full h-full object-cover opacity-90 transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf8]/60 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


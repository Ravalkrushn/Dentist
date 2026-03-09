"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const transformations = [
    {
        id: "invisalign",
        name: "Invisalign & Whitening",
        before: "/image/Invisalign&TeethWhitening_before.png",
        after: "/image/Invisalign&TeethWhitening_after.jpg",
    },
    {
        id: "veneers",
        name: "Veneers Transformation",
        before: "/image/VeneersTransformation_before.jpg",
        after: "/image/VeneersTransformation_after.jpg",
    },
    {
        id: "implants",
        name: "Dental Implants",
        before: "/image/DentalImplants_before.jpg",
        after: "/image/DentalImplants_after.jpg",
    }
];

function BeforeAfterSlider({ before, after, title }: { before: string, after: string, title: string }) {
    const [sliderPos, setSliderPos] = useState(60);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPos(percent);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (e.buttons === 1) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-6 font-serif text-center">{title}</h3>
            <div
                ref={containerRef}
                className="relative w-full max-w-sm md:max-w-md h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden cursor-ew-resize select-none shadow-[0_15px_40px_rgba(0,0,0,0.15)] bg-gray-100"
                onPointerMove={handlePointerMove}
                onPointerDown={handlePointerMove}
                onTouchMove={handleTouchMove}
                style={{ touchAction: "none" }}
            >
                {/* After Image (Background) */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${after}')` }}
                >
                    <div className="absolute top-4 right-4 bg-white/90 py-1.5 px-3 rounded-full text-xs font-bold text-[#0097ab] shadow-sm tracking-widest uppercase">After</div>
                </div>

                {/* Before Image (Foreground, clipped) */}
                <div
                    className="absolute inset-0 bg-cover bg-center border-r-[4px] border-white drop-shadow-2xl pointer-events-none"
                    style={{
                        backgroundImage: `url('${before}')`,
                        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                    }}
                >
                    <div className="absolute top-4 left-4 bg-white/90 py-1.5 px-3 rounded-full text-xs font-bold text-[#5f4f4f] shadow-sm tracking-widest uppercase">Before</div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-[4px] bg-white cursor-ew-resize z-10 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                    style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg border-[3px] border-[#0097ab] flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0097ab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0097ab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BeforeAfterGallery() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(".gallery-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0,
                    duration: 0.9,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".gallery-header",
                        start: "top 90%",
                        once: false,
                        toggleActions: "play none none reset"
                    }
                }
            );

            // Each card animates in with stagger
            gsap.fromTo(".gallery-card",
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.3)",
                    scrollTrigger: {
                        trigger: ".gallery-grid",
                        start: "top 90%",
                        once: false,
                        toggleActions: "play none none reset"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} className="w-full py-24 overflow-hidden" style={{ backgroundColor: "#0097ab" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
                <div className="gallery-header text-center mb-16 max-w-3xl">
                    <h2 className="text-white font-[Playfair_Display] text-[clamp(2.5rem,4vw,3.5rem)] mb-4 leading-tight">
                        Smile Transformations
                    </h2>
                    <p className="text-white/80 text-lg font-[Lato] mx-auto">
                        See the real difference we make. Drag the sliders on each image to compare before and after results from our actual patients.
                    </p>
                </div>

                {/* Grid of 3 Independent Sliders */}
                <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 w-full justify-items-center">
                    {transformations.map((item) => (
                        <div key={item.id} className="gallery-card w-full flex justify-center">
                            <BeforeAfterSlider
                                before={item.before}
                                after={item.after}
                                title={item.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

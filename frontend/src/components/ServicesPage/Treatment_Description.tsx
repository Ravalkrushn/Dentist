"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Treatment_Description({
    title,
    description,
    image,
}: {
    title: string;
    description: string;
    image?: string;
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".td-image", {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: "power3.out",
            })
                .from(".td-text", {
                    opacity: 0,
                    x: -40,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E2DED9] py-20 px-6 lg:px-28 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    What is {title}?
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-center">
                {/* Image */}
                <div className="td-image w-full lg:w-[420px] flex-shrink-0">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-[420px] rounded-3xl shadow-xl object-cover object-top"
                        />
                    ) : (
                        <div className="w-full h-[420px] rounded-3xl bg-[#0097ab] flex flex-col items-center justify-center shadow-xl">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 11.5 14 14 12 16C10 14 8 11.5 8 8Z" />
                                <path d="M14 18V22H10V18" />
                                <rect x="6" y="10" width="12" height="8" rx="2" />
                            </svg>
                            <p className="text-white text-xl font-serif mt-4">{title}</p>
                        </div>
                    )}
                </div>

                {/* Text */}
                <div className="td-text flex-1 text-[#5a3a3a]">
                    <p className="text-lg leading-relaxed mb-6">{description}</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-[#0097ab] rounded-full" />
                        <p className="text-[#0097ab] font-bold uppercase tracking-widest text-sm">Relaxation Dental</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

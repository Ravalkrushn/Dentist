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
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-24 rounded-t-[5rem] -mt-12 z-10 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-14 items-center">
                {/* Image */}
                <div className="td-image w-full lg:w-[420px] flex-shrink-0">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-[420px] rounded-3xl shadow-2xl object-cover object-top border-4 border-white/10"
                        />
                    ) : (
                        <div className="w-full h-[420px] rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center shadow-xl">
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
                <div className="td-text flex-1 text-white/90">
                    <h2 className="text-white text-4xl lg:text-5xl font-serif mb-8 inline-block border-b-4 border-[#eaddd7] pb-2">
                        What is {title}?
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 font-[Lato]">{description}</p>
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-1 bg-white rounded-full opacity-30" />
                        <p className="text-white font-bold uppercase tracking-[0.2em] text-sm">REDEFINING YOUR SMILE</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.from(".service-image", {
                opacity: 0,
                x: -60,
                rotation: -12,
                duration: 1.2,
                ease: "power3.out"
            })
                .from(".service-item", {
                    opacity: 0,
                    x: 60,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out"
                }, "-=0.8");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#5a403d" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">

                {/* Left Side: Image */}
                <div className="service-image w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ transform: "rotate(-6deg)" }}>
                        {/* Using one of the provided local images as placeholder, user can swap as needed */}
                        <img
                            src="/image/About.png"
                            alt="Doctor and Patient Handshake"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side: Services List */}
                <div className="w-full md:w-1/2 flex flex-col gap-10">

                    {/* Item 1 */}
                    <div className="service-item flex items-start gap-6">
                        <div className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] shrink-0 border border-white/30 rounded-2xl flex items-center justify-center p-3 md:p-4">
                            {/* Mouth/Teeth Icon SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 24C4 28 12 36 24 36C36 36 44 28 44 24C44 20 36 12 24 12C12 12 4 20 4 24Z" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 24C8 28 14 32 24 32C34 32 40 28 40 24C40 20 34 16 24 16C14 16 8 20 8 24Z" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 16V32" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 18V30" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M32 18V30" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col pt-1">
                            <h3
                                className="text-[#F5F0EB]"
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    marginBottom: "0.8rem",
                                }}
                            >
                                Full Mouth<br />Reconstruction
                            </h3>
                            <p
                                className="text-[#eaddd7]"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                                    fontWeight: 300,
                                }}
                            >
                                Transform your smile with a complete, confident restoration.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="service-item flex items-start gap-6">
                        <div className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] shrink-0 border border-white/30 rounded-2xl flex items-center justify-center p-3 md:p-4">
                            {/* Implant Icon SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 18C14 10 18 6 24 6C30 6 34 10 34 18C34 26 28 32 24 32C20 32 14 26 14 18Z" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 32V42" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 36H29" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 40H27" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 42V45C22 45.5523 22.4477 46 23 46H25C25.5523 46 26 45.5523 26 45V42H22Z" fill="none" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 12V24" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 4" />
                            </svg>
                        </div>
                        <div className="flex flex-col pt-1">
                            <h3
                                className="text-[#F5F0EB]"
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    marginBottom: "0.8rem",
                                }}
                            >
                                Dental Implants
                            </h3>
                            <p
                                className="text-[#eaddd7]"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                                    fontWeight: 300,
                                }}
                            >
                                Replace missing teeth with natural-looking, permanent solutions.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="service-item flex items-start gap-6">
                        <div className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] shrink-0 border border-white/30 rounded-2xl flex items-center justify-center p-3 md:p-4">
                            {/* Braces Icon SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 6C12 6 6 16 6 26C6 36 12 42 24 42C36 42 42 36 42 26C42 16 36 6 24 6Z" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 6V42" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="12" y="20" width="8" height="8" rx="2" stroke="#F5F0EB" strokeWidth="1.5" />
                                <rect x="28" y="20" width="8" height="8" rx="2" stroke="#F5F0EB" strokeWidth="1.5" />
                                <path d="M6 24H42" stroke="#F5F0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col pt-1">
                            <h3
                                className="text-[#F5F0EB]"
                                style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                                    fontWeight: 400,
                                    lineHeight: 1.2,
                                    marginBottom: "0.8rem",
                                }}
                            >
                                Orthodontics
                            </h3>
                            <p
                                className="text-[#eaddd7]"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                                    fontWeight: 300,
                                }}
                            >
                                Align, enhance, and smile with confidence.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

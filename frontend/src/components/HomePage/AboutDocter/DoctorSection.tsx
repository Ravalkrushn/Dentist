"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function DoctorSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                }
            });

            // Title fade in
            tl.from(titleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power3.out"
            });

            // Image slide up & fade
            tl.from(".doctor-image", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4");

            // Text paragraph slide & fade
            tl.from(".doctor-text", {
                opacity: 0,
                x: 30,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.6");

            // Bullet points stagger
            tl.from(".doctor-bullet", {
                opacity: 0,
                x: 20,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 overflow-hidden"
            style={{ backgroundColor: "#eaddd7" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Centered Top Title */}
                <div ref={titleRef} className="text-center mb-16 md:mb-24">
                    <h2
                        className="text-[#4a2e2b]"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                            fontWeight: 400,
                            lineHeight: 1.3,
                        }}
                    >
                        Meet Dr. Nicholas Brown
                        <br />
                        Your Local Salida Dentist
                    </h2>
                </div>

                {/* Two Column Content */}
                <div ref={contentRef} className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left: Doctor Image */}
                    <div className="doctor-image w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[500px] h-[600px] rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-xl rounded-br-xl overflow-hidden shadow-xl">
                            <img
                                src="/image/ABOUT2.png" // Assuming SIR.webp is the doctor portrait based on file list
                                alt="Dr. Nicholas Brown"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right: Doctor Info & Details */}
                    <div className="doctor-text w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-0">
                        {/* Qualification & Experience */}
                        <div className="mb-8 space-y-4">
                            <h3 className="text-3xl md:text-5xl font-semibold text-[#4a2e2b] font-[vatsal]">
                                Dr. Nicholas Brown
                            </h3>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[#5a3a3a] text-[15px] sm:text-base font-medium">
                                <span className="flex items-center gap-2 bg-[#d7c6bf] px-5 py-2.5 rounded-full shadow-sm">
                                    <svg className="w-5 h-5 text-[#4a2e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422M12 20v-6m0 0V8m0 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                    BDS, MDS
                                </span>
                                <span className="flex items-center gap-2 border-2 border-[#d7c6bf] px-5 py-2 rounded-full shadow-sm bg-white/30 backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-[#4a2e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    15+ Years of Experience
                                </span>
                            </div>
                        </div>

                        {/* Short Intro */}
                        <p
                            className="text-[#5a3a3a] mb-10 text-lg leading-relaxed"
                            style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                            With a passion for modern, comfortable dentistry, Dr. Brown is dedicated to providing exceptional care equipped with the latest advancements in dental technology. He specializes in comprehensive treatment plans, focusing on conscious sedation for a relaxed and stress-free patient experience.
                        </p>

                        {/* Read More Button */}
                        <div className="doctor-bullet w-full sm:w-auto mt-2">
                            <Link href="/about">
                                <button className="group relative overflow-hidden rounded-full bg-[#0097ab] px-8 py-4 text-base sm:text-lg font-medium text-[#eaddd7] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-[#0097ab]/50">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Read More
                                        <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AppointmentSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const guyRef = useRef<HTMLImageElement>(null);

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

            tl.from(".app-left", {
                opacity: 0,
                x: -40,
                duration: 1,
                ease: "power3.out"
            });

            tl.from(".app-right", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

            // Guy sliding up from bottom
            tl.from(guyRef.current, {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            // Using a slightly darker taupe/beige for the background, 
            // similar to the "shadows on the wall" aesthetic from the screenshot
            style={{ backgroundColor: "#d7cece" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

                {/* Left Side: Text Content */}
                <div className="app-left w-full lg:w-1/2 flex flex-col items-start pt-10 pb-0 lg:pb-32">
                    <h2
                        className="text-[#4a2e2b] mb-8"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                            fontWeight: 400,
                            lineHeight: 1.2,
                        }}
                    >
                        Schedule Your Appointment
                        <br />
                        Today
                    </h2>

                    <p
                        className="text-[#3b2a28] mb-10 max-w-[500px]"
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        Whether you need a routine checkup, cosmetic treatment, or urgent dental
                        care, we&apos;re here to help. Experience a better way to care for your smile at
                        Relaxation Dental.
                    </p>

                    <a
                        href="tel:7195393145"
                        className="inline-flex items-center gap-3 border border-[#4a2e2b]/40 rounded-full px-6 py-2.5 text-[#3b2a28] hover:bg-[#4a2e2b] hover:text-[#d7cece] transition-colors duration-300"
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 400,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        719-539-3145
                    </a>
                </div>

                {/* Right Side: Form Block */}
                <div className="app-right w-full lg:w-1/2 flex justify-end">
                    <div className="w-full max-w-[650px] bg-[#e0d6cd]/30 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 shadow-sm border border-white/20">
                        <form className="flex flex-col gap-8">

                            {/* Inline Form Fields */}
                            <div className="flex flex-col gap-6 w-full">
                                {/* Name */}
                                <div className="flex flex-wrap items-center gap-4 text-[#4a2e2b]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", lineHeight: 1.2 }}>
                                    <label htmlFor="name" className="shrink-0">My name is</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="h-[3.2rem] flex-grow min-w-[200px] rounded-2xl border-none outline-none px-4 text-xl font-sans text-neutral-800 bg-white"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-wrap items-center gap-4 text-[#4a2e2b]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", lineHeight: 1.2 }}>
                                    <label htmlFor="email" className="shrink-0">email is</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="h-[3.2rem] flex-grow min-w-[200px] rounded-2xl border-none outline-none px-4 text-xl font-sans text-neutral-800 bg-white"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-wrap items-center gap-4 text-[#4a2e2b]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", lineHeight: 1.2 }}>
                                    <label htmlFor="phone" className="shrink-0">& my phone is</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="h-[3.2rem] flex-grow min-w-[200px] rounded-2xl border-none outline-none px-4 text-xl font-sans text-neutral-800 bg-white"
                                    />
                                </div>
                            </div>

                            {/* Textarea */}
                            <textarea
                                placeholder="Reason for visit..."
                                className="w-full h-32 rounded-2xl border-none outline-none p-5 text-[1rem] font-sans text-neutral-800 bg-white resize-none mt-2"
                                style={{
                                    fontFamily: "'Lato', sans-serif",
                                }}
                            ></textarea>

                            {/* How did you hear... */}
                            <div className="flex flex-col gap-4 mt-2">
                                <label className="text-[#4a2e2b]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem" }}>
                                    I heard about you through:
                                </label>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 text-[#4a2e2b]" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem" }}>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b]" /> Social media
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b]" /> Google/Bing
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b]" /> Billboard
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b]" /> Radio
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b]" /> Direct Mailer
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer col-span-3 lg:col-span-3 flex-wrap">
                                        <input type="radio" name="source" className="w-4 h-4 accent-[#4a2e2b] shrink-0" /> <span className="shrink-0">Friend</span>
                                        <input type="text" className="h-[2rem] w-full max-w-[200px] rounded-full border-none outline-none px-3 text-sm font-sans bg-white ml-2" />
                                    </label>

                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="bg-[#5a403d] text-white rounded-xl px-10 py-3 hover:bg-[#4a2e2b] transition-colors duration-300"
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontSize: "1rem"
                                    }}
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Left Guy Image */}
            <img
                ref={guyRef}
                src="/image/krishna" // Assuming one of these images is the man smiling
                alt="Happy Patient"
                className="absolute bottom-0 left-[10%] w-[350px] max-w-[40%] object-contain pointer-events-none z-0"
                style={{
                    filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))"
                }}
            />

        </section>
    );
}

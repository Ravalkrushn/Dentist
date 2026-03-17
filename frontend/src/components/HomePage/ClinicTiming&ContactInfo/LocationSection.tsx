"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LocationSection() {
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

            tl.from(".loc-text", {
                opacity: 0,
                x: -40,
                duration: 1,
                ease: "power3.out"
            });

            tl.from(".loc-map", {
                opacity: 0,
                x: 40,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 overflow-hidden"
            style={{ backgroundColor: "#0097ab" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Left Side: Contact Info */}
                <div className="loc-text w-full md:w-1/3 flex flex-col items-start gap-12">
                    <h2
                        className="text-white"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                            fontWeight: 400,
                            lineHeight: 1.3,
                        }}
                    >
                        Location & Contact
                        <br />
                        Information
                    </h2>

                    <div className="flex flex-col gap-7">

                        {/* Phone */}
                        <div className="flex items-center gap-4 text-white">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <div className="flex flex-col">
                                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Phone</span>
                                <a href="tel:7195393145" className="text-white hover:text-white/80 transition-colors" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", fontWeight: 400 }}>
                                    719-539-3145
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4 text-white">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div className="flex flex-col">
                                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Address</span>
                                <a
                                    href="https://maps.google.com/?q=1222+C+Street,+Salida,+CO+81201"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:text-white/80 transition-colors"
                                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", fontWeight: 400 }}
                                >
                                    1222 C Street, Salida, CO 81201
                                </a>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="flex items-start gap-4 text-white">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <div className="flex flex-col">
                                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Opening Hours</span>
                                <span className="text-white" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", fontWeight: 400 }}>
                                    Mon – Fri: 8:00 AM – 5:00 PM
                                </span>
                                <span className="text-white/70" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.9rem" }}>
                                    Sat – Sun: Closed
                                </span>
                            </div>
                        </div>

                        {/* Quick Book Appointment Button */}
                        <div className="mt-2">
                            <a
                                href="/contact"
                                className="group relative overflow-hidden inline-flex rounded-full bg-white px-7 py-3 text-sm md:text-base font-semibold text-[#0097ab] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                            >
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                    Quick Book Appointment
                                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom rounded-full"></div>
                            </a>
                        </div>

                    </div>

                </div>

                {/* Right Side: Google Maps Iframe */}
                <div className="loc-map w-full md:w-2/3 flex justify-end">
                    <div className="w-full max-w-[800px] h-[450px] rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white">
                        <iframe
                            title="Dento Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.8454563814045!2d-106.002824!3d38.53503190000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87153b4786dca505%3A0xc07ce67bb17c76f4!2s1222%20C%20St%2C%20Salida%2C%20CO%2081201!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}

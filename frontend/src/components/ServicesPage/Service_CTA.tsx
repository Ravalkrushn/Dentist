"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function Service_CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            gsap.from(".cta-anim", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E2DED9] py-24 px-6 lg:px-28">
            <div className="max-w-4xl mx-auto bg-[#3b2a28] rounded-3xl p-14 text-center shadow-xl">
                <h2 className="cta-anim text-white text-4xl lg:text-5xl font-serif mb-6">
                    Ready to Book Your Treatment?
                </h2>
                <p className="cta-anim text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    Schedule a consultation today to discuss your treatment options with our expert team at Relaxation Dental.
                </p>
                <div className="cta-anim flex flex-col sm:flex-row gap-5 justify-center">
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden bg-[#0097ab] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <span className="relative z-10">Book Appointment</span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="group relative overflow-hidden border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#3b2a28]">
                            Call Now
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-white transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                    </a>
                </div>
            </div>
        </section>
    );
}

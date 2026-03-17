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
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-32 rounded-t-[5rem] -mt-12 z-20 relative overflow-hidden px-6 lg:px-12">
            <div className="max-w-4xl mx-auto bg-[#EADDD7] rounded-3xl p-14 text-center shadow-2xl relative overflow-hidden">
                {/* Subtle Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0097ab]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <h2 className="cta-anim text-[#3b2a28] text-4xl lg:text-5xl font-serif mb-6 relative z-10">
                    Ready to Book Your Treatment?
                </h2>
                <p className="cta-anim text-[#5a3a3a] text-lg leading-relaxed mb-10 max-w-2xl mx-auto relative z-10 font-[Lato]">
                    Schedule a consultation today to discuss your treatment options with our expert team at Relaxation Dental.
                </p>
                <div className="cta-anim flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                    <Link
                        href="/appointment"
                        className="group relative overflow-hidden bg-[#0097ab] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <span className="relative z-10">Book Appointment</span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="group relative overflow-hidden border-2 border-[#0097ab] text-[#0097ab] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0097ab] hover:text-white"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}

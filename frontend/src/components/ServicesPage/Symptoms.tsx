"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Symptoms({ symptoms }: { symptoms: { title: string; desc: string }[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#EADDD7] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Symptoms / When You Need It
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {symptoms.map((item, idx) => (
                    <div
                        key={idx}
                        className="symp-card bg-white p-8 rounded-2xl shadow-md border border-[#0097ab]/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="bg-[#0097ab] text-white font-bold w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-5 flex-shrink-0">
                            {idx + 1}
                        </div>
                        <h4 className="text-[#3b2a28] font-bold text-xl mb-3">{item.title}</h4>
                        <p className="text-[#5a3a3a] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

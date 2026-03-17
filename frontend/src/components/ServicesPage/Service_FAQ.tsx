"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Service_FAQ({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#EADDD7] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openIdx === idx;
                    return (
                        <div
                            key={idx}
                            className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0097ab]/10 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIdx(isOpen ? null : idx)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center gap-4 hover:bg-white/50 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0097ab] text-white flex items-center justify-center font-bold text-sm">
                                        {idx + 1}
                                    </span>
                                    <span className="text-[#3b2a28] font-bold text-lg">{faq.question}</span>
                                </div>
                                <span
                                    className={`text-[#0097ab] text-2xl font-bold flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-8 pb-6 pt-2 text-[#5a3a3a] text-lg leading-relaxed border-t border-[#0097ab] border-opacity-20 ml-8 mr-8">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Banknote, ShieldCheck, CheckCircle2, CreditCard, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Cost_Info({
    costDetails,
}: {
    costDetails: { info: string; isCoveredByInsurance: boolean };
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-24 z-20 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center text-white">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] inline-block border-b-4 border-white pb-2">
                    Cost Information
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Cost Details */}
                <div className="cost-card group bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#0097ab] flex items-center justify-center transition-all duration-500 shadow-sm overflow-hidden border border-white/20">
                            <Image
                                src="/image/affordable.png"
                                alt="Cost"
                                width={32}
                                height={32}
                                className="brightness-0 invert"
                            />
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">
                            Pricing Details
                        </h3>
                    </div>
                
                    <p className="text-[#3b2a28] text-xl font-bold leading-relaxed mb-8">
                        {costDetails.info}
                    </p>
                
                    <div className="space-y-4 pt-8 border-t border-gray-100 flex-1">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                            <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                <span className="font-bold text-[#3b2a28]">No Hidden Charges:</span> Every procedure is itemized for full clarity before we start.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                            <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                <span className="font-bold text-[#3b2a28]">Insurance Assistance:</span> We help you navigate and maximize your coverage benefits.
                            </p>
                        </div>
                    </div>
                
                    <div className="mt-8 flex items-center gap-3">
                        <p className="text-[#0097ab] font-bold uppercase tracking-widest text-xs">
                            Transparent & Fair Pricing
                        </p>
                    </div>
                </div>

                 {/* Consultation & Planning */}
                <div className="cost-card group bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-white/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#0097ab] flex items-center justify-center transition-all duration-500 shadow-sm overflow-hidden border border-white/20">
                            <Image
                                src="/image/confidence.png"
                                alt="Consultation"
                                width={32}
                                height={32}
                                className="brightness-0 invert"
                            />
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">
                            Professional Consultation
                        </h3>
                    </div>

                    <div className="space-y-6 flex-1">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                                <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                    <span className="font-bold text-[#3b2a28]">Clinical Assessment:</span> Detailed evaluation of your unique dental health and needs.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                                <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                    <span className="font-bold text-[#3b2a28]">Personalized Plan:</span> Tailored treatments designed specifically for your smile goals.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                                <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                    <span className="font-bold text-[#3b2a28]">Clear Estimate:</span> Honest, itemized costs provided upfront with no hidden surprises.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#0097ab] mt-2.5" />
                                <p className="text-[#3b2a28]/80 font-medium leading-relaxed">
                                    <span className="font-bold text-[#3b2a28]">Expert Guidance:</span> Professional advice on the best long-term solutions for your oral health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

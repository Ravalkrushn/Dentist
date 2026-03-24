"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Banknote, ShieldCheck, CheckCircle2, CreditCard } from "lucide-react";

export default function Cost_Info({
    costDetails,
}: {
    costDetails: { info: string; isCoveredByInsurance: boolean };
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-24 z-20 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">
                    Cost Information
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Cost Details */}
                <div className="cost-card group bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-[#0097ab]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#0097ab]/10 text-[#0097ab] flex items-center justify-center group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-500 shadow-sm">
                            <Banknote size={28} />
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">
                            Pricing Details
                        </h3>
                    </div>
                    
                    <p className="text-[#3b2a28] text-xl font-bold leading-relaxed mb-6">
                        {costDetails.info}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-[#0097ab]" />
                        <p className="text-[#0097ab] font-bold uppercase tracking-widest text-xs">
                            Transparent & Fair Pricing
                        </p>
                    </div>
                </div>

                {/* Insurance Info */}
                <div className="cost-card group bg-white p-10 rounded-3xl shadow-sm border border-transparent hover:border-[#0097ab]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-[#0097ab]/10 text-[#0097ab] flex items-center justify-center group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-500 shadow-sm">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">
                            Insurance Coverage
                        </h3>
                    </div>

                    {costDetails.isCoveredByInsurance ? (
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-[#0097ab]/5 p-4 rounded-2xl border border-[#0097ab]/10">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0097ab] text-white flex items-center justify-center shadow-md">
                                    <CheckCircle2 size={20} />
                                </div>
                                <p className="text-[#3b2a28] font-bold text-lg">
                                    Generally Covered by Insurance
                                </p>
                            </div>
                            <p className="text-[#3b2a28]/70 leading-relaxed font-medium">
                                Most major dental insurance plans cover this treatment. Contact our office to verify your specific coverage and out-of-pocket costs.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-[#3b2a28]/5 p-4 rounded-2xl border border-[#3b2a28]/10">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3b2a28] text-white flex items-center justify-center shadow-md">
                                    <CreditCard size={20} />
                                </div>
                                <p className="text-[#3b2a28] font-bold text-lg">
                                    Flexible Payment Options
                                </p>
                            </div>
                            <p className="text-[#3b2a28]/70 leading-relaxed font-medium">
                                This treatment may not be covered by all insurance plans. We offer flexible payment options and financing to make your care affordable.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

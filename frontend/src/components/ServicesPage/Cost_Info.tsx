"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Cost_Info({
    costDetails,
}: {
    costDetails: { info: string; isCoveredByInsurance: boolean };
}) {
    const sectionRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-24 rounded-t-[5rem] -mt-12 z-20 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">
                    Cost Information
                </h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Cost Details */}
                <div className="cost-card bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-3xl font-serif text-[#3b2a28] mb-6 border-b-2 border-[#0097ab] inline-block pb-2">
                        Pricing Details
                    </h3>
                    <p className="text-[#5a3a3a] text-lg leading-relaxed mb-8">{costDetails.info}</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-1 bg-[#0097ab] rounded-full" />
                        <p className="text-[#0097ab] font-bold uppercase tracking-widest text-sm">
                            Transparent & Fair Pricing
                        </p>
                    </div>
                </div>

                {/* Insurance Info */}
                <div className="cost-card bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-3xl font-serif text-[#3b2a28] mb-6 border-b-2 border-[#0097ab] inline-block pb-2">
                        Insurance Coverage
                    </h3>
                    {costDetails.isCoveredByInsurance ? (
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0097ab] text-white flex items-center justify-center font-bold text-xl">
                                    ✓
                                </span>
                                <p className="text-[#3b2a28] font-bold text-xl">
                                    Generally Covered by Insurance
                                </p>
                            </div>
                            <p className="text-[#5a3a3a] leading-relaxed">
                                Most major dental insurance plans cover this treatment. Contact our office to verify your specific coverage and out-of-pocket costs.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-[#5a3a3a] text-lg leading-relaxed mb-6">
                                This treatment may not be covered by all insurance plans. We offer flexible payment options and financing to make your care affordable.
                            </p>
                            <span className="inline-block bg-[#0097ab] text-white text-sm font-bold px-5 py-2 rounded-full uppercase tracking-widest">
                                Payment Plans Available
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

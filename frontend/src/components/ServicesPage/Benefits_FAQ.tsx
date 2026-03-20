"use client";
import { useState } from "react";
import { CheckCircle2, Sparkles, Plus, Minus } from "lucide-react";

interface Benefits_FAQ_Props {
    benefits: string[];
    faqs: { question: string; answer: string }[];
}

export default function Benefits_FAQ({ benefits, faqs }: Benefits_FAQ_Props) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="w-full bg-[#EADDD7] py-24 px-6 lg:px-28 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Benefits Section (Left) */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-10">
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className="text-[#3b2a28] text-3xl lg:text-4xl font-serif leading-tight text-center lg:text-left">
                                Benefits of <span className="italic">Treatment</span>
                            </h2>
                            <div className="w-40 h-[2px] bg-[#3b2a28] mt-4 rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, idx) => (
                                <div 
                                    key={idx}
                                    className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-white/50 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                >
                                    <div className="w-10 h-10 rounded-2xl bg-[#0097ab]/10 flex items-center justify-center text-[#0097ab] group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-500 shrink-0">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <p className="text-[#3b2a28] font-bold text-lg leading-tight pt-2">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section (Right) */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-10">
                        <div className="flex flex-col items-center lg:items-end">
                            <h2 className="text-[#3b2a28] text-3xl lg:text-4xl font-serif leading-tight text-center lg:text-right">
                                Common <span className="italic text-[#3b2a28]">Questions</span>
                            </h2>
                            <div className="w-40 h-[2px] bg-[#3b2a28] mt-4 rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => {
                                const isOpen = openIdx === idx;
                                return (
                                    <div 
                                        key={idx}
                                        className={`bg-white rounded-[2.5rem] transition-all duration-500 overflow-hidden border ${isOpen ? 'border-[#0097ab] shadow-2xl' : 'border-transparent shadow-sm'}`}
                                    >
                                        <button 
                                            onClick={() => setOpenIdx(isOpen ? null : idx)}
                                            className="w-full text-left px-10 pt-8 pb-5 flex items-center justify-between gap-6"
                                        >
                                            <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#0097ab]' : 'text-[#3b2a28]'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#0097ab] text-white rotate-[135deg]' : 'bg-[#EADDD7]/30 text-[#0097ab]'}`}>
                                                <Plus size={24} />
                                            </div>
                                        </button>
                                        
                                        <div 
                                            className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="px-10 pb-8 text-[#3b2a28]/70 text-lg leading-relaxed font-[Lato]">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

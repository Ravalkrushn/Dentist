"use client";
import { ShieldCheck, Wind, Cpu, Zap } from "lucide-react";

export default function WhyChooseDento() {
    return (
        <section className="bg-[#EADDD7] py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Photo */}
                <div className="relative group">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden transform transition-all duration-700">
                        <img
                            src="/image/ABOUT2.png"
                            alt="Why Choose Us"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-[Playfair_Display] text-[#3b2a28] leading-tight">
                        Why Choose <span className="italic text-[#0097ab]">Dento?</span>
                    </h2>

                    <div className="space-y-8">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-6 group">
                            <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab] border border-[#0097ab]/10 group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-300">
                                <ShieldCheck size={32} strokeWidth={1.5} />
                            </div>
                            <p className="text-[#3b2a28] text-lg font-[Lato] tracking-wide">Comprehensive family and cosmetic dentistry</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-6 group">
                            <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab] border border-[#0097ab]/10 group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-300">
                                <Wind size={32} strokeWidth={1.5} />
                            </div>
                            <p className="text-[#3b2a28] text-lg font-[Lato] tracking-wide">Comfort-focused care with sedation options</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-6 group">
                            <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab] border border-[#0097ab]/10 group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-300">
                                <Cpu size={32} strokeWidth={1.5} />
                            </div>
                            <p className="text-[#3b2a28] text-lg font-[Lato] tracking-wide">Advanced technology for precise and gentle treatment</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-6 group">
                            <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab] border border-[#0097ab]/10 group-hover:bg-[#0097ab] group-hover:text-white transition-all duration-300">
                                <Zap size={32} strokeWidth={1.5} />
                            </div>
                            <p className="text-[#3b2a28] text-lg font-[Lato] tracking-wide">Emergency dental services available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

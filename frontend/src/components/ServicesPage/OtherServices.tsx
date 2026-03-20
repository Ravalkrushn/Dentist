"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

export default function OtherServices({ currentId }: { currentId: string }) {
    // Get related services (excluding current one)
    const otherServices = servicesData
        .filter(s => s.id !== currentId)
        .slice(0, 2);

    return (
        <section className="w-full pb-32 bg-[#EADDD7] px-6 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 gap-8 border-t border-[#3b2a28]/10 pt-20">
                    <div className="flex flex-col items-center text-center">
                        <h4 className="text-[#3b2a28] text-4xl md:text-5xl font-serif mb-4">Explore More Services</h4>
                        <div className="w-40 h-[2px] bg-[#3b2a28] mb-6 rounded-full"></div>
                        <p className="text-[#3b2a28]/60 font-[Lato] text-xl max-w-2xl">Discover our comprehensive range of specialized dental treatments.</p>
                    </div>
                    <Link href="/services" className="md:absolute md:right-0 md:bottom-2 text-[#0097ab] font-bold text-sm tracking-widest uppercase border-b-2 border-[#0097ab] pb-2 hover:text-[#3b2a28] hover:border-[#3b2a28] transition-all duration-300">
                        ALL SERVICES
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
                        {otherServices.map((service, i) => (
                            <Link 
                                key={i} 
                                href={`/services/${service.id}`}
                                className="group/card bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-4 flex flex-col h-max"
                            >
                                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative">
                                    <img 
                                        src={service.heroImage} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-110" 
                                    />
                                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                                        <span className="text-[#0097ab] font-bold text-[10px] uppercase tracking-widest">Specialist Care</span>
                                    </div>
                                </div>
                                
                                <div className="p-8 md:p-10 flex flex-col">
                                    <h5 className="text-[#3b2a28] text-2xl font-serif font-bold mb-4 group-hover/card:text-[#0097ab] transition-colors line-clamp-1 leading-tight">
                                        {service.title}
                                    </h5>
                                    
                                    <p className="text-[#3b2a28]/60 font-[Lato] text-base line-clamp-2 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="border-t border-[#3b2a28]/5 pt-6 flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-[#0097ab] font-bold text-[11px] tracking-[0.2em] group-hover/card:gap-5 transition-all duration-500">
                                            VIEW TREATMENT DETAILS <ArrowRight size={14} />
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-[#0097ab]/20 flex items-center justify-center text-[#0097ab] transform group-hover/card:rotate-[360deg] transition-all duration-1000">
                                            <Sparkles size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
    );
}

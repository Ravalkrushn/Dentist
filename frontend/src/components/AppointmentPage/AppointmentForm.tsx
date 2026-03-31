"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Phone, Clock, Mail, Calendar, User, MessageSquare, Sparkles, Star } from "lucide-react";

export default function AppointmentForm() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animations removed for immediate, non-blurry visibility
    }, []);

    const services = [
        "Teeth Cleaning",
        "Root Canal Treatment",
        "Dental Implants",
        "Orthodontics (Braces)",
        "Smile Makeover",
        "Wisdom Tooth Extraction",
        "Pediatric Dentistry",
        "Teeth Whitening"
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-[#0097ab] px-6 lg:px-12 rounded-t-[5rem] -mt-12 relative z-10 transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto appointment-grid">
                <div className="grid lg:grid-cols-12 gap-10 items-stretch">
                    
                    {/* Left Side: Info & Emergency */}
                    <div className="lg:col-span-4 h-full flex flex-col">
                        <h2 className="text-4xl font-[Playfair_Display] text-[#eaddd7] mb-6 flex items-center gap-3 shrink-0">
                            <Sparkles className="text-[#eaddd7]" size={24} /> 
                            Immediate Support
                        </h2>
                        
                        <div className="flex-1 flex flex-col gap-4 h-full">
                                {/* Phone Box */}
                                <div className="info-box flex-1 bg-white p-8 rounded-[2rem] shadow-xl border border-white/20 flex flex-col justify-center">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-[#0097ab]/10 p-4 rounded-xl text-[#0097ab]">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest mb-1">Emergency 24/7</p>
                                            <a href="tel:7195393145" className="text-xl font-bold text-[#3b2a28] hover:text-[#0097ab] transition-colors">719-539-3145</a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#3b2a28]/70 leading-relaxed font-[Lato]">
                                        Our emergency team is always on standby. If you're experiencing severe pain, call us immediately for priority care.
                                    </p>
                                </div>

                                {/* Email Box */}
                                <div className="info-box flex-1 bg-white p-8 rounded-[2rem] shadow-xl border border-white/20 flex flex-col justify-center">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-[#0097ab]/10 p-4 rounded-xl text-[#0097ab]">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest mb-1">Support Email</p>
                                            <a href="mailto:info@relaxationdds.com" className="text-lg font-bold text-[#3b2a28] hover:text-[#0097ab] transition-colors break-all">info@relaxationdds.com</a>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#3b2a28]/70 leading-relaxed font-[Lato]">
                                        For records, insurance queries, or non-urgent questions, drop us a line. We respond to all emails within 24 hours.
                                    </p>
                                </div>

                                {/* Hours Box */}
                                <div className="info-box flex-1 bg-white p-8 rounded-[2rem] shadow-xl border border-white/20 flex flex-col justify-center">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="bg-[#0097ab]/10 p-4 rounded-xl text-[#0097ab]">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest mb-1">Operation Hours</p>
                                            <p className="text-lg font-bold text-[#3b2a28]">Mon – Thu: 8 AM – 5 PM</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-[#3b2a28] italic font-semibold">Fri – Sun: Emergency Only</p>
                                        <p className="text-sm text-[#3b2a28]/70 leading-relaxed font-[Lato]">
                                            Plan your visit during our regular hours for comprehensive checkups and specialized treatments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Appointment Card */}
                    <div className="lg:col-span-8">
                        <div className="appointment-card bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/50">
                            {/* Accent Circles */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0097ab]/10 rounded-full" />
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FBF8F7] rounded-full" />
                            
                            <div className="mb-12 relative z-10">
                                <h3 className="text-4xl font-[Playfair_Display] text-[#3b2a28] mb-4">Consultation <span className="italic text-[#0097ab]">Booking</span></h3>
                                <p className="text-[#3b2a28]/60 font-[Lato]">Fill in your details and we'll confirm your slot shortly.</p>
                            </div>
                            
                            <form className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <User size={14} className="text-[#0097ab]" /> Full Name
                                        </label>
                                        <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 focus:ring-0 shadow-sm transition-all outline-none placeholder:text-[#3b2a28]/40" />
                                    </div>
                                    
                                    {/* Phone */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <Phone size={14} className="text-[#0097ab]" /> Phone
                                        </label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 focus:ring-0 shadow-sm transition-all outline-none placeholder:text-[#3b2a28]/40" />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <Mail size={14} className="text-[#0097ab]" /> Email
                                        </label>
                                        <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 focus:ring-0 shadow-sm transition-all outline-none placeholder:text-[#3b2a28]/40" />
                                    </div>

                                    {/* Service */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <Star size={14} className="text-[#0097ab]" /> Treatment
                                        </label>
                                        <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 shadow-sm outline-none appearance-none cursor-pointer text-[#3b2a28]/60">
                                            <option value="" className="text-[#3b2a28]/40">Select Treatment</option>
                                            {services.map(s => <option key={s} value={s} className="text-[#3b2a28]">{s}</option>)}
                                        </select>
                                    </div>

                                    {/* Date */}
                                    <div className="space-y-3 md:col-span-2">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <Calendar size={14} className="text-[#0097ab]" /> Preferred Date
                                        </label>
                                        <input type="date" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 shadow-sm outline-none" />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-3 md:col-span-2">
                                        <label className="flex items-center gap-2 text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">
                                            <MessageSquare size={14} className="text-[#0097ab]" /> Special Concerns
                                        </label>
                                        <textarea rows={4} placeholder="Anything else we should know?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-[#0097ab]/40 shadow-sm outline-none resize-none placeholder:text-[#3b2a28]/40"></textarea>
                                    </div>
                                </div>

                                <button className="w-full group relative overflow-hidden bg-[#0097ab] text-white py-6 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg shadow-[#0097ab]/20 hover:-translate-y-1 hover:shadow-xl">
                                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-[0.1em] uppercase">
                                        Confirm Reservation <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
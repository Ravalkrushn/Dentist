"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Phone, Clock, Mail } from "lucide-react";

export default function AppointmentForm() {
    const sectionRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        // Entrance animations removed to ensure immediate visibility
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
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Side: Contact Info & Emergency */}
                    <div className="lg:col-span-4 space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif text-[#4a2e2b] mb-8">Quick Reach</h2>
                            <div className="space-y-6">
                                <div className="info-item relative overflow-hidden flex items-start gap-4 p-6 rounded-2xl border-2 border-[#0097ab]/20 bg-white group transition-all duration-300 hover:-translate-y-1 hover:border-[#0097ab] hover:shadow-xl hover:shadow-[#0097ab]/20">
                                    <div className="relative z-10 p-3 bg-[#fcf9f7] rounded-xl shadow-sm text-[#0097ab] transition-colors duration-300 group-hover:bg-white">
                                        <Phone size={24} />
                                    </div>
                                    <div className="relative z-10 transition-colors duration-300">
                                        <p className="text-sm text-[#5a3a3a] font-semibold mb-1 group-hover:text-white/90">Emergency 24/7</p>
                                        <a href="tel:7195393145" className="text-xl font-bold text-[#0097ab] group-hover:text-white transition-colors duration-300">719-539-3145</a>
                                    </div>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                                </div>

                                <div className="info-item relative overflow-hidden flex items-start gap-4 p-6 rounded-2xl border-2 border-[#0097ab]/20 bg-white group transition-all duration-300 hover:-translate-y-1 hover:border-[#0097ab] hover:shadow-xl hover:shadow-[#0097ab]/20">
                                    <div className="relative z-10 p-3 bg-[#fcf9f7] rounded-xl shadow-sm text-[#0097ab] transition-colors duration-300 group-hover:bg-white">
                                        <Mail size={24} />
                                    </div>
                                    <div className="relative z-10 transition-colors duration-300">
                                        <p className="text-sm text-[#5a3a3a] font-semibold mb-1 group-hover:text-white/90">Support Email</p>
                                        <a href="mailto:info@relaxationdds.com" className="text-lg font-bold text-[#0097ab] group-hover:text-white transition-colors duration-300">info@relaxationdds.com</a>
                                    </div>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                                </div>

                                <div className="info-item relative overflow-hidden flex items-start gap-4 p-6 rounded-2xl border-2 border-[#0097ab]/20 bg-white group transition-all duration-300 hover:-translate-y-1 hover:border-[#0097ab] hover:shadow-xl hover:shadow-[#0097ab]/20">
                                    <div className="relative z-10 p-3 bg-[#fcf9f7] rounded-xl shadow-sm text-[#0097ab] transition-colors duration-300 group-hover:bg-white">
                                        <Clock size={24} />
                                    </div>
                                    <div className="relative z-10 transition-colors duration-300">
                                        <p className="text-sm text-[#5a3a3a] font-semibold mb-1 group-hover:text-white/90">Working Hours</p>
                                        <p className="text-lg font-bold text-[#0097ab] group-hover:text-white transition-colors duration-300">Mon – Thu: 8 AM – 5 PM</p>
                                        <p className="text-sm text-[#5a3a3a] group-hover:text-white/70 italic transition-colors">Fri – Sun: Restricted / Emergency Only</p>
                                    </div>
                                    <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Appointment Form */}
                    <div className="lg:col-span-8">
                        <div ref={formRef} className="form-card bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#eaddd7]/50 border border-[#eaddd7]/50 relative overflow-hidden">
                            {/* Decorative Form BG */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0097ab]/5 rounded-bl-[100px]" />
                            
                            <h3 className="text-3xl font-serif text-[#4a2e2b] mb-10 relative z-10">Consultation Form</h3>
                            
                            <form className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div className="input-group">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b] placeholder:opacity-30"
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b] placeholder:opacity-30"
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b] placeholder:opacity-30"
                                    />
                                </div>

                                <div className="input-group">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Select Service</label>
                                    <select className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b] appearance-none cursor-pointer">
                                        <option value="">Choose Treatment</option>
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div className="input-group md:col-span-2">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Preferred Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b]"
                                    />
                                </div>

                                <div className="input-group md:col-span-2">
                                    <label className="block text-xs uppercase tracking-widest text-[#5a3a3a] mb-3 font-semibold">Message</label>
                                    <textarea 
                                        rows={4}
                                        placeholder="Tell us about your dental concerns..."
                                        className="w-full bg-[#fcf9f7] border-b-2 border-[#eaddd7] py-4 px-2 focus:border-[#0097ab] focus:outline-none transition-colors text-[#4a2e2b] resize-none placeholder:opacity-30"
                                    />
                                </div>

                                <div className="input-group md:col-span-2">
                                    <button className="group relative w-full overflow-hidden bg-[#0097ab] text-[#eaddd7] py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-lg shadow-[#0097ab]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0097ab]/40 active:scale-95">
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Confirm Appointment
                                            <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </span>
                                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

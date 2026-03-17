"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    MapPin,
    Phone,
    Clock,
    MessageCircle,
    Send,
    Instagram,
    Facebook,
    Linkedin,
    ArrowRight,
    Star,
    ShieldCheck,
    Wind,
    Cpu,
    Zap
} from "lucide-react";

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            gsap.from(".contact-header > *", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Info cards animation removed for static display as requested


            gsap.from(".form-section", {
                scrollTrigger: {
                    trigger: ".contact-main",
                    start: "top 80%",
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".map-section", {
                scrollTrigger: {
                    trigger: ".contact-main",
                    start: "top 80%",
                },
                opacity: 0,
                x: 50,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-full bg-[#EADDD7]">
            {/* 1. Hero Section - Background #EADDD7 */}
            <section className="bg-[#EADDD7] h-[580px] px-6 lg:px-12 text-center relative overflow-hidden">
                {/* Decorative Orbs to match other heroes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097ab]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2a28]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="max-w-4xl mx-auto contact-header w-full pt-[180px] relative z-10">
                    <h1 className="text-5xl md:text-7xl font-[Playfair_Display] text-[#3b2a28] mb-6 leading-tight">
                        Let's Start a <span className="italic text-[#0097ab]">Conversation.</span>
                    </h1>
                    <p className="text-[#3b2a28]/70 text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed">
                        Have questions or ready to schedule your appointment? We're here to help you achieve the smile of your dreams.
                    </p>
                </div>
            </section>

            {/* 2. Info Cards Section - Background #0097AB */}
            <section className="bg-[#0097AB] py-24 px-6 lg:px-12 rounded-t-[5rem] -mt-12 relative z-10 transition-colors duration-500">
                <div className="max-w-[1400px] mx-auto">
                    <div className="info-grid grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Address */}
                        <div className="info-card h-full bg-white rounded-[2rem] shadow-xl flex flex-col items-center text-center overflow-hidden border border-white/20">
                            <div className="flex-1 w-full px-6 pt-10 pb-8 flex flex-col items-center gap-5">
                                <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab]">
                                    <MapPin size={30} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[#3b2a28] text-lg font-bold mb-2 font-[Playfair_Display]">Our Location</h3>
                                    <p className="text-[#3b2a28] font-[Lato] text-sm leading-relaxed">1222 C Street, Salida, CO 81201</p>
                                </div>
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#0097ab]/20 to-transparent" />
                        </div>

                        {/* Phone */}
                        <div className="info-card h-full bg-white rounded-[2rem] shadow-xl flex flex-col items-center text-center overflow-hidden border border-white/20">
                            <div className="flex-1 w-full px-6 pt-10 pb-8 flex flex-col items-center gap-5">
                                <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab]">
                                    <Phone size={30} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[#3b2a28] text-lg font-bold mb-2 font-[Playfair_Display]">Call Us</h3>
                                    <a href="tel:7195393145" className="text-[#3b2a28] font-[Lato] text-sm hover:text-[#0097ab] transition-colors font-bold tracking-wider">719-539-3145</a>
                                </div>
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#0097ab]/20 to-transparent" />
                        </div>

                        {/* WhatsApp */}
                        <div className="info-card h-full bg-white rounded-[2rem] shadow-xl flex flex-col items-center text-center overflow-hidden border border-white/20">
                            <div className="flex-1 w-full px-6 pt-10 pb-8 flex flex-col items-center gap-5">
                                <div className="bg-[#25D366]/10 p-5 rounded-2xl text-[#25D366]">
                                    <MessageCircle size={30} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[#3b2a28] text-lg font-bold mb-2 font-[Playfair_Display]">WhatsApp</h3>
                                    <a href="https://wa.me/7195393145" target="_blank" rel="noopener noreferrer" className="text-[#3b2a28] font-[Lato] text-sm hover:text-[#25D366] transition-colors underline decoration-dotted underline-offset-4 flex items-center justify-center gap-2 font-bold">Chat With Us <ArrowRight size={14} /></a>
                                </div>
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent" />
                        </div>

                        {/* Timing */}
                        <div className="info-card h-full bg-white rounded-[2rem] shadow-xl flex flex-col items-center text-center overflow-hidden border border-white/20">
                            <div className="flex-1 w-full px-6 pt-10 pb-8 flex flex-col items-center gap-5">
                                <div className="bg-[#0097ab]/10 p-5 rounded-2xl text-[#0097ab]">
                                    <Clock size={30} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-[#3b2a28] text-lg font-bold mb-2 font-[Playfair_Display]">Working Hours</h3>
                                    <div className="text-[#3b2a28] font-[Lato] text-sm space-y-0.5">
                                        <p>Mon - SAT: 8 AM – 5 PM</p>
                                        <p>SUN: Closed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#0097ab]/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. Form Section - Background #EADDD7 */}
            <section className="contact-main bg-[#0097AB] py-24 px-6 lg:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Form */}
                    <div className="form-section bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-white/20">
                        <div className="mb-10">
                            <h2 className="text-4xl font-[Playfair_Display] text-[#3b2a28] mb-4">Send Us a <span className="italic text-[#0097ab]">Message</span></h2>
                            <p className="text-[#3b2a28]/60 font-[Lato]">Our team usually responds within one business day.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">Full Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#0097ab]/40 focus:ring-0 shadow-sm transition-all outline-none placeholder:text-[#3b2a28]/40" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">Email Address</label>
                                    <input type="email" placeholder="email@address.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#0097ab]/40 focus:ring-0 shadow-sm transition-all outline-none placeholder:text-[#3b2a28]/40" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">Select Service</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#0097ab]/40 shadow-sm outline-none appearance-none cursor-pointer text-[#3b2a28]/60">
                                    <option className="text-[#3b2a28]/40">General Inquiry</option>
                                    <option className="text-[#3b2a28]">Appointment Request</option>
                                    <option className="text-[#3b2a28]">Emergency Care</option>
                                    <option className="text-[#3b2a28]">Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#3b2a28] uppercase tracking-widest ml-1">Message</label>
                                <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:border-[#0097ab]/40 shadow-sm outline-none resize-none placeholder:text-[#3b2a28]/40"></textarea>
                            </div>

                            <button className="w-full group relative overflow-hidden bg-[#0097ab] text-white py-5 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 z-0 h-full w-full scale-x-0 transform bg-[#3b2a28] transition-transform duration-500 group-hover:scale-x-100 origin-left"></div>
                            </button>
                        </form>
                    </div>

                    {/* Map & Social */}
                    <div className="map-section flex flex-col gap-6">
                        <div className="bg-white p-4 rounded-[3rem] shadow-2xl h-[450px] lg:h-[550px] overflow-hidden border-8 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3654441315516!2d-106.00030568466052!3d38.53676797962803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x871578508eb9419b%3A0xe7f9f257b4587391!2s1222%20C%20St%2C%20Salida%2C%20CO%2081201%2C%20USA!5e0!3m2!1sen!2sin!4v1710321234567!5m2!1sen!2sin"
                                className="w-full h-full rounded-[2.5rem]"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            />
                        </div>

                        <div className="bg-white p-8 rounded-[3rem] text-[#3b2a28] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group border border-slate-100">
                            <div className="flex items-center gap-4 relative z-10">
                                <Star size={24} className="text-[#0097ab]" fill="#0097ab" />
                                <span className="font-[Playfair_Display] text-xl font-bold">Follow our smiles on Socials</span>
                            </div>
                            <div className="flex gap-4 relative z-10">
                                <a href="#" className="w-12 h-12 rounded-full border border-[#3b2a28]/20 flex items-center justify-center hover:bg-[#0097ab] hover:text-white transition-all"><Instagram size={22} /></a>
                                <a href="#" className="w-12 h-12 rounded-full border border-[#3b2a28]/20 flex items-center justify-center hover:bg-[#0097ab] hover:text-white transition-all"><Facebook size={22} /></a>
                                <a href="#" className="w-12 h-12 rounded-full border border-[#3b2a28]/20 flex items-center justify-center hover:bg-[#0097ab] hover:text-white transition-all"><Linkedin size={22} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
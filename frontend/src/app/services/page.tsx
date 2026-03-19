"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Footer from "@/components/Footer/Footer";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ServicesPage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        
        tl.fromTo(titleRef.current, 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
        )
        .fromTo(descRef.current, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1 }, 
            "-=0.8"
        );
    }, []);

    return (
        <main className="min-h-screen bg-[#EADDD7]">
            <MainNavbar />

            {/* Header Section - Styled like Appointment/Gallery */}
            <section className="relative h-[400px] overflow-hidden bg-[#EADDD7] flex flex-col pt-12">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full z-20">
                    <Breadcrumbs 
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Services", href: "/services", active: true }
                        ]} 
                    />
                </div>
                {/* Decorative Orbs to match Appointment page style */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097ab]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b2a28]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-[1400px] mx-auto text-center relative z-10 px-6 w-full flex flex-col pt-4">
                    <h1 
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-[Playfair_Display] text-[#3b2a28] mb-6 leading-tight opacity-0 font-black"
                    >
                        Our <span className="italic text-[#0097ab]">Services.</span>
                    </h1>
                    <p 
                        ref={descRef}
                        className="text-[#3b2a28]/70 font-[Lato] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 font-medium"
                    >
                        Comprehensive dental care tailored to your specific needs. From routine cleanings to complete smile makeovers, we ensure a comfortable and professional experience.
                    </p>
                </div>
            </section>

            {/* Services Grid Section - Now Teal with Curve */}
            <section className="relative bg-[#0097ab] py-24 rounded-t-[5rem] -mt-12 z-20">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                        {servicesData.map((service) => (
                            <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="group block bg-white rounded-[2rem] shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-white/10"
                            >
                                <div className="w-full h-64 overflow-hidden relative">
                                    <img
                                        src={service.heroImage}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0097ab]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                        <span className="text-white font-[Lato] tracking-widest uppercase text-xs font-bold px-4 py-2 border border-white rounded-full">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-[Playfair_Display] text-[#3b2a28] mb-3 group-hover:text-[#0097ab] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#3b2a28]/70 font-[Lato] text-base leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Service_Hero({ title, image }: { title: string, image: string }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-content > *", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[400px] flex flex-col pt-12 overflow-hidden bg-[#EADDD7]">
            <div className="max-w-[1400px] mx-auto w-full z-20 px-6 lg:px-12">
                <Breadcrumbs 
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: title, href: "#", active: true }
                    ]} 
                />
            </div>


            <div className="max-w-4xl mx-auto text-center relative z-10 px-6 hero-content flex flex-col pt-4">
                <h1 className="text-5xl md:text-6xl font-[Playfair_Display] text-[#3b2a28] mb-6 leading-tight font-black">
                    {title.split(' ')[0]} <span className="italic text-[#0097ab]">{title.split(' ').slice(1).join(' ')}.</span>
                </h1>
                
                <p className="text-[#3b2a28]/70 text-lg md:text-xl font-[Lato] max-w-2xl mx-auto leading-relaxed font-medium">
                    Personalized care and advanced techniques for your dental needs. 
                    Experience a stress-free journey to a healthier smile.
                </p>
            </div>
        </section>
    );
}

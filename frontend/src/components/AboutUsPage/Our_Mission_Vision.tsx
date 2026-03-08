"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const missionPoints = [
    { title: "Patient-Centered Care", desc: "Every treatment plan is tailored to the individual. We listen first, and treat second — because your comfort and confidence matter most." },
    { title: "Pain-Free Commitment", desc: "We specialize in gentle, sedation-assisted dentistry so that fear or anxiety never stands between you and a healthy smile." }
];

const visionPoints = [
    { title: "Modern Dentistry", desc: "We invest in the latest digital imaging, laser dentistry, and same-day CEREC crowns to deliver precision care at the forefront of the field." },
    { title: "Sustainable Practice", desc: "We embrace eco-conscious practices — from paperless records to reduced-waste sterilization — because a healthy community requires a healthy planet." }
];

export default function OurMissionVision() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Mission cards animation
            gsap.from(".mission-card", {
                scrollTrigger: {
                    trigger: ".mission-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Vision cards animation
            gsap.from(".vision-card", {
                scrollTrigger: {
                    trigger: ".vision-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: 30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">Mission & Vision</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="mission-section bg-[#E2DED9] p-10 rounded-3xl border border-white border-opacity-20 shadow-md">
                    <h3 className="text-3xl font-serif text-[#0097ab] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Our Mission</h3>
                    <div className="space-y-6">
                        {missionPoints.map((pt, i) => (
                            <div key={i} className="mission-card bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="text-[#0097ab] font-bold text-xl mb-2">{pt.title}</h4>
                                <p className="text-[#5a3a3a] leading-relaxed">{pt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vision-section bg-[#E2DED9] p-10 rounded-3xl border border-white border-opacity-20 shadow-md">
                    <h3 className="text-3xl font-serif text-[#0097ab] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Our Vision</h3>
                    <div className="space-y-6">
                        {visionPoints.map((pt, i) => (
                            <div key={i} className="vision-card bg-white p-6 rounded-2xl shadow-sm">
                                <h4 className="text-[#0097ab] font-bold text-xl mb-2">{pt.title}</h4>
                                <p className="text-[#5a3a3a] leading-relaxed">{pt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const awards = [
    { year: "2023", title: "Best Dental Practice", org: "Colorado Health Awards" },
    { year: "2022", title: "Top Sedation Dentist", org: "DOCS Education Excellence" },
    { year: "2021", title: "Patient's Choice Award", org: "Healthgrades" }
];

const associations = [
    { name: "American Dental Association", role: "Active Member", desc: "The nation's largest and most trusted dental organization." },
    { name: "Academy of General Dentistry", role: "Fellow", desc: "Demonstrating elite commitment to continuous dental excellence." },
    { name: "DOCS Education", role: "Certified Instructor", desc: "Leaders in sedation dentistry training for anxious patients." },
    { name: "Invisalign Provider Network", role: "Certified Provider", desc: "Delivering clear aligner results backed by Align Technology." }
];

export default function AchievementsCertifications() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Awards stagger
            gsap.from(".award-card", {
                scrollTrigger: {
                    trigger: ".awards-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Associations stagger
            gsap.from(".assoc-card", {
                scrollTrigger: {
                    trigger: ".assoc-section",
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
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">Achievements & Certifications</h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="awards-section">
                    <h3 className="text-3xl font-serif text-white mb-8 border-b-2 border-white inline-block pb-2">Awards</h3>
                    <div className="space-y-6">
                        {awards.map((award, i) => (
                            <div key={i} className="award-card bg-[#E2DED9] p-6 rounded-2xl shadow-sm border border-transparent border-opacity-20 flex gap-6 items-center">
                                <div className="bg-[#0097ab] text-white font-bold px-4 py-2 rounded-xl text-lg flex-shrink-0">
                                    {award.year}
                                </div>
                                <div>
                                    <h4 className="text-[#0097ab] font-bold text-lg">{award.title}</h4>
                                    <p className="text-[#5a3a3a] text-sm mt-1">{award.org}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="assoc-section">
                    <h3 className="text-3xl font-serif text-white mb-8 border-b-2 border-white inline-block pb-2">Dental Associations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {associations.map((assoc, i) => (
                            <div key={i} className="assoc-card bg-[#E2DED9] p-6 rounded-2xl shadow-sm border border-transparent border-opacity-10">
                                <span className="inline-block bg-[#0097ab] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    {assoc.role}
                                </span>
                                <h4 className="text-[#0097ab] font-bold text-lg mb-2">{assoc.name}</h4>
                                <p className="text-[#5a3a3a] text-sm leading-relaxed">{assoc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

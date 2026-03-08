"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const infrastructureFeatures = [
    { title: "Modern Treatment Rooms", desc: "6 fully-equipped, private treatment suites designed for patient comfort." },
    { title: "Digital Imaging Suite", desc: "3D cone-beam CT scanner, digital panoramic X-rays, and intraoral cameras." },
    { title: "Sedation Suite", desc: "Dedicated conscious sedation area with continuous vitals monitoring." }
];

const hygieneStandards = [
    "Hospital-Grade Autoclave Sterilization after every use.",
    "Single-Use Instrument Policy wherever possible.",
    "HEPA Air Filtration & UV-C filters in each room.",
    "OSHA & CDC Compliant Protocols for all staff."
];

const equipmentItems = [
    { name: "3D Scanner", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80" },
    { name: "Intraoral Camera", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80" },
    { name: "CEREC Milling Unit", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80" }
];

export default function ClinicOverview() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Infrastructure stagger
            gsap.from(".infra-card", {
                scrollTrigger: {
                    trigger: ".infra-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Hygiene standards stagger
            gsap.from(".hygiene-item", {
                scrollTrigger: {
                    trigger: ".hygiene-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Equipment photos stagger
            gsap.from(".eq-card", {
                scrollTrigger: {
                    trigger: ".eq-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E2DED9] py-20 px-6 lg:px-28">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">Clinic Overview</h2>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <div className="infra-section">
                        <h3 className="text-3xl font-serif text-[#3b2a28] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Infrastructure</h3>
                        <div className="space-y-6">
                            {infrastructureFeatures.map((feat, i) => (
                                <div key={i} className="infra-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <h4 className="text-[#3b2a28] font-bold text-lg mb-2">{feat.title}</h4>
                                    <p className="text-[#5a3a3a]">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hygiene-section">
                        <h3 className="text-3xl font-serif text-[#3b2a28] mt-16 mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Hygiene Standards</h3>
                        <ul className="space-y-4">
                            {hygieneStandards.map((std, i) => (
                                <li key={i} className="hygiene-item flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                    <span className="text-[#0097ab] font-bold mt-0.5">✔</span>
                                    <span className="text-[#5a3a3a] font-medium leading-relaxed">{std}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="eq-section">
                    <h3 className="text-3xl font-serif text-[#3b2a28] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Equipment Photos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {equipmentItems.map((eq, i) => (
                            <div key={i} className="eq-card bg-white rounded-3xl overflow-hidden shadow-md">
                                <img src={eq.img} alt={eq.name} className="w-full h-48 object-cover" />
                                <div className="p-4 text-center">
                                    <p className="font-bold text-[#3b2a28]">{eq.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

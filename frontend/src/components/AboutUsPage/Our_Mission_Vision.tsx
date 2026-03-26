"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, HeartPulse, Monitor, Leaf } from "lucide-react";

const missionPoints = [
    { title: "Patient-Centered Care", desc: "Every treatment plan is tailored to the individual. We listen first, and treat second — because your comfort and confidence matter most.", iconName: "User" },
    { title: "Pain-Free Commitment", desc: "We specialize in gentle, sedation-assisted dentistry so that fear or anxiety never stands between you and a healthy smile.", iconName: "HeartPulse" }
];

const visionPoints = [
    { title: "Modern Dentistry", desc: "We invest in the latest digital imaging, laser dentistry, and same-day CEREC crowns to deliver precision care at the forefront of the field.", iconName: "Monitor" },
    { title: "Sustainable Practice", desc: "We embrace eco-conscious practices — from paperless records to reduced-waste sterilization — because a healthy community requires a healthy planet.", iconName: "Leaf" }
];

export default function OurMissionVision() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animations removed to ensure immediate visibility on scroll
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#0097ab] py-20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
                <h2 className="text-white text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-white pb-2">Mission & Vision</h2>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="mission-section bg-[#E2DED9] p-10 rounded-3xl border border-white border-opacity-20 shadow-md">
                    <h3 className="text-3xl font-serif text-[#0097ab] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Our Mission</h3>
                    <div className="space-y-6">
                        {missionPoints.map((pt, i) => (
                            <div key={i} className="mission-card group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <h4 className="text-[#0097ab] font-bold text-xl mb-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#0097ab]/10 text-[#0097ab] flex items-center justify-center group-hover:bg-[#0097ab] group-hover:text-white transition-all">
                                        {(() => {
                                            switch (pt.iconName) {
                                                case "User": return <User size={20} />;
                                                case "HeartPulse": return <HeartPulse size={20} />;
                                                default: return <User size={20} />;
                                            }
                                        })()}
                                    </div>
                                    {pt.title}
                                </h4>
                                <p className="text-[#5a3a3a] leading-relaxed pl-1">{pt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vision-section bg-[#E2DED9] p-10 rounded-3xl border border-white border-opacity-20 shadow-md">
                    <h3 className="text-3xl font-serif text-[#0097ab] mb-8 border-b-2 border-[#0097ab] inline-block pb-2">Our Vision</h3>
                    <div className="space-y-6">
                        {visionPoints.map((pt, i) => (
                            <div key={i} className="vision-card group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <h4 className="text-[#0097ab] font-bold text-xl mb-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#0097ab]/10 text-[#0097ab] flex items-center justify-center group-hover:bg-[#0097ab] group-hover:text-white transition-all">
                                        {(() => {
                                            switch (pt.iconName) {
                                                case "Monitor": return <Monitor size={20} />;
                                                case "Leaf": return <Leaf size={20} />;
                                                default: return <Monitor size={20} />;
                                            }
                                        })()}
                                    </div>
                                    {pt.title}
                                </h4>
                                <p className="text-[#5a3a3a] leading-relaxed pl-1">{pt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

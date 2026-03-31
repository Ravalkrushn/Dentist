"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const missionPoints = [
    { title: "Patient-Centered Care", desc: "Every treatment plan is tailored to the individual. We listen first, and treat second — because your comfort and confidence matter most.", iconName: "Patient" },
    { title: "Pain-Free Commitment", desc: "We specialize in gentle, sedation-assisted dentistry so that fear or anxiety never stands between you and a healthy smile.", iconName: "Commitment" }
];

const visionPoints = [
    { title: "Modern Dentistry", desc: "We invest in the latest digital imaging, laser dentistry, and same-day CEREC crowns to deliver precision care at the forefront of the field.", iconName: "Modern" },
    { title: "Lifelong Smiles", desc: "Our ultimate vision is to see our patients enjoy a lifetime of oral health and confidence through preventive dental education and state-of-the-art care.", iconName: "Smile" }
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
                                    <div className="bg-[#0097ab] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-[#0097ab]/20">
                                        {(() => {
                                            switch (pt.iconName) {
                                                case "Patient": return (
                                                    <Image
                                                        src="/image/patient.png"
                                                        alt="Patient"
                                                        width={28}
                                                        height={28}
                                                        className="brightness-0 invert"
                                                    />
                                                );
                                                case "Commitment": return (
                                                    <Image
                                                        src="/image/commitment.png"
                                                        alt="Commitment"
                                                        width={28}
                                                        height={28}
                                                        className="brightness-0 invert"
                                                    />
                                                );
                                                default: return null;
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
                                    <div className="bg-[#0097ab] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-[#0097ab]/20">
                                        {(() => {
                                            switch (pt.iconName) {
                                                case "Modern": return (
                                                    <Image
                                                        src="/image/dentist-5.png"
                                                        alt="Modern Dentistry"
                                                        width={28}
                                                        height={28}
                                                        className="brightness-0 invert"
                                                    />
                                                );
                                                case "Smile": return (
                                                    <Image
                                                        src="/image/smile.png"
                                                        alt="Smile"
                                                        width={28}
                                                        height={28}
                                                        className="brightness-0 invert"
                                                    />
                                                );
                                                default: return null;
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



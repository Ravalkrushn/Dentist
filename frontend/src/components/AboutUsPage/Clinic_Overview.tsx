"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    { name: "3D Cone Beam Scanner", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80" },
    { name: "Digital Intraoral Camera", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80" },
    { name: "CEREC Milling Unit", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80" },
    { name: "Laser Dentistry Tools", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80" },
    { name: "Microscopes", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=500&q=80" },
    { name: "Digital X-Ray Systems", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80" }
];

export default function ClinicOverview() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -(sliderRef.current.offsetWidth / 3), behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: (sliderRef.current.offsetWidth / 3), behavior: "smooth" });
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        if (isHovered) return;

        const intervalId = setInterval(() => {
            if (sliderRef.current) {
                const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
                if (sliderRef.current.scrollLeft >= maxScrollLeft - 10) {
                    // Rewind to start
                    sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollRight();
                }
            }
        }, 3000); // Scrol every 3 seconds

        return () => clearInterval(intervalId);
    }, [isHovered]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {

            // Infrastructure Header
            gsap.fromTo(".infra-header",
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: ".infra-section",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );

            // Infrastructure cards stagger
            gsap.fromTo(".infra-card",
                { opacity: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: ".infra-section",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                }
            );

            // Hygiene Header
            gsap.fromTo(".hygiene-header",
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: ".hygiene-section",
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );

            // Hygiene standards stagger
            gsap.fromTo(".hygiene-item",
                { opacity: 0, x: 30 },
                {
                    scrollTrigger: {
                        trigger: ".hygiene-section",
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );

            // Important: refresh ScrollTrigger after everything is set
            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-[#E2DED9] py-20 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-28 mb-16 text-center">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-2 inline-block border-b-4 border-[#0097ab] pb-2">
                    Clinic Overview
                </h2>
                <p className="mt-6 text-[#5a3a3a] text-lg max-w-2xl mx-auto">
                    Experience state-of-the-art dental care in a relaxing environment equipped with cutting-edge technology.
                </p>
            </div>

            {/* Centered Equipment Photos Carousel */}
            <div className="max-w-7xl mx-auto px-6 lg:px-28 mb-24">
                <div className="w-full text-center mb-10">
                    <h3 className="text-3xl font-serif text-[#3b2a28] border-b-2 border-[#0097ab] inline-block pb-2">Equipment Photos</h3>
                </div>

                <div
                    className="relative group w-full"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-3 lg:-left-6 xl:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-white text-[#0097ab] rounded-full shadow-xl z-10 transition-all flex items-center justify-center border border-gray-100 hover:border-[#0097ab]/30 disabled:opacity-50"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute -right-3 lg:-right-6 xl:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-white text-[#0097ab] rounded-full shadow-xl z-10 transition-all flex items-center justify-center border border-gray-100 hover:border-[#0097ab]/30 disabled:opacity-50"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slider Track (Shows 3 items max on large screens) */}
                    <div
                        ref={sliderRef}
                        className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {/* Duplicate items for a longer continuous scroll feel */}
                        {[...equipmentItems, ...equipmentItems].map((eq, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedPhotoIndex(i % equipmentItems.length)}
                                className="snap-center shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[320px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="h-[240px] w-full overflow-hidden bg-gray-100">
                                    <img src={eq.img} alt={eq.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                </div>
                                <div className="p-4 flex-1 flex items-center justify-center bg-white z-10 border-t border-transparent">
                                    <p className="font-bold text-[#3b2a28] text-center text-lg">{eq.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Split Layout: Infrastructure (Left) & Hygiene (Right) */}
            <div className="max-w-7xl mx-auto px-6 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Column: Infrastructure */}
                <div className="infra-section flex flex-col">
                    <div className="infra-header flex items-center gap-4 mb-8 border-b-2 border-[#0097ab] pb-2 w-max">
                        <div className="w-10 h-10 rounded-full bg-[#0097ab] text-white flex items-center justify-center shadow-lg">
                            <span className="material-icons text-xl font-bold">I</span>
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">Infrastructure</h3>
                    </div>
                    <div className="space-y-6 flex-1">
                        {infrastructureFeatures.map((feat, i) => (
                            <div key={i} className="infra-card group bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#0097ab]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <h4 className="text-[#0097ab] font-bold text-xl mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#3b2a28] opacity-50 group-hover:bg-[#0097ab] transition-colors"></span>
                                    {feat.title}
                                </h4>
                                <p className="text-[#5a3a3a] leading-relaxed pl-4 border-l-2 border-gray-100 group-hover:border-[#0097ab]/50 transition-colors">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Hygiene */}
                <div className="hygiene-section flex flex-col">
                    <div className="hygiene-header flex items-center gap-4 mb-8 border-b-2 border-[#0097ab] pb-2 w-max">
                        <div className="w-10 h-10 rounded-full bg-white text-[#0097ab] border-2 border-[#0097ab] flex items-center justify-center shadow-sm">
                            <span className="material-icons text-xl font-bold">H</span>
                        </div>
                        <h3 className="text-3xl font-serif text-[#3b2a28]">Hygiene Standards</h3>
                    </div>
                    <ul className="space-y-4 flex-1">
                        {hygieneStandards.map((std, i) => (
                            <li key={i} className="hygiene-item group flex items-start gap-4 bg-white/80 p-5 rounded-2xl shadow-sm border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#0097ab]/10 text-[#0097ab] flex items-center justify-center group-hover:bg-[#0097ab] group-hover:text-white transition-colors duration-300">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[#3b2a28] font-medium leading-relaxed group-hover:text-[#0097ab] transition-colors duration-300">
                                    {std}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Modal for viewing Equipment Photos */}
            {selectedPhotoIndex !== null && (
                <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md text-white">
                    {/* Close Area (clicking background closes) */}
                    <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPhotoIndex(null)}></div>

                    {/* Close button at Top Right of Screen */}
                    <button
                        onClick={() => setSelectedPhotoIndex(null)}
                        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    {/* Main Image Container (Full Screen minus thumbnails) */}
                    <div className="relative z-10 flex-1 w-full flex flex-col justify-center items-center p-6 mt-10 md:mt-4 pointer-events-none">
                        <div className="w-full h-full flex flex-col items-center justify-center pointer-events-auto">
                            <img
                                src={equipmentItems[selectedPhotoIndex].img}
                                alt={equipmentItems[selectedPhotoIndex].name}
                                className="w-full h-full max-h-[60vh] md:max-h-[65vh] object-contain drop-shadow-2xl"
                            />
                            <h3 className="mt-6 text-2xl lg:text-3xl font-serif tracking-wide text-center">{equipmentItems[selectedPhotoIndex].name}</h3>
                        </div>
                    </div>

                    {/* Thumbnails Row */}
                    <div className="relative z-10 w-full flex justify-center items-center flex-wrap gap-4 sm:gap-6 pt-6 pb-12 px-6 mt-auto bg-gradient-to-t from-black to-transparent">
                        {equipmentItems.map((eq, i) => (
                            <div
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setSelectedPhotoIndex(i); }}
                                className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden cursor-pointer shadow-lg border-2 transition-all duration-300 ${selectedPhotoIndex === i ? 'border-[#0097ab] scale-[1.15] opacity-100 ring-4 ring-[#0097ab]/30' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
                            >
                                <img src={eq.img} alt={eq.name} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

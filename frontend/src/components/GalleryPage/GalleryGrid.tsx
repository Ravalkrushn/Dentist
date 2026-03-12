"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { X, Maximize2 } from "lucide-react";

const categories = [
    { name: "The Team", icon: "👥", img: "/image/ROHAN1.webp" },
    { name: "Before & After", icon: "✨", img: "/image/VeneersTransformation_after.jpg" },
    { name: "Patients", icon: "😇", img: "/image/ABOUT.png" }
];

const galleryData = [
    { id: 1, category: "The Team", src: "/image/ROHAN1.webp", title: "Dr. Rohan" },
    { id: 2, category: "The Team", src: "/image/HARSHIT1.webp", title: "Dr. Harshit" },
    { id: 3, category: "The Team", src: "/image/GUAVAR1V.webp", title: "Dr. Gaurav" },
    { id: 12, category: "The Team", src: "/image/team_member.jpg", title: "Our Dental Specialists" },
    { id: 4, category: "Before & After", src: "/image/DentalImplants_before.jpg", title: "Dental Implants - Before" },
    { id: 5, category: "Before & After", src: "/image/DentalImplants_after.jpg", title: "Dental Implants - After" },
    { id: 6, category: "Before & After", src: "/image/VeneersTransformation_before.jpg", title: "Veneers - Before" },
    { id: 7, category: "Before & After", src: "/image/VeneersTransformation_after.jpg", title: "Veneers - After" },
    { id: 8, category: "Patients", src: "/image/ABOUT.png", title: "Patient Care" },
    { id: 9, category: "Patients", src: "/image/ABOUT2.png", title: "Clinic Environment" },
    { id: 11, category: "Before & After", src: "/image/Invisalign&TeethWhitening_after.jpg", title: "Teeth Whitening - After" },
];

export default function GalleryGrid() {
    const [activeTab, setActiveTab] = useState("The Team");
    const [selectedImg, setSelectedImg] = useState<any>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const filteredItems = galleryData.filter(item => item.category === activeTab);

    useEffect(() => {
        if (gridRef.current) {
            gsap.fromTo(
                gridRef.current.children,
                { opacity: 0, scale: 0.9, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    overwrite: "auto"
                }
            );
        }
    }, [activeTab]);

    const openModal = (img: any) => {
        setSelectedImg(img);
        setTimeout(() => {
            if (modalRef.current) {
                gsap.fromTo(
                    modalRef.current,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
                );
            }
        }, 10);
    };

    const closeModal = () => {
        if (modalRef.current) {
            gsap.to(modalRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => setSelectedImg(null)
            });
        } else {
            setSelectedImg(null);
        }
    };

    return (
        <section className="bg-white pb-32 px-6 md:px-12 lg:px-24 relative z-30">
            <div className="max-w-7xl mx-auto">

                {/* Modern Tabs */}
                <div className="max-w-5xl mx-auto px-4 md:px-0 relative mt-24 z-40">
                    <div className="flex flex-col md:flex-row shadow-2xl rounded-[3rem] overflow-hidden bg-white border border-[#eaddd7]/50">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveTab(cat.name)}
                                className={`flex-1 flex flex-col items-center justify-center gap-4 py-8 md:py-12 transition-all duration-500 ${
                                    activeTab === cat.name
                                        ? "bg-[#001524] text-white"
                                        : "bg-white text-[#5a3a3a] hover:bg-gray-50"
                                }`}
                            >
                                <div
                                    className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 ${
                                        activeTab === cat.name
                                            ? "border-[#0097ab] bg-[#0097ab]/20"
                                            : "border-gray-100 shadow-sm bg-gray-50 overflow-hidden"
                                    }`}
                                >
                                    {activeTab === cat.name ? (
                                        <span className="text-2xl md:text-3xl">🦷</span>
                                    ) : (
                                        <img
                                            src={cat.img}
                                            alt={cat.name}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>

                                <span
                                    className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] ${
                                        activeTab === cat.name
                                            ? "text-white"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                    <div className="mb-20 text-center">
                        <span className="inline-block bg-[#007bff] text-white text-4xl md:text-6xl font-bold px-6 py-3 rounded-md shadow-lg">
                            {activeTab}
                        </span>
                    </div>

                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                                onClick={() => openModal(item)}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Maximize2
                                        size={32}
                                        className="text-white scale-75 group-hover:scale-100 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImg && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-white/95 backdrop-blur-xl"
                        onClick={closeModal}
                    />

                    <div
                        ref={modalRef}
                        className="relative w-[95vw] h-[85vh] max-w-[1400px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.2)] border border-[#eaddd7] flex flex-col md:flex-row"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-8 right-8 z-20 p-4 bg-gray-100 hover:bg-black text-black hover:text-white rounded-full transition-all duration-300"
                        >
                            <X size={24} />
                        </button>

                        <div className="w-full md:w-3/4 h-2/3 md:h-full bg-gray-900 overflow-hidden flex items-center justify-center p-8">
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        <div className="w-full md:w-1/4 h-1/3 md:h-full p-12 flex flex-col justify-center bg-white border-l border-[#eaddd7]">
                            <div className="w-12 h-1 bg-[#0097ab] mb-8" />

                            <h3 className="text-[#4a2e2b] text-4xl font-serif mb-4 leading-tight">
                                {selectedImg.title}
                            </h3>

                            <p className="text-[#0097ab] font-bold uppercase tracking-[0.3em] text-xs mb-8">
                                {selectedImg.category}
                            </p>

                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                Professional dental care results from Relaxation Dental.
                                We focus on modern technology and patient comfort to
                                deliver exceptional transformations.
                            </p>

                            <div className="mt-12 flex gap-4">
                                <button className="px-6 py-3 bg-[#001524] text-white text-xs font-bold uppercase rounded-full">
                                    Share
                                </button>

                                <button
                                    className="px-6 py-3 border border-gray-200 text-gray-400 text-xs font-bold uppercase rounded-full hover:bg-gray-50"
                                    onClick={closeModal}
                                >
                                    Close View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
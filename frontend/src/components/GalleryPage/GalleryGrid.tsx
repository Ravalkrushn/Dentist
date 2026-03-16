"use client";
import { useState, useRef, useEffect } from "react";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaShareAlt } from "react-icons/fa";

const categories = [
    { name: "The Team", label: "01" },
    { name: "Before & After", label: "02" },
    { name: "Patients", label: "03" },
];

const galleryData = [
    { id: 1,  category: "The Team",       src: "/image/dentist1.png",                        title: "Dr. Nicholas Brown",  subtitle: "Founder & Lead Dentist" },
    { id: 2,  category: "The Team",       src: "/image/ABOUT2.PNG",                          title: "Dr. Emily Chen",      subtitle: "Orthodontist Specialist" },
    { id: 3,  category: "The Team",       src: "/image/dentist2.png",                        title: "Dr. James Wilson",    subtitle: "Oral & Maxillofacial surgeon" },
    { id: 12, category: "The Team",       src: "/image/dentist3.png",                        title: "Our Specialists",    subtitle: "Relaxation Dental Team" },
    { id: 13, category: "The Team",       src: "/image/dentist4.png",                        title: "Our Specialists",    subtitle: "Relaxation Dental Team" },
    { id: 4,  category: "Before & After", src: "/image/DentalImplants_before.jpg",           title: "Dental Implants",    subtitle: "Before" },
    { id: 5,  category: "Before & After", src: "/image/DentalImplants_after.jpg",            title: "Dental Implants",    subtitle: "After" },
    { id: 6,  category: "Before & After", src: "/image/VeneersTransformation_before.jpg",    title: "Veneers",            subtitle: "Before" },
    { id: 7,  category: "Before & After", src: "/image/VeneersTransformation_after.jpg",     title: "Veneers",            subtitle: "After" },
    { id: 11, category: "Before & After", src: "/image/Invisalign&TeethWhitening_after.jpg", title: "Teeth Whitening",    subtitle: "After" },
    { id: 8,  category: "Patients",       src: "/image/ABOUT.png",                           title: "Patient Care",       subtitle: "Our Priority" },
    { id: 9,  category: "Patients",       src: "/image/p1.png",                          title: "Clinic Environment", subtitle: "Modern & Calm" },
    { id: 14,  category:"Patients", src: "/image/p2.png", title: "Clinic Environment", subtitle: "Modern & Calm" },
    { id:15, category: "Patients", src: "/image/p3.png", title: "Clinic Environment", subtitle: "Modern & Calm" },
    { id:16, category: "Patients", src: "/image/p4.png", title: "Clinic Environment", subtitle: "Modern & Calm" },
];  

export default function GalleryGrid() {
    const [activeTab, setActiveTab] = useState("The Team");
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredItems = galleryData.filter(i => i.category === activeTab);
    const selectedImg = selectedIdx !== null ? filteredItems[selectedIdx] : null;

    const switchTab = (tab: string) => {
        if (tab === activeTab) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        if (!gridRef.current || isAnimating) return;
        const children = Array.from(gridRef.current.children) as HTMLElement[];
        children.forEach((child, i) => {
            child.style.opacity = "0";
            child.style.transform = "translateY(24px)";
            setTimeout(() => {
                child.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
            }, i * 60);
        });
    }, [activeTab, isAnimating]);

    const prev = () => {
        if (selectedIdx === null) return;
        setSelectedIdx(selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1);
    };

    const next = () => {
        if (selectedIdx === null) return;
        setSelectedIdx(selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1);
    };

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (selectedIdx === null) return;
            if (e.key === "Escape") setSelectedIdx(null);
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [selectedIdx, filteredItems.length]);

    const getGridClass = (idx: number) => {
        if (idx === 0) return "col-span-2 row-span-2";
        return "";
    };

    return (
        <section className="relative bg-[#f8f5f2] min-h-screen pb-32 overflow-hidden">

            {/* Subtle dot texture */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #001524 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-16">

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">

                    {/* Left: title */}
                    <div>
                        <p className="text-[#0097ab] text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
                            Relaxation Dental
                        </p>
                        <h2 className="text-[#001524] font-serif text-4xl md:text-5xl font-semibold leading-[0.95] tracking-tight">
                            Browse<br />
                            <span className="text-[#0097ab]">our work</span>
                        </h2>
                    </div>

                    {/* Right: Premium vertical navigation */}
                    <nav className="flex flex-col gap-2 min-w-[200px]">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => switchTab(cat.name)}
                                className={`group relative flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-500 overflow-hidden ${
                                    activeTab === cat.name 
                                    ? "bg-white shadow-[0_10px_30px_rgba(0,151,171,0.1)] translate-x-2" 
                                    : "hover:bg-white/50 hover:translate-x-1"
                                }`}
                            >
                                <div className="flex items-center gap-4 z-10">
                                    <span className={`text-[10px] font-mono font-bold transition-colors duration-300 ${activeTab === cat.name ? "text-[#0097ab]" : "text-[#bbb]"}`}>
                                        {cat.label}
                                    </span>
                                    <span className={`text-[13px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 ${activeTab === cat.name ? "text-[#001524]" : "text-[#a89990] group-hover:text-[#001524]"}`}>
                                        {cat.name}
                                    </span>
                                </div>
                                
                                {activeTab === cat.name && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0097ab] shadow-[0_0_10px_#0097ab] z-10" />
                                )}

                                {/* Hover/Active background effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-[#0097ab]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Divider + count */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#e2d8d0] to-transparent" />
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0097ab] animate-pulse" />
                        <span className="text-[#8a7a72] text-[11px] tracking-[0.25em] uppercase font-bold">
                            {filteredItems.length} Featured Works
                        </span>
                    </div>
                </div>

                {/* Scrollable Gallery Container */}
                <div className="relative group/gallery">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => {
                            if (gridRef.current) {
                                gridRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                            }
                        }}
                        className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center text-[#001524] opacity-0 group-hover/gallery:opacity-100 hover:bg-[#0097ab] hover:text-white transition-all duration-300 -translate-x-4 group-hover/gallery:translate-x-0"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button 
                        onClick={() => {
                            if (gridRef.current) {
                                gridRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                            }
                        }}
                        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center text-[#001524] opacity-0 group-hover/gallery:opacity-100 hover:bg-[#0097ab] hover:text-white transition-all duration-300 translate-x-4 group-hover/gallery:translate-x-0"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Grid / Horizontal Scroll Container */}
                    <div
                        ref={gridRef}
                        className={`flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-12 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filteredItems.map((item, idx) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedIdx(idx)}
                                className="group relative min-w-[300px] md:min-w-[400px] h-[500px] overflow-hidden cursor-pointer bg-[#e8e2db] snap-start"
                                style={{ borderRadius: "24px" }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                                />

                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#001524]/80 via-[#001524]/20 to-transparent translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />

                                {/* Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white text-[12px] font-bold tracking-[0.25em] uppercase mb-2">
                                        {item.subtitle}
                                    </p>
                                    <h3 className="text-white text-3xl font-serif font-medium leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Arrow badge */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white/95 rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                                    <ArrowUpRight size={20} className="text-[#001524]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

            </div>

            {/* ─── Lightbox Modal ─── */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] bg-[#001524]/90 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setSelectedIdx(null)}
                >
                    {/* Close */}
                    <button
                        onClick={() => setSelectedIdx(null)}
                        className="absolute top-6 right-6 z-20 w-10 h-10 border border-white/10 hover:border-white/30 text-white/30 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                        <X size={16} />
                    </button>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 hover:border-white/30 text-white/30 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 hover:border-white/30 text-white/30 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                    >
                        <ChevronRight size={18} />
                    </button>

                    {/* Modal box */}
                    <div
                        className="relative flex flex-col md:flex-row w-full max-w-5xl mx-6 max-h-[85vh] overflow-hidden shadow-2xl"
                        style={{ borderRadius: "8px" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image side */}
                        <div className="flex-1 bg-[#f8f5f2] flex items-center justify-center min-h-[50vh] md:min-h-[70vh] overflow-hidden">
                            <img
                                key={selectedImg.id}
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                className="max-w-full max-h-[70vh] object-contain"
                                style={{ animation: "fadeIn 0.3s ease" }}
                            />
                        </div>

                        {/* Info sidebar */}
                        <div className="w-full md:w-64 bg-[#f8f5f2] border-l border-[#e2d8d0] flex flex-col justify-between p-8 shrink-0">
                            <div>
                                <p className="text-[#0097ab] text-[10px] font-semibold tracking-[0.25em] uppercase mb-5">
                                    {selectedImg.category}
                                </p>
                                <div className="w-8 h-px bg-[#e2d8d0] mb-5" />
                                <h3 className="text-[#001524] font-serif text-2xl font-semibold leading-tight mb-2">
                                    {selectedImg.title}
                                </h3>
                                <p className="text-[#9e8e84] text-[13px] tracking-wide">
                                    {selectedImg.subtitle}
                                </p>
                            </div>

                            <div>
                                <p className="text-[#001524] text-[11px] font-mono mb-5 opacity-60">
                                    {String(selectedIdx! + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
                                </p>
                                <p className="text-[#001524] text-[12px] leading-relaxed mb-8 font-medium">
                                    Modern dental care with precision and comfort — every transformation tells a story.
                                </p>
                                <button
                                    className="w-full mb-3 py-3 bg-[#001524] hover:bg-[#0097ab] text-white text-[11px] font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-300"
                                    style={{ borderRadius: "4px" }}
                                >
                                    <FaShareAlt size={12} />
                                    Share now
                                </button>
                                <button
                                    onClick={() => setSelectedIdx(null)}
                                    className="w-full py-3 border border-[#e2d8d0] hover:border-[#001524] text-[#9e8e84] hover:text-[#001524] text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-200"
                                    style={{ borderRadius: "4px" }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to   { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
}
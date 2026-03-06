"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    const testimonials = [
        { id: 1, img: "/image/ABOUT2.png", name: "Patient 1" },
        { id: 2, img: "/image/ABOUT.png", name: "Patient 2" },
        { id: 3, img: "/image/ROHAN.webp", name: "Patient 3" },
        { id: 4, img: "/image/HARSHIT.webp", name: "Patient 4" }
    ];

    // Handle responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure currentIndex stays within valid bounds on resize
    useEffect(() => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerPage, currentIndex, testimonials.length]);

    const handleNext = () => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerPage);
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });

            // Title fade in
            tl.from(titleRef.current, {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out"
            });

            // Carousel slide up & fade
            tl.from(carouselRef.current, {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#0097ab" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-10">

                {/* Top Section: Title (Right-aligned to match screenshot layout) */}
                <div className="w-full flex justify-end">
                    <div ref={titleRef} className="w-full lg:w-1/2 flex flex-col items-start lg:pl-4">
                        <h2
                            className="text-[#eaddd7] mb-4"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                                fontWeight: 400,
                            }}
                        >
                            Real Patients, Real Smiles
                        </h2>
                        <p
                            className="text-[#eaddd7]"
                            style={{
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "clamp(0.85rem, 1vw, 1rem)",
                                fontWeight: 300,
                                lineHeight: 1.6,
                                maxWidth: "500px"
                            }}
                        >
                            Hear how our gentle approach and stress-free care at Relaxation Dentistry have transformed
                            our patients&apos; smiles and confidence.
                        </p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div ref={carouselRef} className="w-full flex flex-col gap-6">

                    {/* Viewport for slider */}
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                // Transform logic: move left by currentIndex * (100% / itemsPerPage)
                                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                            }}
                        >
                            {testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="shrink-0 px-2 sm:px-4"
                                    // Make sure width aligns perfectly with itemsPerPage
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer group shadow-xl">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${item.img}')` }}
                                        />
                                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-transparent transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                                                <Play fill="white" strokeWidth={0} className="w-6 h-6 ml-1 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination and Navigation Buttons */}
                    <div className="w-full flex items-center justify-between px-2 sm:px-4 mt-2">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {/* We show dots for each possible index step */}
                            {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/40'}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 pr-0.5" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= testimonials.length - itemsPerPage}
                                className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 pl-0.5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

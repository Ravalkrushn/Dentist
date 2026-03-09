"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = useState(0); // Start at the first card (index 0)
    const isDragging = useRef(false);
    const startX = useRef(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [showHint, setShowHint] = useState(true);

    const features = [
        {
            title: "Modern Equipment",
            desc: "We invest heavily in advanced dental technology, including 3D imaging and digital scanners, ensuring accurate diagnoses and the safest, most effective treatments available.",
            icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        },
        {
            title: "Experienced Doctor",
            desc: "Our highly qualified team brings decades of combined clinical experience. We prioritize ongoing education to deliver exceptional, reliable patient care you can trust.",
            icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        },
        {
            title: "Affordable Pricing",
            desc: "We believe everyone deserves a healthy smile. That's why we offer premium dental treatments at transparent, affordable prices with flexible payment plans.",
            icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
        {
            title: "Pain-Free Treatment",
            desc: "Your comfort is our top priority. We utilize modern sedation techniques and a gentle approach safely designed to alleviate stressful dental anxiety.",
            icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        },
        {
            title: "Emergency Support",
            desc: "Dental emergencies can't wait. We provide quick responses, same-day appointments, and dedicated emergency care to relieve your pain immediately.",
            icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        }
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Container initial entry animation
            gsap.fromTo(containerRef.current,
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1, scale: 1, y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

            // Show swipe hint every time section enters viewport
            let hintTimer: NodeJS.Timeout;
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 75%",
                onEnter: () => {
                    setShowHint(true);
                    clearTimeout(hintTimer);
                    hintTimer = setTimeout(() => setShowHint(false), 3000);
                },
                onEnterBack: () => {
                    setShowHint(true);
                    clearTimeout(hintTimer);
                    hintTimer = setTimeout(() => setShowHint(false), 3000);
                },
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Layout the cards beautifully like a hand of playing cards
    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            let xPercent = 0;
            let yPercent = 0;
            let rotate = 0;
            let scale = 1;
            let zIndex = 30;
            let opacity = 1;

            // Mobile adjustments
            const isMobile = window.innerWidth < 768;

            // Calculate distance considering circular array
            const len = features.length;
            let distance = (i - activeIndex) % len;
            if (distance < -len / 2) distance += len;
            if (distance > len / 2) distance -= len;

            if (distance === 0) { // Center card
                xPercent = 0;
                yPercent = 0;
                rotate = 0;
                scale = 1;
                zIndex = 30;
                opacity = 1;
            } else if (distance === -1) { // Left card
                xPercent = isMobile ? -75 : -65;
                yPercent = 8;
                rotate = -6;
                scale = 0.9;
                zIndex = 20;
                opacity = 0.7;
            } else if (distance === 1) { // Right card
                xPercent = isMobile ? 75 : 65;
                yPercent = 8;
                rotate = 6;
                scale = 0.9;
                zIndex = 20;
                opacity = 0.7;
            } else if (distance < -1) { // Hidden left 
                xPercent = -120;
                yPercent = 20;
                rotate = -15;
                scale = 0.75;
                zIndex = 10;
                opacity = 0;
            } else if (distance > 1) { // Hidden right
                xPercent = 120;
                yPercent = 20;
                rotate = 15;
                scale = 0.75;
                zIndex = 10;
                opacity = 0;
            }

            gsap.to(card, {
                xPercent,
                yPercent,
                rotationZ: rotate,
                scale,
                zIndex,
                opacity,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto"
            });
        });
    }, [activeIndex]);

    // Auto play setup
    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000); // 5 seconds interval
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Custom Drag Handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        startX.current = e.clientX;
        setShowHint(false); // hide hint if user interacts
        if (timerRef.current) clearInterval(timerRef.current); // Pause auto play on interact
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;

        const deltaX = e.clientX - startX.current;
        const dragThreshold = 50; // pixels to swipe before card changes

        if (deltaX > dragThreshold) {
            setActiveIndex(prev => prev === 0 ? features.length - 1 : prev - 1);
            isDragging.current = false; // reset drag until next touch
        } else if (deltaX < -dragThreshold) {
            setActiveIndex(prev => (prev + 1) % features.length);
            isDragging.current = false;
        }
    };

    const handlePointerUp = () => {
        isDragging.current = false;
        startTimer(); // Resume auto play
    };

    const handleCardClick = (idx: number) => {
        setActiveIndex(idx);
        setShowHint(false);
        startTimer(); // Reset auto play
    };

    return (
        <section
            ref={sectionRef}
            style={{
                width: "100%",
                background: "linear-gradient(160deg, #f5f0eb 0%, #ede3db 60%, #e4d6cc 100%)",
                padding: "6rem 0",
                overflow: "hidden",
            }}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 opacity-0" ref={headerRef}>
                    <h2 className="text-3xl md:text-5xl font-[Playfair_Display] text-[#2e1a0e] mb-4">
                        Why Choose Our Dental Clinic
                    </h2>
                    <p className="text-black text-lg font-[Lato] max-w-2xl mx-auto">
                        Advanced care, experienced hands, and comfortable treatment for every smile.
                        Swipe or click to explore our features!
                    </p>
                </div>


                {/* Overlapping Playing Cards Container */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[450px] md:h-[500px] flex justify-center items-center opacity-0 cursor-grab active:cursor-grabbing outline-none"
                    style={{ touchAction: "pan-y" }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                >
                    {/* Swipe Hint — Animated left→right swipe */}
                    {showHint && (
                        <div
                            className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-50"
                            style={{ animation: "swipeHintFade 0.4s ease-out forwards" }}
                        >
                            {/* Swipe track */}
                            <div className="relative w-20 h-8 flex items-center">
                                {/* Trail line */}
                                <div style={{
                                    position: "absolute",
                                    left: "4px",
                                    right: "4px",
                                    height: "2px",
                                    borderRadius: "99px",
                                    background: "linear-gradient(to right, transparent, #8b5c3e88, transparent)",
                                }} />
                                {/* Animated finger */}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 absolute"
                                    fill="#8b5c3e"
                                    style={{ animation: "swipeMove 1.2s ease-in-out infinite", opacity: 0.85 }}
                                >
                                    <path d="M10.5 3.75a.75.75 0 0 1 .75.75V9h1.5V5.25a.75.75 0 0 1 1.5 0V9h1.5V6.75a.75.75 0 0 1 1.5 0v6a4.5 4.5 0 0 1-4.5 4.5 4.5 4.5 0 0 1-4.5-4.5V9.75a.75.75 0 0 1 1.5 0V9h.75V4.5a.75.75 0 0 1 .75-.75z" />
                                </svg>
                            </div>
                            <span style={{
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "8px",
                                fontWeight: 700,
                                letterSpacing: "0.15em",
                                color: "#8b5c3e",
                                opacity: 0.75,
                                textTransform: "uppercase",
                                marginTop: "2px"
                            }}>
                                Swipe
                            </span>
                        </div>
                    )}
                    <style>{`
                        @keyframes swipeHintFade {
                            from { opacity: 0; }
                            to   { opacity: 1; }
                        }
                        @keyframes swipeMove {
                            0%   { left: 4px;  opacity: 0; }
                            15%  { opacity: 0.9; }
                            85%  { opacity: 0.9; }
                            100% { left: calc(100% - 28px); opacity: 0; }
                        }
                    `}</style>
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            ref={el => { cardsRef.current[idx] = el }}
                            onClick={() => handleCardClick(idx)}
                            className="absolute w-[80%] max-w-[340px] md:w-[320px] lg:w-[350px] bg-gray-50 flex flex-col items-center text-center px-8 py-10 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#e4d6cc]/50 transition-shadow duration-300 pointer-events-auto"
                            style={{ willChange: "transform, opacity", zIndex: 10 }}
                        >
                            <span className="text-[#8b5c3e] mb-6 p-5 bg-white rounded-full shadow-md inline-flex relative">
                                {feature.icon}
                            </span>
                            <h3 className="text-[#2e1a0e] font-serif font-semibold text-[1.25rem] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-[#5a3a2a] text-[15px] leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}



                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {features.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleCardClick(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-[#8b5c3e]" : "w-2.5 bg-[#8b5c3e]/30 hover:bg-[#8b5c3e]/60"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

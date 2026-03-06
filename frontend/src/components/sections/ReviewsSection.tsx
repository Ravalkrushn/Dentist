"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const reviews = [
        {
            id: 1,
            text: "Was my first time going to the dentist in a long time! The staff made making an appointment fun and easy, checking in was a breeze. Once in the chair the staff was friendly and thorough in the exam! Never once was there an awkward moment. My teeth felt so clean and cared for by the end of the visit. Would 100% recommend coming here! The staff if what makes this place great!",
            name: "Mya",
        },
        {
            id: 2,
            text: "Today was my first visit to a dentist in 13 years and the entire staff was so welcoming! Absolute professionals and very comfortable environment. I received top notch care, and everything was explained to me in detail, so I felt very comfortable with the plan for my oral health.",
            name: "Nicole",
        },
        {
            id: 3,
            text: "First time patient at relaxation dental, I have to say the customer service was incredible! Everyone was so warm and welcoming. I went in for a broken bracket on my braces and they were so patient and understanding. Dr. Brown and his team fixed me right up!",
            name: "Christina",
        },
        {
            id: 4,
            text: "Amazing experience! The hygienist was so gentle and Dr. Brown really took the time to answer all my questions. I also loved the modern office vibe. I used to be terrified of the dentist, but I actually look forward to coming back.",
            name: "David",
        }
    ];

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, reviews.length - itemsPerPage);

    const handleNext = () => {
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

            tl.from(".reviews-header", {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: "power3.out"
            });

            tl.from(".reviews-video", {
                opacity: 0,
                x: 50,
                rotation: 12, // start with more rotation and settle to normal
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.6");

            tl.from(".review-card", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#e2ded9" }}
        >
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Top Section: Text left, Video right */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left: Heading & Intro Text */}
                    <div className="reviews-header w-full md:w-3/5 lg:w-1/2 flex flex-col">
                        <h2
                            className="text-[#4a2e2b] mb-6"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                                fontWeight: 400,
                            }}
                        >
                            What Our Patients Say
                        </h2>
                        <p
                            className="text-[#2c1e1c]"
                            style={{
                                fontFamily: "'Lato', sans-serif",
                                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                                fontWeight: 300,
                                lineHeight: 1.7,
                                maxWidth: "550px"
                            }}
                        >
                            We take pride in helping our patients achieve healthy, beautiful smiles in a comfortable and
                            welcoming environment. Here&apos;s what some of our patients have to say about their experience
                            at Relaxation Dental.
                        </p>
                    </div>

                    {/* Right: Floating Video component */}
                    <div className="reviews-video w-full md:w-2/5 lg:w-1/3 flex justify-center md:justify-end">
                        <div
                            className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl"
                            style={{ transform: "rotate(6deg)" }} // Rotated photo/video style
                        >
                            {/* Auto-playing muted video loop */}
                            <video
                                src="/videos/121.mp4" // Placeholder video, user can swap it
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Testimonial Carousel */}
                <div ref={contentRef} className="w-full flex flex-col pt-8">

                    {/* Track Container */}
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="review-card shrink-0 px-4 flex flex-col h-full"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    {/* 5 Stars Component */}
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} width="22" height="22" viewBox="0 0 24 24" fill="#6d4c41" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p
                                        className="text-[#2c1e1c] flex-grow mb-8"
                                        style={{
                                            fontFamily: "'Lato', sans-serif",
                                            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {review.text}
                                    </p>

                                    {/* Reviewer Name */}
                                    <h4
                                        className="text-[#4a2e2b] mt-auto"
                                        style={{
                                            fontFamily: "'Playfair Display', Georgia, serif",
                                            fontSize: "1.2rem",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {review.name}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination / Arrows */}
                    <div className="w-full flex items-center justify-between mt-12 px-4">

                        {/* Dots */}
                        <div className="flex gap-2">
                            {Array.from({ length: Math.max(1, reviews.length - itemsPerPage + 1) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-[#6d4c41]' : 'w-2 bg-[#6d4c41]/30 hover:bg-[#6d4c41]/50'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Prev / Next Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="w-12 h-12 rounded-full border border-[#4a2e2b] flex items-center justify-center text-[#4a2e2b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#4a2e2b] hover:text-[#e2ded9] transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 pr-0.5" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= maxIndex}
                                className="w-12 h-12 rounded-full border border-[#4a2e2b] flex items-center justify-center text-[#4a2e2b] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#4a2e2b] hover:text-[#e2ded9] transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 pl-0.5" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

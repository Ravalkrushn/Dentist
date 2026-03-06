"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DoctorSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

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

            // Image slide up & fade
            tl.from(".doctor-image", {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.6");

            // Text paragraph slide & fade
            tl.from(".doctor-text", {
                opacity: 0,
                x: 40,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

            // Bullet points stagger
            tl.from(".doctor-bullet", {
                opacity: 0,
                x: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.6");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const bullets = [
        "Creating personalized treatment plans to each patient's unique needs.",
        "Offering sedation dentistry to ensure a relaxed and stress-free experience.",
        "Using advanced dental technology to deliver precise and efficient care.",
        "Ensuring he and his team are continuously advancing their knowledge to provide the best care possible."
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
            style={{ backgroundColor: "#eaddd7" }}
        >
            <div className="max-w-7xl mx-auto">

                {/* Centered Top Title */}
                <div ref={titleRef} className="text-center mb-16 md:mb-24">
                    <h2
                        className="text-[#4a2e2b]"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                            fontWeight: 400,
                            lineHeight: 1.3,
                        }}
                    >
                        Meet Dr. Nicholas Brown
                        <br />
                        Your Local Salida Dentist
                    </h2>
                </div>

                {/* Two Column Content */}
                <div ref={contentRef} className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

                    {/* Left: Doctor Image */}
                    <div className="doctor-image w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] h-[600px] rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-xl rounded-br-xl overflow-hidden shadow-xl">
                            <img
                                src="/image/ABOUT2.png" // Assuming SIR.webp is the doctor portrait based on file list
                                alt="Dr. Nicholas Brown"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right: Doctor Info & Bullets */}
                    <div className="doctor-text w-full lg:w-1/2 flex flex-col pt-4">
                        <p
                            className="text-[#5a3a3a] mb-10"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                                fontWeight: 400,
                                lineHeight: 1.8,
                            }}
                        >
                            With a passion for modern, comfortable dentistry, Dr. Nicholas Brown is dedicated to providing
                            exceptional care with the latest advancements in dental technology. He specializes in comprehensive
                            treatment plans, including conscious sedation for a truly relaxed experience. Dr. Brown is committed
                            to:
                        </p>

                        <div className="flex flex-col w-full">
                            {bullets.map((text, idx) => (
                                <div key={idx} className="doctor-bullet border-b border-[#a8908a] py-5 last:border-0 hover:bg-[#e0d2cc] transition-colors duration-300 px-2 rounded-sm cursor-default">
                                    <p
                                        className="text-[#2c1e1c]"
                                        style={{
                                            fontFamily: "'Lato', sans-serif",
                                            fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                                            fontWeight: 400,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

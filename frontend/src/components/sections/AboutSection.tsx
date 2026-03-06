"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const bodyRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const fadeUp = (el: any, delay = 0) => {
                gsap.fromTo(el.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0,
                        duration: 1,
                        delay,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el.current,
                            start: "top 88%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            };

            fadeUp(taglineRef, 0);
            fadeUp(subtitleRef, 0.1);
            fadeUp(headingRef, 0.15);
            fadeUp(bodyRef, 0.2);
            fadeUp(btnRef, 0.28);

            // Images stagger
            gsap.fromTo(
                imagesRef.current!.children,
                { opacity: 0, y: 60, scale: 0.96 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imagesRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const images = [
        "/image/HARSHIT.webp",
        "/image/HR.webp",
        "/image/ROHAN.webp",
        "/image/GUAVARV.webp",
    ];

    return (
        <section
            ref={sectionRef}
            style={{
                width: "100%",
                background: "linear-gradient(160deg, #f5f0eb 0%, #ede3db 60%, #e4d6cc 100%)",
                padding: "7rem 2rem 5rem",
                overflow: "hidden",
            }}
        >
            {/* ── Text Block ── */}
            <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>

                <p
                    ref={taglineRef}
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)",
                        fontWeight: 400,
                        color: "#8b5c3e",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        marginBottom: "0.8rem",
                        opacity: 0,
                    }}
                >
                    Because There&apos;s a Better Way to Experience Dental Care
                </p>

                <p
                    ref={subtitleRef}
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                        fontWeight: 400,
                        color: "#6b4030",
                        fontStyle: "italic",
                        lineHeight: 1.7,
                        marginBottom: "3rem",
                        opacity: 0,
                    }}
                >
                    At Relaxation Dental, we believe that going to the dentist should be a comfortable, stress-free experience.
                </p>

                <h2
                    ref={headingRef}
                    style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3.4rem)",
                        fontWeight: 400,
                        color: "#2e1a0e",
                        lineHeight: 1.22,
                        marginBottom: "1.8rem",
                        opacity: 0,
                    }}
                >
                    Your Trusted Salida Dentist for
                    <br />Comfort-First Care
                </h2>

                <p
                    ref={bodyRef}
                    style={{
                        fontFamily: "'Lato', 'Helvetica Neue', sans-serif",
                        fontSize: "clamp(0.95rem, 1.5vw, 1.08rem)",
                        color: "#5a3a2a",
                        lineHeight: 1.95,
                        marginBottom: "2.8rem",
                        opacity: 0,
                    }}
                >
                    Whether you need a routine cleaning, dental implants, or Invisalign®, our team provides
                    high-quality, patient-centered care with the latest technology and sedation options. Led by
                    Dr. Nicholas Brown, our practice is committed to personalized treatment plans that fit your
                    unique needs. If you&apos;re looking for a dentist in Salida, Poncha Springs, Buena Vista,
                    Leadville, or Gunnison, we&apos;re here to help you achieve a healthy, confident smile.
                </p>

                <Link
                    ref={btnRef}
                    href="/our-practice"
                    style={{
                        display: "inline-block",
                        background: "#3b1a1a",
                        color: "#fff",
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        padding: "0.9rem 2.4rem",
                        borderRadius: "3rem",
                        textDecoration: "none",
                        opacity: 0,
                        transition: "background 0.3s, transform 0.3s",
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = "#5c2e2e";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = "#3b1a1a";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                >
                    Learn More About Us
                </Link>
            </div>

            {/* ── Image Grid ── */}
            <div
                ref={imagesRef}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem",
                    maxWidth: "1100px",
                    margin: "5rem auto 0",
                }}
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        style={{
                            borderRadius: "1.2rem",
                            overflow: "hidden",
                            aspectRatio: "3 / 4",
                            boxShadow: "0 12px 32px rgba(46,26,14,0.14)",
                            opacity: 0,
                        }}
                    >
                        <img
                            src={src}
                            alt={`Relaxation Dental ${i + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                transition: "transform 0.5s ease",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

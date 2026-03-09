"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Service_Hero({ title, image }: { title: string, image: string }) {
    const bannerContainerRef = useRef<HTMLDivElement>(null);
    const bannerImageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const bannerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerContainerRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            bannerTl.to(bannerImageRef.current, {
                rotate: 0,
                height: "100vh",
                width: "100vw",
                top: "50%",
                boxShadow: "none",
                borderRadius: "0px",
                duration: 1,
                ease: "power2.inOut",
            })
                .to(".banner-title-top", { opacity: 0, scale: 0.9, y: -50, duration: 0.5 }, "<")
                .to(".banner-title-bottom", { opacity: 0, scale: 0.9, y: 50, duration: 0.5 }, "<")
                .to({}, { duration: 10 / 88 }); // hold
        }
    }, { scope: bannerContainerRef });

    return (
        <section
            ref={bannerContainerRef}
            className="relative w-full overflow-hidden"
            style={{ height: "100vh", backgroundColor: "#eaddd7" }}
        >
            {/* Background elements (solid color) */}
            <div className="absolute inset-0 z-[1] bg-[#eaddd7]" />

            {/* Title (Text behind the photo) */}
            <div className="absolute inset-0 z-[1] flex flex-col justify-between items-center pb-35 pt-20 lg:pt-15 pointer-events-none">
                <h1
                    className="banner-title-top text-center px-4"
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        color: "#3b2a28",
                        lineHeight: 1.1,
                    }}
                >
                    {title}
                </h1>
                <div className="banner-title-bottom flex flex-col items-center">
                    <p
                        className="text-[#5a3a3a] text-center px-4"
                        style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)",
                            maxWidth: "600px"

                        }}
                    >
                        Scroll down to explore the details for
                    </p>
                    <span className="text-[#0097ab] font-bold uppercase tracking-[0.2em] text-sm mt-2">
                        {title}
                    </span>
                </div>
            </div>

            {/* The Image that Zooms */}
            <div
                ref={bannerImageRef}
                className="absolute left-1/2 z-[3] w-[200px] sm:w-[320px] md:w-[380px] h-[150px] sm:h-[220px] md:h-[260px]"
                style={{
                    top: "48%",
                    transform: "translate(-50%, -50%) rotate(-6deg)",
                    borderRadius: "80px",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
                    willChange: "transform, width, height, border-radius",
                }}
            >
                {/* Photo Element */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Subtle dark overlay to let the text on scroll show if needed */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
        </section>
    );
}

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Initial setup to handle centering and prevent layout shifts
    gsap.set(videoRef.current, {
      xPercent: -50,
      yPercent: -50,
      force3d: true
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1.8,
        pin: true,
        anticipatePin: 1,
      },
    });
    tl.set(videoRef.current, { force3d: true });
    tl.to(videoRef.current, {
      rotate: 0,
      height: "100vh",
      width: "100vw",
      top: "50%",
      left: "50%",
      borderRadius: "0px",
      duration: 1,
      ease: "none",
    })
      .to(".videoOverlay", { opacity: 0.25, duration: 1, ease: "none" }, "<")
      .to(".textContent", { opacity: 0, duration: 0.8, ease: "none" }, "<")
      .to(".bgImage", { opacity: 0, duration: 0.5, ease: "none" }, "<")
      .to(".AfterText", { opacity: 1, duration: 1, ease: "none" }, ">=0.5");
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", backgroundColor: "#e4dcd5" }}
      suppressHydrationWarning
    >
      {/* Background image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          className="bgImage h-[110vh] w-[100%] rounded-3xl bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/image/HomeBackground.avif')" }}
        />
      </div>

      {/* Solid color background */}
      <div className="absolute inset-0 z-[1]" style={{ background: "#e4dcd5" }} />

      {/* Rotated video card */}
      <div
        ref={videoRef}
        className="absolute top-[45%] left-1/2 z-[2] -rotate-6 overflow-hidden will-change-transform rounded-[30px] w-[70vw] h-[38vw] sm:rounded-[40px] sm:w-[60vw] sm:h-[33vw] md:rounded-[50px] md:w-[30rem] md:h-[24rem] lg:w-[30rem] lg:h-[24rem]"
      >
        {/* Static Image on Mobile (no lag) */}
        <img
          src="/image/ABOUT2.png"
          alt="Dental care"
          className="h-full w-full object-cover block md:hidden"
        />
        {/* Video only on md+ screens (desktop/tablet) */}
        <video
          src="https://cdn.prod.website-files.com/67b3bcefab57ea684c7907ac%2F68e34fbb489d43d06d9921cd_bannercompressed-transcode.mp4"
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover hidden md:block"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        />
        <div className="videoOverlay pointer-events-none absolute inset-0 bg-amber-900/97 opacity-0" />
      </div>

      {/* ── MOBILE + TABLET LAYOUT (hidden on lg+) ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none lg:hidden">
        {/* Top title */}
        <div className="textContent absolute top-[6%] left-6 pointer-events-auto">
          <h1
            className="text-[2rem] leading-[1.12] font-[Playfair_Display] sm:text-[2.6rem] md:text-[3.2rem]"
            style={{ fontWeight: 400, color: "#3b2a28" }}
          >
            Your Smile,<br /> Our Priority
          </h1>
        </div>

        {/* Subtitle - Bottom Right */}
        <div className="textContent absolute bottom-[22%] right-6 pointer-events-auto">
          <h1
            className="text-right text-[1.4rem] leading-[1.2] font-[Krishna] sm:text-[1.8rem] md:text-[2.2rem]"
            style={{ fontWeight: 400, color: "#3b2a28" }}
          >
            Gentle, Modern
            <br /> Dentistry in Salida, CO
          </h1>
        </div>

        {/* Bottom Left Buttons */}
        <div className="textContent absolute bottom-[5%] left-5 flex flex-row items-center gap-3 pointer-events-auto sm:left-8">
          <a href="/contact" className="group relative overflow-hidden rounded-full bg-[#0097ab] px-3.5 py-1.5 text-[10px] font-bold text-[#eaddd7] shadow-lg transition-all duration-150 hover:scale-105 sm:px-4 sm:py-2 sm:text-xs">
            <span className="relative z-10 flex items-center gap-1.5">
              Book Appointment
              <svg className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-150 group-hover:scale-y-100 origin-bottom" />
          </a>

          <a href="tel:7195393145" className="group relative overflow-hidden rounded-full border border-[#000000] bg-transparent px-3.5 py-1.5 text-[10px] font-bold text-[#0097ab] transition-all duration-150 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0097ab]/20 sm:px-4 sm:py-2 sm:text-xs">
            <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-10">
              Call Now
              <svg className="h-3 w-3 transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-200 group-hover:scale-y-100 origin-bottom" />
          </a>
        </div>
      </div>

      {/* ── LAPTOP+ LAYOUT (lg and above) ── */}
      <div className="absolute inset-0 z-[3] w-full max-w-[1400px] mx-auto pointer-events-none hidden lg:block">
        <h1
          className="textContent absolute left-6 lg:left-12 text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-[Playfair_Display] pointer-events-auto"
          style={{ top: "5%", fontWeight: 400, lineHeight: 1.15, color: "#3b2a28" }}
        >
          Your Smile,<br /> Our Priority
        </h1>

        <div className="textContent absolute top-[75%] left-6 lg:left-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pointer-events-auto">
          <a href="/contact" className="group relative overflow-hidden rounded-full bg-[#0097ab] px-5 py-2 md:px-7 md:py-2.5 text-xs md:text-base font-bold text-[#eaddd7] shadow-xl transition-all duration-150 hover:scale-105 hover:shadow-2xl hover:shadow-[#0097ab]/50">
            <span className="relative z-10 flex items-center gap-3">
              Book Appointment
              <svg className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-150 group-hover:scale-y-100 origin-bottom" />
          </a>

          <a href="tel:7195393145" className="group relative overflow-hidden rounded-full border border-[#0097ab] bg-transparent px-5 py-2 md:px-7 md:py-2.5 text-xs md:text-base font-bold text-[#0097ab] transition-all duration-150 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0097ab]/20">
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-150">
              Call Now
              <svg className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-200 group-hover:scale-y-100 origin-bottom" />
          </a>
        </div>

        <h1
          className="textContent absolute right-6 lg:right-12 text-right text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[Krishna] pointer-events-auto"
          style={{ bottom: "21%", fontWeight: 400, lineHeight: 1.2, color: "#3b2a28" }}
        >
          Gentle, Modern
          <br /> Dentistry in Salida, CO
        </h1>
      </div>

      {/* After-scroll text */}
      <div className="AfterText absolute bottom-[8%] left-1/2 z-[20] -translate-x-1/2 w-[88vw] flex flex-col items-center justify-center text-neutral-50 opacity-0 pointer-events-none sm:w-[80vw] sm:bottom-[10%] lg:top-[60%] lg:bottom-auto lg:w-[64rem]">
        <span className="text-center text-xl leading-snug sm:text-2xl md:text-3xl lg:text-4xl pointer-events-auto">
          Because There&apos;s a Better Way to Experience Dental Care
        </span>
        <span className="mt-3 text-center text-sm leading-relaxed sm:text-base sm:mt-4 md:text-xl lg:text-3xl pointer-events-auto">
          At Dento, we believe that going to the dentist should be a comfortable, stress-free experience.
        </span>
        <div className="mt-5 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto">
          <a href="/contact" className="group relative overflow-hidden rounded-full bg-[#0097ab] px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-[#eaddd7] shadow-xl transition-all duration-150 hover:scale-105 hover:shadow-2xl hover:shadow-[#0097ab]/50">
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Book Appointment
              <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-150 group-hover:scale-y-100 origin-bottom" />
          </a>

          <a href="tel:7195393145" className="group relative overflow-hidden rounded-full border border-[#0097ab] bg-transparent px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-[#0097ab] transition-all duration-150 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0097ab]/20">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-150">
              Call Now
              <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-150 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-200 group-hover:scale-y-100 origin-bottom" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
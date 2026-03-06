"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const LandingPage = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=350%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });
    tl.set(videoRef.current, { force3d: true });
    tl.to(videoRef.current, {
      rotate: 0,
      height: "100vh",
      width: "100vw",
      borderRadius: "0px",
      duration: 1,
      ease: "power3.inOut",
    })
      .to(".videoOverlay", { opacity: 0.25, duration: 1, ease: "power2.inOut" }, "<")
      .to(".textContent", { opacity: 0, duration: 0.8, ease: "power2.inOut" }, "<0.1")
      .to(".bgImage", { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "<0.1")
      .to(".AfterText", { opacity: 1, duration: 1, ease: "power3.inOut" }, "<0.5");
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* z-0: Background image — smaller, centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div
          className="bgImage h-[110vh] w-[100%] rounded-3xl bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/image/HomeBackground.avif')" }}
        />
      </div>

      {/* z-[1]: Solid color background behind everything */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "#e4dcd5" }}
      />

      {/* z-[2]: Rotated video card */}
      <div
        ref={videoRef}
        className="absolute top-1/2 left-1/2 z-[2] w-[25rem] -translate-x-1/2 -translate-y-1/2 -rotate-6 transform-gpu overflow-hidden rounded-[50px] will-change-transform md:w-[35rem]"
      >
        <video
          src="https://cdn.prod.website-files.com/67b3bcefab57ea684c7907ac%2F68e34fbb489d43d06d9921cd_bannercompressed-transcode.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
        <div className="videoOverlay pointer-events-none absolute inset-0 bg-amber-900/97 opacity-0" />
      </div>

      {/* z-[3]: Text content */}
      <h1
        className="textContent absolute left-10 z-[3] text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-[vatsal]"
        style={{
          top: "8%",
          fontWeight: 400,
          lineHeight: 1.15,
          color: "#3b2a28"
        }}
      >
        Welcome to <br /> Relaxation Dental
      </h1>

      {/* Hero CTAs at Bottom Left */}
      <div className="textContent absolute top-145 left-10 z-[10] flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button className="group relative overflow-hidden rounded-full bg-[#3b2a28] px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 md:text-lg font-medium text-[#e4dcd5] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b2a28]/50">
          <span className="relative z-10 flex items-center gap-3">
            Book Appointment
            <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
          <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-amber-800 transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
        </button>

        <button className="group relative overflow-hidden rounded-full border-2 border-[#3b2a28] bg-[#e4dcd5]/40 backdrop-blur-md px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 md:text-lg font-medium text-[#3b2a28] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b2a28]/30">
          <span className="relative z-10 flex items-center gap-2">
            Call Now
            <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <div className="absolute inset-0 z-0 h-full w-full scale-x-0 transform bg-[#3b2a28] opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-10 origin-left"></div>
        </button>
      </div>

      <h1
        className="textContent absolute right-10 z-[3] text-right text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[Krishna]"
        style={{
          bottom: "21%",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "#3b2a28"
        }}
      >
        Gentle, Modern
        <br /> Dentistry in Salida, CO
      </h1>

      {/* z-[3]: After-scroll text */}
      <div className="AfterText absolute top-[60%] sm:top-[65%] lg:top-[70%] left-1/2 z-[3] flex w-[22rem] -translate-x-1/2 flex-col items-center justify-center text-neutral-50 opacity-0 sm:w-[30rem] md:w-[64rem]">
        <span className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Because There&apos;s a Better Way to Experience Dental Care
        </span>
        <span className="mt-4 text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
          At Relaxation Dental, we believe that going to the dentist should be a
          comfortable, stress-free experience.
        </span>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button className="group relative overflow-hidden rounded-full bg-neutral-50 px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 md:text-lg font-medium text-[#3b2a28] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 z-0 h-full w-full scale-x-0 transform bg-neutral-200 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div>
          </button>

          <button className="group relative overflow-hidden rounded-full border-2 border-neutral-50 px-6 py-3 text-sm sm:text-base md:px-8 md:py-4 md:text-lg font-medium text-neutral-50 transition-all duration-300 hover:scale-105 hover:bg-neutral-50/10">
            <span className="relative z-10 flex items-center gap-2">
              Call Now
              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
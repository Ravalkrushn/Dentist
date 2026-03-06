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
      <div className="AfterText absolute top-[70%] left-1/2 z-[3] flex w-[22rem] -translate-x-1/2 flex-col items-center justify-center text-neutral-50 opacity-0 sm:w-[30rem] md:w-[64rem]">
        <span className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Because There&apos;s a Better Way to Experience Dental Care
        </span>
        <span className="mt-4 text-center text-base sm:text-xl md:text-2xl lg:text-3xl">
          At Relaxation Dental, we believe that going to the dentist should be a
          comfortable, stress-free experience.
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
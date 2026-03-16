"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const doctorsList = [
    {
        name: "Dr. Nicholas Brown",
        title: "Founder & Lead Dentist",
        image: "/image/ABOUT2.png",
        shortDesc: "With a passion for modern, comfortable dentistry, Dr. Brown is dedicated to providing exceptional care equipped with the latest advancements in dental technology. He specializes in comprehensive treatment plans, focusing on conscious sedation for a relaxed and stress-free patient experience.",
        longDesc: "Dr. Brown grew up in Colorado and has always felt a deep connection to the Salida community. After completing his advanced residency in sedation dentistry at NYU, he returned home to establish Relaxation Dental — a practice built on the belief that every patient deserves compassionate, judgment-free care.",
        education: [
            { degree: "Doctor of Dental Surgery (DDS)", institution: "University of Colorado School of Dental Medicine", year: "2008" },
            { degree: "Bachelor of Science in Biology", institution: "Colorado State University", year: "2004" },
            { degree: "Advanced Residency in Sedation Dentistry", institution: "NYU College of Dentistry", year: "2009" }
        ],
        certifications: [
            "Board Certified – American Dental Association",
            "Certified in Conscious Sedation (DOCS Education)",
            "Invisalign Certified Provider",
            "CEREC Same-Day Crown Specialist",
            "Member – Colorado Dental Association",
            "Fellow – Academy of General Dentistry"
        ],
        experience: [
            { role: "Founder & Lead Dentist", place: "Relaxation Dental, Salida, CO", duration: "2010 – Present", desc: "Built a patient-first practice renowned for comfortable care." },
            { role: "Associate Dentist", place: "Mountain View Dental Group, Denver, CO", duration: "2009 – 2010", desc: "Provided comprehensive care including prosthodontics." },
            { role: "Clinical Resident", place: "NYU Langone Dental Associates", duration: "2008 – 2009", desc: "Specialized training in IV sedation and implants." }
        ]
    },
    {
        name: "Dr. Emily Chen",
        title: "Orthodontist Specialist",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop",
        shortDesc: "Dr. Chen believes that a beautiful smile is the foundation of confidence. She brings specialized expertise in orthodontics for both teens and adults, utilizing the latest in clear aligner technologies and traditional methods.",
        longDesc: "Graduating top of her class from UCSF, Dr. Chen has published multiple research papers on airway-friendly orthodontics. She volunteers annually with 'Smiles for Kids' providing free dental care to underserved communities.",
        education: [
            { degree: "Master of Science in Orthodontics", institution: "UCSF School of Dentistry", year: "2012" },
            { degree: "Doctor of Dental Surgery (DDS)", institution: "UCLA School of Dentistry", year: "2009" },
            { degree: "Bachelor of Science in Chemistry", institution: "UC Berkeley", year: "2005" }
        ],
        certifications: [
            "Diplomate – American Board of Orthodontics",
            "Diamond Plus Invisalign Provider",
            "Member – American Association of Orthodontists",
            "Certified in Lingual Braces"
        ],
        experience: [
            { role: "Lead Orthodontist", place: "Relaxation Dental, Salida, CO", duration: "2015 – Present", desc: "Spearheading modern alignment procedures and technologies." },
            { role: "Associate Orthodontist", place: "Bay Area Smiles, CA", duration: "2012 – 2015", desc: "Managed high-volume pediatric and adult alignment cases." },
            { role: "Orthodontic Resident", place: "UCSF Health", duration: "2009 – 2012", desc: "Comprehensive training in complex craniofacial anomalies." }
        ]
    },
    {
        name: "Dr. James Wilson",
        title: "Oral & Maxillofacial Surgeon",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop",
        shortDesc: "Specializing in complex extractions, dental implants, and corrective jaw surgery, Dr. Wilson ensures that even the most advanced procedures are performed with precision and minimal discomfort.",
        longDesc: "Dr. Wilson brings surgical excellence to our practice. He has extensive hospital-based training dealing with facial trauma, reconstructive surgery, and complex bone grafting techniques.",
        education: [
            { degree: "Certificate in Oral Surgery", institution: "Mayo Clinic Alix School of Medicine", year: "2014" },
            { degree: "Doctor of Dental Medicine (DMD)", institution: "Harvard School of Dental Medicine", year: "2010" }
        ],
        certifications: [
            "Board Certified – American Board of Oral and Maxillofacial Surgery",
            "Advanced Trauma Life Support (ATLS) Certified",
            "Fellow – American College of Surgeons",
            "Certified in IV Deep Sedation"
        ],
        experience: [
            { role: "Oral Surgeon", place: "Relaxation Dental, Salida, CO", duration: "2018 – Present", desc: "Performing advanced surgical and implant treatments with precision." },
            { role: "Attending Surgeon", place: "Denver Health Medical Center", duration: "2014 – 2018", desc: "Handled severe facial trauma and complex reconstructive cases." }
        ]
    }
];

export default function DoctorProfile() {
    const bannerContainerRef = useRef<HTMLDivElement>(null);
    const bannerImageRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    const [activeDoc, setActiveDoc] = useState(0);
    const [expandedDocs, setExpandedDocs] = useState<Record<number, boolean>>({});

    const toggleExpanded = (i: number) => {
        setExpandedDocs(prev => ({ ...prev, [i]: !prev[i] }));
    }

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (bannerContainerRef.current && bannerImageRef.current) {
            const bannerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerContainerRef.current,
                    start: "top top",
                    end: "+=350%",
                    scrub: 0.2,
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
                ease: "none",
            })
                .to(".banner-title-top", { opacity: 0, y: -50, duration: 0.5 }, "<")
                .to(".banner-title-bottom", { opacity: 0, y: 50, duration: 0.5 }, "<")
                .to({}, { duration: 10 / 88 }); // This forces the photo to hold perfectly still at full-screen while you keep scrolling for another 1.5x the duration of the zoom before releasing down.
        }

        const blocks = gsap.utils.toArray(".doctor-text-block") as HTMLDivElement[];
        blocks.forEach((block, i) => {
            ScrollTrigger.create({
                trigger: block,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => setActiveDoc(i),
                onEnterBack: () => setActiveDoc(i),
            });

            const eduCards = block.querySelectorAll(".edu-card");
            if (eduCards.length > 0) {
                gsap.from(eduCards, {
                    scrollTrigger: {
                        trigger: block.querySelector(".edu-section"),
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            }

            const certItems = block.querySelectorAll(".cert-item");
            if (certItems.length > 0) {
                gsap.from(certItems, {
                    scrollTrigger: {
                        trigger: block.querySelector(".cert-section"),
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    x: 30,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            }

            const expCards = block.querySelectorAll(".exp-card");
            if (expCards.length > 0) {
                gsap.from(expCards, {
                    scrollTrigger: {
                        trigger: block.querySelector(".exp-section"),
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                });
            }
        });

    }, []);

    return (
        <section className="w-full bg-[#E2DED9]">
            {/* Banner Section */}
            <div ref={bannerContainerRef} className="h-[100dvh] w-full relative overflow-hidden flex flex-col items-center justify-between py-24 px-6 bg-[#E2DED9] z-10">
                <div className="absolute inset-0 z-[0] bg-[#E2DED9]" />

                <h1 className="banner-title-top absolute top-[9%] left-1/2 -translate-x-1/2 w-full z-[3] text-5xl md:text-7xl font-serif text-[#3b2a28] text-center">
                    meet team members
                </h1>

                <div
                    ref={bannerImageRef}
                    className="absolute top-[47%] left-[50%] z-[2] w-[22rem] md:w-[32rem] h-[16rem] md:h-[22rem] -translate-x-1/2 -translate-y-1/2 -rotate-6 transform-gpu overflow-hidden rounded-[50px] shadow-2xl will-change-transform"
                >
                    <img
                        src="/image/team_member.png"
                        alt="Meet the Dentists"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="banner-title-bottom absolute top-[75%] left-1/2 -translate-x-1/2 w-full z-[3] text-center text-[#5a3a3a]">
                    <p className="text-2xl md:text-4xl font-serif">Welcome to Relaxation Dental</p>
                </div>
            </div>

            {/* Doctors Profile Section with Sticky Sidebar */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 flex gap-16 relative bg-[#E2DED9] z-20">
                {/* Left side: Sticky Avatar (Desktop Only) */}
                <div className="hidden lg:block w-5/12 shrink-0">
                    <div className="sticky top-36 h-[80vh] w-full rounded-3xl overflow-hidden shadow-2xl">
                        {doctorsList.map((doc, i) => (
                            <img
                                key={i}
                                src={doc.image}
                                alt={doc.name}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeDoc === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right side: Doctors Info Scrollable Text */}
                <div ref={textContainerRef} className="w-full lg:w-7/12 flex flex-col gap-[30vh]">
                    {doctorsList.map((doc, i) => (
                        <div key={i} className="doctor-text-block relative pt-20" data-index={i}>
                            {/* Mobile Image (Hidden on Desktop) */}
                            <div className="block lg:hidden w-full h-[400px] mb-8 rounded-3xl overflow-hidden shadow-xl">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                            </div>

                            <h2 className="text-5xl font-serif text-[#3b2a28] mb-2">{doc.name}</h2>
                            <p className="text-[#0097ab] font-bold uppercase tracking-widest text-sm mb-6 pb-4 border-b-2 border-slate-300 w-fit">{doc.title}</p>

                            <p className="text-lg text-[#5a3a3a] mb-4 leading-relaxed">{doc.shortDesc}</p>

                            {expandedDocs[i] && (
                                <p className="text-lg text-[#5a3a3a] mb-4 scale-up-anim leading-relaxed">{doc.longDesc}</p>
                            )}
                            <button onClick={() => toggleExpanded(i)} className="text-white bg-[#0097ab] hover:bg-[#007b8a] px-6 py-2 rounded-full font-medium transition-colors mt-2 mb-10 text-xs uppercase tracking-wider">
                                {expandedDocs[i] ? "Show Less" : "Read More"}
                            </button>

                            {/* Education Background */}
                            <div className="edu-section mb-10">
                                <h3 className="text-2xl font-serif text-[#3b2a28] border-b-2 border-[#0097ab] inline-block pb-2 mb-6">Education Background</h3>
                                <div className="space-y-4">
                                    {doc.education.map((ed: { degree: string; institution: string; year: string }, edIdx: number) => (
                                        <div key={edIdx} className="edu-card bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-[#0097ab]">
                                            <p className="text-[#0097ab] font-bold text-xs mb-1 uppercase bg-[#e2ded9] w-fit px-2 py-1 rounded">{ed.year}</p>
                                            <h4 className="text-[#3b2a28] font-bold text-lg">{ed.degree}</h4>
                                            <p className="text-slate-500 text-sm mt-1">{ed.institution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="cert-section mb-10">
                                <h3 className="text-2xl font-serif text-[#3b2a28] border-b-2 border-[#0097ab] inline-block pb-2 mb-6">Certifications</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {doc.certifications.map((cert: string, certIdx: number) => (
                                        <li key={certIdx} className="cert-item flex items-start gap-3 bg-[#e2ded9] p-4 rounded-xl shadow-sm border border-slate-200">
                                            <span className="text-[#0097ab] text-lg font-bold leading-none mt-1">✓</span>
                                            <span className="text-[#5a3a3a] text-sm font-medium">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className="exp-section">
                                <h3 className="text-2xl font-serif text-[#3b2a28] border-b-2 border-[#0097ab] inline-block pb-2 mb-6">Experience</h3>
                                <div className="space-y-6">
                                    {doc.experience.map((exp: { duration: string; role: string; place: string; desc: string }, expIdx: number) => (
                                        <div key={expIdx} className="exp-card relative pl-6 border-l-2 border-slate-300 ml-3">
                                            <div className="absolute w-3 h-3 bg-[#0097ab] rounded-full -left-[7px] top-1"></div>
                                            <p className="text-[#0097ab] font-bold text-xs mb-1">{exp.duration}</p>
                                            <h4 className="text-[#3b2a28] font-bold text-lg mb-1">{exp.role}</h4>
                                            <p className="text-slate-600 text-xs font-semibold mb-2">{exp.place}</p>
                                            <p className="text-[#5a3a3a] text-sm leading-relaxed">{exp.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


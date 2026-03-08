"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

function DoctorCard({ doctor, index }: { doctor: any, index: number }) {
    const [expanded, setExpanded] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isDarkBg = index % 2 !== 0;

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        const ctx = gsap.context(() => {
            // Main Doctor Profile animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.from(".doctor-image", {
                opacity: 0,
                y: 60,
                duration: 1.2,
                ease: "power3.out"
            })
                .from(".doctor-text", {
                    opacity: 0,
                    x: isDarkBg ? 40 : -40, // Slide from opposite side based on index
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8");

            // Education items stagger
            gsap.from(".edu-card", {
                scrollTrigger: {
                    trigger: ".edu-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Certifications stagger
            gsap.from(".cert-item", {
                scrollTrigger: {
                    trigger: ".cert-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Experience items stagger
            gsap.from(".exp-card", {
                scrollTrigger: {
                    trigger: ".exp-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [isDarkBg]);

    return (
        <div ref={sectionRef} className={`w-full ${isDarkBg ? 'bg-[#0097ab]' : 'bg-[#E2DED9]'} py-20 px-6 lg:px-28 overflow-hidden`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 items-center mb-20">
                <div className={`doctor-image w-full lg:w-[400px] flex-shrink-0 ${isDarkBg ? 'lg:order-2' : ''}`}>
                    <img src={doctor.image} alt={doctor.name} className="w-full h-[500px] rounded-3xl shadow-xl object-cover object-top" />
                </div>
                <div className={`doctor-text flex-1 ${isDarkBg ? 'text-white' : 'text-[#5a3a3a]'} ${isDarkBg ? 'lg:order-1' : ''}`}>
                    <h2 className={`${isDarkBg ? 'text-white' : 'text-[#3b2a28]'} text-4xl lg:text-5xl font-serif mb-2`}>{doctor.name}</h2>
                    <p className={`${isDarkBg ? 'text-gray-200' : 'text-[#0097ab]'} font-bold uppercase tracking-widest text-sm mb-5`}>{doctor.title}</p>
                    <p className="leading-relaxed text-lg mb-4">{doctor.shortDesc}</p>
                    {expanded && (
                        <p className="leading-relaxed text-lg scale-up-anim mb-4">{doctor.longDesc}</p>
                    )}
                    <button onClick={() => setExpanded(!expanded)} className={`text-white ${isDarkBg ? 'bg-[#3b2a28] hover:bg-[#2a1a19]' : 'bg-[#0097ab] hover:bg-[#007b8a]'} px-6 py-2 rounded-full font-medium transition-colors mt-3 text-sm uppercase tracking-wide`}>
                        {expanded ? "Show Less" : "Read More"}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
                <div className="edu-section">
                    <h3 className={`text-3xl font-serif ${isDarkBg ? 'text-white border-white' : 'text-[#3b2a28] border-[#0097ab]'} mb-8 border-b-2 inline-block pb-2`}>Education Background</h3>
                    <div className="space-y-6">
                        {doctor.education.map((ed: any, i: number) => (
                            <div key={i} className="edu-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <p className="text-[#0097ab] font-bold text-sm mb-1">{ed.year}</p>
                                <h4 className="text-[#3b2a28] font-bold text-lg">{ed.degree}</h4>
                                <p className="text-[#5a3a3a]">{ed.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cert-section">
                    <h3 className={`text-3xl font-serif ${isDarkBg ? 'text-white border-white' : 'text-[#3b2a28] border-[#0097ab]'} mb-8 border-b-2 inline-block pb-2`}>Certifications</h3>
                    <ul className="space-y-4">
                        {doctor.certifications.map((cert: string, i: number) => (
                            <li key={i} className="cert-item flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <span className="text-[#0097ab] text-xl">✓</span>
                                <span className="text-[#5a3a3a] font-medium">{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="exp-section max-w-7xl mx-auto mt-20">
                <h3 className={`text-3xl font-serif ${isDarkBg ? 'text-white border-white' : 'text-[#3b2a28] border-[#0097ab]'} mb-10 border-b-2 inline-block pb-2`}>Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctor.experience.map((exp: any, i: number) => (
                        <div key={i} className={`exp-card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ${isDarkBg ? '' : 'border-t-4 border-t-[#0097ab]'}`}>
                            <p className="text-[#0097ab] font-bold text-sm mb-2">{exp.duration}</p>
                            <h4 className="text-[#3b2a28] font-bold text-xl mb-1">{exp.role}</h4>
                            <p className="text-gray-500 text-sm mb-4">{exp.place}</p>
                            <p className="text-[#5a3a3a]">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function DoctorProfile() {
    return (
        <section className="w-full">
            <div className="bg-[#E2DED9] pt-14 pb-8 text-center px-6">
                <h2 className="text-[#3b2a28] text-4xl lg:text-5xl font-serif mt-3 mb-6 inline-block border-b-4 border-[#0097ab] pb-2">Meet Our Doctors</h2>
                <p className="text-[#5a3a3a] max-w-2xl mx-auto text-lg leading-relaxed">
                </p>
            </div>
            {doctorsList.map((doc, index) => (
                <DoctorCard key={index} doctor={doc} index={index} />
            ))}
        </section>
    );
}

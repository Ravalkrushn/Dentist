import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full pt-16 pb-6 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#e2ded9" }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-16 mb-12 text-[#4a2e2b]">

                {/* Column 1: Logo & Contact Info */}
                <div className="flex flex-col gap-6 md:w-1/4">
                    {/* Recreating the Logo from screenshot */}
                    <div className="flex flex-col w-fit">
                        <div className="flex items-center relative mb-1">
                            <span
                                className="text-[#4a2e2b] text-[2.1rem] leading-none"
                                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                            >
                                Relaxation
                            </span>
                            <span className="text-[#4a2e2b] text-[2.1rem] leading-none font-light tracking-tight ml-0.5">
                                Dental
                            </span>
                            {/* Absolute SVG Leaf near the 'D' */}
                            <svg className="absolute -top-[18px] right-[2.5rem] w-8 h-8 text-[#0097ab] opacity-90" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C12 2 17 4 19 8C20.66 11.32 19.5 17 19.5 17C19.5 17 16 15 13 13C10 11 7 11 7 11C7 11 9 13.5 11 15C13 16.5 14.5 19 14.5 19C14.5 19 12.5 17 8 16C5.5 15.44 2 15 2 15C2 15 5.5 12 8.5 9C10.5 7 12 2 12 2Z" />
                            </svg>
                        </div>
                        <div className="bg-[#4a2e2b] text-[#e2ded9] text-[0.6rem] font-bold tracking-[0.16em] px-2 py-0.5 mt-0.5 w-full text-center whitespace-nowrap rounded-[2px]">
                            BECAUSE THERE IS A BETTER WAY
                        </div>
                        <div className="text-[#4a2e2b] text-[0.45rem] tracking-[0.2em] font-medium mt-1 uppercase w-full flex justify-between px-0.5 opacity-90">
                            <span>Sedation</span>
                            <span>•</span>
                            <span>Implants</span>
                            <span>•</span>
                            <span>Cosmetic</span>
                            <span>•</span>
                            <span>Emergency</span>
                            <span>•</span>
                            <span>Family</span>
                        </div>
                    </div>
                    
                    <p className="text-[0.9rem] font-light leading-relaxed opacity-85 mt-[-10px]" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Your comfort is our top priority. We provide world-class dental care with a gentle touch, using advanced technology for a stress-free experience.
                    </p>
                </div>

                {/* Column 2: Contact Info */}
                <div className="flex flex-col gap-6 md:w-1/4" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <h4 className="text-[1.1rem] font-bold uppercase tracking-wider mb-1">Contact Us</h4>
                    <div className="text-[0.9rem] font-light leading-relaxed">
                        <strong className="font-bold">Address:</strong><br />
                        Relaxation Dental<br />
                        1222 C Street, Salida, CO 81201
                    </div>
                    <div className="text-[0.9rem] font-light leading-relaxed">
                        <strong className="font-bold">Phone Number:</strong><br />
                        <a href="tel:7195393145" className="hover:underline transition-all">719-539-3145</a>
                    </div>
                    <div className="text-[0.9rem] font-light leading-relaxed">
                        <strong className="font-bold">Email:</strong><br />
                        <a href="mailto:info@relaxationdds.com" className="hover:underline transition-all">info@relaxationdds.com</a>
                    </div>
                </div>

                {/* Column 3: Quick Links */}
                <div className="flex flex-col gap-4 md:w-1/6" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <h4 className="text-[1.1rem] font-bold uppercase tracking-wider mb-1">Quick Links</h4>
                    <Link href="/" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Home</Link>
                    <Link href="/our-practice" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Our Practice</Link>
                    <Link href="/patient-information" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Patient Info</Link>
                    <Link href="/procedures" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Procedures</Link>
                    <Link href="/careers" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Careers</Link>
                    <Link href="/blog" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Blog</Link>
                    <Link href="/contact" className="text-[0.9rem] font-light hover:underline underline-offset-4 transition-all">Contact Us</Link>
                </div>

                {/* Column 4: Opening Hours & Socials */}
                <div className="flex flex-col gap-6 md:w-1/4" style={{ fontFamily: "'Lato', sans-serif" }}>
                    <h4 className="text-[1.1rem] font-bold uppercase tracking-wider mb-1">Opening Hours</h4>
                    <div className="text-[0.9rem] font-light space-y-1">
                        <div className="flex justify-between"><span>Mon – SAT:</span> <span>8:00 AM – 5:00 PM</span></div>
                        <div className="flex justify-between border-b border-[#4a2e2b]/10 pb-1"><span>SUN:</span> <span>Closed</span></div>
                    </div>
                    
                    <div className="flex gap-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0097ab] flex items-center justify-center text-white hover:bg-[#4a2e2b] transition-all hover:scale-105 shadow-sm">
                            <Facebook size={18} fill="currentColor" strokeWidth={0} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border-[1.5px] border-[#0097ab] flex items-center justify-center text-[#0097ab] hover:bg-[#0097ab] hover:text-white transition-all hover:scale-105 shadow-sm">
                            <Instagram size={17} />
                        </a>
                        <a href="https://google.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border-[1.5px] border-[#0097ab] flex items-center justify-center text-[#0097ab] hover:bg-[#0097ab] hover:text-white transition-all hover:scale-105 shadow-sm">
                            <span className="font-bold font-serif text-[1.1rem] leading-none mb-[2px]">G</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Section: Copyright */}
            <div className="max-w-7xl mx-auto border-t border-[#4a2e2b]/20 pt-8 pb-4 flex items-center justify-center text-[#4a2e2b]">
                <p
                    className="text-sm font-light tracking-wide opacity-90"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                >
                    © Develop by ----
                </p>
            </div>
        </footer>
    );
}

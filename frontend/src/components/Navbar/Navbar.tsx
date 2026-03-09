"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, CalendarDays, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Teeth Cleaning", href: "/services/teeth-cleaning" },
            { label: "Root Canal", href: "/services/root-canal" },
            { label: "Dental Implants", href: "/services/dental-implants" },
            { label: "Braces & Aligners", href: "/services/braces-aligners" },
            { label: "Teeth Whitening", href: "/services/teeth-whitening" },
            { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
        ],
    },
    { label: "Appointment / Book Consultation", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-[#0097ab] font-bold text-xl tracking-tight">
                        Relaxation<span className="text-[#0097ab]">Dental</span>
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                        Because There Is A Better Way
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#0097ab]">
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            className="relative group"
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 hover:text-[#007b8b] transition py-4"
                            >
                                {link.label}
                                {link.dropdown && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 w-60 bg-white border-t-2 border-[#0097ab] shadow-xl rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="py-2 flex flex-col">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.label}
                                                href={sublink.href}
                                                className="px-5 py-2.5 hover:bg-[#F5F9FA] hover:text-[#007b8b] text-[#0097ab] text-sm transition-colors border-b border-gray-50 last:border-0"
                                            >
                                                {sublink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden flex items-center gap-2 bg-[#0097ab] text-[#eaddd7] text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0097ab]/40"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <CalendarDays size={15} className="transition-transform duration-300 group-hover:rotate-12" />
                            Schedule Now
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="group relative overflow-hidden flex items-center gap-2 border border-[#0097ab] text-[#0097ab] text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0097ab]/20"
                    >
                        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                            <Phone size={15} className="transition-transform duration-300 group-hover:rotate-12" />
                            719-539-3145
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-y-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-y-100 origin-bottom"></div>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-[#0097ab]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <div key={link.label} className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <Link
                                    href={link.href}
                                    className="text-[#0097ab] font-medium text-sm hover:text-[#007b8b]"
                                    onClick={() => !link.dropdown && setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                        className="text-[#0097ab] p-1 bg-[#0097ab]/5 rounded-md"
                                    >
                                        <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Dropdown */}
                            {link.dropdown && activeDropdown === link.label && (
                                <div className="flex flex-col gap-3 mt-3 mb-2 pl-4 border-l-2 border-[#0097ab]/20">
                                    {link.dropdown.map((sublink) => (
                                        <Link
                                            key={sublink.label}
                                            href={sublink.href}
                                            className="text-[#0097ab]/80 font-medium text-sm hover:text-[#007b8b]"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {sublink.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="group relative overflow-hidden bg-[#0097ab] text-[#eaddd7] text-sm font-semibold px-4 py-3 rounded-full text-center shadow-md transition-all duration-300"
                    >
                        <span className="relative z-10">Schedule Now</span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-x-0 transform bg-[#007b8a] transition-transform duration-500 group-hover:scale-x-100 origin-left"></div>
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="group relative overflow-hidden border border-[#0097ab] text-[#0097ab] text-sm font-semibold px-4 py-3 rounded-full text-center shadow-sm transition-all duration-300"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">719-539-3145</span>
                        <div className="absolute inset-0 z-0 h-full w-full scale-x-0 transform bg-[#0097ab] transition-transform duration-500 group-hover:scale-x-100 origin-right"></div>
                    </a>
                </div>
            )}
        </nav>
    );
}


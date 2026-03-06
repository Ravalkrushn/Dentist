"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, CalendarDays, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Appointment / Book Consultation", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
                                className="flex items-center gap-1 hover:text-[#007b8b] transition"
                            >
                                {link.label}
                            </Link>

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
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[#0097ab] font-medium text-sm hover:text-[#007b8b]"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
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


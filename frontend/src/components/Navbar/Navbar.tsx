"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, CalendarDays, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    {
        label: "Our Practice",
        href: "/our-practice",
        dropdown: ["Meet Dr. Nicholas Brown", "Careers"],
    },
    {
        label: "Patient Information",
        href: "/patient-information",
        dropdown: ["New Patients", "Financing & Insurance", "Referral Program"],
    },
    {
        label: "Procedures",
        href: "/procedures",
        dropdown: ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Oral Surgery"],
    },
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
                    <span className="text-[#3b1a1a] font-bold text-xl tracking-tight">
                        Relaxation<span className="text-[#8b5c5c]">Dental</span>
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                        Because There Is A Better Way
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#3b1a1a]">
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 hover:text-[#8b5c5c] transition"
                            >
                                {link.label}
                                {link.dropdown && <ChevronDown size={14} />}
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && activeDropdown === link.label && (
                                <div className="absolute top-full left-0 pt-8 z-50">
                                    <ul className="bg-white shadow-lg rounded-lg py-2 w-52">
                                        {link.dropdown.map((item) => (
                                            <li key={item}>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-[#3b1a1a] hover:bg-[#f5f0eb] hover:text-[#8b5c5c] transition"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-[#3b1a1a] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#5c2e2e] transition"
                    >
                        <CalendarDays size={15} />
                        Schedule Now
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="flex items-center gap-2 border border-[#3b1a1a] text-[#3b1a1a] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#f5f0eb] transition"
                    >
                        <Phone size={15} />
                        719-539-3145
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-[#3b1a1a]"
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
                            className="text-[#3b1a1a] font-medium text-sm hover:text-[#8b5c5c]"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-[#3b1a1a] text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
                    >
                        Schedule Now
                    </Link>
                    <a
                        href="tel:7195393145"
                        className="border border-[#3b1a1a] text-[#3b1a1a] text-sm font-semibold px-4 py-2 rounded-full text-center"
                    >
                        719-539-3145
                    </a>
                </div>
            )}
        </nav>
    );
}
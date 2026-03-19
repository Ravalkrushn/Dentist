"use client";

import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
    label: string;
    href: string;
    active?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    light?: boolean;
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
    return (
        <nav className={`flex items-center justify-end gap-2 font-mono text-[13px] uppercase tracking-[0.1em] relative z-20`}>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {item.active ? (
                        <span className={`${light ? "text-white" : "text-[#0097ab]"} font-bold transition-all duration-300`}>
                            {item.label}
                        </span>
                    ) : (
                        <Link 
                            href={item.href} 
                            className={`${light ? "text-white/60 hover:text-white" : "text-[#3b2a28]/60 hover:text-[#0097ab]"} transition-all duration-300 transition-colors`}
                        >
                            {item.label}
                        </Link>
                    )}
                    {index < items.length - 1 && (
                        <span className={`${light ? "text-white/40" : "text-[#3b2a28]/40"} text-[12px] font-normal`}>
                             {">"} 
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}

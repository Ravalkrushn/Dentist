"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#3b1a1a] text-white text-center text-xs md:text-sm font-semibold py-3 px-10 relative tracking-wide">
      NEW PATIENT SPECIAL: $199 — INCLUDES CLEANING, X-RAYS, FULL COMPREHENSIVE
      EXAM, AND MORE! CALL TODAY TO BOOK YOUR APPOINTMENT
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
      >
        <X size={16} />
      </button>
    </div>
  );
}
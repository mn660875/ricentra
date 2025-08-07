"use client";

import { useState } from "react";
import { Menu, X, BellIcon } from "lucide-react";
import Link from "next/link";
import BatteryStatus from "./BatteryStatus";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router= useRouter();

  

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="bg-[#db20d5] px-3 py-1 rounded-lg">
          <h1 className="text-lg font-bold text-white">Logo</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 font-semibold text-lg text-[#3B3C36]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/certifications">Certifications</Link></li>
            <li><Link href="/inquiry">Export Inquiry</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/trade">Trade</Link></li>
            <li><Link href="/aboutus">About Us</Link></li>
          </ul>
        </div>

        {/* Battery + Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* <BatteryStatus /> */}
          <div>
            <button onClick={()=>router.push("inquiry")} className="bg-[#db20d5] text-white font-semibold px-3 py-2 rounded-lg cursor-pointer border-1 border-[#db20d5] hover:bg-white hover:text-[#db20d5] transition-all">Request a Quote</button>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow-md">
          <ul className="space-y-4 font-medium text-base text-[#3B3C36]">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/certifications" onClick={toggleMenu}>Certifications</Link></li>
            <li><Link href="/inquiry" onClick={toggleMenu}>Export Inquiry</Link></li>
            <li><Link href="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link href="/trade" onClick={toggleMenu}>Trade</Link></li>
            <li><Link href="/aboutus" onClick={toggleMenu}>About Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

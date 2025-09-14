"use client";
import { useState } from "react";
import { gtagEvent } from "@/app/lib/gtag";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCallClick = () => {
    gtagEvent({
      action: "call_now_click",
      category: "CTA",
      label: "Call Now",
    });
  };

  return (
    <header className="w-full shadow-md fixed top-0 left-0 bg-white z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
    {/* Logo */}
    <img src="/logo.png" alt="Tile showroom" className="h-16 md:h-20 w-auto object-contain" />

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-8 text-gray-700 font-bold text-lg md:text-xl">
      <a href="#about" className="hover:text-blue-600 transition">About</a>
      <a href="#collections" className="hover:text-blue-600 transition">Collections</a>
      <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
    </nav>

    {/* Call Now (desktop) */}
    <a
      href="tel:+919080561007"
      onClick={handleCallClick}
      className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
    >
      Call Now
    </a>

    {/* Hamburger (mobile) */}
    <button
      className="md:hidden text-gray-700 focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      ) : (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      )}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-white shadow-md border-t border-gray-200">
      <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
        <a href="#about" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</a>
        <a href="#collections" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Collections</a>
        <a href="#contact" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a>
        <a
          href="tel:+919080561007"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-center"
          onClick={() => {
            handleCallClick
            setIsOpen(false)}}
        >
          Call Now
        </a>
      </nav>
    </div>
  )}
</header>

  );
}

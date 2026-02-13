"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#tours", label: "Tours" },
  { href: "/#itinerary", label: "Itinerary" },
  { href: "/#booking", label: "Book Now" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-niagara-blue">
              GoTour
            </span>
            <span className="text-2xl font-light text-gray-700">Niagara</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-niagara-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/16479094565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-niagara-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-niagara-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-600 hover:text-niagara-blue font-medium border-b border-gray-50"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/16479094565"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-niagara-blue text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}

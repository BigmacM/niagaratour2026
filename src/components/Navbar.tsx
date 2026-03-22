"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const TOUR_LINKS = [
  { href: "/tours/niagara-flagship", label: "Niagara Flagship" },
  { href: "/tours/toronto-highlights", label: "Toronto Highlights" },
  { href: "/tours/couples-spa", label: "Couples Spa & Falls" },
  { href: "/tours/custom-private", label: "Custom Private Tour" },
  { href: "/tours/world-cup-niagara", label: "World Cup 2026 Special" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#itinerary", label: "Itinerary" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);

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

            {/* Tours dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setToursOpen(true)}
              onMouseLeave={() => setToursOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-niagara-blue transition-colors">
                Tours
                <ChevronDown className="w-3 h-3" />
              </button>
              {toursOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {TOUR_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-niagara-blue hover:bg-niagara-blue/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/16479094565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-niagara-blue to-niagara-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-md hover:shadow-niagara-blue/20 transition-all"
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

          <div className="py-3 border-b border-gray-50">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Our Tours
            </span>
          </div>
          {TOUR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 pl-3 text-gray-600 hover:text-niagara-blue font-medium border-b border-gray-50"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/16479094565"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-gradient-to-r from-niagara-blue to-niagara-dark text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}

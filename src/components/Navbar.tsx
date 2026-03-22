"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Sparkles } from "lucide-react";
import { BookingModal } from "./BookingModal";

const TOUR_LINKS = [
  { href: "/tours/niagara-flagship", label: "Niagara Flagship", badge: "Popular" },
  { href: "/tours/toronto-highlights", label: "Toronto Highlights", badge: null },
  { href: "/tours/couples-spa", label: "Couples Spa & Falls", badge: null },
  { href: "/tours/custom-private", label: "Custom Private Tour", badge: null },
  { href: "/tours/world-cup-niagara", label: "World Cup 2026", badge: "New" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#tours", label: "Tours" },
  { href: "/#itinerary", label: "Itinerary" },
  { href: "/#reviews", label: "Reviews" },
];

function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} fill="currentColor">
      <path d="M18 2l2.5 8 4-3-2 7 6-2.5-4 6 7 2.5-7 1.5 4 6-5-3.5 2 8h-2l-3-7-3 7h-2l2-8-5 3.5 4-6-7-1.5 7-2.5-4-6 6 2.5-2-7 4 3z" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-snow-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with maple leaf */}
            <Link href="/" className="flex items-center gap-1.5 group">
              <MapleLeaf className="w-7 h-7 text-crimson group-hover:scale-110 transition-transform" />
              <div className="flex items-baseline">
                <span className="text-xl font-extrabold text-stone-900 tracking-tight">
                  GoTour
                </span>
                <span className="text-xl font-light text-falls-600">
                  Niagara
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-600 hover:text-maple-500 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-maple-500 after:transition-all"
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
                <button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-maple-500 transition-colors">
                  All Tours
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      toursOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {toursOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-snow-200 py-2 overflow-hidden"
                    >
                      {TOUR_LINKS.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center justify-between px-4 py-3 text-sm text-stone-700 hover:text-maple-600 hover:bg-maple-50 transition-colors"
                        >
                          <span className="font-medium">{link.label}</span>
                          {link.badge && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                link.badge === "New"
                                  ? "bg-forest-100 text-forest-700"
                                  : "bg-maple-100 text-maple-700"
                              }`}
                            >
                              {link.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="tel:+16479094565"
                  className="flex items-center gap-1.5 text-sm font-medium text-stone-500 hover:text-maple-500 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">(647) 909-4565</span>
                </a>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-maple-500 to-maple-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-maple-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  Build Your Tour
                </button>
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-maple-500 to-maple-600 text-white px-4 py-2 rounded-full text-xs font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Book
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="p-2 text-stone-600 hover:text-maple-500 transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-snow-200 overflow-hidden"
            >
              <div className="px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-stone-700 hover:text-maple-500 font-medium border-b border-snow-100"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="py-3 border-b border-snow-100">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    Our Tours
                  </span>
                </div>
                {TOUR_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 pl-3 text-stone-600 hover:text-maple-500 font-medium border-b border-snow-50"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          link.badge === "New"
                            ? "bg-forest-100 text-forest-700"
                            : "bg-maple-100 text-maple-700"
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}

                <div className="flex gap-3 mt-4">
                  <a
                    href="https://wa.me/16479094565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-stone-200 text-stone-700 px-4 py-3 rounded-full text-sm font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setModalOpen(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-maple-500 to-maple-600 text-white px-4 py-3 rounded-full text-sm font-bold"
                  >
                    <Sparkles className="w-4 h-4 text-gold" />
                    Build Tour
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

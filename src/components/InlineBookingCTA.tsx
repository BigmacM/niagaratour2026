"use client";

import { useState } from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { BookingModal } from "./BookingModal";

export function InlineBookingCTA({ tourId }: { tourId?: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-8 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-gray-900">
                Ready to book this tour?
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Customize add-ons & get an instant quote, or message us directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-niagara-blue to-niagara-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-niagara-blue/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-sunset-gold" />
                Build & Customize
              </button>
              <a
                href="https://wa.me/16479094565"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-niagara-blue hover:text-niagara-blue transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedTour={tourId}
      />
    </>
  );
}

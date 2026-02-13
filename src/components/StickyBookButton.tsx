"use client";

import { MessageCircle } from "lucide-react";

export function StickyBookButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 p-3">
      <a
        href="https://wa.me/16479094565"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-niagara-blue text-white py-3.5 rounded-full text-base font-semibold hover:bg-niagara-dark transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        Book Now via WhatsApp
      </a>
    </div>
  );
}

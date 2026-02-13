"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BookingModal } from "./BookingModal";

export function FloatingCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Desktop floating button */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block">
        <motion.button
          onClick={() => setModalOpen(true)}
          className="group flex items-center gap-3 bg-gradient-to-r from-niagara-blue to-niagara-dark text-white pl-6 pr-7 py-4 rounded-full shadow-2xl shadow-niagara-blue/30 hover:shadow-niagara-blue/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunset-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sunset-gold" />
          </span>
          <span className="font-semibold text-base">Build Your Tour</span>
          <Sparkles className="w-5 h-5 text-sunset-gold" />
        </motion.button>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 safe-area-bottom">
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-niagara-blue to-niagara-dark text-white py-3.5 rounded-full text-base font-semibold"
        >
          <Sparkles className="w-5 h-5 text-sunset-gold" />
          Build Your Experience
        </button>
      </div>

      {/* Modal */}
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

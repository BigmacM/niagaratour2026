"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BookingFlow } from "./BookingFlow";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  preselectedTour?: string;
  preselectedCity?: string;
}

export function BookingModal({
  open,
  onClose,
  preselectedTour,
  preselectedCity,
}: BookingModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-white to-sky-50/50 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4 rounded-t-3xl flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Build Your Experience
                </h2>
                <p className="text-sm text-gray-500">
                  Customize & book in minutes
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <BookingFlow
                preselectedTour={preselectedTour}
                preselectedCity={preselectedCity}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

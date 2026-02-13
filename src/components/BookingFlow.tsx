"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Check,
} from "lucide-react";

const CITIES = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Oakville",
  "Milton",
  "Burlington",
  "Vaughan",
  "Markham",
  "Richmond Hill",
  "Scarborough",
];

const TOURS = [
  {
    id: "niagara",
    name: "Niagara Flagship",
    duration: "9 hours",
    price: 400,
    description:
      "Floral Clock, Whirlpool Rapids, NOTL Wineries, 3 hours at the Falls.",
    image: "Niagara Falls panoramic with mist",
  },
  {
    id: "toronto",
    name: "Toronto Highlights",
    duration: "5 hours",
    price: 400,
    description:
      "CN Tower, Distillery District, St. Lawrence Market, and more.",
    image: "Toronto skyline with CN Tower",
  },
];

const ADDONS = [
  {
    id: "maid",
    name: "Maid of the Mist",
    price: 35,
    unit: "per person",
    description: "Get up close to the thundering Falls on this iconic boat tour.",
  },
  {
    id: "skylon",
    name: "Skylon Tower Dinner",
    price: 65,
    unit: "per person",
    description:
      "Revolving dining room 775 feet above the Falls with panoramic views.",
  },
  {
    id: "heli",
    name: "Niagara Heli-Tour",
    price: 160,
    unit: "per person",
    description:
      "12-minute helicopter flight over the Falls, Whirlpool, and wine country.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [city, setCity] = useState("");
  const [tour, setTour] = useState("");
  const [addons, setAddons] = useState<string[]>([]);
  const [guests, setGuests] = useState(2);

  const selectedTour = TOURS.find((t) => t.id === tour);

  const total = useMemo(() => {
    const base = selectedTour?.price ?? 0;
    const addonTotal = addons.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.price * guests : 0);
    }, 0);
    return base + addonTotal;
  }, [selectedTour, addons, guests]);

  const whatsappMessage = useMemo(() => {
    const tourName = selectedTour?.name ?? "";
    const addonNames = addons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");
    const msg = `Hi! I'd like to book a ${tourName} tour.\n\nPickup: ${city}\nGuests: ${guests}\n${addonNames ? `Add-ons: ${addonNames}\n` : ""}Estimated Total: $${total} CAD`;
    return encodeURIComponent(msg);
  }, [city, selectedTour, addons, guests, total]);

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  function toggleAddon(id: string) {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  const canProceed =
    (step === 0 && city) ||
    (step === 1 && tour) ||
    step === 2 ||
    step === 3;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {["City", "Tour", "Add-ons", "Summary"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <button
              onClick={() => {
                if (i < step) {
                  setDirection(-1);
                  setStep(i);
                }
              }}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                i <= step
                  ? "bg-niagara-blue text-white"
                  : "bg-gray-200 text-gray-500"
              } ${i < step ? "cursor-pointer" : "cursor-default"}`}
            >
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </button>
            <span
              className={`text-xs font-medium hidden sm:inline ${
                i <= step ? "text-niagara-blue" : "text-gray-400"
              }`}
            >
              {label}
            </span>
            {i < 3 && (
              <div
                className={`w-8 h-0.5 ${
                  i < step ? "bg-niagara-blue" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden min-h-[400px] relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {step === 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Select Your City
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Where should we pick you up?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCity(c)}
                      className={`flex items-center gap-2 p-4 rounded-xl border-2 text-sm font-medium transition-all ${
                        city === c
                          ? "border-niagara-blue bg-niagara-blue/5 text-niagara-blue"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" />
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Choose Your Tour
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Pickup from {city}. Select your experience.
                </p>
                <div className="space-y-4">
                  {TOURS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTour(t.id)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                        tour === t.id
                          ? "border-niagara-blue bg-niagara-blue/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs text-center shrink-0">
                          {t.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-900">
                              {t.name}
                            </h4>
                            <span className="text-lg font-bold text-niagara-blue">
                              ${t.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {t.description}
                          </p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {t.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" /> Up to 6
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Add-on Experiences
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Enhance your tour with these popular extras. (Optional)
                </p>

                <div className="mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Number of guests
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 hover:border-niagara-blue"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold text-gray-900 w-8 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests((g) => Math.min(6, g + 1))}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-lg font-bold text-gray-600 hover:border-niagara-blue"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {ADDONS.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        addons.includes(addon.id)
                          ? "border-niagara-blue bg-niagara-blue/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">
                            {addon.name}
                          </h4>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {addon.description}
                          </p>
                        </div>
                        <div className="text-right ml-4 shrink-0">
                          <span className="font-bold text-niagara-blue">
                            +${addon.price}
                          </span>
                          <span className="text-xs text-gray-400 block">
                            {addon.unit}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your Tour Summary
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Review your selections and book via WhatsApp.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">Pickup</span>
                      <p className="font-semibold text-gray-900">{city}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-niagara-blue" />
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">Tour</span>
                      <p className="font-semibold text-gray-900">
                        {selectedTour?.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {selectedTour?.duration}
                      </p>
                    </div>
                    <span className="font-bold text-gray-900">
                      ${selectedTour?.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">Guests</span>
                      <p className="font-semibold text-gray-900">
                        {guests} {guests === 1 ? "person" : "people"}
                      </p>
                    </div>
                    <Users className="w-5 h-5 text-niagara-blue" />
                  </div>

                  {addons.length > 0 && (
                    <div className="py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Add-ons</span>
                      {addons.map((id) => {
                        const addon = ADDONS.find((a) => a.id === id);
                        if (!addon) return null;
                        return (
                          <div
                            key={id}
                            className="flex items-center justify-between mt-1"
                          >
                            <p className="font-medium text-gray-900 text-sm">
                              {addon.name}{" "}
                              <span className="text-gray-400">
                                x{guests}
                              </span>
                            </p>
                            <span className="text-sm font-semibold text-gray-700">
                              +${addon.price * guests}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-gray-900">
                      Estimated Total
                    </span>
                    <span className="text-2xl font-bold text-niagara-blue">
                      ${total} CAD
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/16479094565?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-niagara-blue text-white py-4 rounded-full text-lg font-bold hover:bg-niagara-dark transition-colors shadow-lg shadow-niagara-blue/25"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Final pricing confirmed upon booking. Add-on prices are
                  estimates.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goBack}
          disabled={step === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
            step === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-gray-600 hover:text-niagara-blue"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        {step < 3 && (
          <button
            onClick={goNext}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-colors ${
              canProceed
                ? "bg-niagara-blue text-white hover:bg-niagara-dark"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
